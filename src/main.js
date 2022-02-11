import Vue from 'vue'           // 完整写法: import Vue from "../node_modules/vue/dist/vue.js"
import App from './App.vue'     // 完整写法: import App from './App.vue'
import router from './router'   // 完整写法: import router from './route.js'
import store from './store'

// 引入公共样式
import "@/assets/css/package.less"		// 覆盖第三方组件样式
import "@/assets/css/page.less"			// 公共的页面样式
import "@/assets/css/public.less"		// 覆盖浏览器代理样式
import "@/assets/css/variate.less"		// 公共变量样式

// 引入其它 npm 包
import 'animate.css'	// 一种动画插件，只是css

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ViewUI);
Vue.use(ElementUI);

// 全局组件
// import Space from "./components/Space"
// Vue.component("space", Space)

// 动态组件
// import mubanRegstry from '@/page/zujian/动态组件/muban.js'
// Vue.use(mubanRegstry)

// 系统总线
// Vue.prototype.$EventBus = new Vue()

// Vue 配置
Vue.config.productionTip = false
Vue.config.silent = false

// 根实例对象添加方法
Vue.prototype.allHints = function (str) {
	var obj = document.querySelector(".allHints");

	if (obj.style.display !== 'block') {
		obj.querySelector("span").innerHTML = str;
		obj.style.display = 'block';
		setTimeout(function () {
			obj.style.display = 'none';
		}, 1500);
	}
}
!Vue.prototype.$auth && Object.defineProperties(Vue.prototype, {
	$auth: {
		get () {
			return (arg) => {
				return Array.isArray(arg) ? arg.some(x => (x % 2 === 0)) : arg.includes('2')
			}
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
