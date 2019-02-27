<template>
  <div class="china-container">
    <div class="left-navigator">
      <router-link to="guangdong" class="left-item">广东省</router-link>
      <router-link to="huNan" class="left-item">湖南省</router-link>
      <router-link to="haiNan" class="left-item">海南省</router-link>
      <router-link to="detail" class="left-item">详情页</router-link>
      <router-link to="redirect" class="left-item">重定向详情页面</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterChina',
  methods: {
  }
}
</script>

<style scoped>
  .china-container {
    width: 600px;
    height: 200px;
    background-color: #e10e2f;
    color: white;
  }
  .left-navigator {
    display: inline-block;
    position: absolute;
    left:0;
    width: 180px;
    height: inherit;
    background: royalblue;
  }
  .right-content {
    display: inline-block;
    position: absolute;
    right: 0;
    width: 420px;
    height: inherit;
    background-color: #f5b019;
  }
  .left-item {
    background-color: darkorange;
    text-decoration: none;
    display: block;
    height: 25px;
    text-align: center;
    line-height: 25px; /* vertical center*/
    border: 1px solid green;
  }
  .left-item:hover {
    transform: scale(1.2, 1.2);
  }
</style>
