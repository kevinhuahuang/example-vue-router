<template>
  <div id="app">
    <button @click="goForward" style="display:inline-block; width:60px;">前进</button>
    <button @click="goBack" style="display:inline-block; width:60px;">后退</button>
    <div class="header-navigator">
      <router-link :to="{name:'China'}" class="header-navigator-item">中国(编程式)</router-link>
      <router-link :to="{name:'West'}" class="header-navigator-item">欧美（多视图）</router-link>
      <router-link to="japan" class="header-navigator-item">日本(嵌套路由)</router-link>
      <router-link to="korea" class="header-navigator-item">韩国(动态路由)</router-link>
      <router-link to="africa" class="header-navigator-item">非洲(导航守卫)</router-link>
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
  margin-left: auto;
  width: 600px;
  left: 0;
  right: 0;
}
  .header-navigator {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .header-navigator-item {
    display: inline-block;
    width: 150px;
    text-decoration: none;
    color: white;
  }
  .header-navigator-item:hover{
    transform: scale(1.3, 1.3);
  }
  .header-navigator-item:nth-of-type(1) { /* index start from 1*/
    background-color: #e10e2f;
  }
  .header-navigator-item:nth-of-type(2) { /* index start from 1*/
  background-color: #a741e1;
  }
  .header-navigator-item:nth-of-type(3) { /* index start from 1*/
    background-color: #1ce132;
  }
  .header-navigator-item:nth-of-type(4) { /* index start from 1*/
    background-color: #e1981a;
  }
  .header-navigator-item:nth-of-type(5) { /* index start from 1*/
    background-color: #ea625b;
  }
</style>
