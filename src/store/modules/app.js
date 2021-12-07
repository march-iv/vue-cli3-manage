/*
 * @Description: APP配置
 */

export default {
	state: {
		breadCrumbs: [],		// 面包屑导航路径
		pageLimit: 10			// 每页表格显示数量
	},
	getters: {},
	mutations: {
		// 添加面包屑
		setBreadCrumb (state, arg) {
			if (arg.constructor === Array) {
				state.breadCrumbs = state.breadCrumbs.concat(arg)
			} else {
				state.breadCrumbs.push(arg)
			}
		},
		// 剪切面包屑
		spliceBreadCrumb (state, num) {
			state.breadCrumbs.splice(num, state.breadCrumbs.length - num)
		},
		setPageLimit (state, num) {
			state.pageLimit = num
		}
	},
	actions: {}
}