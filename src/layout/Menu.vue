<!-- 左侧菜单 -->
<template>
	<div class="wrap">
		<Menu ref="menu" :mode="'vertical'" :theme="'light'" :width="'100%'"
			:active-name="menuActiveName"
			:open-names="menuOpenNames"
			@on-select="onSelectHandle"
			@on-open-change="onOpenHandle">
			<Submenu name="1">
				<template slot="title"><Icon type="ios-paper" />常用布局</template>
				<MenuItem name="search" to="search">搜索</MenuItem>
				<MenuItem name="table" to="table">表格</MenuItem>
				<MenuItem name="1-3" :to="'/'">评论管理</MenuItem>
				<MenuItem name="1-4" :to="'/'">举报管理</MenuItem>
			</Submenu>

			<Submenu name="2">
				<template slot="title"><i class="iconfont">&#xe66f;</i>水果管理</template>
				<MenuItem name="2-1" to="/banana"><i class="iconfont">&#xe69e;</i>香蕉</MenuItem>
				<MenuItem name="2-2" to="/strawberry"><i class="iconfont">&#xe60c;</i>草莓</MenuItem>
				<MenuItem name="2-3" to="/durian"><i class="iconfont">&#xe624;</i>榴莲</MenuItem>
			</Submenu>

			<Submenu name="3">
				<template slot="title"><i class="iconfont">&#xe696;</i>统计分析</template>
				<MenuItem name="3-1">新增和启动</MenuItem>
				<MenuItem name="3-2">活跃分析</MenuItem>
				<MenuItem name="3-3">时段分析</MenuItem>
				<MenuItem name="3-4">用户留存</MenuItem>
				<MenuItem name="3-5">流失用户</MenuItem>
			</Submenu>
		</Menu>
	</div>
</template>

<script>
export default {
	name: 'Menu.vue',
	data () {
		return {
			menuActiveName: '1-1',		// 当前激活的菜单
			menuOpenNames: ['1']		// 当前展开的菜单组
		}
	},
	watch: {
		"$route": function (nv, ov) {
			if (nv.meta.tier === 1) {
				this.menuActiveName = this.$route.name
			}
		}
    },
    created () {
    	// 项目首次打开时，或者刷新页面时，获取本地存储的菜单信息
    	this.menuActiveName = localStorage.getItem('menuActiveName') || '1-1'
    	this.menuOpenNames = JSON.parse(localStorage.getItem('menuOpenNames')) || ['1']
    	this.$nextTick(() => {
    		// 需要放在 nextTick 里才能更新菜单状态
    		this.$refs.menu.updateOpened()
    		this.$refs.menu.updateActiveName()
    	})
    },
	methods: {
		onSelectHandle (arg) {	// 点击一个菜单
			localStorage.setItem('menuActiveName', arg)
		},
		onOpenHandle (arg) {	// 展开一个菜单分组
			localStorage.setItem('menuOpenNames', JSON.stringify(arg))
		},
		look () {
			console.log(arg)
		}
	}
}
</script>

<style lang="less" scoped>
	::v-deep .ivu-menu {
		.ivu-menu-submenu-title {
			background-color: #F5F6F7;
		}
		.ivu-menu-submenu {
			margin-bottom: 6px;
		}
		.ivu-menu-submenu .ivu-menu-item,
		.ivu-menu-submenu .ivu-menu-submenu-title {
			white-space: nowrap;
		}
	}
</style>