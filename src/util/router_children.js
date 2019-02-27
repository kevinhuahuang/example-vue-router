import Vue from 'vue'

export const Tokyo = Vue.extend({
  template: '<div><div style="line-height:200px">{{msg}}</div></div>',
  data: function () {
    return {
      msg: '东京(嵌套子路由)'
    }
  }
})

export const Osaka = Vue.extend({
  template: '<div><div style="line-height:200px">{{msg}}</div></div>',
  data: function () {
    return {
      msg: '大阪(嵌套子路由)'
    }
  }
})

export const Hiroshima = Vue.extend({
  template: '<div><div style="line-height:200px">{{msg}}</div></div>',
  data: function () {
    return {
      msg: '广岛(嵌套子路由)'
    }
  }
})

export const Hokkaido = Vue.extend({
  template: '<div><div style="line-height:200px">{{msg}}</div></div>',
  data: function () {
    return {
      msg: '北海道(嵌套子路由)'
    }
  }
})
