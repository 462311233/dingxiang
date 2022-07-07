<template>
  <div class="bg">
    <h2>城市选择</h2>
    <van-index-bar highlight-color="skyblue" :index-list="indexList">
      <template v-for="(item, property) in list" :key="property">
        <van-index-anchor :index="property" />
        <van-cell
          v-for="ele in item"
          :key="ele.id"
          :title="ele.name"
          @click="goto"
        />
      </template>
    </van-index-bar>
  </div>

  <Back></Back>
</template>

<script>
import api from '@/api'
import Back from '@/components/Back.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  name: 'selectCity',
  components: {
    Back
  },
  setup() {
    const router = useRouter()
    //索引列表
    const indexList = ref([])
    //城市列表
    const list = ref({})
    api.getCode().then((res) => {
      list.value = res.data.result.citylist
      indexList.value = Object.keys(res.data.result.citylist)
    })
    const name = ref('')
    //点击跳转
    const goto = (event) => {
      router.push('/')
      name.value = event.target.innerText
    }
    return {
      list,
      indexList,
      goto
    }
  }
}
</script>
<style scoped lang="less">
.bg {
  background-color: #f5f5f5;
  h2 {
    margin-left: 0.2rem;
    margin-top: 0;
    padding-top: 0.45rem;
  }
}
</style>
