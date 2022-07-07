import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
const store = createStore({
  state() {
    return {
      //最新消息
      covData: {},
      //热点消息
      news: {},
      //每日增长
      desc: {},
      //区域信息
      area: {},
      chinaData: [],
      worldData: [],
      imgInfo: [],
      citys: {}
    }
  },
  mutations: {
    setCovData(state, data) {
      state.covData = data
    },
    setNews(state, data) {
      state.news = data
    },
    setDesc(state, data) {
      state.desc = data
    },
    setArea(state, data) {
      state.area = data
    },
    setChinaData(state, data) {
      state.ChinaData = data
    },
    setWorldData(state, data) {
      state.worldData = data
    },
    setImgInfo(state, data) {
      state.imgInfo = data
    },
    setCitys(state, data) {
      state.citys = data
    }
  },
  actions: {},
  plugins: [
    createPersistedstate({
      key: 'dxData'
    })
  ]
})
export default store
