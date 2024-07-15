import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
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
          repo: 'leonmmcoset/vitepress',
          repoId: 'R_kgDOMTSP1w',
          category: 'Announcements', // 默认: `General`
          categoryId: 'DIC_kwDOMTSP184CgvyG',
          mapping: 'pathname', // 默认: `pathname`
          inputPosition: 'top', // 默认: `top`
          lang: 'zh-CN', // 默认: `zh-CN`
          lightTheme: 'light', // 默认: `light`
          darkTheme: 'preferred_color_scheme', // 默认: `transparent_dark`
          loading: 'eager',
        },
        //src="https://giscus.app/client.js"
        //data-repo="leonmmcoset/vitepress"
        //data-repo-id="R_kgDOMTSP1w"
        //data-category="Announcements"
        //data-category-id="DIC_kwDOMTSP184CgvyG"
        //data-mapping="pathname"
        //data-strict="0"
        //data-reactions-enabled="1"
        //data-emit-metadata="0"
        //data-input-position="top"
        //data-theme="preferred_color_scheme"
        //data-lang="zh-CN"
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