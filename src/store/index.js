import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') // 去掉文件后缀
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

export default new Vuex.Store({
	modules,
	state: {
		fruit: '🍍'
	},
	getters: {},
	mutations: {},
	actions: {}
})