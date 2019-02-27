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
        name: 'Detail',
        params: {
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
