import { RouteRecordRaw } from 'vue-router';
 
const news: RouteRecordRaw = {
	path: '/news',
	name: 'News',
	redirect: '/news/newsPage',
	meta: {
		title: '新闻列表',
		icon: 'ant-design:home-outlined',
		sort: 0,
		hideSubMenu: true
	},
	children: [
		{
			path: 'newsPage',
			name: 'NewsPage',
			component: () => import('/@/views/news/index.vue')
		}
	]
};
 
export default news;
