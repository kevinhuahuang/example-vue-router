<template>
  <div class="west-container">
    <div class="left-navigator">
      <router-link to="canada" class="left-item">加拿大</router-link>
      <router-link to="american" class="left-item">美国（多视图）</router-link>
      <router-link to="england" class="left-item">英国</router-link>
      <router-link to="german" class="left-item">德国</router-link>
      <router-link to="france" class="left-item">法国</router-link>
      <router-link to="spain" class="left-item">西班牙</router-link>
    </div>
    <div class="right-content">
      <router-view></router-view>
      <router-view name="boston" style="position:absolute; right:10px; top:30px;"></router-view>
      <router-view name="newYork" style="position:absolute; right:20px; top:60px;"></router-view>
      <router-view name="philadelphia" style="position:absolute; right:30px; top:100px;"></router-view>
      <router-view name="washington" style="position:absolute; right:50px; top:150px;"></router-view>
      <router-view name="seattle" style="position:absolute; left:10px; top:30px;"></router-view>
      <router-view name="sanFrancisco" style="position:absolute; left:30px; top:100px;"></router-view>
      <router-view name="losAngeles" style="position:absolute; left:40px; top:130px;"></router-view>
      <router-view name="lasVegas" style="position:absolute; left:150px; top:30px;"></router-view>
      <router-view name="chicago" style="position:absolute; left:250px; top:30px;"></router-view>
      <router-view name="detroit" style="position:absolute; left:300px; top:70px;"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterWest'
}
</script>

<style scoped>
  .west-container {
    width: 600px;
    height: 200px;
    background-color: #a741e1;
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
