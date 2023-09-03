<script setup>
	import {
		onLaunch,
		onShow,
		onHide
	} from '@dcloudio/uni-app'
	import verifyLogin from '@/utils/verifyLogin.js'

	onLaunch(() => {
		verifyLogin()
		// #ifdef APP-PLUS
		// 屏幕锁定默认方向
		plus.screen.lockOrientation('portrait-primary')
		// #endif

		// 开启推送
		uni.getPushClientId({
			success: (res) => {
				console.log('res', res.cid)
			}
		})
		uni.onPushMessage(res => {
			uni.createPushMessage({
				title: res.data.title,
				content: res.data.name
			})
		})
	})

	onShow(() => {
		console.log('App Show')
	})

	onHide(() => {
		console.log('App Hide')
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'common/css/index.css';
	@import "@/uni_modules/uview-plus/index.scss";
</style>

<style>
	/* 项目基础样式 */
	@import "./app.scss";

	.uni-app--showlayout+uni-tabbar.uni-tabbar-bottom,
	.uni-app--showlayout+uni-tabbar.uni-tabbar-bottom .uni-tabbar,
	.uni-app--showlayout+uni-tabbar.uni-tabbar-top,
	.uni-app--showlayout+uni-tabbar.uni-tabbar-top .uni-tabbar {
		left: var(--window-left);
		right: var(--window-right);
	}

	page {
		background: #F2F7FD;
	}
</style>