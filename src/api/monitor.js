import request from '@/utils/request'

export function getMonitorDetail(data, url) {
  return request({
    url: '/api/asset/management/taskManagementDetailInfo/getMonitorDetail' + url,
    method: 'get',
    params: data
  })
}

export function pageAllTaskInfo(query, url) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getMonitorManagementByPage' + url,
    method: 'get',
    params: query
  })
}
//任务下拉框
export function getAllTask(query) {
  return request({
    url: '/api/asset/management/task-info/getTaskALL',
    method: 'get',
    params: query
  })
}

export function getRuleListByTaskId(query, url) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getRuleListByTaskId' + url,
    method: 'get',
    params: query
  })
}

export function addMonitorInfo(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/addTaskManagementInfo',
    method: 'post',
    data
  })
}

export function dy(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/TaskManagementDy',
    method: 'get',
    params: data
  })
}

export function getMonitorRules(query) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getTaskManagementId',
    method: 'get',
    params: query
  })
}

export function edit(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/edit',
    method: 'post',
    data
  })
}

export function viewListByPage(data, url) {
  return request({
    url: '/api/asset/management/taskManagementDetailInfo/viewListByPage' + url,
    method: 'get',
    params: data
  })
}

export function batchExport(data, url) {
  return request({
    url: '/api/asset/management/taskManagementDetailInfo/batchExport' + url,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

export function searchExport(data, url) {
  return request({
    url: '/api/asset/management/taskManagementDetailInfo/searchExport' + url,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}

export function statistics(data) {
  return request({
    url: '/api/asset/management/taskManagementDetailInfo/statistics',
    method: 'get',
    params: data
  })
}

// 风险标签-人数数据卡
export function Riskpeople(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/dataCard/people/${q}`,
    method: 'get'
  })
}
// 风险标签-标签数据卡
export function riskLabelTag(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/dataCard/tag/${q}`,
    method: 'get'
  })
}

// 风险标签-雷达图及占比饼图
export function riskLabelPiecart(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/pieChart/${q}`,
    method: 'get'
  })
}

//回销数据卡-人数
export function writeoffpeople(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/WO/dataCard/people/${q}`,
    method: 'get'
  })
}
// 回销数据卡
export function writeoffloan(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/WO/dataCard/loan/${q}`,
    method: 'get'
  })
}

//统计图表-通用-人数数据卡-详情页分页列表

export function writeofflisipople(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/WO/dataCard/people/detail/page`,
    method: 'get',
    params: q
  })
}


//统计图表-核销客户-放款数据卡-详情页分页列表
export function writeoffloanList(q, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/WO/dataCard/loan/detail/page${url}`,
    method: 'get',
    params: q
  })
}

//统计图表-核销客户-放款数据卡-详情页分页列表导出
export function writeoffloanExport(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/stats/WO/dataCard/loan/detail/export',
    method: 'get',
    responseType: 'blob',
    params: data
  })
}



//统计图表-通用-人数数据卡-详情页分页列表导出
export function writeoffpopleExport(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/stats/WO/dataCard/people/detail/export',
    method: 'get',
    responseType: 'blob',
    params: data
  })
}


//统计图表-核销客户-核销-授信-金额统计
export function writeOffCreditAmountStatistics(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/writeOffCreditAmountStatistics',
    method: 'get',
    params: data
  })
}
//统计图表-核销客户-核销-授信-间隔周期统计
export function writeOffCreditIntervalStatistics(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/writeOffCreditIntervalStatistics',
    method: 'get',
    params: data
  })
}
//统计图表-核销客户-核销-放款-金额统计
export function writeOffLoanAmountStatistics(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/writeOffLoanAmountStatistics',
    method: 'get',
    params: data
  })
}
//统计图表-核销客户-核销-放款-间隔周期统计
export function writeOffLoanIntervalStatistics(data) {
  return request({
    url: '/api/asset/management/monitor-data-info/writeOffLoanIntervalStatistics',
    method: 'get',
    params: data
  })
}
