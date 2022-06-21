import request from '@/utils/request'

/**
 * 获取项目名称
 * @param query
 * @returns {AxiosPromise}
 */
export function getTaskInfo(query, url) {
  return request({
    url: '/api/asset/management/task-info/getTaskInfo' + url,
    method: 'get',
    params: query
  })
}
// 获取审批列表
export function getApproveInfo(query, url) {
  return request({
    url: '/api/asset/management/approve-info/getApproveByPage' + url,
    method: 'get',
    params: query
  })
}

export function getRuleInfo(query, url) {
  return request({
    url: '/api/asset/management/rule-info/getRuleInfo' + url,
    method: 'get',
    params: query
  })
}
export function getRuleNameList(query) {
  return request({
    url: `/api/asset/management/rule-info/getRuleNameList/${query}`,
    method: 'get',
  })
}
//
export function getProject(query, url) {
  return request({
    url: '/api/asset/management/project-info/getProjectInfo' + url,
    method: 'get',
    params: query
  })
}

export function getProjectNameList(query) {
  return request({
    url: '/api/asset/management/project-info/getProjectNameList',
    method: 'get',
    params: query
  })
}

export function saveProjectInfo(data) {
  return request({
    url: '/api/asset/management/project-info/saveProjectInfo',
    method: 'post',
    data
  })
}

export function saveTaskInfo(data) {
  return request({
    url: '/api/asset/management/task-info/saveTaskInfo',
    method: 'post',
    data
  })
}

export function saveRuleInfo(data) {
  return request({
    url: '/api/asset/management/rule-info/saveRuleInfo',
    method: 'post',
    data
  })
}

export function deleteProject(data) {
  return request({
    url: '/api/asset/management/project-info/delete',
    method: 'post',
    data
  })
}

export function deleteTask(data) {
  return request({
    url: '/api/asset/management/task-info/delete',
    method: 'post',
    data
  })
}

export function deleteRule(data) {
  return request({
    url: '/api/asset/management/rule-info/delete',
    method: 'post',
    data
  })
}

export function revoke(data) {
  return request({
    url: '/api/asset/management/approve-info/revoke',
    method: 'post',
    data
  })
}

export function approveSuccessMethod(data) {
  return request({
    url: '/api/asset/management/approve-info/approveSucc',
    method: 'post',
    data
  })
}

export function approveFailedMethod(data) {
  return request({
    url: '/api/asset/management/approve-info/approveFail',
    method: 'post',
    data
  })
}

// 获取指定任务下命中规则下拉框
export function getRuleNameListByMonitorId(query) {
  return request({
    url: `/api/asset/management/rule-info/getRuleNameList/${query}`,
    method: 'get'
  })
}


//新增
export function projectInfoAdd(data) {
  return request({
    url: `/api/asset/management/project-info/add`,
    method: 'post',
    data
  })
}
export function projectInfoUpdate(data) {
  return request({
    url: `/api/asset/management/project-info/update`,
    method: 'post',
    data
  })
}


//
export function ruleInfoAdd(data) {
  return request({
    url: `/api/asset/management/rule-info/add`,
    method: 'post',
    data
  })
}
export function ruleInfoUpdate(data) {
  return request({
    url: `/api/asset/management/rule-info/update`,
    method: 'post',
    data
  })
}
//
export function taskInfoAdd(data) {
  return request({
    url: `/api/asset/management/task-info/add`,
    method: 'post',
    data
  })
}
export function taskInfoUpdate(data) {
  return request({
    url: `/api/asset/management/task-info/update`,
    method: 'post',
    data
  })
}





