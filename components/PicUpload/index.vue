<!-- title: 图片上传组件
time: 07/01
author： lcc -->
<template>
	<u-upload
		ref="upload"
		:action="action" :file-list="fileList" 
	>
		<image class="photograph-icon" src="../../static/image/upload-icon.png" mode=""></image>
	</u-upload>
</template>

<script>
	export default {
		props: {
			apiUrl: {
				type: String,
				default: ''
			},
			picWidth: {
				type: String,
				default: '210rpx'
			},
			picHeight: {
				type: String,
				default: '210rpx'
			}
		},
		data() {
			return {
				// 演示地址，请勿直接使用
				action: '',
				fileList: [
					{
						url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
					}
				]
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: apiUrl + '/org/qindaApp/img/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(JSON.parse(res.data).path)
							}, 1000)
						}
					})
				})
			}
		}
	}
</script>

<style scoped>
	.photograph-icon {
		width: 210rpx;
		height: 210rpx;
	}
</style>