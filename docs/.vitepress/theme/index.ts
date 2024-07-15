import vitepress from 'vitepress/theme'
import 'var.css'
import 'vp-code-group.css'
import Layout from 'Layout.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Layout', Layout)
    }
}