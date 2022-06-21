import request from '@/utils/request'

export function getTaskNameList(query) {
  return request({
    url: '/api/asset/management/task-info/getTaskType',
    method: 'get',
    params: query
  })
}
