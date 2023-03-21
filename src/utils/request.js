import axios from 'axios'
import { MessageBox } from 'element-ui'

let baseURL = process.env.VUE_APP_BASE_API
// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.success) {
      if(res.msg){
        MessageBox({
          title: '提示',
          message: res.msg,
        });
      }
      return Promise.reject('error')
    }
    else {
      return response.data
    }
  },
  error => {
    MessageBox({
      title: '提示',
      message: '数据请求出错，请重试!',
    });
    return Promise.reject(error)
  }
);

export default service
