<template>
  <div class="home">
    <!-- 顶部图片 -->
    <img src="@/assets/images/1.jpg" alt="" />
    <!-- 病毒信息 -->
    <CovInfo></CovInfo>
    <!-- 统计 -->
    <CovCount></CovCount>
    <!-- 中国地图 -->
    <ChinaMap></ChinaMap>
    <!-- 世界地图 -->
    <WorldMap></WorldMap>
    <!-- 轮播图 -->
    <Swipers></Swipers>
    <!-- 底部导航 -->
    <Nav></Nav>
  </div>
</template>

<script>
import CovInfo from '@/views/Home/covInfo/CovInfo.vue'
import CovCount from '@/views/Home/covInfo/CovCount.vue'
import ChinaMap from '@/views/Map/ChinaMap.vue'
import WorldMap from '@/views/Map/WorldMap.vue'
import Swipers from '@/views/Swiper/Swipers.vue'
import api from '@/api'
import Nav from './nav.vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  components: {
    CovInfo,
    Nav,
    CovCount,
    ChinaMap,
    WorldMap,
    Swipers
  },
  setup() {
    const store = useStore()
    //发送请求获取数据存储到vuex
    api.getCovInfo().then((res) => {
      store.commit('setCovData', res.data.newslist[0].news[0])
      store.commit('setNews', res.data.newslist[0].news)
      store.commit('setDesc', res.data.newslist[0].desc)
      store.commit('setArea', res.data.newslist[0].riskarea)
    })
    api.getWorldInfo().then((res) => {
      const data = res.data.data.FAutoCountryConfirmAdd
      const arr = []
      for (const key in data) {
        let item = { name: '', value: '' }
        item.name = key
        item.value = data[key]
        arr.push(item)
      }
      store.commit('setWorldData', arr)
    })
    api.getImg().then((res) => {
      store.commit('setImgInfo', res.data.result)
    })
    return {
      name
    }
  }
}
</script>
<style scoped lang="less">
.home {
  padding-bottom: 2rem;
}
</style>
