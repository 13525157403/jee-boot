import request from '@/utils/request'

/**
 * 获取个人用户列表
 * @param query
 * @returns {AxiosPromise}
 */
export function getCustomerList(query,url) {
  return request({
    url: `/api/asset/management/credit-analysis/findCustmerList${url}`,
    method: 'get',
    params: query
  })
}

// 查询客户基本信息
export function findCustomerInfo(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findCustomerInfo',
    method: 'get',
    params: { certNo: query }
  })
}

// 查询授信影像件列表数据
export function findOcrList(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findOcrList',
    method: 'get',
    params: { certNo: query }
  })
}

// 查询其他联系地址
export function analyadress(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findOtherAdress',
    method: 'get',
    params: { certNo: query }
  })
}

// 查询授信额度趋势分析数据

export function analysisfindCred(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findCreditApply',
    method: 'get',
    params: { certNo: query }
  })
}

// 提款数据分析列表
export function withdrawalAnaly(query) {
  return request({
    url: '/api/asset/management/credit-analysis/withdrawalAnalysis',
    method: 'get',
    params: { certNo: query }
  })
}
// 查询模型数据
export function findjdcreditbalancemodel(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findJdCreditBalanceModel',
    method: 'get',
    params: { certNo: query }
  })
}
// 查询授信明细列表
export function bcertNo(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findCreditApplyByCertNo',
    method: 'get',
    params: { certNo: query }
  })
}
// 查询贷后分析折线图数据接口
export function applyCertuo(query, p) {
  return request({

    url: '/api/asset/management/account-analysis/countAccountAnalysis',
    method: 'get',
    params: { certNo: query, month: p }
  })
}
// 查询还款分析数据接口
export function countTotal(query) {
  return request({
    url: '/api/asset/management/account-analysis/countTotalRepayable',
    method: 'get',
    params: { certNo: query }
  })
}
// 查询客户回访记录
export function findertu(query) {
  return request({
    url: '/api/asset/management/credit-analysis/findByCertNo',
    method: 'get',
    params: { certNo: query }
  })
}

export function qnalYsis(query) {
  return request({
    url: '/api/asset/management/account-analysis/findloanDetailByCertNo',
    method: 'get',
    params: { certNo: query }
  })
}

//
export function dowload(query) {
  return request({
    url: '/api/asset/management/credit-analysis/dowloadPhone',
    method: 'get',
    params: { certNo: query }
  })
}

// 下载
export function down() {
  return request({
    url: '/api/asset/management/credit-analysis/dowloadFile',
    method: 'get',
    responseType: 'blob',
    params: { path: '/home/ifps/data/20200614/apply/2020052510000000108536830954N.htm' }
  })
}
// 下载影像文件

export function dowloadPhone(q) {
  return request({
    url: `/api/asset/management/credit-analysis/dowloadPhone?${q}`,
    method: 'get',
    responseType: 'blob'
  })
}

// 导出个人&批量导出
export function exportExcelcust(query) {
  return request({
    url: `/api/asset/management/credit-analysis/exportExcel?${query}`,
    method: 'get',
    responseType: 'blob'
  })
}

//查询客户核销借据列表
export function findWriteOff(query) {
  return request({
    url: `/api/asset/management/account-analysis/findWriteOff`,
    method: 'get',
    params: { certNo: query }
  })
}

