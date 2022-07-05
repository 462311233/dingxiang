<template>
  <div class="wuzi">
    <div class="bg"></div>
    <!-- tabs -->
    <div class="content">
      <van-tabs v-model:active="active" animated>
        <van-tab v-for="index in arr" :title="index.title" :key="index">
          <img :src="index.img" alt="" />
        </van-tab>
      </van-tabs>
    </div>
    <Back></Back>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Back from '@/components/Back.vue'

import img1 from '@/assets/images/jiujing.png'
import img2 from '@/assets/images/kouzhao.png'
export default {
  name: 'Wuzi',
  components: {
    Back
  },
  setup() {
    const active = ref(0)
    const arr = ref([
      {
        img: img1,
        title: '消毒剂'
      },
      {
        img: img2,
        title: '口罩'
      }
    ])
    return {
      arr,
      active
    }
  }
}
</script>
<style scoped lang="less">
.wuzi {
  background: rgb(51, 67, 254);
  // 高度自适应
  padding-bottom: 1cm;
}
.bg {
  height: 2.6rem;
  background: url('../../assets/images/wuzi.png') no-repeat;
  background-size: cover;
  padding-top: 2.6rem;
}
.content {
  margin: 0.2rem;
  padding: 0.2rem;
  min-height: 4rem;
}
</style>
