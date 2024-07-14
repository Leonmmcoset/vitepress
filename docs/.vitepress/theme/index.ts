import Layout from "./Layout.vue"
export default {
    enhanceApp({app}) {
        // 注册全局组件
        app.component('Layout' , Layout)
}
}