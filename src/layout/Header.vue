<template>
	<div class="wrap">
		<div class="left">
			<div class="logo"></div>
		</div>
		<div class="right">
			<div class="href">
				<Tooltip placement="bottom" content="常见问题" :delay="100">
					<router-link to="/" custom v-slot="{ navigate }">
						<i class="iconfont">&#xeb40;</i>
					</router-link>
				</Tooltip>
				<Tooltip placement="bottom" content="消息" :delay="100">
					<router-link to="/" custom v-slot="{ navigate }">
						<span><i class="iconfont">&#xe663;</i>消息</span>
					</router-link>
				</Tooltip>
			</div>
			<div class="menu">
				<Dropdown @on-click="dropclick">
				    <a class="photo" href="javascript:void(0)">
				    	个人中心
				        <i class="el-icon-caret-bottom"></i>
				    </a>
				    <DropdownMenu slot="list">
				        <DropdownItem name="center">个人中心</DropdownItem>
				    </DropdownMenu>
				    <DropdownMenu slot="list">
				        <DropdownItem name="admin">管理后台</DropdownItem>
				    </DropdownMenu>
				    <DropdownMenu slot="list">
				        <DropdownItem name="out">退出登录</DropdownItem>
				    </DropdownMenu>
				</Dropdown>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header.vue',
	data () {
		return {}
	},
	methods: {
		dropclick (name) {
			this.$Message.info(name)
		}
	}
}
</script>

<style lang="less" scoped>
	.wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
	}
	.left {
		.logo {
			width: 200px; height: 60px;
			background-position: center;
			background-size: 60%;
			background-repeat: no-repeat;
			background-image: url(https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg);
		}
	}
	.right {
		display: flex;
		padding-right: 20px;
		.href { margin-right: 20px; }
	}
</style>