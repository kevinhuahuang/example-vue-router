<template>
  <div class="africa-container">
    <div class="left-navigator">
      <router-link to="kenya" class="left-item" style="background-color:#9fe121">肯尼亚</router-link>
      <router-link to="rwanda" class="left-item" style="background-color:#c5302c">卢旺达</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterAfrica'
}
</script>

<style scoped>
  .africa-container {
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
