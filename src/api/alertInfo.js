import request from '@/utils/request'

/**
 * 获取预警管理
 * @param query
 * @returns {AxiosPromise}
 */
export function getAlertList(query, url) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getAlertManagementByPage' + url,
    method: 'get',
    params: query
  })
}

/**
 * 获取项目下拉宽
 * @param query
 * @returns {AxiosPromise}
 */

export function selectAlertId(query) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getTaskManagementId',
    method: 'get',
    params: query
  })
}

export function dy(query) {
  return request({
    url: '/api/asset/management/taskManagementInfo/TaskManagementDy',
    method: 'get',
    params: query
  })
}

export function saveAlert(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/addTaskManagementInfo',
    method: 'post',
    data
  })
}
export function updateRule(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/edit',
    method: 'post',
    data
  })
}
export function getTaskRuleList(data) {
  return request({
    url: '/api/asset/management/taskManagementInfo/getRuleListByTaskId',
    method: 'get',
    params: data
  })
}
//预警详情
// export function getCountType(data) {
//   return request({
//     url: '/api/asset/management/alertInfoDetails/countType',
//     method: 'get',
//     params: data
//   })
// }
//预警详情
// export function getAlertScene(data) {
//   return request({
//     url: '/api/asset/management/alertInfoDetails/alertScene',
//     method: 'get',
//     params: data
//   })
// }



//预警详情页
export function statsmain(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/stats/main',
    method: 'get',
    params: data
  })
}
//预警管理-预警重复率
export function repetitionRate() {
  return request({
    url: '/api/asset/management/alertInfoDetails/stats/repetitionRate',
    method: 'get',
  })
}
//预警处理-列表
export function getDealWithByPage(data, url) {
  return request({
    url: '/api/asset/management/alertInfoDetails/getDealWithByPage' + url,
    method: 'get',
    params: data,
  })
}

//-预警处理-导出
export function alertInfoDetailsexport(data, url) {
  return request({
    url: '/api/asset/management/alertInfoDetails/export' + url,
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
//预警处理-导入
export function alertInfoDetailsimportExcel(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/importExcel',
    method: 'post',
    data,
  })
}
//预警管理-预警处理-批量处理
export function batchDealWith(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/batchDealWith?' + data,
    method: 'post',
  })
}
//预警管理-预警处理-单独处理
export function alertInfoDetailsdealWith(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/dealWith',
    method: 'POST',
    data
  })
}



//预警管理-预警分析-预警自动处理数据卡
export function alertAutomaticProcessDataCard() {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertAutomaticProcessDataCard',
    method: 'get',
  })
}
//预警管理-预警分析-预警数据卡
export function alertDataCard() {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertDataCard',
    method: 'get',
  })
}
//预警管理-预警分析-预警人工处理数据卡
export function alertManualProcessDataCard() {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertManualProcessDataCard',
    method: 'get',
  })
}
//预警管理-预警分析-预警统计图表
export function alertStatisticsChart(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertStatisticsChart',
    method: 'get',
    params: data
  })
}


//预警管理-预警分析-预警项目排名
export function alertProjectRank(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertProjectRank',
    method: 'get',
    params: data
  })
}
export function alertTaskRank(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/alertTaskRank',
    method: 'get',
    params: data
  })
}
//预警对象下拉框
export function getAlertTarget(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/getAlertTarget',
    method: 'get',
    params: data
  })
}

//预警管理-预警处理-查看
export function getPeopleData(data) {
  return request({
    url: '/api/asset/management/alertInfoDetails/getPeopleData',
    method: 'get',
    params: data
  })
}






