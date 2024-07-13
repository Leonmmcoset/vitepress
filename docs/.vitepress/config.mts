//The config of this website.
import { defineConfig } from 'vitepress'
import { bilibili, email, qq } from './icon.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeonMMcoset",
  base : "/vitepress",
  lang: 'zh-CN',
  description: "这是一个由LeonMMcoset制作的一个网站。",
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '列表', link: '/liststart' },
      { text: '制作', link: '/made/start'}
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    sidebar: [
      { text: '起始', link: '/start' },
      {
        text: '列表',
        items: [
          { text: '列表起始', link: '/liststart' },
          { text: '7180 MTR网站', link: '/mtr7180' }
        ]
      },
      {
        text : '制作',
        items: [
          { text: '制作起始', link: '/made/start'},
          { text: 'CS:2D', link: '/made/cs2d'}
        ]
      },
      { text: '人员列表', link: '/player'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leonmmcoset/vitepress' },
      { icon: {svg: email}, link: 'mailto:leonmmcoset@outlook.com' },
      { icon: {svg: qq}, link: '/qq' },
      { icon :{svg: bilibili}, link: 'https://space.bilibili.com/245143694?spm_id_from=333.337.0.0'}
    ]
  }
})