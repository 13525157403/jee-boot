import request from '@/utils/request'
//资产净额
export function changeInNetAssets(data) {
  return request({
    url: '/api/asset/management/home-page/charts/changeInNetAssets',
    params: data
  })
}
//放款-收款-还款-存量
export function creditDataCard(data) {
  return request({
    url: '/api/asset/management/home-page/charts/creditDataCard',
    params: data
  })
}

export function loanDataCard(data) {
  return request({
    url: '/api/asset/management/home-page/charts/loanDataCard',
    params: data
  })
}

export function repaymentDataCard(data) {
  return request({
    url: '/api/asset/management/home-page/charts/repaymentDataCard',
    params: data
  })
}

export function stockDataCard(data) {
  return request({
    url: '/api/asset/management/home-page/charts/stockDataCard',
    params: data
  })
}
export function defectRateTrend(data) {
  return request({
    url: '/api/asset/management/home-page/charts/defectRateTrend',
    params: data
  })
}
export function vintage(data) {
  return request({
    url: '/api/asset/management/home-page/charts/vintage',
    params: data
  })
}
export function fiveLevelClassificationDistribution(data) {
  return request({
    url: '/api/asset/management/home-page/charts/fiveLevelClassificationDistribution',
    params: data
  })
}
export function yieldData(data) {
  return request({
    url: '/api/asset/management/home-page/charts/yield',
    params: data
  })
}
export function ovdRegion(data) {
  return request({
    url: '/api/asset/management/home-page/charts/ovdRegion',
    params: data
  })
}
export function healthScore(data) {
  return request({
    url: '/api/asset/management/home-page/charts/healthScore',
    params:data
  })
}





export function allRepaymentAmt() {
  return request({
    url: '/api/asset/management/home-page/charts/repaymentDataCard/allRepaymentAmt'
  })
}
export function settleData() {
  return request({
    url: 'api/asset/management/home-page/charts/repaymentDataCard/settleData'
  })
}
export function repaymentPeopleNum() {
  return request({
    url: '/api/asset/management/home-page/charts/repaymentDataCard/repaymentPeopleNum'
  })
}










