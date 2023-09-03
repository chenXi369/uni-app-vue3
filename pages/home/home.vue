<!-- title: 首页
time: 06/27
author： lcc -->
<template>
	<view class="tabbar-page">
		<CommonHeader :title="title" :avatar="avatar"></CommonHeader>
		
		<view class="swiper-area">
			<u-swiper :list="swiperList" :height="300"></u-swiper>
		</view>
		<!-- 服务对象端 -->
		<view class="main">
			<view class="older-info">
				<view class="title">老人信息</view>
				
				<view class="list flex-row">
					<view 
						class="olderMenu-item flex-column flex-y-center" 
						v-for="item in olderMenuList" :key="item.name"
						@click="routerLinkTo(item)"
					>
						<image style="width: 108rpx;height: 108rpx;margin: 40rpx 0 12rpx;" :src="item.icon" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			
			<view class="older-info organization-info">
				<view class="title">机构信息</view>
				
				<view class="list flex-row">
					<view 
						class="olderMenu-item flex-y-center flex-column" 
						v-for="item in orgMenuList" :key="item.name"
						@click="routerLinkTo(item)"
					>
						<image style="width: 108rpx;height: 108rpx;margin: 40rpx 0 12rpx;" :src="item.icon" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getOrderList, getBannerImg } from '@/api/page.js'

export default {
	data() {
		return {
			title: '首页',
			// 分页数据
			pageInfo: {
				pageNum: 1,
				pageSize: 10,
				serviceObjectId: '',
				orderStatus: ''
			},
			olderMenuList: [
				{name: '老人信息', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-older-icon.png',
					linkUrl: '/pages/elderlyDataLib/elderlyDataLib'},
				{name: '巡访平台', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-older-icon.png',
					linkUrl: '/pages/visitation_care_pages/home/index'},
				{name: '抽查平台', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-older-icon.png',
					linkUrl: '/pages/check_sub_pages/index/index'},
			],
			orgMenuList: [
				{name: '养老机构', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-org-icon.png',
					linkUrl: '/pages/elderlyInstitution/elderlyInstitution'},
				{name: '社区居家', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-house-icon.png', 
					linkUrl: '/pages/communityHome/communityHome'},
				{name: '助餐中心', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-meal-icon.png', 
					linkUrl: '/pages/mealAid/mealAid'},
				{name: '家庭床位', icon: 'https://www.ylaow.cn/fpng/networkpic/mzjgxcx/static/image/home-user-icon.png',
					linkUrl: '/pages/familyNurseBed/familyNurseBed'}
			],
			// 后台返回的页码数据
			pagi: {},
			serviceCtx: '',
			total: 0,
			currentStatus: 0,
			swiperList: []
		}
	},
	onLoad() {
		this.hiddenOlderState = this.$store.state.user
		Promise.all([
			uni.showLoading({
				title: '加载中'
			}),
			this.initData(),
			this.getSwiperList(),
			uni.getStorage({
				key:'userInfo',
				success: (res) => {
					this.avatar = res.data.avatar
				}
			})
		]).then(res => {
			uni.hideLoading()
		})
	},
	onShow() {
		this.initData()
		// 签约的列表
		this.currentStatus = ''
	},
	methods: {
		search() {
			this.getOrderList()
		},
		// 初始化数据
		initData() {
			
		},
		// 获取首页轮播列表
		getSwiperList() {
			getBannerImg().then(res => {
				this.swiperList = [...res.data].map(item => {
					return this.$picUrl + item.bannerUrl
				})
			})
		},
		// 服务对象端
		changeService(index) {
			this.currentService = index
			this.currentStatus = this.serviceList[index].id
		},
		routerLinkTo(row) {
			if(row.name === '巡访平台' || row.name === '抽查平台') {
				uni.reLaunch({
					url: row.linkUrl
				})
			} else {
				uni.navigateTo({
					url: row.linkUrl
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.tabbar-page {
	width: 100vw;
	height: 100vh;
	position: relative;
	background: #F2F7FD;
	
	.swiper-area {
		width: calc(100% - 44rpx);
		height: 300rpx;
		left: 22rpx;
		top: 164rpx;
		position: absolute;
	}

	// 服务对象端
	.main {
		width: 100%;
		top: 484rpx;
		left: 0;
		margin-bottom: 150rpx;
		position: absolute;
		display: flex;
		flex-direction: column;
		
		.older-info {
			width: calc(100% - 40rpx);
			margin-left: 20rpx;
			height: 320rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 2rpx 16rpx 2rpx rgba(0,0,0,0.06);
			border-radius: 24rpx;
			padding: 30rpx 24rpx;
		}
		
		.organization-info {
			margin-top: 30px;
		}
		
		.title {
			font-size: 36rpx;
			font-family: MiSans-Medium, MiSans;
			font-weight: 500;
			color: #333333;
			line-height: 50rpx;
		}
		
		.list {
			
			.olderMenu-item {
				width: 25%;
			}
		}
	}
}
</style>
