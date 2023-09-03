<template>
	<view class="common-header" :style="{'height': topHeight}">
		<view class="page-title" :class="{'home-title': titleLeftArr.includes(title)}">{{title}}</view>
		
		<image :src="compAvatar(avatar)" class="avatar-icon" 
			mode="" @tap="openUserInfo" v-if="hasAvatarArr.includes(title)"></image>
		<image src="@/static/image/back-icon.png" class="back-icon" 
			mode="" @tap="back" v-if="!hasAvatarArr.includes(title) && !titleLeftArr.includes(title)"></image>
		<slot name="search"></slot>
	</view>
</template>

<script>
export default {
	name: "commonHeader",
	props: {
		title: {
			type: String,
			default: ''
		},
		topHeight: {
			type: String,
			default: '394rpx'
		},
		avatar: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			hasAvatarArr: ['首页'],
			titleLeftArr: ['签约', '上门服务']
		}
	},
	computed: {
		compAvatar(url) {
			return url => {
				return url ? this.$picUrl + url : require('@/static/image/avatar-icon.png')
			}
		}
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			})
		},
		// 跳我的
		openUserInfo() {
			uni.navigateTo({
				url: '/pages/mine/mine'
			})
		}
	}
}
</script>

<style lang="scss">
.common-header {
	width: 100vw;
	height: 394rpx;
	background: linear-gradient(180deg, #FF6D0C 0%, rgba(254,131,68,0.8) 70%, rgba(255,141,78,0) 100%);
	background-size: 100%;
	position: relative;

	.page-title {
		font-size: 34rpx;
		font-family: MiSans-Regular, MiSans;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 48rpx;
		padding-top: 96rpx;
		text-align: center;
	}

	.home-title {
		font-size: 36rpx;
		text-align: left;
		padding-left: 22rpx;
	}
	
	.avatar-icon {
		width: 60rpx;
		height: 60rpx;
		position: absolute;
		left: 26rpx;
		top: 90rpx;
	}

	.back-icon {
		width: 48rpx;
		height: 48rpx;
		position: absolute;
		left: 8rpx;
		top: 96rpx;
	}
}
</style>