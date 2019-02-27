<template>
  <div class="japan-container">
    <div class="left-navigator">
      <router-link :to="{name: 'Tokyo'}" class="left-item">东京</router-link>
      <router-link to="osaka" class="left-item">大阪</router-link>
      <router-link to="hiroshima" class="left-item">广岛</router-link>
      <router-link to="hokkaido" class="left-item">北海道</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterJapan'
}
</script>

<style scoped>
  .japan-container {
    width: 600px;
    height: 200px;
    background-color: #1ce132;
    color: white;
  }
  .japan-item {
    position: absolute; /* 父元素无需设置position*/
    width: 60px; /* 当position设置为absolute时 如果不设置宽度与高度，默认继续父元素大小*/
    height: 20px;
    margin: auto;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .left-navigator {
    display: inline-block;
    position: absolute;
    left:0;
    width: 80px;
    height: inherit;
    background: royalblue;
  }
  .right-content {
    display: inline-block;
    position: absolute;
    right: 0;
    width: 520px;
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
