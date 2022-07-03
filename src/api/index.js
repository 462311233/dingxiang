import axios from 'axios'
//导入接口地址
import base from './base.js'
//接口api方法
const api = {
  //国内疫情数据接口
  getCovInfo() {
    return axios.get(base.host + base.covInfo)
  }
}
export default api
