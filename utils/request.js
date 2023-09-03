import { ref } from 'vue'

const request = (url, method, data) => {
	let header = {}
	// 在发送请求之前做些什么(例如：添加token到请求头)
	const token = ref(uni.getStorageSync('AccessToken'))
	if (token.value) {
		header['Authorization'] = `Bearer ${token.value}`
	}
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '正在加载'
		})
		uni.request({
			url: 'http://120.55.163.4/test-api' + url,
			method,
			data,
			header
		}).then(res => {
			console.log(res)
			if(res.statusCode === 200) {
				resolve(res.data)
				uni.hideLoading()
			} else {
				reject(res)
			}
		}).catch(error => {
			reject(error)
		})
	})
}

export default request