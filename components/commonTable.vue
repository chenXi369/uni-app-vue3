<template>
	<view class="common-table">
		<view class="header-list">
			<view 
				class="header-item" 
				v-for="(item,index) in tableHeader" :key="index"
			>{{ item }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tableHeader: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-table {
		width: calc(100% - 40rpx);
		margin-left: 20rpx;
		
		.header-list {
			width: 100%;
			height: 70rpx;
			background: #FF6D0C;
			display: flex;
			justify-content: space-around;
			border-radius: 24rpx 24rpx 0px 0px;
			
			.header-item {
				flex: 2;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 14px;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				background: #FF6D0C;
				border-left: 1px solid #fff;
				
				&:first-of-type {
					flex: 3;
					border-radius: 24rpx 0px 0px 0px;
				}
				&:last-of-type {
					flex: 1;
					border-radius: 0px 24rpx 0px 0px;
				}
			}
		}
	}
</style>