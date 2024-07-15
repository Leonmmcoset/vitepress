import DefaultTheme from 'vitepress/theme'
import './var.css'
import './vp-code-group.css'

export default {
    ...DefaultTheme,
    Layout() {
      return h(DefaultTheme.Layout, null, {
        'aside-top': () => h(Weather),
        'aside-outline-after': () => h(Donate),
        'doc-top': () => h(ImagePreviewLayout),
        'doc-before': () => h(Music),
        // 'doc-after': () => h(Comment),
      });
    },
    setup() {
      const { frontmatter } = toRefs(useData());
      const route = useRoute();
  
      giscusTalk(
        {
          repo: '[在此输入仓库]',
          repoId: '[在此输入仓库 ID]',
          category: '[在此输入分类名]', // 默认: `General`
          categoryId: '[在此输入分类 ID]',
          mapping: 'pathname', // 默认: `pathname`
          inputPosition: 'bottom', // 默认: `top`
          lang: 'zh-CN', // 默认: `zh-CN`
          lightTheme: 'light', // 默认: `light`
          darkTheme: 'dark', // 默认: `transparent_dark`
          loading: 'eager',
        },
        {
          frontmatter,
          route,
        },
        // 是否全部页面启动评论区。
        // 默认为 true，表示启用，此参数可忽略；
        // 如果为 false，表示不启用。
        // 可以在页面使用 `comment: true` 前言单独启用
        true
      );
    },
  };