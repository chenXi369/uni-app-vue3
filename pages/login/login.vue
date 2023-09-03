<template>
	<image src="https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/img/login-bg.png" mode="" class="login-box"></image>
	<view class="top-text">欢迎登录</view>
	<view class="login-wrapper">
		<u--form :model="loginForm" ref="loginForm">
			<view class="input-box">
				<u-form-item prop="username">
					<image src="https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/img/acount-icon.png" mode=""
						class="icon"></image>
					<u-input v-model="loginForm.username" placeholder="请输入手机号" />
				</u-form-item>
			</view>
			<view class="input-box">
				<u-form-item prop="password">
					<image src="https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/img/pass-icon.png" mode=""
						class="icon"></image>
					<u-input v-model="loginForm.password" placeholder="请输入密码" type="password" />
				</u-form-item>
			</view>
		</u--form>
		<view class="register-pass-box flex-between">
			<text @click='register(`立即注册`)'>立即注册</text>
			<text @click='register(`忘记密码`)'>忘记密码</text>
		</view>
		<view @click="submit" class="submit">登录</view>
	</view>
</template>

<script setup>
	import {
		getUserInfo,
		getStaff
	} from '@/api/login/index.js'
	import {
		ref,
		reactive
	} from 'vue'
	import {
		useStore
	} from 'vuex'

	const store = useStore()

	const loginForm = {
		username: 'xlmzxf',
		password: 'Aa123456',
		device: "wechat",
		userType: "civil"
	}

	const submit = () => {
		uni.$u.throttle(toNext, 500)
	}
	const toNext = () => {
		console.log(store.dispatch('Login', {
			...loginForm
		}))
		store.dispatch('Login', {
			...loginForm
		}).then(() => {
			uni.redirectTo({
				url: '/pages/home/home'
			})
			getUserInfo().then((res) => {
				uni.setStorage({
					key: `userInfo`,
					data: res.user,
					success() {
						const data = {
							userId: res.user.userId,
							postName: 'visitor',
							pageNum: 1,
							pageSize: 10,
						}
						getStaff(data).then(res => {
							uni.setStorageSync('staffId', res.rows[0].id)
						}).catch(() => {
							uni.removeStorageSync('staffId')
						})
					}
				})

				uni.setStorage({
					key: 'administrativeDivision',
					data: res.user.dept.administrativeDivision
				})
			})
		}).catch(err => {
			uni.showToast({
				title: '登录失败',
				icon: 'none'
			})
		})
	}

	const register = () => {
		uni.navigateTo({
			url: `/pages/register/register?title=${data}`
		})
	}
</script>

<style lang="scss" scoped>
	.login-box {
		width: 100%;
		height: 100%;
		/*元素的位置相对于浏览器窗口是固定位置*/
		position: fixed;
		left: 0;
		top: 0;
		z-index: -999;
	}

	.top-text {
		font-size: 64px;
		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
		font-weight: 500;
		color: #FE6C26;
		margin: 152rpx 0 144rpx 34rpx;
	}


	.input-box {
		width: calc(100% - 200rpx);
		margin: 40rpx auto;

		.icon {
			width: 27rpx;
			height: 33rpx;
			position: absolute;
			left: -50rpx;
			top: 36rpx;
		}
	}

	.register-pass-box {

		width: calc(100% - 100rpx);
		margin: 54rpx auto 0 auto;

		text {
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(#FF6D27, 0.9);
			line-height: 38rpx;
		}
	}

	.submit {
		width: 670rpx;
		height: 88rpx;
		background: #FF6D27;
		border-radius: 2000px 2000px 2000px 2000px;
		opacity: 1;
		filter: blur(undefinedpx);
		margin: 114rpx auto 0 auto;
		font-size: 34rpx;
		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;

	}
</style>