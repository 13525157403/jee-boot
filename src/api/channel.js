
import request from '@/utils/request'
export function addChannel(query) {
  return request({
    url: '/api/asset/management/addChannel',
    method: 'get',
    params: query
  })
}
export function pageChannelInfo(query) {
  return request({
    url: '/api/asset/management/pageChannelInfo',
    method: 'get',
    params: query
  })
}
export function getChannelInfo(query) {
  return request({
    url: '/getChannelInfo',
    method: 'get',
    params: query
  })
}
export function getChannelIndicator(query) {
  return request({
    url: '/info/getChannelIndicator',
    method: 'get',
    params: query
  })
}
export function listTask(query) {
  return request({
    url: '/listTask',
    method: 'get',
    params: query
  })
}
export function getChannelIndicatorByDayRange(query) {
  return request({
    url: '/info/getChannelIndicatorByDayRange',
    method: 'get',
    params: query
  })
}
export function listChannelWarnRange(query) {
  return request({
    url: '/info/listChannelWarnRange',
    method: 'get',
    params: query
  })
}
export function listTaskIndicator(query) {
  return request({
    url: '/info/listTaskIndicator',
    method: 'get',
    params: query
  })
}
export function pageAllTaskInfo(query) {
  return request({
    url: '/pageAllTaskInfo',
    method: 'get',
    params: query
  })
}
export function getAllChannel(query) {
  return request({
    url: '/getAllChannel',
    method: 'get',
    params: query
  })
}
export function pageNearEndTaskInfo(query) {
  return request({
    url: '/pageNearEndTaskInfo',
    method: 'get',
    params: query
  })
}
export function deleteTask(query) {
  return request({
    url: '/deleteTask',
    method: 'get',
    params: query
  })
}
export function renewTask(query) {
  return request({
    url: '/renewTask',
    method: 'get',
    params: query
  })
}
export function reMonitor(query) {
  return request({
    url: '/reMonitor',
    method: 'get',
    params: query
  })
}
export function cancelRenewal(query) {
  return request({
    url: '/cancelRenewal',
    method: 'get',
    params: query
  })
}
export function cancelMonitor(query) {
  return request({
    url: '/cancelMonitor',
    method: 'get',
    params: query
  })
}
export function addNoticeInfo(query) {
  return request({
    url: '/addNoticeInfo',
    method: 'get',
    params: query
  })
}
export function addFile(data) {
  return request({
    url: '/addFile',
    method: 'post',
    data
  })
}
