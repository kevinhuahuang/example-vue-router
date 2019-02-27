import Vue from 'vue'

const Country = Vue.extend({
  template: `<div><div style="line-height: 200px">{{countryName}}</div></div>`,
  props: {
    countryName: {
      type: String,
      default: '德国'
    }
  }
})

export const German = Vue.extend({
  template: `<div><Country country-name="德国"></Country></div>`,
  components: {Country}
})

export const England = Vue.extend({
  template: `<div><Country country-name="英国"></Country></div>`,
  components: {Country}
})

export const France = Vue.extend({
  template: `<div><Country country-name="法国"></Country></div>`,
  components: {Country}
})

export const Spain = Vue.extend({
  template: `<div><Country country-name="西班牙"></Country></div>`,
  components: {Country}
})

export const Canada = Vue.extend({
  template: `<div><Country country-name="加拿大"></Country></div>`,
  components: {Country}
})
