<template>
  <div class="info">
    <!-- 最新 -->
    <div class="title">
      <b>最新消息</b>
      <div>
        <a href="javascript:;">查看更多</a>
        <img src="@/assets/images/more.png" width="13" alt="" />
      </div>
    </div>
    <div class="news">
      <div v-if="covData.summary">
        <p>{{ covData.summary }}</p>
      </div>
      <van-skeleton title :row="4" v-else />
    </div>
    <div class="title">
      <div style="line-height: 0.2rem">
        <img src="@/assets/images/hot.png" width="65" />
      </div>
      <div>
        <a href="javascript:;">查看更多</a>
        <img src="@/assets/images/more.png" width="13" alt="" />
      </div>
    </div>
    <!-- 热点 -->
    <div class="hot">
      <ul v-if="covData.summary">
        <li v-for="item in news" :key="item.id">
          <img src="@/assets/images/hot-icon.png" width="35" alt="" />
          <router-link to="/">{{ item.title }}</router-link>
          <img src="@/assets/images/right.png" width="23" alt="" />
        </li>
      </ul>
      <van-skeleton title :row="3" v-else />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'CovInfo',
  components: {},
  setup() {
    const store = useStore()
    //最新消息
    const covData = computed(() => {
      return store.state.covData
    })
    //热点消息
    const news = computed(() => {
      return store.state.news
    })

    return {
      covData,
      news
    }
  }
}
</script>
<style scoped lang="less">
.info {
  padding: 0.2rem;
  .title {
    display: flex;
    border-left: 4px solid rgb(21, 21, 185);
    padding-left: 0.2rem;
    line-height: 0.4rem;
    justify-content: space-between;
    a {
      font-size: 0.3rem;
      color: rgb(59, 95, 255);
      vertical-align: middle;
    }
  }
  .news {
    margin-bottom: 0.2rem;
  }
  p {
    margin-top: 0.2rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    color: #666;
  }
  ul {
    margin-top: 0.1rem;
  }
  li {
    position: relative;
    line-height: 0.7rem;
    color: #666;
    img {
      padding-right: 0.2rem;
      &:last-child {
        position: absolute;
        right: 0;
        top: 0.2rem;
      }
    }
  }
}
</style>
