import Vue from 'vue'           // 完整写法: import Vue from "../node_modules/vue/dist/vue.js"
import App from './App.vue'     // 完整写法: import App from './App.vue'
import router from './router'   // 完整写法: import router from './route.js'
import store from './store'

import "@/assets/css/variate.less"
import "@/assets/css/page.less"			// 引入公共页面样式
import "@/assets/css/public.css"		// 引入公共样式
import "@/assets/css/package.less"		// 引入需要覆盖第三方包的样式

// 引入其它 npm 包
import 'animate.css'	// 一种动画插件，只是css

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ViewUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
