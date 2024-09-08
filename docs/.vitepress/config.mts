//The config of this website.
import { defineConfig } from 'vitepress'
import { bilibili, email, qq } from './icon.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
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
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '列表', link: '/liststart' },
      { text: '制作', link: '/made/start'},
      { text: '教程', link: '/teach/start'},
      {
        text: '更多社交链接',
        items: [
           { text: 'Steam',link: 'https://steamcommunity.com/profiles/76561198294176606/' },
           { text: 'Modrinth',link: 'https://modrinth.com/user/LeonMMcoset'}
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
        text: '制作',
        items: [
          { text: '制作起始', link: '/made/start'},
          { text: 'CS:2D', link: '/made/cs2d'}
        ]
      },
      {
        text: '服务器',
        items: [
          { text: '起始', link: '/teach/start'},
          { text: 'MTR服务器', link: '/teach/mtr7180'}
        ]
      },
      { text: '成员列表', link: '/player'}
    ],
    editLink: {
      pattern: 'https://github.com/leonmmcoset/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2021-${new Date().getFullYear()} LeonMMcoset`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leonmmcoset/vitepress' },
      { icon: {svg: email}, link: 'mailto:leonmmcoset@outlook.com' },
      { icon: {svg: qq}, link: '/vitepress/qq' },
      { icon :{svg: bilibili}, link: 'https://space.bilibili.com/245143694?spm_id_from=333.337.0.0'}
    ]
  }
})