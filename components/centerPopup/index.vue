<template>
	<u-popup v-model="showPopup" :mode="pMode" :width="pWidth" :height="pHeight" :border-radius="borderRaduis"
		:mask-close-able="false">
		<view class="popup-area flex-column">
			<view class="popup-title">提示</view>

			<view class="popup-ctx">
				<slot name="popupCtx"></slot>
			</view>

			<view class="popup-btn-area flex-between">
				<view class="throttle" @tap="$u.throttle(popupCancel, 500)">取消</view>
				<view class="throttle confirm" @tap="$u.throttle(popupConfirm, 500)">确定</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
export default {
	props: {
		showPopup: {
			type: Boolean,
			default: false
		},
		pMode: {
			type: String,
			default: 'center'
		},
		pWidth: {
			type: String,
			default: ''
		},
		pHeight: {
			type: String,
			default: ''
		},
		borderRaduis: {
			type: String,
			default: ''
		}
	},
	methods: {
		// 弹窗的取消
		popupCancel() {
			this.$emit('popupCancel')
		},
		// 弹窗的确定
		popupConfirm() {
			this.$emit('popupConfirm')
		}
	}
}
</script>

<style lang='scss' scoped>
.popup-area {
	width: 100%;
	height: 100%;
	align-items: center;

	.popup-title {
		font-size: 36rpx;
		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
		font-weight: 500;
		color: #191D20;
		line-height: 42rpx;
		margin-top: 50rpx;
	}

	.popup-ctx {
		font-size: 30rpx;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #333333;
		line-height: 56rpx;
		margin: 44rpx 0 60rpx 0;
	}

	.popup-btn-area {
		width: 100%;
		height: 100%;
		align-items: center;

		.popup-title {
			font-size: 36rpx;
			font-family: Source Han Sans CN-Medium, Source Han Sans CN;
			font-weight: 500;
			color: #191D20;
			line-height: 42rpx;
			margin-top: 50rpx;
		}

		.popup-ctx {
			font-size: 30rpx;
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 400;
			color: #333333;
			line-height: 56rpx;
			margin: 44rpx 0 60rpx 0;
		}

		.popup-btn-area {
			width: 100%;
			padding: 0 40rpx;

			.throttle {
				width: 272rpx;
				height: 88rpx;
				background: #F1F1F1;
				border-radius: 200rpx;
				line-height: 88rpx;
				text-align: center;

				&:active {
					opacity: 0.5;
				}
			}

			.confirm {
				background: #FF6D27;
				color: #FFFFFF;
			}
		}

		.confirm {
			// background: #FE6C26;
			background: linear-gradient(90deg, #FB8D1E 0%, #FF6D27 100%);
			color: #FFFFFF;
		}
	}
}
</style>