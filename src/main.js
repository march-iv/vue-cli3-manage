import Vue from 'vue'           // 完整写法: import Vue from "../node_modules/vue/dist/vue.js"
import App from './App.vue'     // 完整写法: import App from './App.vue'
import router from './router'   // 完整写法: import router from './route.js'
import store from './store'

import "@/assets/css/public.css"      // 引入公共样式
import "@/assets/css/package.css"     // 引入需要覆盖第三方包的样式

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
