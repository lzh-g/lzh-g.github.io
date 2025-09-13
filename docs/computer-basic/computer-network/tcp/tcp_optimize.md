---
title: 如何优化TCP
description: TCP优化的几种方法
date: 2023-08-02
tags: 
 - 计算机网络
 - TCP
---

# 如何优化TCP？

优化TCP的目标是**提高吞吐量、降低延迟、提升连接稳定性和资源利用率**

## 三次握手优化
TCP建立连接的过程为：SYN -> SYN-ACK -> ACK，只有经过三次握手建立连接后才能进行数据传输，其主要问题在于**延迟高、易受SYN Flood攻击、连接建立慢**等问题。所以可以从以下方向着手进行三次握手的优化：缩短连接建立时间、抵御SYN Flood攻击、提高并发连接处理能力。

### 减少SYN重传次数

客户端像服务端发送SYN包后会处于```SYN_SENT```状态，若客户端长时间未收到服务端发来的SYN-ACK包，则会启动超时重传，重新发送SYN包，重发次数由```tcp_syn_retires```参数控制，默认为6次，每次超时重传的间隔时间都是上一次的2倍直到达到重传次数，这会导致客户端一直处于```SYN_SENT```状态。通过减少SYN重传次数减少无效重传，加快失败检测，避免长时间等待。
```bash
# 默认值通常为6（重传6次，约90秒），可降低至3~4
# 客户端
echo 3 > /proc/sys/net/ipv4/tcp_syn_retries
# 服务端
echo 3 > /proc/sys/net/ipv4/tcp_synack_retries

# 客户端发起连接时的SYN重试次数（建议客户端调低）
# 服务端一般不影响，但若为客户端场景（如爬虫、微服务调用）应优化
```

### 调整SYN队列大小

服务端接收到客户端发来的SYN后，会立即向客户端发送SYN-ACK包，然后服务端会处于```SYN_RECV```状态，此时Linux内核会建立一个SYN队列（半连接队列）来维护这个连接请求控制块，当客户端接收到客户端发来的ACK包（第三次握手）后，这个控制块会被移到Accept队列（全连接队列），或者超时自动释放。

当处于高并发环境下，SYN队列会被迅速填满，导致后续SYN被丢弃，无法进行三次握手，此时可以通过调整SYN队列的大小来提高并发连接处理能力，SYN队列大小由```tcp_max_syn_backlog```参数控制，同时Accept队列大小和应用层也同样需要配合调整，仅调整```tcp_max_syn_backlog```是无效的。

```bash
# 增大SYN队列长度（默认通常为512~2048）
echo 65536 > /proc/sys/net/ipv4/tcp_max_syn_backlog

# 增大somaxconn
echo 65535 > /proc/sys/net/core/somaxconn

# 应用层也需配合
# 如Nginx（需重启）: 
# /usr/local/nginx/conf/nginx.conf
server {
    listen 80 default backlog=65536;
    server_name localhost;
    ...
}

```


### 启用SYN Sookies（抵御SYN Flood攻击）

当SYN队列满时，服务器不保存SYN状态，而是生成一个加密的SYN Cookies，并放在SYN-ACK中发往客户端，客户端回ACK时（第三次握手），服务器验证该SYN Cookies，合法则建立连接。
```bash
# 启用SYN Cookies（推荐生产环境开启）
echo 1 > /proc/sys/net/ipv4/tcp_syncookies

# 或永久生效：编辑 /etc/sysctl.conf
net.ipv4.tcp_syncookies = 1
```

### 调整Accept队列长度

当客户端向服务端发起第三次握手ACK时，服务器成功收到ACK后连接建立成功，此时，内核会将连接从SYN队列中移除，创建新的完全连接并添加至Accept队列，等待进程调用accept函数取出连接。若进程不能及时调用accept函数，就会造成Accept队列溢出，后续的连接也会随之丢弃（默认行为）。若开启```tcp_abort_on_overflow```，当Accpet队列溢出时，服务器会向客户端发送RST复位报文，告知客户端连接建立失败。

```
echo 1 > /proc/sys/net/ipv4/tcp_abort_on_overflow
```

::: tip
开启```tcp_abort_on_overflow```是无法缓解Accept队列溢出的问题，为应对突发流量，仍然建议该参数设置为0，因为这能保证当进程调用accept函数消耗了连接之后，那些还在重传的客户端（客户端此时已处于```ESTABLISHED```状态，并不知道服务端Accept队列溢出）可能有机会成功建立连接。
:::

Accept队列的长度取决于```somaxconn```和```backlog```的最小值，即```min(somaxconn, backlog)```，其中：
- ```somaxconn```是Linux内核参数，默认值为128，可通过```net.core.somaxconn```设置值；
- ```backlog```由```listen(int sockfd, int backlog)```函数进行设置；

Tomcat、Nginx、Apache等常见Web服务backlog默认值都是511.

```bash
# 查看Accpet队列长度
# -l 显示正在监听（listening）的socket
# -n 不解析服务器名称
# -t 只显示 tcp socket
# Recv-Q表示当前Accept队列大小
# Send-Q表示Accept队列的最大长度
ss -lnt
State   Recv-Q  Send-Q  Local Address:Port  Peer Address:Port
LISTEN  0       128     *:8088              *:*

# 查看由于Accept队列已满而被丢弃的连接
netstat -s | grep overflowed
```

### 启用TCP Fast Open（TFO）（绕过完整三次握手）

完整三次握手至少需要一个RTT时间（第三次握手可携带HTTP GET请求），而开启TFO功能可以实现0RTT连接建立，缩短建立连接时间（需双端支持该功能）。

TFO核心机制是：
- 在首次连接时，客户端向服务器请求一个TFO Cookie；
- 后续连接时，客户端在SYN包中携带Cookie + 数据；
- 服务端验证Cookie后，可以立即把数据交给应用层，无需等三次握手完成。


TFO工作方式如下：
- 首次连接
    1. 客户端发送SYN包，其中包含Fast Open选项，且该选项中的Cookie为空，表明客户端向服务端请求TFO Cookie；
    2. 支持TFO的服务端生成Cookie，并将其置于SYN-ACK数据包中的Fast Open选项中返回客户端；
    3. 客户端收到SYN-ACK后，本地缓存Fast Open选项中的Cookie。

- 后续连接
    1. 客户端发送SYN包，该报文可以包含**数据**以及此前记录的Cookie；
    2. 支持TFO的服务器收到SYN中携带的Cookie后进行校验：
        - 若Cookie有效，服务器将在SYN-ACK中对SYN和**数据**进行确认，随后将**数据**推送至对应的应用程序；
        - 若Cookie无效，服务器将丢弃SYN报文中的**数据**，随后发出的SYN-ACK将之确认SYN；
    3. 若服务器接收了SYN中的**数据**，服务器就可在握手完成之前发送**数据**，这就减少了一个RTT的时间消耗；
    4. 客户端发送ACK确认服务器发回的SYN和**数据**，但若客户端在SYN包中发送的**数据**没有被确认，则客户端将重新发送**数据**；
    5. 此后的TCP连接的数据传输过程和普通传输一致。

```bash
# 开启TFO功能
# 0 关闭
# 1 作为客户端开启该功能
# 2 作为服务端开启该功能
# 3 无论是作为客户端还是服务端均开启该功能
echo 3 > /proc/sys/net/ipv4/tcp_fastopen
```


## 四次挥手优化
四次挥手主要着手于**快速释放连接资源、减少TIME_WAIT连接堆积、避免端口耗尽**进行优化。

### 减少FIN重传次数
客户端发送FIN包后，处于```FIN_WAIT1```状态，正常情况下，若能及时接收到服务端ACK，则会变为```FIN_WAIT2```状态。但若接收不到ACK时，则会出发FIN重传，重传次数由```tcp_orphan_retires```参数控制，默认值是0，表示8次。
```bash
echo > 5 /proc/sys/net/ipv4/tcp_orphan_retires
```

### 调整FIN_WAIT2状态时间

当客户端接收到ACK后，处于```FIN_WAIT2```状态，此时客户端仍可以发送或接收数据，但对于close函数关闭的孤儿连接，由于无法再发送和接收数据，所以这个状态不可以持续太久，参数```tcp_fin_timeout```控制了这个状态下的连接时长，默认60秒
```bash
echo 60 > /proc/sys/net/ipv4/tcp_fin_timeout
```

### 启用TIME_WAIT复用（tcp_tw_reuse）
允许将处于```TIME_WAIT```状态的连接复用于新的连接（仅适用于客户端，因为该参数仅在connect()时起作用）。
```bash
# 启用TIME_WAIT复用，必须启用TCP时间戳（tcp_timestamps=1，默认开启）
echo 1 > /proc/sys/net/ipv4/tcp_tw_reuse
# 适用场景：高并发客户端（API网关、爬虫、微服务调用方等）
```

## 数据传输优化

数据传输主要着手于**最大化吞吐量、最小化延迟、提升拥塞控制效率、减少丢包重传开销**进行优化。

### 增大TCP发送/接收缓冲区（套接字缓冲区）

```bash
# 自动调整缓冲区（推荐开启）
echo 1 > /proc/sys/net/ipv4/tcp_mtu_probing   # MTU探测，避免分片
echo 1 > /proc/sys/net/ipv4/tcp_window_scaling # 启用窗口缩放（默认开启）

# 设置最大接收缓冲区（单位：字节）
echo 16777216 > /proc/sys/net/core/rmem_max     # 16MB
echo "4096 87380 16777216" > /proc/sys/net/ipv4/tcp_rmem     # min default max

# 设置最大发送缓冲区
echo 16777216 > /proc/sys/net/core/wmem_max
echo "4096 65536 16777216" > /proc/sys/net/ipv4/tcp_wmem     # min default max
```
::: tip
发送缓冲区不能超过带宽时延积BDP=带宽×RTT，BDP表示了填满整个整个网络“管道”所需的数据量。
:::

### 启用TCP拥塞控制算法优化
选择更高效的拥塞控制算法替代默认的Cubic。
```bash
# 查看当前算法
cat /proc/sys/net/ipv4/tcp_congestion_control

# 推荐算法（按场景）：
# - BBR（Google）：适合高带宽、高丢包、动态网络（推荐首选）
# - BBRv2：改进版，更稳定
# - DCTCP：数据中心专用（低延迟、高吞吐）
# - Reno/Cubic：传统，兼容性好

# 启用BBR
echo bbr > /proc/sys/net/ipv4/tcp_congestion_control

# 永久生效：
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

# 可选：启用DCTCP（需交换机支持ECN）
echo dctcp > /proc/sys/net/ipv4/tcp_congestion_control
echo 1 > /proc/sys/net/ipv4/tcp_ecn
```