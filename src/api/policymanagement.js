import request from '@/utils/request'
// 模型配置===============================================
// 上传模型文件
export function uploadFilesReq(data) {
  return request({
    url: '/api/asset/management/model-info/uploadFile',
    method: 'post',
    data
  })
}
// 查询模型配置表分页数据-模型
export function findListByPage(data, url) {
  const r = url && url !== true ? url : ''
  return request({
    url: '/api/asset/management/model-info/findListByPage' + r,
    method: 'get',
    params: data
  })
}
// 根据ID删除
export function findListByPagedelete(data) {
  return request({
    url: '/api/asset/management/model-info/delete',
    method: 'delete',
    params: data
  })
}
// 新增模型配置表
export function addmodel(data) {
  return request({
    url: '/api/asset/management/model-info/add',
    method: 'post',
    data
  })
}
// 查询模型参数表分页数据
export function parameterfindListByPage(data, url) {
  const r = url && url !== true ? url : ''
  return request({
    url: '/api/asset/management/model-parameter/findListByPage' + r,
    method: 'get',
    params: data
  })
}
// 新增模型参数表
export function addparameter(data) {
  return request({
    url: '/api/asset/management/model-parameter/add',
    method: 'post',
    data
  })
}
// 查询模型规则明细表分页数据-规则
export function rulefindListByPage(data, url) {
  const r = url && url !== true ? url : ''
  return request({
    url: '/api/asset/management/model-rule-info/findListByPage' + r,
    method: 'get',
    params: data
  })
}
// 新建规则
export function addrule(data) {
  return request({
    url: '/api/asset/management/model-rule-info/add',
    method: 'post',
    data
  })
}
// 删除规则
export function deleterule(data) {
  return request({
    url: '/api/asset/management/model-rule-info/delete',
    method: 'delete',
    params: data
  })
}
// 主动策略========================================

export function strategyfindListByPage(data, url) {
  return request({
    url: '/api/asset/management/strategy-info/findListByPage' + url,
    method: 'get',
    params: data
  })
}
// 更新策略信息表
export function updateIsEnable(data) {
  return request({
    url: '/api/asset/management/strategy-info/updateIsEnable',
    method: 'put',
    params: data
  })
}
// 新增策略信息表
export function addstrategy(data) {
  return request({
    url: '/api/asset/management/strategy-info/add',
    method: 'post',
    data
  })
}
// 查询主动策略执行结果明细表分页数据
export function findRecordListByPage(data, url) {
  return request({
    url: '/api/asset/management/strategy-info/findRecordListByPage' + url,
    method: 'get',
    params: data
  })
}
// 根据策略id查询策略执行批次号集合
export function findByStrategyId(data) {
  return request({
    url: '/api/asset/management/strategy-execution-record/findByStrategyId',
    method: 'get',
    params: { strategyId: data }
  })
}
// 规则通过客户比例比较
export function findRuleRecordByStrategyId(data) {
  return request({
    url: '/api/asset/management/strategy-info/findRuleRecordByStrategyId',
    method: 'get',
    params: data
  })
}
// 贷中评分模型评分分布比较
export function findModelRecordByStrategyId(data) {
  return request({
    url: '/api/asset/management/strategy-info/findModelRecordByStrategyId',
    method: 'get',
    params: data
  })
}
// 导出策略执行结果明细
export function searchExport(data,url) {
  return request({
    url: '/api/asset/management/strategy-info/searchExport'+url,
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
// 提额后额度使用率比较
export function findRecordByStrategyId(data) {
  return request({
    url: '/api/asset/management/strategy-info/findRecordByStrategyId',
    method: 'get',
    params: data
  })
}

// id查询模型配置表
export function findById(data) {
  return request({
    url: '/api/asset/management/model-info/findById',
    method: 'get',
    params: data
  })
}
// 更新模型规则明细表
export function findByIdrulesupdate(data) {
  return request({
    url: '/api/asset/management/model-rule-info/update',
    method: 'put',
    data
  })
}

