import request from '@/utils/request'
/**
 * 获取预警管理
 * @param query
 * @returns {AxiosPromise}
 */
export function getCumulativeMonitoringNumber(query) {
  return request({
    url: '/api/asset/management/monitor-data-info/stats/MF/dataCard/people/detail/page',
    method: 'get',
    params: query
  })
}
//人数导出
export function exportSuspiciousNumber(query) {
  return request({
    url: '/api/asset/management/monitor-data-info/stats/MF/dataCard/people/detail/export',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}
//交易
export function getDubiousTransactions(query, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/dataCard/transaction/detail/page${url}`,
    method: 'get',
    params: query
  })
}
//交易导出
export function exportSuspiciousTransaction(query, url) {
  return request({
    url: '/api/asset/management/monitor-data-info/stats/MF/dataCard/transaction/detail/export' + url,
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

// 资金流向页已使用
export function countTodayMonitored(query) {
  return request({
    url: '/api/asset/management/dubiousTransactions/countTodayMonitored',
    method: 'get',
    params: query
  })
}
// 资金流向页已使用
export function countPersonsMonitored(query) {
  return request({
    url: '/api/asset/management/dubiousTransactions/countPersonsMonitored',
    method: 'get',
    params: query
  })
}
// 资金流向页已使用
export function countTransactionMerchantName(query) {
  return request({
    url: '/api/asset/management/dubiousTransactions/countTransactionMerchantName',
    method: 'get',
    params: query
  })
}
// 资金流向页已使用
export function countTransactionTime(query) {
  return request({
    url: '/api/asset/management/dubiousTransactions/countTransactionTime',
    method: 'get',
    params: query
  })
}








// 资金流向人数数据卡
export function mentpeople(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/dataCard/people/${q}`,
    method: 'get'
  })
}

// 标签数据卡
export function riskLabel(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/dataCard/transaction/${q}`,
    method: 'get'
  })
}
// 统计视图柱状图1
export function transaction(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/numberOfAllPeople`,
    method: 'get',
    params: q
  })
}
// 资金流向-监控人群分布
export function ruleType(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/ruleType/${q}`,
    method: 'get'
  })
}
// 交易类别
export function transactionType(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/transactionType/${q}`,
    method: 'get'
  })
}
// 金额分布
export function amtDistribution(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/amtDistribution/${q}`,
    method: 'get'
  })
}

// 交易人数
export function numberOfTransactions(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/numberOfTransactions`,
    method: 'get',
    params: q
  })
}
// 资金流向-交易笔数
export function merchantName(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/MF/chart/numberOfMerchantName`,
    method: 'get',
    params: q
  })
}


export function amtLevel(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/common/select/amtLevel`,
    method: 'get',
  })
}


//金额档位下拉框
export function amtLevlistamtLevelel(q) {
  return request({
    url: `/api/asset/management/sys-dict/list/amtLevel`,
    method: 'get',
  })
}



