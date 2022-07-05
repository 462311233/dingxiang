<template>
  <router-link to="/"> <div class="return">返回首页</div></router-link>
</template>

<script>
export default {
  name: 'Back'
}
</script>
<style scoped lang="less">
.return {
  position: fixed;
  top: 0.5rem;
  right: 0.3rem;
  padding: 0.1rem 0.3rem;
  background-color: rgba(51, 51, 51, 0.381);
  color: #fff;
  font-size: 0.25rem;
  border-radius: 00.2rem;
}
</style>
