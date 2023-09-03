import request from '@/utils/request'

// api地址
const api = {
  login: '/auth/login',
  userInfo: '/system/user/getInfo',
  loginMpWx: 'passport/loginMpWx',
  loginMpWxMobile: 'passport/loginMpWxMobile',
  logOut: '/auth/logout',
  register: '/system/portal/addUser'
}

// 用户登录(手机号+验证码)
export function login(data) {
  return request(api.login, 'POST', data)
}

// 注册
export function toRegister(data) {
	return request(api.register, 'POST', data)
}

// 登录完获取用户信息
export function getUserInfo(data) {
  return request(api.userInfo, 'GET', data)
}

// 微信小程序快捷登录(获取微信用户基本信息)
export function loginMpWx(data, option) {
  return request.post(api.loginMpWx, data, option)
}

// 微信小程序快捷登录(授权手机号)
export function loginMpWxMobile(data, option) {
  return request.post(api.loginMpWxMobile, data, option)
}

// 退出登录
export function logOut(data) {
  return request(api.logOut, 'POST', data)
}

// 获取员工信息
export function getStaff(data) {
  return request('/organization/staff/list', 'GET', data)
} 
