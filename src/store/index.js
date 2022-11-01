import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation.js'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') // 去掉文件后缀
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})
console.log('modules', modules)
export default new Vuex.Store({
	modules,
	state: {
		fruit: '🍍',
		year: 2022
	},
	getters: {},
	mutations: {
		[types.SET_DAY] (state, day) {	// 使用 mutation.js 中的常量作为 Mutation 事件类型
			state.year = day
		}
	},
	actions: {}
})