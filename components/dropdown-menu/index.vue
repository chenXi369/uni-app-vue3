<!-- title: 发布需求
time: 07/1
author： lcc -->
<template>
	<!-- 顶部下拉菜单 -->
	<view class="drop">
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="政府购买老人" :options="options1"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="工单状态" :options="options2"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="服务时间" :options="options2"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	export default{
		name:'dropdownMenu',
		data(){
			return{
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
			}
		}
	}
</script>

<style scoped lang="scss">
	.drop {
		width: 100%;
		box-shadow: 0rpx 10rpx 10rpx rgb(74, 144, 254) inset;
		background-color: #F2F7FD;
	}
</style>