<template>
	<view>
		<view class="flex-row flex-y-center">
			<view class="pic-preview" v-for="(item, index) in picUrl" :key="index" @click="perviewPic(item)">
				<u-image width="156rpx" height="156rpx" :border-radius="8" :src="computPic(item)"></u-image>
			</view>
		</view>
		
		<u-mask 
			:show="show" @click="show = false" :duration="400" 
			:zoom="true" :custom-style="{background: 'rgba(0, 0, 0, 0.9)'}"
		>
			<view class="mask-inner-pic flex-center">
				<u-image width="750rpx" height="750rpx" :border-radius="20" :src="currentUrl"></u-image>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		props: {
			picUrl: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				show: false,
				currentUrl: ''
			}
		},
		computed: {
			computPic(url) {
				return url => {
					return this.$picUrl + url
				}
			}
		},
		methods: {
			perviewPic(row) {
				this.show = true
				this.currentUrl = this.$picUrl + row
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pic-preview {
		width: 156rpx;
		height: 156rpx;
		margin-left: 16rpx;
		border-radius: 8rpx;
		
		&:first-of-type {
			margin-left: 0rpx;
		}
	}
	
	.mask-inner-pic {
		width: 100vw;
		height: 100vh;
	}
</style>