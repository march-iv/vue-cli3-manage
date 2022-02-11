let mixin = {
	data () {
		return {
			mixin_page_limit: 10,
			// 快捷日期选择
			mixinDatePickerRange: {
            	shortcuts: [
	                {
	                    text: '近一周',
	                    value () {
	                        let end = new Date();
	                        let start = new Date();
	                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	                        return [start, end];
	                    }
	                }, {
	                    text: '近一月',
	                    value () {
	                        let end = new Date();
	                        let start = new Date();
	                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	                        return [start, end];
	                    }
	                }, {
	                    text: '近三月',
	                    value () {
	                        let end = new Date();
	                        let start = new Date();
	                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	                        return [start, end];
	                    }
	                }
	            ],
	            disabledDate (time) {
                    return time.getTime() > (Date.now() - 86400000);
                }
	        }
		}
	},
	created () {
		let storageLimit = JSON.parse(sessionStorage.getItem('pageLimitStorage'))
		if (storageLimit) {
			this.$store.commit('setPageLimit', storageLimit)
		}
	},
	computed: {
		// 设置 iview table 宽度
        mixin_table_Width () {
            return window.innerWidth - 280
        },
        // 设置 iview table 高度，对于大屏幕则不设置
        mixin_table_Height () {
        	return window.innerHeight > 900 ? "-" : (window.innerHeight - 326)
        }
    },
    methods: {
    	// 导出表格
    	mixinExportExcel ({name}) {
    		this.$Message.info('导出表格')
    	},
    	// 重置搜索条件
    	mixinReset (name) {
			this.$refs[name].resetFields()
		},
		// 点击页码
		mixinChangePage (num) {
			this.page.curr = num
			this.getData()
		},
		// 设置每页显示条数, 并保存到本地
		mixinChangeLimit (num) {
			this.$store.commit('setPageLimit', num)
			sessionStorage.setItem('pageLimitStorage', num)
		}
    }
}

export default mixin