<template>
	<div id="frame">
		<!-- 头部栏 -->
		<div class="header">
			<Header></Header>
		</div>

		<div class="body">
			<!-- 菜单 -->
			<div class="menu">
				<Menu></Menu>
			</div>

			<div class="mian">
				<!-- 面包屑导航 -->
				<div class="crumb">
					<Crumb></Crumb>
				</div>

				<!-- 内容显示区 -->
				<div class="content"></div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './Header.vue'
import Crumb from './Crumb.vue'
import Menu from './Menu.vue'

export default {
	name: 'Frame.vue',
	data () {
		return {}
	},
	components: {
		Header,
		Menu,
		Crumb
	},
	mounted () {}
}
</script>

<style scoped>
	#frame {
		height: 100vh;
	}
</style>