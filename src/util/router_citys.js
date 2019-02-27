import Vue from 'vue'

const City = Vue.extend({
  template: '<div><div style="height:25px; line-height:25px">{{cityName}}</div></div>',
  data: function () {
    return {
    }
  },
  props: {
    cityName: {
      type: String,
      default: '城市'
    }
  }
})

export const Boston = Vue.extend({
  template: `<div><City city-name="波士顿"></City></div>`,
  components: {City}
})

export const NewYork = Vue.extend({
  template: `<div><City city-name="纽约"></City></div>`,
  components: {City}
})

export const Philadelphia = Vue.extend({
  template: `<div><City city-name="费城"></City></div>`,
  components: {City}
})

export const Washington = Vue.extend({
  template: `<div><City city-name="华盛顿"></City></div>`,
  components: {City}
})

export const Seattle = Vue.extend({
  template: `<div><City city-name="西雅图"></City></div>`,
  components: {City}
})

export const SanFrancisco = Vue.extend({
  template: `<div><City city-name="三藩市"></City></div>`,
  components: {City}
})

export const LosAngeles = Vue.extend({
  template: `<div><City city-name="落杉机"></City></div>`,
  components: {City}
})

export const LasVegas = Vue.extend({
  template: `<div><City city-name="拉斯维加斯"></City></div>`,
  components: {City}
})

export const Chicago = Vue.extend({
  template: `<div><City city-name="芝加哥"></City></div>`,
  components: {City}
})

export const Detroit = Vue.extend({
  template: `<div><City city-name="底特律"></City></div>`,
  components: {City}
})
