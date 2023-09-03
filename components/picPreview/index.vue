<!-- title: 图片预览组件
time: 07/01
author： lcc -->
<template>
	<view class="pic-preview">
		<view class="pic-list" :class="{'row-reverse': picUrlArr.length < 3}">
			<u-image 
				:width="imgWidth" :height="imgHeight"
				v-for="imgItem in picUrlArr" :key="imgItem" 
				@click="perview(imgItem)" :src="imgItem" 
				:style="{'width': imgWidth, 'height': imgHeight}" 
				style="display: inline-block; margin: 0 0 10rpx 10rpx"
			></u-image>
		</view>
		
		<view 
			class="preview-modal flex-y-center flex-x-center" 
			v-show="showModal" @click="closePreview"
		>
			<u-image 
				:src="previewImage" width="100vw" height="750rpx"
			></u-image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			allPicUrl: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				showModal: false,
				previewImage: ''
			}
		},
		computed: {
			picUrlArr() {
				return this.allPicUrl.split(',')
			},
			imgWidth() {
				switch (this.picUrlArr.length){
					case 1:
						return '300rpx'
					case 2:
						return '220rpx'
					case 3:
						return '166rpx'
					case 4:
						return '166rpx'
					case 5:
						return '166rpx'
					case 6:
						return '166rpx'
					default: return '300rpx'
				}
			},
			imgHeight() {
				switch (this.picUrlArr.length){
					case 1:
						return '300rpx'
					case 2:
						return '220rpx'
					case 3:
						return '166rpx'
					case 4:
						return '166rpx'
					case 5:
						return '166rpx'
					case 6:
						return '166rpx'
					default: return '300rpx'
				}
			}
		},
		methods: {
			perview(url) {
				this.showModal = true
				this.previewImage = url
			},
			closePreview() {
				this.showModal = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pic-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.row-reverse {
		flex-direction: row-reverse;
	}
	
	.pic-preview .preview-modal {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 99999;
	}
</style>