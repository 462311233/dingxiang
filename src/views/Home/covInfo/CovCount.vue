<template>
  <div class="count">
    <div class="content">
      <div class="title">截至 {{ date.toLocaleDateString() }} 全国数据统计</div>
      <ul v-if="data">
        <li>
          <span>较昨日-{{ data.currentConfirmedIncr }}</span>
          <div class="bold">{{ data.currentConfirmedCount }}</div>
          <b>现存确诊</b>
        </li>
        <li>
          <span>较昨日+{{ data.confirmedIncr }}</span>
          <div class="bold">{{ data.confirmedCount }}</div>
          <b>累计确诊</b>
        </li>
        <li>
          <span>较昨日+{{ data.yesterdaySuspectedCountIncr }}</span>
          <div class="bold">{{ data.suspectedCount }}</div>
          <b>累计境外输入</b>
        </li>
        <li>
          <span>较昨日+{{ data.curedIncr }}</span>
          <div class="bold">{{ data.curedCount }}</div>
          <b>累计治愈</b>
        </li>
        <li>
          <span>较昨日+{{ data.deadIncr }}</span>
          <div class="bold">{{ data.deadCount }}</div>
          <b>累计死亡</b>
        </li>
        <li>
          <span>较昨日+{{ data.seriousIncr }}</span>
          <div class="bold">{{ data.seriousCount }}</div>
          <b>现存无症状</b>
        </li>
      </ul>
      <van-skeleton title :row="3" v-else />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  name: 'CovCount',
  setup() {
    const store = useStore()
    //确诊数据
    const data = computed(() => {
      return store.state.desc
    })

    const date = computed(() => {
      return new Date(data.value.modifyTime)
    })

    return {
      data,
      date
    }
  }
}
</script>
<style scoped lang="less">
.count {
  padding-top: 0.2rem;
  background-color: #f5f5f5;
  .content {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      border-radius: 0.1rem;
      box-shadow: 0 0 5px 3px rgba(128, 128, 128, 0.142);
      li {
        width: 33%;
        text-align: center;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        span {
          font-size: 0.25rem;
        }
        .bold {
          font-weight: 800;
        }
        &:nth-child(1) .bold {
          color: rgb(228, 19, 19);
        }
        &:nth-child(2) .bold {
          color: rgb(255, 191, 0);
        }
        &:nth-child(3) .bold {
          color: rgb(43, 200, 0);
        }
        &:nth-child(4) .bold {
          color: rgb(0, 205, 209);
        }
        &:nth-child(5) .bold {
          color: rgb(51, 0, 255);
        }
        &:nth-child(6) .bold {
          color: rgb(200, 0, 255);
        }
      }
    }
  }
}
</style>
