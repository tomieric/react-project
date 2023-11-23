import axios from 'axios'
import { Toast } from 'antd-mobile'

const requst = axios.create({
  baseURL: import.meta.env.BASE_URL
})

requst.interceptors.response.use((response) => {
  return response
}, err => {
  Toast.show({
    icon: 'fail',
    content: err.response.data.message || '内部错误'
  })
  return Promise.reject(err)
})

export { requst }