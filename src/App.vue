<template>
  <div id="app">
    <button @click="goForward" style="display:inline-block; width:60px;">前进</button>
    <button @click="goBack" style="display:inline-block; width:60px;">后退</button>
    <div class="header_navigator">
      <router-link :to="{name:'China'}" class="header_navigator_item">中国(编程式)</router-link>
      <router-link :to="{name:'West'}" class="header_navigator_item">欧美（多视图）</router-link>
      <router-link to="japan" class="header_navigator_item">日本(嵌套路由)</router-link>
      <router-link to="korea" class="header_navigator_item">韩国(动态路由)</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goForward () {
      this.$router.go(1)
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: auto;
  width: 600px;
  left: 0;
  right: 0;
}
  .header_navigator {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .header_navigator_item {
    display: inline-block;
    width: 150px;
    text-decoration: none;
    color: white;
  }
  .header_navigator_item:hover{
    transform: scale(1.3, 1.3);
  }
  .header_navigator_item:nth-of-type(1) { /* index start from 1*/
    background-color: #e10e2f;
  }
  .header_navigator_item:nth-of-type(2) { /* index start from 1*/
  background-color: #a741e1;
  }
  .header_navigator_item:nth-of-type(3) { /* index start from 1*/
    background-color: #1ce132;
  }
  .header_navigator_item:nth-of-type(4) { /* index start from 1*/
    background-color: #e1981a;
  }
</style>
