import request from '@/utils/request'


// 老年人口动态数据库列表
export function getCivilElderlyList(data){
	return request.get('/civil-affairs/elderly/list', data)
}

// 查看老人详情
export function getCivilElderlyDetail(id){
	return request.get('/civil-affairs/elderly/' + id)
}

// 首页轮播接口
export function getBannerImg() {
  return request.post('/mall/commodity/getBannerImg')
}

// 养老机构统计信息 & 助餐数据
export function getMzInsStatistics() {
  return request.get('/organization/indexData/mzInsStatistics')
}

// 老人信息统计
export function getOlderInfoStatic(data) {
  return request.get('/organization/checkInBase/elderCount', data)
}
// 员工信息统计
export function getStaffInfoStatic(data) {
  return request.get('/organization/staff/staffCount', data)
}

// 居家社区统计
export function getLiveSocialStatic(data) {
  return request.get('/public-service/seviceOrder/getJuJiaServiceStatistics', data)
}

// 助餐信息统计
export function getMealInfoStatic(data) {
  return request.get('/public-service/seviceOrder/getJuJiaServiceStatistics', data)
}

// 家庭养老床位机构列表
export function getBedQualificationList(data) {
  return request.get('/organization/organ/bedQualificationList', data)
}

// 家庭养老床位机构详情
export function getBedQualificationDetail(id) {
  return request.get('/organization/organ/' + id)
}

// 助餐数据统计
export function getMealChartData(data) {
  return request.get('/organization/mealSubsidyOrder/mealSubsidyOrderStatistics', data)
}

// 服务人员列表接口
export function getStaffList(data) {
  return request.get('/organization/staff/list', data)
}

// 服务人员详情接口
export function getStaffDetail(id) {
  return request.get('/organization/staff/' + id)
}

// 服务人员列表接口
export function getElderlyList(data) {
  return request.get('/civil-affairs/elderly/list', data)
}

// 服务人员详情接口
export function getElderlyDetail(id) {
  return request.get('/civil-affairs/elderly/' + id)
}

// 获取服务记录及老人统计
export function getJuJiaServiceRecord(data) {
  return request.get('/public-service/seviceOrder/getJuJiaServiceRecord', data)
}

// 老人类型列表的字典
export function getDictsOlderList(type) {
  return request.get('/system/dict/data/type/' + type)
}

// 获取服务内容
export function getSubsidyTimeMeal(){
	return request.get(apiUri.subsidyTimeMeal)
}

// 获取服务商的树形数据
export function getDeptTreeList(){
	return request.get(apiUri.deptTreeList)
}
