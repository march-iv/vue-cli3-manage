<template>
	<div>
		<Form ref="iviewForm" class="page-sou"
			:model="filter"
			:rules="filterRule"
			:show-message="true">
			<ul :class="{close: expand}">
				<li>
					<FormItem prop="name">
						<span>水果名称：</span>
						<div><Input v-model="filter.name" clearable placeholder="请输入..." /></div>
					</FormItem>
				</li>
				<li>
					<FormItem prop="no">
						<span>水果编号：</span>
						<div><Input v-model="filter.no" clearable placeholder="请输入..." /></div>
					</FormItem>
				</li>
				<li>
					<FormItem prop="from">
						<span>产地：</span>
						<div><Input v-model="filter.from" clearable placeholder="请输入..." /></div>
					</FormItem>
				</li>
				<li>
					<FormItem prop="gb">
						<span>执行标准：</span>
						<div><Input v-model="filter.gb" clearable placeholder="请输入..." /></div>
					</FormItem>
				</li>
				<!-- 如果一栏就可以把搜索条件放得下，那么就用把 .btns 放在 ul 里面 -->
				<div class="btns">
					<Button type="primary" @click="search('iviewForm')">查询</Button>  &nbsp;
					<Button @click="$refs.iviewForm.resetFields()">重置</Button>
					<Button type="text" class="expand" @click="expand = !expand">
						<template v-if="expand">展开<i class="iconfont">&#xeca9;</i></template>
						<template v-else>收起<i class="iconfont">&#xe610;</i></template>
					</Button>
				</div>
			</ul>
			<!-- 如果一栏放不下，那么就用把 .btns 放在 ul 外面 -->
			<!-- 为了演示，里面外面都放了，可以看效果，使用时根据实际情况删掉其中一个 -->
			<div class="btns">
				<Button type="primary" @click="search('iviewForm')">查询</Button>  &nbsp;
				<Button @click="$refs.iviewForm.resetFields()">重置</Button>
				<Button type="text" class="expand" @click="expand = !expand">
					<template v-if="expand">展开<i class="iconfont">&#xeca9;</i></template>
					<template v-else>收起<i class="iconfont">&#xe610;</i></template>
				</Button>
			</div>
		</Form>
	</div>
</template>

<script>
export default {
	name: 'banana.vue',		// 香蕉
	data () {
		return {
			filterRule: {},
			filter: {
				name: '',	// 水果名称
				no: '',		// 水果编号
				from: '',	// 产地
				gb: ''		// 执行标准
			},
			expand: true,	// 菜单是否关闭
		}
	},
	methods: {
		search (name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success("验证通过")
					bankService.getdemo({}).then((res) => {
						console.log('res', res)
					})
				} else {
					this.$Message.error("验证失败")
				}
			})
		},
	}
}
</script>

<style lang="less" scoped>
</style>