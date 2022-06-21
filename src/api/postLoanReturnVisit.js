import request from '@/utils/request'

/**
 * 条件查询回访任务
 * @param query
 * @returns {AxiosPromise}
 */
export function getReturnVisitTaskByPage(query, url) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/getReturnVisitTaskByPage' + url,
    method: 'get',
    params: query
  })
}
/**
 * 分页查询回访记录
 * @param query
 * @returns {AxiosPromise}
 */
export function getReturnVisitRecordPage(query, url) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/getReturnVisitResultByPage' + url,
    method: 'get',
    params: query
  })
}

/**
 * 导出回访小结记录
 * @param query
 * @returns {AxiosPromise}
 */
export function searchExport(query) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/searchExport',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

/**
 *查询回访列表
 * @param query
 * @returns {AxiosPromise}
 */
export function getReturnVisitListByPage(query, url) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/getReturnVisitListByPage' + url,
    method: 'get',
    params: query
  })
}

/**
 * 导出回访列表
 * @param query
 * @returns {AxiosPromise}
 */
export function searchExportList(query) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/searchExportList',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

/**
 * 保存回访小结
 * @param data
 * @returns {AxiosPromise}
 */
export function saveRegister(data) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/register',
    method: 'post',
    data
  })
}

/**
 * 新建回访任务
 * @param query
 * @returns {AxiosPromise}
 */
export function saveReturnVisitTask(data) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/saveReturnVisitTask',
    method: 'post',
    data
  })
}

/**
 * 修改回访任务
 * @param query
 * @returns {AxiosPromise}
 */
export function updateReturnVisitTask(data) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/updateReturnVisitTask',
    method: 'post',
    data
  })
}

/**
 * 回访任务订阅和取消
 * @param query
 * @returns {AxiosPromise}
 */
export function disableOrEnable(data) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/disableOrEnable',
    method: 'post',
    data
  })
}

/**
 * 回访任务下拉框回访原因
 * @param query
 * @returns {AxiosPromise}
 */
export function reasonForReturnVisit(query) {
  return request({
    url: '/api/asset/management/postLoanReturnVisit/reasonForReturnVisit',
    method: 'get',
    params: query
  })
}

//



