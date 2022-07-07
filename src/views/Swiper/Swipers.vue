<template>
  <div class="title"><b>全国疫情趋势图</b></div>
  <div class="bg">
    <ul class="carousel-body">
      <!-- 内容区域 -->
      <li
        class="carousel-item"
        :class="{ fade: index === num }"
        v-for="(item, index) in data"
        :key="index"
      >
        <!-- 图片 -->
        <img :src="item.image" />
      </li>
    </ul>

    <ul>
      <div
        v-for="(item, index) in arr"
        :key="index"
        :class="{ active: index === num }"
        @click="changeNum(index)"
      >
        {{ item }}
      </div>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
// 按需导入swiper组件
export default {
  name: 'Swipers',
  components: {},
  setup() {
    //获取轮播图片数据
    const store = useStore()
    const data = store.state.imgInfo
    //轮播分页器
    const arr = []
    data.forEach((item) => {
      arr.push(item.title)
    })
    //轮播索引
    const num = ref(0)
    const changeNum = (index) => {
      num.value = index
    }

    return {
      data,
      arr,
      num,
      changeNum
    }
  }
}
</script>
<style scoped lang="less">
.title {
  margin-left: 0.2rem;
  border-left: 4px solid rgb(21, 21, 185);
  padding-left: 0.2rem;
  line-height: 0.4rem;
}
.bg {
  padding: 0.2rem;
  .carousel-body {
    width: 7rem;
    height: 4rem;
    position: relative;
    overflow: hidden;
    li {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        max-width: 7rem;
      }
    }
  }
}
ul:nth-child(2) {
  display: flex;
  div {
    flex: 1;
    margin: 0 0.1rem;
    text-align: center;
    padding: 0.1rem;
    border-radius: 0.1rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    background-color: #eee;
    color: #666;
  }
  .active {
    background-color: rgb(188, 217, 250);
    color: blue;
  }
}
</style>
