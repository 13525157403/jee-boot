import Vue from 'vue'
import axios from 'axios'
import { Message } from 'ant-design-vue'
import { ACCESS_TOKEN } from "@/store/mutation-types"
//import store from '@/store'
//import { getToken } from '@/utils/auth'
//import { bolbfileNameStr } from '@/utils/index'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// create an axios instance
const getToken = Vue.ls.get(ACCESS_TOKEN)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 300000 // request timeout
})
service.defaults.timeout = 300000
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + getToken
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    //下载文件名
    // if (response.data.type) {
    //   if (response.headers['content-disposition']) {
    //     // const i = response.headers['content-disposition'].lastIndexOf('.')
    //     // const filename = response.headers['content-disposition'].substr(i + 1)
    //     store.commit('app/BLOB_NAME_UPADE', bolbfileNameStr(response.headers['content-disposition']))
    //   } else {
    //     store.commit('app/BLOB_NAME_UPADE', '')
    //   }
    // }
    const res = response.data
    // console.log(response,'res');
    // if the custom code is not 20000, it is judged as an error.

    if (res.code != 200 && res.code) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 1500
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(response.data)
    } else {
      return res
    }
  },
  error => {
    const { response } = error
    if (response.status == 500) {
      const dom = document.getElementsByClassName('el-message')[0]
      if (!dom) {
        Message({
          message: '与服务器断开链接' + response.status,
          type: 'error',
          duration: 2 * 1000
        })
      }
    }
    else {
      if (response.status !== 200) {
        console.log(response);
        // if (response.data.message) {
        const dom = document.getElementsByClassName('el-message')[0]
        if (!dom) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 1 * 1000
          })
        }
        // }
      }

    }
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
