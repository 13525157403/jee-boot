import request from '@/utils/request'

/**
 * 获取项目下拉宽
 * @param query
 * @returns {AxiosPromise}
 */
export function getAllProject(query) {
  return request({
    url: '/api/asset/management/project-info/getProjectNameList',
    method: 'get',
    params: query
  })
}

// 命中规则的
export function getproject(q) {
  return request({
    url: `/api/asset/management/rule-info/getRuleNameList/${q}`,
    method: 'get'
  })
}

