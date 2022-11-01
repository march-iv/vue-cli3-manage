<template>
	<div class="page">
		<i class="iconfont">&#xe69e;</i>
		<p>{{$store.state.app.pageLimit}}</p>
		<p>{{$store.state.fruit}}</p>
	</div>
</template>

<script>
export default {
	name: 'banana.vue',		// 香蕉
	data () {
		return {}
	}
}
</script>

<style lang="less" scoped>
	.iconfont {
		font-size: 100px;
		color: yellowgreen;
	}
</style>