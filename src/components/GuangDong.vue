<template>
  <div class="guang-dong-cotainer">
    <div style="margin-top: 70px">广东省</div>
    <button @click="routerTo" style="margin-top: 10px">详情页</button>
  </div>
</template>

<script>
export default {
  name: 'GuangDong',
  methods: {
    routerTo () {
      this.$router.push({
        name: 'Detail', // params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',因为params只能用name来引入路由
        params: { // query相当于get请求，页面跳转时在地址栏可看到请求参数，而params相当于post请求，参数不显示
          population: 11169,
          area: 17.97
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
