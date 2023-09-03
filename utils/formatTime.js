// 时间格式化
const  formatTime = (time) => {
	const d = new Date(time)
	const year = d.getFullYear()
	const month = handleTime(d.getMonth() + 1)
	const date = handleTime(d.getDate())
	const hours = handleTime(d.getHours())
	const min = handleTime(d.getMinutes())
	const sec = handleTime(d.getSeconds())
	return year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec
}

const handleTime = (time) => {
	return time >= 10 ? time : '0' + time
}

export default formatTime