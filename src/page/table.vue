<!-- 典型的后台管理表格类页面 -->
<template>
	<div class="page" setBar>

		<!-- 搜索区 -->
		<search></search>

		<div class="page-dispose">
			<div>
				<router-link :to="'/addBank'" custom v-slot="{ navigate }">
					<Button type="primary" @click="navigate">+新建</Button> &nbsp;
				</router-link>
				<Button @click="mixinExportExcel({})">导出excel</Button>
			</div>
		</div>
		<div class="page-table-wrap" v-loading="table.load">
			<Table border stripe
				:width="t_Width"
				:height="table.trs.length > 5 ? t_Height : '-'"
				:columns="table.ths"
				:data="table.trs" 
				@on-sort-change="handleSortChange">
				<template slot-scope="{ row, index }" slot="f_cover">
		            <div style="padding: 5px;">
		            	<i class="iconfont" :class="row.iconfont" style="font-size: 24px;"></i>
		            </div>
		        </template>
				<template slot-scope="{ row, index }" slot="origin">
		            <div style="padding: 5px;">
		            	<span style="font-size: 12px;" v-for="(item, idx) of row.diQu" :key="idx">
			            	{{item}}
			            	<template v-if="idx < (row.diQu.length - 1)">，</template>
			            </span>
		            </div>
		        </template>
			</Table>
			<Page show-total show-sizer
				:current="page.curr"
				:page-size="p_limit"
				:total="page.total"
				@on-change="mixinChangePage"
				@on-page-size-change="mixinChangeLimit" />
		</div>
	</div>
</template>

<script>
import search from '@/page/search'
import mixin from '@/page/common/mixin'

export default {
	name: 'table.vue',	// 典型的后台管理表格类页面
	mixins: [mixin],
	components: { search },
	data () {
		return {
			table: {
				load: false,
				ths: [
					{ title: '水果名称', key: 'mingCheng', fixed: 'left', width: 100 },
					{ title: '水果编号', key: 'bianHao', minWidth: 120 },
					{ title: '水果图标', slot: 'f_cover', align: 'center', minWidth: 100 },
					{ title: '产地', key: 'chanDi', align: 'center', minWidth: 110 },
					{ title: '主要消售地区', slot: 'origin', minWidth: 130 },
					{ title: '上市日期', key: 'shangShi', align: 'center', minWidth: 146 },
					{ title: '批发价', key: 'piFa', minWidth: 80 },
					{ title: '最低售价', key: 'shouJia', minWidth: 100 },
					{ title: '执行标准', key: 'biaoZhun', align: 'center', minWidth: 120 },
					{ title: '出库时间', key: 'chuKu', align: 'center', minWidth: 180 },
					{
						title: '操作',  minWidth: 130, fixed: 'right', align: 'center', 
						render: (h, params) => {
							let arr = [
								h('span', {
									style: { color: '#2d8cf0', cursor: 'pointer' },
									on: {
										click: () => { this.$Message.info('查看')}
									}
								}, '查看'),
								h('span', {
									style: { color: '#2d8cf0', cursor: 'pointer', margin: '0 8px' },
									on: {
										click: () => {
											this.$router.push({
												name: "banana",
												params: { id: params.row.bianHao }
											})
										}
									}
								}, '编辑'),
								h('span', {
									style: { color: '#2d8cf0', cursor: 'pointer' },
									on: {
										click: () => {
											this.$Modal.confirm({
												title: '确定删除吗？',
												content: '删除后该水果不可恢复',
												onOk: function () {
													this.$Message.info('已删除')
												}
											})
										}
									}
								}, '删除')
							]
							return h('span', { style: {fontSize: '12px'} }, arr)
						}
					}
				],
				trs: [
					{
						mingCheng: '菠萝', bianHao: 'BOLUO001', chanDi: '台湾', shangShi: '2021-01-02',
						piFa: '9.92', shouJia: '20', biaoZhun: 'GB/T20201', iconfont: 'iconboluo1',
						diQu: ['中国内地', '新加坡', '韩国', '日本'], chuKu: '2021-01-02 15:21:98'
					}, {
						mingCheng: '橙子', bianHao: 'FCO002', chanDi: '江西', shangShi: '2021-11-20',
						piFa: '2.7', shouJia: '10', biaoZhun: 'GB/T20207', iconfont: 'iconjuzi1',
						diQu: ['中国内地', '台湾', '印度', '日本'], chuKu: '2021-01-02 15:44:56'
					}, {
						mingCheng: '榴莲', bianHao: 'FMO034', chanDi: '马来西亚', shangShi: '2021-04-12',
						piFa: '56', shouJia: '100', biaoZhun: 'GB/T20209', iconfont: 'iconliulian1',
						diQu: ['中国内地', '台湾', '香港', '美国', '欧洲'], chuKu: '2021-01-02 15:46:02'
					}, {
						mingCheng: '桃子', bianHao: 'FTO0361', chanDi: '江西', shangShi: '2021-06-09',
						piFa: '6', shouJia: '24', biaoZhun: 'GB/T20212', iconfont: 'icontaozi',
						diQu: ['广东', '福建', '浙江'], chuKu: '2021-01-02 15:56:09'
					}, {
						mingCheng: '哈密瓜', bianHao: 'FHO0321', chanDi: '新疆', shangShi: '2021-03-03',
						piFa: '4', shouJia: '9', biaoZhun: 'GB/T20216', iconfont: 'icontiangua',
						diQu: ['江西', '湖南', '北京', '上海'], chuKu: '2021-01-02 17:23:45'
					}, {
						mingCheng: '樱桃', bianHao: 'FHO0355', chanDi: '海南', shangShi: '2021-07-17',
						piFa: '14', shouJia: '30', biaoZhun: 'GB/T20221', iconfont: 'iconyingtao',
						diQu: ['江西', '湖南', '北京', '上海'], chuKu: '2021-01-02 19:08:21'
					}
				]
			},
			page: { curr: 1, total: 100 }	// 每页显示数量放入 minxi 里面了
		}
	},
	methods: {
		getData() { // 获取表格数据
			this.$Message.info("页码：" + String(this.page.curr))
		},
		handleSortChange (arg) { // 表格排序
			console.log(arg)
		}
	}
}
</script>

<style lang="less" scoped></style>