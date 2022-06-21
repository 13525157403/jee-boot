import request from '@/utils/request'
import { axios } from '@/utils/request'
//登录
export function login(data) {
  return axios({
    url: '/api/authenticate',
    method: 'post',
    data
  })
}
//登出
export function logout() {
  return Promise.resolve({
    code: 200,
    data: 'success'
  })
}
//账号列表
export function getUserList(data, url) {
  return request({
    url: '/api/asset/management/manage/user/page' + url,
    method: 'get',
    params: data
  })
}
//角色下拉
export function getRoleList() {
  return request({
    url: '/api/asset/management/manage/roles/list',
    method: 'get',
  })
}
//修改密码
export function updatePwdAdmin(data) {
  return request({
    url: '/api/asset/management/manage/user/putUserPassword',
    method: 'put',
    data
  })
}
//新增用户
export function addUser(data) {
  return request({
    url: '/api/asset/management/manage/user/postUser',
    method: 'post',
    data
  })
}
//修改用户
export function editUser(data) {
  return request({
    url: '/api/asset/management/manage/user/putUser',
    method: 'post',
    data
  })
}
//删除用户
export function deleteUser(data) {
  return request({
    url: `/api/asset/management/manage/user/delete/${data.id}`,
    method: 'delete',
    data
  })
}




export function sysdict(data) {
  return request({
    url: `/api/asset/management/sys-dict/list/${data}`,
    method: 'get',
  })
}
export function sysdicttree(data) {
  return request({
    url: `/api/asset/management/sys-dict/tree/${data}`,
    method: 'get',
  })
}
export function sysdictlist(data) {
  return request({
    url: `/api/asset/management/sys-dict/list/${data}`,
    method: 'get',
  })
}

//获取OCRUrl
export function getOcrUrl(data) {
  return  request({
    url: `/api/asset/management/sys-dict/getOcrUrl`,
    method: 'get',
  })
}





