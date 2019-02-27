<template>
  <div class="guang-dong-cotainer">
    <div style="margin-top: 70px">湖南省</div>
    <button @click="routerTo" style="margin-top: 10px">详情页</button>
  </div>
</template>

<script>
export default {
  name: 'HuNan',
  methods: {
    routerTo () {
      this.$router.push({
        name: 'Detail',
        query: {
          population: 6860.2,
          area: 21.18
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
