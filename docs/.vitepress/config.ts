import { defineConfig } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

export default defineConfig({
  base: "/Japanese-notes/",
  title: "日语学习笔记", //站点标题
  description: "这是我学习日语的笔记", //mate标签description，多用于搜索引擎抓取摘要
  head: [
    ["link", { rel: "icon", href: "/Japanese-notes/favicon.ico" }], // 添加图标
  ],
  themeConfig: {
    siteTitle: "Alex🍊",
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/slfeng-xxt/Japanese-notes" },
    ],
    sidebar: [
      {
        text: "N5",
        collapsed: true,
        items: [
          { text: "了解", link: "/N5/lesson0" },
          { text: "lesson1", link: "/N5/lesson1" },
          { text: "lesson2", link: "/N5/lesson2" },
          { text: "lesson3", link: "/N5/lesson3" },
          { text: "lesson4", link: "/N5/lesson4" },
        ],
      },
      {
        text:"助词",
        collapsed: true,
        items: [
          { text: "は", link: "/particle/は" },
        ],
      },
      {
        text: "动词",
        collapsed: true,
        items: [
          {
            text: "动词变形",
            collapsed: true,
            items: [
              { text: "ます形", link: "/verbs/ます形" },
            ],
          },
        ],
      },
      {
        text: "形容词",
        collapsed: true,
        items: [
          { text: "い形", link: "/adjectives/い" },
          { text: "な形", link: "/adjectives/な" },
        ],
      },
    ],
    outline: "deep",
    outlineTitle: "目录",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
    },
  },
  markdown: { 
    config(md) { 
      md.use(vitepressDemoPlugin); 
    }
  }
});
