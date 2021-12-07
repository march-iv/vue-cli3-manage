<!-- 面包屑导航组件 -->
<template>
	<div class="wrap">
		<template v-for="(item, idx) of navArr">
			<span>{{item.title}}</span>
			<template v-if="(idx + 1) < navArr.length">
				<i class="iconfont">&#xe633;</i>
			</template>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Crumb.vue',		// 面包屑导航组件
	data () {
		return {
			navArr: []
		}
	},
	watch: {
		"$route": 'setNavArr'	// 当路由发生跳转时，设置面包屑导航
    },
    mounted () {
    	this.$nextTick(() => {
    		this.setNavArr()	// 项目页面首次进入时，设置初始的面包屑导航
    	})
    },
    methods: {
    	setNavArr(oval, nval) { // 设置面包屑导航
    		let currTier = this.$route.meta.tier ? this.$route.meta.tier : 1 // 当前组件层级
    		let crumbLength = this.$store.state.app.breadCrumbs.length 		 // 当前面包屑路径大小
    		let newNav = {	// 新的面包屑
    			title: this.$route.meta.title,
    			path: this.$route.fullPath
    		}

    		if (!oval) { // watch 监听路由变化时执行的事件会传递两个参数，如果没有参数说明是刷新不是跳转
    			let crumbStorage = JSON.parse(sessionStorage.getItem('breadListStorage'))
				// this.$store.commit('spliceBreadCrumb', 0) // 清除仓库中的面包屑数据，开发时使用
    			if (crumbStorage) {
    				this.$store.commit('setBreadCrumb', crumbStorage)
    			}
    		} else {
    			if (currTier === 1) {	// 如果跳转的新页面的层级关系是 1 (1是根组件，2是二级组件..)
    				this.$store.commit('spliceBreadCrumb', 0) // 清空面包屑
					this.$store.commit('setBreadCrumb', newNav) // 设置新的面包屑
    			} else if (currTier > crumbLength) { // 跳转新页面层级大于当前页面层级，直接尾部追加面包屑
    				this.$store.commit('setBreadCrumb', newNav)
    			} else {
    				this.$store.commit('spliceBreadCrumb', Number(currTier) + 1)
    			}
				sessionStorage.setItem('breadListStorage', JSON.stringify(this.navArr))
    		}
			this.navArr = this.$store.state.app.breadCrumbs
        }
    }
}
</script>

<style lang="less" scoped>
	.wrap {
		padding: 10px;
		line-height: 24px;
		text-indent: 6px;
		span {
			color: #131D33;
		}
		span ~ i {
			vertical-align: bottom;
			margin: 0 4px;
		}
	}
</style>