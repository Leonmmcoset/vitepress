import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import './var.css'
import './vp-code-group'

import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import './var.css'
import './vp-code-group'

export default {
  extends: DefaultTheme,

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'leonmmcoset/vitepress', //仓库
      repoId: 'R_kgDOMTSP1w', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOMTSP184CgvyG', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    )
//     <script src="https://giscus.app/client.js"
//     data-repo="leonmmcoset/vitepress"
//     data-repo-id="R_kgDOMTSP1w"
//     data-category="Announcements"
//     data-category-id="DIC_kwDOMTSP184CgvyG"
//     data-mapping="pathname"
//     data-strict="0"
//     data-reactions-enabled="1"
//     data-emit-metadata="0"
//     data-input-position="top"
//     data-theme="preferred_color_scheme"
//     data-lang="zh-CN"
//     crossorigin="anonymous"
//     async>
// </script>
}
};