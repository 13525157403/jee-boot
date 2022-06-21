import request from '@/utils/request'
// 用户画像-客群管理
// 列表查询
export function getUserGroupByPage(q, url) {
  return request({
    url: `/api/asset/management/user-group-info/getUserGroupByPage${url}`,
    method: 'get',
    params: q
  })
}
// 停止/启用
export function stopEnable(id) {
  return request({
    url: `/api/asset/management/user-group-info/modify/status/${id}`,
    method: 'post',
  })
}
// 手动更新
export function manualUpdate(data) {
  return request({
    url: `/api/asset/management/user-group-info/manualUpdate`,
    method: 'post',
    data
  })
}
// 导出
export function exportgroupinfo(data) {
  return request({
    url: `/api/asset/management/user-group-info/export`,
    method: 'get',
    responseType: 'blob',
    params: data
  })
}
//判断名称是否可用

export function nameNotRepeat(data) {
  return request({
    url: `/api/asset/management/user-group-info/nameNotRepeat`,
    method: 'get',
    params: data
  })
}
// 创建客群
export function createUserGroup(data) {
  return request({
    url: `/api/asset/management/user-group-info/createUserGroup`,
    method: 'post',
    data
  })
}
// 预估
export function estimateGroup(data, tagPredictValue) {
  return request({
    url: `/api/asset/management/user-group-info/estimate/${tagPredictValue}`,
    method: 'post',
    data
  })
}

// 用户画像-标签管理
export function selecttagTree(data) {
  return request({
    url: `/api/asset/management/tag-info/select/tagTree`,
    method: 'get',
    params: data
  })
}
// 标签管理-查询标签基础信息
export function tagBasic(data) {
  return request({
    url: `/api/asset/management/tag-info/select/tagBasic/${data}`,
    method: 'get'
  })
}
// 标签管理-查询标签人数分布
export function calculatelastData(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calculate/lastData`,
    method: 'get',
    params: data
  })
}
// 标签管理-查询标签历史详情
export function calculatehistoryData(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calculate/historyData`,
    method: 'get',
    params: data
  })
}
// 标签管理-判断标签名称是否被使用
export function tagNameUsedjudge(data) {
  return request({
    url: `/api/asset/management/tag-info/judge/tagNameUsed`,
    method: 'get',
    params: data
  })
}
// 标签管理-手动更新
export function manualUpdatelable(q) {
  return request({
    url: `/api/asset/management/tag-info/manualUpdate/${q}`,
    method: 'put'
  })
}
// 标签管理-停用/启用
export function modifylablestatus(q) {
  return request({
    url: `/api/asset/management/tag-info/modify/status/${q}`,
    method: 'put'
  })
}
// 标签管理-统计纬度一[calLat1]下拉选
export function selectcalLat1(idEvent, idCal) {
  return request({
    url: `/api/asset/management/tag-info/select/calLat1/${idCal}/${idEvent}`,
    method: 'get'
  })
}
// 标签管理-统计纬度一[calLat1]下拉选
export function tagSettingshow(tagId) {
  return request({
    url: `/api/asset/management/tag-info/select/tagSetting/${tagId}`,
    method: 'get'
  })
}
// 标签管理-下拉选-事件选择[calEvent]
export function selectCalEvent(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calEvent`,
    method: 'get',
    params: data
  })
}

//标签管理-事件纬度[calEventType]下拉选
export function selectCalEventType(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calEventType`,
    method: 'get',
    params: data

  })
}
//标签管理-统计纬度一[calLat1]下拉选
export function selectCalLat1(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calLat1`,
    method: 'get',
    params: data
  })
}
//标签管理-下拉选-统计纬度二[calLat2]
export function selectCalLat2(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calLat2`,
    method: 'get',
    params: data
  })
}

//标签管理-下拉选-统计字段name[calFieldName]
export function calFieldName(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calFieldName`,
    method: 'get',
    params: data
  })
}
//标签管理-下拉选-统计字段value[calFieldValue]
export function calFieldValue(data) {
  return request({
    url: `/api/asset/management/tag-info/select/calFieldValue`,
    method: 'get',
    params: data
  })
}




//标签管理-统计纬度一[calLat2]下拉选
export function tagSettingshow2(calEvent, createType, judgeNull) {
  return request({
    url: `/api/asset/management/tag-info/select/calLat2/${createType}/${calEvent}/${judgeNull}`,
    method: 'get'
  })
}
//标签管理-(自定义用户属性)事件选择[calEvent]-输入提示
export function selectTips(calEvent) {
  return request({
    url: `/api/asset/management/tag-info/selectTips/userAttribute/${calEvent}`,
    method: 'get'
  })
}

//标签管理-事件纬度[calEventType]下拉选
export function tagSettingshow3(calEvent, createType) {
  return request({
    url: `/api/asset/management/tag-info/select/calEventType/${createType}/${calEvent}`,
    method: 'get'
  })
}


// 标签管理-下载
export function downloadlabel(tagId) {
  return request({
    url: `/api/asset/management/tag-info/download/${tagId}`,
    method: 'get',
    responseType: 'blob'
  })
}

// 基础指标-预估
export function predictestimate(data, tagPredictValue) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/UIO/predict/${tagPredictValue}`,
    method: 'post',
    data
  })
}
// 基础指标-创建
export function createpredict(data) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/UIO`,
    method: 'post',
    data
  })
}
// 自定义-预估
export function custompredict(data, tagPredictValue) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/custom/predict/${tagPredictValue}`,
    method: 'post',
    data
  })
}

export function customtagcreate(data) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/custom`,
    method: 'post',
    data
  })
}

// 首次模特正创建
export function character(data) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/character`,
    method: 'post',
    data
  })
}
// 首末次特征-预估
export function characterpredict(data, tagPredictValue) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/character/predict/${tagPredictValue}`,
    method: 'post',
    data
  })
}

// 规则回显
export function findRuleEcho(data) {
  return request({
    url: '/api/asset/management/user-group-info/findRuleEcho',
    method: 'get',
    params: data
  })
}

// 时间偏好-创建
export function preferencecreate(data) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/preference`,
    method: 'post',
    data
  })
}
// 时间偏好-预估
export function preferencepredictevevt(data, tagPredictValue) {
  return request({
    url: `/api/asset/management/tag-info/add/tag/preference/predict/${tagPredictValue}`,
    method: 'post',
    data
  })
}

// 画像
// 画像分页数据
export function findListByPageportrait(data) {
  return request({
    url: `/api/asset/management/image_info/findListByPage`,
    method: 'get',
    params: data
  })
}
// 客群下拉框
export function findUserGroupDropDownBox() {
  return request({
    url: `/api/asset/management/image_info/findUserGroupDropDownBox`,
    method: 'get'
  })
}
//画像列表删除
export function deleteportrait(data) {
  return request({
    url: `/api/asset/management/image_info/delete`,
    method: 'delete',
    params: data,
  })
}
//标签下拉框
export function findTagDropDownBox(data) {
  return request({
    url: `/api/asset/management/image_info/findTagDropDownBox`,
    method: 'GET',
    params: data,
  })
}
//新增画像图表
export function addImageChart(data) {
  return request({
    url: `/api/asset/management/image_info/addImageChart`,
    method: 'post',
    data,
  })
}
//获取图表数据但不新增
export function getDataNoAdd(data) {
  return request({
    url: `/api/asset/management/image_info/getDataNoAdd`,
    method: 'GET',
    params: data,
  })
}
//新增画像表
export function addportrait(data) {
  return request({
    url: `/api/asset/management/image_info/add`,
    method: 'post',
    data,
  })
}

//判断客群名称是否使用
export function getUserGroupUse(data) {
  return request({
    url: `/api/asset/management/image_info/getUserGroupUse`,
    method: 'get',
    params: data,
  })
}
//判断标签是否使用
export function getImageUse(data) {
  return request({
    url: `/api/asset/management/image_info/getImageUse`,
    method: 'get',
    params: data,
  })
}

//根据ID获取图表统计数据
export function getChartStatisticsData(data) {
  return request({
    url: `/api/asset/management/image_info/getChartStatisticsData`,
    method: 'POST',
    data,
  })
}

//获取客群人数占比
export function getUserGroupPeople(data) {
  return request({
    url: `/api/asset/management/image_info/getUserGroupPeople`,
    method: 'get',
    params: data,
  })
}

//根据id查看数据
export function getChartData(data) {
  return request({
    url: `/api/asset/management/image_info/getChartData`,
    method: 'get',
    params: data,
  })
}

//事件树
export function selecttotalTree(createType, data) {
  return request({
    url: `/api/asset/management/tag-info/select/totalTree/${createType}`,
    method: 'get',
    params: data
  })
}



//目标用户群
export function targetUserGroup(data) {
  return request({
    url: `/api/asset/management/image_info/targetUserGroup`,
    method: 'get',
    params: data
  })
}


export function userAttributeInfo_msg(data) {
  return request({
    url: `/api/asset/management/tag-info/selectTips/userAttribute/${data}`,
    method: 'get',
  })
}


















