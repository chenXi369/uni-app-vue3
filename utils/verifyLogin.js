const verifyLogin = () => {
	uni.getStorage({
		key:"AccessToken",
		success: () => {
			console.log('已登录')
		},
		fail: () => {
			// 弹窗告诉用户去登录
			uni.showModal({
			  title: '温馨提示',
			  content: '此时此刻需要您登录喔~',
			  // showCancel: false,
			  confirmText: "去登录",
			  confirmColor: '#FF6D27',
			  cancelText: "再逛会",
			  success: res => {
			    if (res.confirm) {
			      uni.navigateTo({
			        url: "/pages/login/login"
			      })
			    }
			  }
			})
		}
	})
}

export default verifyLogin