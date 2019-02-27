<template>
  <div class="korea-container">
    <div class="left-navigator">
      <router-link to="capital" class="left-item">首都(props:对象)</router-link>
      <router-link to="destination/济州岛" class="left-item">目的地(动态路由匹配)</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterKorea'
}
</script>

<style scoped>
  .korea-container {
    width: 600px;
    height: 200px;
    background-color: #e1981a;
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
