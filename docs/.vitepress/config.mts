import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeonMMcoset",
  base : "/vitepress",
  lang: 'zh-CH',
  description: "这是一个由LeonMMcoset制作的一个网站。"
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '列表', link: '/liststart' }
    ],

    sidebar: [
      { text: '起始', link: '/start' },
      {
        text: '列表',
        items: [
          { text: '列表起始', link: '/liststart' },
          { text: '7180 MTR网站', link: '/mtr7180' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leonmmcoset/vitepress' }
    ]
  }
})
