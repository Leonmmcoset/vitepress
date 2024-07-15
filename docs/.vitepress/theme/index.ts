import DefaultTheme from 'vitepress/theme'
import './vp-code-group.css'
import './var.css'
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Comment from './Comment.vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
    ...DefaultTheme,
    Layout() {
      return h(DefaultTheme.Layout, null, {
        'doc-after': () => h(Comment)
      })
    }
}