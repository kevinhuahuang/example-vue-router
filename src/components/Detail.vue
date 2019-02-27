<template>
  <div class="detail_container">
    <div style="margin-top: 50px;">人口: {{population}} 万人</div>
    <div style="margin-top: 10px;">面积: {{area}} 万平方公里</div>
    <div style="margin-top: 10px;">传参方式：{{type}}</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  created () {
    this.getRouterData()
  },
  data () {
    return {
      population: 0,
      area: 0,
      type: ''
    }
  },
  methods: {
    getRouterData () {
      if (this.$route.params.population) {
        this.population = this.$route.params.population // 注意:是route 不是router
        this.area = this.$route.params.area
        this.type = 'params'
      } else if (this.$route.query.population) {
        this.population = this.$route.query.population // 注意:是route 不是router
        this.area = this.$route.query.area
        this.type = 'query'
      } else {
        this.type = '未传参'
      }
    }
  }
}
</script>

<style scoped>

</style>
