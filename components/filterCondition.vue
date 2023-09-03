<template>
	<view class="filter-condition">
		<u-dropdown active-color="#FF6D0C">
			<u-dropdown-item v-if="userAreaCode.length !== 4" @change="regionChange"
				:disabled="userAreaCode.length === 3"
				v-model="region" :title="regionTitle" :options="regionOptions"></u-dropdown-item>
			<u-dropdown-item @change="streetChange" :disabled="userAreaCode.length === 4"
				v-model="street" :title="streetTitle" :options="streetOptions"></u-dropdown-item>
			<u-dropdown-item v-model="community" :title="communityTitle" @change="communityChange"
				:options="communityOptions"></u-dropdown-item>
		</u-dropdown>
	</view>
</template>

<script>
	import { getCivilAreaList } from '@/api/table.js'
	
	export default {
		data() {
			return {
				allAreaList: [],
				region: null,
				regionTitle: '区县',
				regionOptions: [],
				
				street: null,
				streetTitle: '街道',
				streetOptions: [],
				
				community: null,
				communityTitle: '社区',
				communityOptions: [],
				addressCode: []
			}
		},
		computed: {
			userAreaCode() {
				return uni.getStorageSync('administrativeDivision').split(',')
			}
		},
		async created() {
			const res = await getCivilAreaList()
			this.allAreaList = [...res.data]
			
			this.addressCode = [...this.userAreaCode]
			switch (this.userAreaCode.length) {
				case 2:
					this.regionOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.parentCode
					}))
					break;
				case 3:
					// 首次进入默认区县，街道，社区
					this.regionOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.areaCode
					}))
					this.region = this.regionOptions[1].value
					this.regionTitle = this.regionOptions[1].label
					this.streetOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.parentCode
					}))
					break;
				case 4:
					this.streetOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.areaCode
					}))
					this.street = this.streetOptions[1].value
					this.streetTitle = this.streetOptions[1].label
					this.communityOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.parentCode
					}))
					break;
				case 5:
					this.communityOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return Number(this.userAreaCode[this.userAreaCode.length - 1]) == item.areaCode
					}))
					this.community = this.communityOptions[1].value
					this.communityTitle = this.communityOptions[1].label
					break;
			}
		},
		methods: {
			// 键值对的处理
			mapSetKeyValue(arr) {
				const defaultArr = [
					{label: '全部', value: -1}
				]
				return defaultArr.concat(arr && arr.length ? arr.map(item => {
					return {
						...item,
						label: item.areaName,
						value: item.areaCode
					}
				}) : [])
			},
			// 区县下拉值改变的处理
			regionChange(e) {
				if(e === -1) {
					this.region = null
					this.regionTitle = '区县'
					this.addressCode[2] = ''
				} else {
					this.region = e
					this.regionTitle = this.regionOptions.find(row => {
						return row.value == e
					}).label
					this.streetOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return e == item.parentCode
					}))
					
					this.addressCode[2] = e
				}
				this.$emit('filterArea', this.addressCode)
			},
			// 街道下拉值改变的处理
			streetChange(e) {
				if(e === -1) {
					this.street = null
					this.streetTitle = '街道'
					this.addressCode[3] = ''
				} else {
					this.street = e
					this.streetTitle = this.streetOptions.find(row => {
						return row.value == e
					}).label
					this.communityOptions = this.mapSetKeyValue(this.allAreaList.filter(item => {
						return e == item.parentCode
					}))
					
					this.addressCode[3] = e
				}
				this.$emit('filterArea', this.addressCode)
			},
			// 社区下拉值改变的处理
			communityChange(e) {
				if(e === -1) {
					this.community = null
					this.communityTitle = '社区'
					this.addressCode[4] = ''
				} else {
					this.community = e
					this.communityTitle = this.communityOptions.find(row => {
						return row.value == e
					}).label
					
					this.addressCode[4] = e
				}
				this.$emit('filterArea', this.addressCode)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter-condition {
		width: 100%;
		height: 60rpx;
		margin-bottom: 20rpx;
	}
</style>