<template>
	<view class="search-drop">
		<view class="search">
			<image src="../../static/search-icon.png" mode=""></image>
			<input class="search-input" v-model="searchVal" :placeholder="placeholder" />
			<view class="search-btn flex-center" @click="search">搜索</view>
		</view>
		
		<view style="padding: 8rpx 0;">
			<u-dropdown>
				<u-dropdown-item v-model="district" title="李沧区" :options="districtOptions"></u-dropdown-item>
				<u-dropdown-item v-model="street" title="街道" :options="streetOptions"></u-dropdown-item>
				<u-dropdown-item v-model="area" title="社区" :options="areaOptions"></u-dropdown-item>
			</u-dropdown>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				searchVal: '',
				district: '李沧区',
				districtOptions: [
					{}
				],
				street: '',
				streetOptions: [],
				area: '',
				areaOptions: []
			}
		},
		methods: {
			search() {
				this.$emit('handleSearch', this.searchVal)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-drop {
		width: calc(100% - 40rpx);
		margin-left: 20rpx;
		margin-top: 32rpx;
		
		.search {
			width: 100%;
			height: 68rpx;
			background: #FFFFFF;
			border-radius: 200rpx;
			opacity: 0.8;
			border: 2rpx solid #C14746;
			position: relative;
			
			image {
				width: 32rpx;
				height: 32rpx;
				position: absolute;
				top: 18rpx;
				left: 20rpx;
			}
			
			.search-input {
				height: 68rpx;
				width: calc(100% - 150rpx);
				font-size: 32rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				line-height: 68rpx;
				padding-left: 64rpx;
			}
			
			.search-btn {
				width: 128rpx;
				height: 60rpx;
				background: #FF6D0C;
				border-radius: 2000rpx;
				position: absolute;
				top: 2rpx;
				right: 2rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				
				&:active {
					opacity: 0.6;
				}
			}
		}
	}
</style>