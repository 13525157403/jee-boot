import request from '@/utils/request'

export function getAlertInfoDetailsList(query) {
  return request({
    url: '/api/asset/management/alertInfoDetails/list',
    method: 'get',
    params: query
  })
}

export function getAlertName(query) {
  return request({
    url: '/api/asset/management/alertInfo/getAlertName',
    method: 'get',
    params: query
  })
}

export function searchExport(query) {
  return request({
    url: '/api/asset/management/alertInfoDetails/searchExport',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

// 地址评分-人数数据卡
export function getPeople(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/dataCard/people/${query}`,
    method: 'get'
  })
}
// 地址评分-评分数据卡
export function monitorId(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/dataCard/score/${query}`,
    method: 'get'
  })
}
// 地址评分-人数数据卡-详情页分页列表
// 地址评分-评分数据卡-详情页分页列表
export function addressScoreDataCardDetails(query, url, sort) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/dataCard/${url}/detail/page${sort}`,
    method: 'get',
    params: query
  })
}
// 地址评分-人数数据卡-详情页分页列表导出
// 地址评分-评分数据卡-详情页分页列表导出
export function addressScoreDataCardDownExport(query, sort) {
  return request({
    url: `/api/asset/management/monitor-data-info/dataCard/score/detail/export${sort}`,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

// 地址评分-地图(左)中国地图各省评分
export function addressMap(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/address/map/${query}`,
    method: 'get'
  })
}
// 地址评分-地图(右)地区排名
export function addressRank(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/address/rank/${query}`,
    method: 'get'
  })
}
// 地址评分-多地址
export function addressMultipl(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/address/multiple/${query}`,
    method: 'get'
  })
}
// 地址评分-地址变更
export function addressMmanagement(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/address/change/${query}`,
    method: 'get'
  })
}
// 地址评分-重点地区提示
export function addressFocalPoint(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/area/focalPoint`,
    method: 'get',
    params: query
  })
}
// // 地址评分-重点地区提示-详情列表
// export function addressScoreFocalPointDetails(query) {
//   return request({
//     url: `/api/asset/management/monitor-data-info/stats/AS/area/focalPoint/detail`,
//     method: 'get',
//     params: query
//   })
// }
// 地址评分-快速增长地区
export function addressScoreRapidGrowth(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/area/rapidGrowth`,
    method: 'get',
    params: query
  })
}
// // 地址评分-快速增长地区-详情列表
// export function addressScoreRapidGrowthDetails(query) {
//   return request({
//     url: `/api/asset/management/monitor-data-info/stats/AS/area/rapidGrowth/detail`,
//     method: 'get',
//     params: query
//   })
// }




// 地址评分-重点地区提示-详情页分页列表导出
// 地址评分-快速增长地区-详情页分页列表导出
export function DownExport(query, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/area/${url}/export`,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

//地址评分地区详情页
export function addressScoreDetails(query, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/AS/area/${url}/detail`,
    method: 'get',
    params: query
  })
}






// 风险标签-人数数据卡-详情页分页列表
// 风险标签-评分数据卡-详情页分页列表
export function riskLabelDataCardDetails(query, url, sort) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/dataCard/${url}/detail/page${sort}`,
    method: 'get',
    params: query
  })
}





// 风险标签-人数数据卡-详情页分页列表导出
// 风险标签-评分数据卡-详情页分页列表导出
export function riskLabelDataCardDownExport(query, url, sort) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/dataCard/${url}/detail/export${sort}`,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}



// 反欺诈-人数数据卡
// 反欺诈-评分数据卡
export function ManageMent(url, q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/dataCard/${url}/${q}`,
    method: 'get',
  })
}
// 反欺诈-评分人数
export function numberOfRatings(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/chart/numberOfRatings`,
    method: 'get',
    params: query
  })
}
// 风险标签-监控人数
export function MonitorNum(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/RT/monitorNum`,
    method: 'get',
    params: query
  })
}
//

// 反欺诈-气泡图
export function blecart(q) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/chart/bubble/${q}`,
    method: 'get',
  })
}

// 反欺诈评分-累计监控人数
export function MonitoringPerson(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/dataCard/people/detail/page`,
    method: 'get',
    params: query
  })
}

// 反欺诈评分-累计监控人数导出
export function MonitoringPersonExport(query) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/dataCard/people/detail/export`,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

// 反欺诈评分-累计评分数据
export function FraudDataScore(query, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/dataCard/score/detail/page${url}`,
    method: 'get',
    params: query
  })
}

// 反欺诈评分-累计评分数据导出
export function FraudDataScoreExport(query, url) {
  return request({
    url: `/api/asset/management/monitor-data-info/stats/TF/dataCard/score/detail/export${url}`,
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

