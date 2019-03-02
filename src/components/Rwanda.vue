<template>
  <div class="rwanda-contain">
    <div class="rwanda-country">卢旺达 欢迎你，来自 {{countryFrom}} 的朋友</div>
  </div>
</template>

<script>
import {getCountryChineseName} from '../util/public'
export default {
  name: 'Kenya',
  data () {
    return {
      countryFrom: ''
    }
  },
  created () {
    this.initMessage()
  },
  methods: {
    initMessage () {
      this.countryFrom = getCountryChineseName(this.$route.params.countryFrom)
    }
  },
  beforeRouteEnter (to, from, next) { // 支持给next传递回调的唯一守卫
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 'this'
    // 因为当守卫执行前，组件实例还没被创建
    // 通过'vm'访问组件实例
    //  next(vm => {})
    const answer = window.confirm(getCountryChineseName(to.name) + ' 欢迎你，来自 ' + getCountryChineseName(from.name) + ' 的朋友')
    if (answer) {
      to.params.countryFrom = from.name
      next()
    } else {
      next(from.path)
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在/foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件， 因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 'this'
    this.name = to.params.name
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 'this'
    const answer = window.confirm('确定离开 ' + getCountryChineseName(from.name) + ' 前往 ' + getCountryChineseName(to.name))
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>
  .rwanda-contain {
    position: absolute;
    background-color: #c5302c;
    width: inherit;
    height: inherit;
    text-align: center;
  }
  .rwanda-country {
    position: absolute;
    height: 25px;
    color: white;
    margin: auto;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
</style>
