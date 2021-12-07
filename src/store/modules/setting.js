/*
 * @Description: 布局配置
 */

export default {
	state: {
		// 布局模式： 'lr'-左右模式, 菜单高度=100%; 'tb'-上下模式, 菜单高度+顶部栏高度=100%
		layoutMode: 'tb',

		// 菜单是否可以开启迷你模式
		menuToggle: true,

		// 路由追踪模式： 'breadCrumbs'-面包屑导航, 'multiTabView'-多标签视图
		routerTraceMode: 'breadCrumbs'
	},
	getters: {},
	mutations: {},
	actions: {}
}