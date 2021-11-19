import Vue from 'vue'
import Router from 'vue-router'
import routeRule from './routes'

Vue.use(Router)

let createRouter = (routeArg) => new Router({
	mode: 'history',
	base: process.env.BASE_URL,	// 如果项目被部署在一个子路径上，你就需要用通过此选项来指定子路径
	scrollBehavior: () => ({ y: 0 }),
	routes: routeArg,
})

let routerInstance = createRouter(routeRule)

// 全局前置守卫
routerInstance.beforeEach((to, from, next) => {
    next()
})

// 全局后置钩子
routerInstance.afterEach((to, from) => {
	// ...
})

export default routerInstance