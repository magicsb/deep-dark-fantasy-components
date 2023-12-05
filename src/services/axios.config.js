import axios from "axios";
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const mockUrl = 'https://mock.presstime.cn/mock/6566dbf409896a27b7213797/example'

const baseUrl = isDev ? mockUrl : mockUrl

const service = axios.create({ baseURL: baseUrl })

// 请求拦截
service.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || '';
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Authorization': token
  }

  return config;
}, (err) => err)

// 响应拦截
service.interceptors.response.use((response) => {
  if (response.code) {
    switch (response.code) {
      case 200:
        return response.data;
      case 401:
        message.err('未登录！')
        break;
      case 403:
        message.err('token过期！')
        break;
      default:
        message.error(response.data.msg)
    }
  } else {
    return response
  }
})

export const get = (url = '', params = {}, config = {}) => {
  return service.get(url, {
    params,
    ...config
  })
}

export const post = (url = '', params = {}, config = {}) => {
  return service.post(url, params, config)
}

export default service;