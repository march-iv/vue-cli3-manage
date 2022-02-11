# vue-cli3-manage



### 使用说明

```web-idl
yarn install    // 安装依赖
yarn serve      // 本地启动服务, 编译和热加载
yarn build      // 项目编译打包
yarn lint       // 检查和修复文件
```



### 项目目录结构

```web-idl
+ public
	+ static // 不会经过 webpack 打包的资源
		+ font: 字体目录
		+ media: 媒体文件目录
		+ script: 非模块化的JS目录
			- Polyfill.js: 让旧浏览器也能支持 JS 新特性
			- Prototype.js: 给内置的 JS 对象添加日常使用的属性或方法
		- favicon.ico
		- index.html

+ src
	+ assets // 会经过 webpack 打包的资源
		+ config: 项目配置目录
		+ css: 样式目录
			- package.less: 需要覆盖第三方组件的样式
			- page.less: 业务页面公共部分的样式
			- public.css: 全局样式
			- variate.less: 样式变量
		+ img: 图片目录
		+ utils: 工具函数目录
	
	+ components // 全局公共组件
	
	+ layout // 框架结构
		- Crumb.vue: 面包屑导航组件
		- Frame.vue: 框架组件
		- Header.vue: 顶部栏组件
		- Menu.vue: 菜单栏组件
	
	+ pages // 业务组件
		+ account: 账户相关
		+ common: 公共的业务组件
	
	+ request // 请求
		+ modules
			- user.js: 用户信息相关接口列表
		- axios.js: 创建和配置 axios 实例
		- index.js: 导出 axios 配置
	
	+ router // 路由
		- routes.js: 路由配置列表
		- index.js: 创建路由实例，配置路由守卫，导出 Router 配置
	
	+ store // 状态仓库
		+ modules
		- index.js: 创建 vuex 实例，导出配置
	
	- App.vue
	- main.js

- .env.dev			// 配置开发环境 API 接口
- .env.prod			// 配置生产环境 API 接口
- .gitignore
- babel.config.js
- package.json
- README.md
- vue.config.js
- yarn.lock
```



### 本地存储

```bash

```












