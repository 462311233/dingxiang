<template>
  <div class="nav">
    <div>
      <router-link to="/area">
        <img src="@/assets/images/1.png" alt="" />
        <div>风险地区</div>
      </router-link>
    </div>
    <div>
      <router-link to="/hesuan">
        <img src="@/assets/images/2.png" alt="" />
        <div>核酸检测</div>
      </router-link>
    </div>
    <div>
      <router-link to="/wuzi">
        <img src="@/assets/images/3.png" alt="" />
        <div>防疫物资</div>
      </router-link>
    </div>
    <div>
      <router-link to="/travel">
        <img src="@/assets/images/4.png" alt="" />
        <div>出行政策</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>
<style scoped lang="less">
.nav {
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: rgb(52, 67, 255);
  padding-bottom: 0.1rem;
  z-index: 2;
  div {
    text-align: center;
    font-size: 0.25rem;
    color: aliceblue;
    img {
      width: 50%;
    }
  }
}
</style>
