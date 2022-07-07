import axios from 'axios'
//导入接口地址
import base from './base.js'
//接口api方法
const api = {
  //国内疫情数据接口
  getCovInfo() {
    return axios.get(base.host + base.covInfo)
  },
  getChinaInfo() {
    return axios.get(base.cnHost)
  },
  getWorldInfo() {
    return axios.get(base.wHost)
  },
  getImg() {
    return axios.get(base.img)
  },
  getCitys(params) {
    return axios.get(base.citys, { params })
  },
  getTravel() {
    return axios.get(base.travel)
  },
  getCode() {
    return axios.get(base.cityCode)
  }
}
export default api
