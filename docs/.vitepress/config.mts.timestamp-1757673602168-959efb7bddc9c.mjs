// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/Projects/GitRepository/lzh-g.github.io/node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_972f7d3bdcd3a7f9050832cf99170f73/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/Projects/GitRepository/lzh-g.github.io/node_modules/.pnpm/@sugarat+theme@0.5.6_@eleme_05e37c3831147f8b29e6ba209551594a/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // 默认开启 markdown 图表支持（会增加一定的构建耗时）
  // mermaid: false
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: "MIT License | \u7CA5\u91CC\u6709\u52FA\u7CD6"
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "lzh"
  // 友链
  // friend: [
  //   {
  //     nickname: '粥里有勺糖',
  //     des: '你的指尖用于改变世界的力量',
  //     avatar:
  //       'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
  //     url: 'https://sugarat.top',
  //   },
  //   {
  //     nickname: 'Vitepress',
  //     des: 'Vite & Vue Powered Static Site Generator',
  //     avatar:
  //       'https://vitepress.dev/vitepress-logo-large.webp',
  //     url: 'https://vitepress.dev/',
  //   },
  // ],
  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'text',
  //       content: '文章首/文尾有群二维码',
  //       style: 'padding-top:0'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://sugarat.top'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://theme.sugarat.top/group.html',
  //     }
  //   ],
  //   duration: 0
  // },
});

// docs/.vitepress/config.mts
var base = "/";
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: "zh-cn",
  title: "lzh",
  description: "\u4E00\u4E2A\u4E3A\u6280\u672F\u535A\u5BA2\u91CF\u8EAB\u6253\u9020\u7684 VitePress \u4E3B\u9898",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置logo
    logo: "/logo.jpg",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "C/C++", link: "/CPlusPlus/" },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://sugarat.top/aboutme.html" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ATQQ/sugar-blog/tree/master/packages/theme"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxHaXRSZXBvc2l0b3J5XFxcXGx6aC1nLmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXEdpdFJlcG9zaXRvcnlcXFxcbHpoLWcuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9HaXRSZXBvc2l0b3J5L2x6aC1nLmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbi8vIFx1NUJGQ1x1NTE2NVx1NEUzQlx1OTg5OFx1NzY4NFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tICcuL2Jsb2ctdGhlbWUnXHJcblxyXG4vLyBcdTU5ODJcdTY3OUNcdTRGN0ZcdTc1MjggR2l0SHViL0dpdGVlIFBhZ2VzIFx1N0I0OVx1NTE2Q1x1NTE3MVx1NUU3M1x1NTNGMFx1OTBFOFx1N0Y3MlxyXG4vLyBcdTkwMUFcdTVFMzhcdTk3MDBcdTg5ODFcdTRGRUVcdTY1MzkgYmFzZSBcdThERUZcdTVGODRcdUZGMENcdTkwMUFcdTVFMzhcdTRFM0FcdTIwMUMvXHU0RUQzXHU1RTkzXHU1NDBEL1x1MjAxRFxyXG4vLyBcdTU5ODJcdTY3OUNcdTk4NzlcdTc2RUVcdTU0MERcdTVERjJcdTdFQ0ZcdTRFM0EgbmFtZS5naXRodWIuaW8gXHU1N0RGXHU1NDBEXHVGRjBDXHU1MjE5XHU0RTBEXHU5NzAwXHU4OTgxXHU0RkVFXHU2NTM5XHVGRjAxXHJcbmNvbnN0IGJhc2UgPSAnLydcclxuXHJcbi8vIFZpdGVwcmVzcyBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcclxuLy8gXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIFx1N0VFN1x1NjI3Rlx1NTM1QVx1NUJBMlx1NEUzQlx1OTg5OChAc3VnYXJhdC90aGVtZSlcclxuICBleHRlbmRzOiBibG9nVGhlbWUsXHJcbiAgYmFzZSxcclxuICBsYW5nOiAnemgtY24nLFxyXG4gIHRpdGxlOiAnbHpoJyxcclxuICBkZXNjcmlwdGlvbjogJ1x1NEUwMFx1NEUyQVx1NEUzQVx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMlx1OTFDRlx1OEVBQlx1NjI1M1x1OTAyMFx1NzY4NCBWaXRlUHJlc3MgXHU0RTNCXHU5ODk4JyxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICAvLyBcdThCRTZcdTg5QzFcdUZGMUFodHRwczovL3ZpdGVwcmVzcy5kZXYvemgvcmVmZXJlbmNlL3NpdGUtY29uZmlnI2hlYWRcclxuICBoZWFkOiBbXHJcbiAgICAvLyBcdTkxNERcdTdGNkVcdTdGNTFcdTdBRDlcdTc2ODRcdTU2RkVcdTY4MDdcdUZGMDhcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODQgdGFiIFx1NEUwQVx1RkYwOVxyXG4gICAgLy8gWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogYCR7YmFzZX1mYXZpY29uLmljb2AgfV0sIC8vIFx1NEZFRVx1NjUzOVx1NEU4NiBiYXNlIFx1OEZEOVx1OTFDQ1x1NEU1Rlx1OTcwMFx1ODk4MVx1NTQwQ1x1NkI2NVx1NEZFRVx1NjUzOVxyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV1cclxuICBdLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogWzIsIDNdLFxyXG4gICAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NSdcclxuICAgIH0sXHJcbiAgICAvLyBcdTlFRDhcdThCQTRcdTY1ODdcdTY4NDhcdTRGRUVcdTY1MzlcclxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxyXG4gICAgc2lkZWJhck1lbnVMYWJlbDogJ1x1NzZGOFx1NTE3M1x1NjU4N1x1N0FFMCcsXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxyXG5cclxuICAgIC8vIFx1OEJCRVx1N0Y2RWxvZ29cclxuICAgIGxvZ286ICcvbG9nby5qcGcnLFxyXG4gICAgLy8gZWRpdExpbms6IHtcclxuICAgIC8vICAgcGF0dGVybjpcclxuICAgIC8vICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FUUVEvc3VnYXItYmxvZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9ncHJlc3MvOnBhdGgnLFxyXG4gICAgLy8gICB0ZXh0OiAnXHU1M0JCIEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTUxODVcdTVCQjknXHJcbiAgICAvLyB9LFxyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxyXG4gICAgICB7IHRleHQ6ICdDL0MrKycsIGxpbms6ICcvQ1BsdXNQbHVzLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1JywgbGluazogJ2h0dHBzOi8vc3VnYXJhdC50b3AvYWJvdXRtZS5odG1sJyB9XHJcbiAgICBdLFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246ICdnaXRodWInLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQVRRUS9zdWdhci1ibG9nL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3RoZW1lJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXEdpdFJlcG9zaXRvcnlcXFxcbHpoLWcuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcR2l0UmVwb3NpdG9yeVxcXFxsemgtZy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJsb2ctdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL0dpdFJlcG9zaXRvcnkvbHpoLWcuZ2l0aHViLmlvL2RvY3MvLnZpdGVwcmVzcy9ibG9nLXRoZW1lLnRzXCI7Ly8gXHU0RTNCXHU5ODk4XHU3MkVDXHU2NzA5XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnXG5cbi8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVx1RkYwOFJTU1x1OTE0RFx1N0Y2RVx1RkYwOVxuLy8gaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lJ1xuXG4vLyBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vc3VnYXJhdC50b3AnXG4vLyBjb25zdCBSU1M6IFRoZW1lLlJTU09wdGlvbnMgPSB7XG4vLyAgIHRpdGxlOiAnXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2Jyxcbi8vICAgYmFzZVVybCxcbi8vICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIFx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4vLyAgIGRlc2NyaXB0aW9uOiAnXHU0RjYwXHU3Njg0XHU2MzA3XHU1QzE2LFx1NjJFNVx1NjcwOVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRlx1RkYwOFx1NTkyN1x1NTI0RFx1N0FFRlx1NzZGOFx1NTE3M1x1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlx1RkYwOScsXG4vLyAgIGxhbmd1YWdlOiAnemgtY24nLFxuLy8gICBpbWFnZTogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXG4vLyAgIGZhdmljb246ICdodHRwczovL3N1Z2FyYXQudG9wL2Zhdmljb24uaWNvJyxcbi8vIH1cblxuLy8gXHU2MjQwXHU2NzA5XHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzOiBodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1xuY29uc3QgYmxvZ1RoZW1lID0gZ2V0VGhlbWVDb25maWcoe1xuICAvLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcbiAgLy8gUlNTLFxuXG4gIC8vIFx1NjQxQ1x1N0QyMlxuICAvLyBcdTlFRDhcdThCQTRcdTVGMDBcdTU0MkZwYWdlZmluZFx1NzlCQlx1N0VCRlx1NzY4NFx1NTE2OFx1NjU4N1x1NjQxQ1x1N0QyMlx1NjUyRlx1NjMwMVx1RkYwOFx1NTk4Mlx1NEY3Rlx1NzUyOFx1NTE3Nlx1NUI4M1x1NzY4NFx1NTNFRlx1NEVFNVx1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHVGRjA5XG4gIC8vIHNlYXJjaDogZmFsc2UsXG5cbiAgLy8gXHU5RUQ4XHU4QkE0XHU1RjAwXHU1NDJGIG1hcmtkb3duIFx1NTZGRVx1ODg2OFx1NjUyRlx1NjMwMVx1RkYwOFx1NEYxQVx1NTg5RVx1NTJBMFx1NEUwMFx1NUI5QVx1NzY4NFx1Njc4NFx1NUVGQVx1ODAxN1x1NjVGNlx1RkYwOVxuICAvLyBtZXJtYWlkOiBmYWxzZVxuXG4gIC8vIFx1OTg3NVx1ODExQVxuICBmb290ZXI6IHtcbiAgICAvLyBtZXNzYWdlIFx1NUI1N1x1NkJCNVx1NjUyRlx1NjMwMVx1OTE0RFx1N0Y2RVx1NEUzQUhUTUxcdTUxODVcdTVCQjlcdUZGMENcdTkxNERcdTdGNkVcdTU5MUFcdTY3NjFcdTUzRUZcdTRFRTVcdTkxNERcdTdGNkVcdTRFM0FcdTY1NzBcdTdFQzRcbiAgICAvLyBtZXNzYWdlOiAnXHU0RTBCXHU5NzYyIFx1NzY4NFx1NTE4NVx1NUJCOVx1NTQ4Q1x1NTZGRVx1NjgwN1x1OTBGRFx1NjYyRlx1NTNFRlx1NEVFNVx1NEZFRVx1NjUzOVx1NzY4NFx1NTY2Mlx1RkYwOFx1NUY1M1x1NzEzNlx1NjcyQ1x1Njc2MVx1NTE4NVx1NUJCOVx1NEU1Rlx1NjYyRlx1NTNFRlx1NEVFNVx1OTY5MFx1ODVDRlx1NzY4NFx1RkYwOScsXG4gICAgY29weXJpZ2h0OiAnTUlUIExpY2Vuc2UgfCBcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuICAgIC8vIGljcFJlY29yZDoge1xuICAgIC8vICAgbmFtZTogJ1x1ODcwMElDUFx1NTkwNzE5MDExNzI0XHU1M0Y3JyxcbiAgICAvLyAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcbiAgICAvLyB9LFxuICAgIC8vIHNlY3VyaXR5UmVjb3JkOiB7XG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxuICAgIC8vICAgbGluazogJ2h0dHBzOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvaW5kZXguZG8nXG4gICAgLy8gfSxcbiAgfSxcblxuICAvLyBcdTRFM0JcdTk4OThcdTgyNzJcdTRGRUVcdTY1MzlcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxuXG4gIC8vIFx1NjU4N1x1N0FFMFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxuICBhdXRob3I6ICdsemgnLFxuXG4gIC8vIFx1NTNDQlx1OTRGRVxuICAvLyBmcmllbmQ6IFtcbiAgLy8gICB7XG4gIC8vICAgICBuaWNrbmFtZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gIC8vICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxuICAvLyAgICAgYXZhdGFyOlxuICAvLyAgICAgICAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbiAgLy8gICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxuICAvLyAgICAgZGVzOiAnVml0ZSAmIFZ1ZSBQb3dlcmVkIFN0YXRpYyBTaXRlIEdlbmVyYXRvcicsXG4gIC8vICAgICBhdmF0YXI6XG4gIC8vICAgICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXG4gIC8vICAgICB1cmw6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvJyxcbiAgLy8gICB9LFxuICAvLyBdLFxuXG4gIC8vIFx1NTE2Q1x1NTQ0QVxuICAvLyBwb3BvdmVyOiB7XG4gIC8vICAgdGl0bGU6ICdcdTUxNkNcdTU0NEEnLFxuICAvLyAgIGJvZHk6IFtcbiAgLy8gICAgIHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiAnXHVEODNEXHVEQzQ3XHU1MTZDXHU0RjE3XHU1M0Y3XHVEODNEXHVEQzQ3LS0tXHVEODNEXHVEQzQ3IFx1NUZBRVx1NEZFMSBcdUQ4M0RcdURDNDcnIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICdpbWFnZScsXG4gIC8vICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFl4TlRBeE9EYzJOVEl4TUE9PTYxNTAxODc2NTIxMH5mbXQud2VicCdcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgLy8gICAgICAgY29udGVudDogJ1x1NkIyMlx1OEZDRVx1NTkyN1x1NUJCNlx1NTJBMFx1N0ZBNCZcdTc5QzFcdTRGRTFcdTRFQTRcdTZENDEnXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICB0eXBlOiAndGV4dCcsXG4gIC8vICAgICAgIGNvbnRlbnQ6ICdcdTY1ODdcdTdBRTBcdTk5OTYvXHU2NTg3XHU1QzNFXHU2NzA5XHU3RkE0XHU0RThDXHU3RUY0XHU3ODAxJyxcbiAgLy8gICAgICAgc3R5bGU6ICdwYWRkaW5nLXRvcDowJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdHlwZTogJ2J1dHRvbicsXG4gIC8vICAgICAgIGNvbnRlbnQ6ICdcdTRGNUNcdTgwMDVcdTUzNUFcdTVCQTInLFxuICAvLyAgICAgICBsaW5rOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcCdcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAvLyAgICAgICBjb250ZW50OiAnXHU1MkEwXHU3RkE0XHU0RUE0XHU2RDQxJyxcbiAgLy8gICAgICAgcHJvcHM6IHtcbiAgLy8gICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgbGluazogJ2h0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvZ3JvdXAuaHRtbCcsXG4gIC8vICAgICB9XG4gIC8vICAgXSxcbiAgLy8gICBkdXJhdGlvbjogMFxuICAvLyB9LFxufSlcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVcsU0FBUyxvQkFBb0I7OztBQ0M5WCxTQUFTLHNCQUFzQjtBQWlCL0IsSUFBTSxZQUFZLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFZL0IsUUFBUTtBQUFBO0FBQUE7QUFBQSxJQUdOLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTYjtBQUFBO0FBQUEsRUFHQSxZQUFZO0FBQUE7QUFBQSxFQUdaLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzRFYsQ0FBQzs7O0FEOUZELElBQU0sT0FBTztBQUliLElBQU8saUJBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsU0FBUztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQTtBQUFBLEVBRWIsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBLEVBQ2hEO0FBQUEsRUFDQSxhQUFhO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUNaLE9BQU87QUFBQSxJQUNUO0FBQUE7QUFBQSxJQUVBLGtCQUFrQjtBQUFBLElBQ2xCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBO0FBQUEsSUFHakIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1OLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sU0FBUyxNQUFNLGNBQWM7QUFBQSxNQUNyQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxtQ0FBbUM7QUFBQSxJQUMzRDtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
