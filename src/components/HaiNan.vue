<template>
  <div class="guang-dong-cotainer">
    <div style="margin-top: 70px">海南省</div>
    <button @click="routerTo" style="margin-top: 10px">详情页</button>
  </div>
</template>

<script>
export default {
  name: 'HaiNan',
  methods: {
    routerTo () {
      this.$router.replace({ // replace不会向history添加新记录，而是替换当前history记录
        name: 'Detail',
        params: {
          population: 925.76,
          area: 3.39
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
