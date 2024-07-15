import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './var.css'
import './vp-code-group.css'

export default {
    ...DefaultTheme
    Layout: Layout,
}