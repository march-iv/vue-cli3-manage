let routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/page/account/login')
	},
	{
		path: '/',
		component: () => import('@/layout/Frame'),
		children: [
			{
				path: 'search', name: 'search',
				component: () => import('@/page/search'),
				meta: {
					title: '搜索',	// 页面标题, 用于面包屑导航
					tier: 1			// 页面层级, 用于面包屑导航
				}
			}, {
				path: 'table', name: 'table',
				component: () => import('@/page/table'),
				meta: { title: '表格', tier: 1 }
			},

			// 水果类
			{
				path: 'banana', name: 'banana',
				component: () => import('@/page/fruits/banana'),
				meta: { title: '香蕉', tier: 1 }
			}, {
				path: 'durian', name: 'durian',
				component: () => import('@/page/fruits/durian'),
				meta: { title: '榴莲', tier: 1 }
			}, {
				path: 'strawberry', name: 'strawberry',
				component: () => import('@/page/fruits/strawberry'),
				meta: { title: '草莓', tier: 1 }
			}
		]
	}
]

export default routes