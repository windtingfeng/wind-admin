import axios from 'axios'
import {ElMessage} from 'element-plus'

const service = axios.create({
    timeout: 5000,
  });

  service.interceptors.request.use(config => {
      return config
  }, error => {
      Promise.reject(error)
  })

  service.interceptors.response.use(response => {
    const res = response.data
    if(res.code !== 200) {
        ElMessage({
            message: res.data.msg,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject('error')
    }else {
        return response.data
    }
  })

  export default service