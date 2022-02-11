<template>
	<div id="frame">
		<template v-if="layoutMode === 'lr'">
			<Menu id="menu" setBar></Menu>
			<div id="main">
				<Header></Header>
				<Crumb id="crumb"></Crumb>
				<div id="View"></div>
			</div>
		</template>

		<template v-else-if="layoutMode === 'tb'">
			<Header></Header>
			<div id="body">
				<Menu id="menu" setBar></Menu>
				<div id="main">
					<Crumb id="crumb" ws></Crumb>
					<div id="View" ws>
						<keep-alive :max="1">
							<router-view v-if="$route.meta.keepAlive" />
						</keep-alive>
						<router-view v-if="!$route.meta.keepAlive" />
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import Header from './Header.vue'
import Crumb from './Crumb.vue'
import Menu from './Menu.vue'
import { mapState } from 'vuex'

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
	computed: {
		...mapState({
			layoutMode: state => state.setting.layoutMode
		})
	},
	mounted () {}
}
</script>

<style lang="less" scoped>
	#frame {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	#body {
		flex: 1 1 auto;
		min-height: 80vh;
		display: flex;

		#menu {
			height: 100%;
			overflow: auto;
			flex: 0 0 200px;
		}

		#main {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			#View {
				height: 100%;
				overflow: auto;
				flex: 1 1 auto;
				padding: 0 16px 16px;
			}
		}
	}
</style>