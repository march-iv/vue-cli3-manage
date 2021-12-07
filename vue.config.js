'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
	publicPath: "/",                // 部署应用包时的基本 URL,  默认值 '/'
	outputDir: 'dist',              // 打包目标目录, 默认值 'dist'
	assetsDir: 'static',            // 放置生成的静态资源的目录
	lintOnSave: false,              // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
	productionSourceMap: false,     // 生产环境是否生成 sourceMap 文件
	runtimeCompiler: true,			// 是否支持 template 编译

	css: {
		sourceMap: true
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@static', resolve('public/static'))
	}
}