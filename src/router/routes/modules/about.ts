import { RouteRecordRaw } from 'vue-router';
 
const about: RouteRecordRaw = {
	path: '/about',
	name: 'About',
	redirect: '/about/aboutPage',
	meta: {
		title: '关于我们',
		icon: 'ant-design:home-outlined',
		sort: 0,
		hideSubMenu: true
	},
	children: [
		{
			path: 'aboutPage',
			name: 'AboutPage',
			component: () => import('/@/views/about/index.vue')
		}
	]
};
 
export default about;
