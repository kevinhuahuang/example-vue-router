import Vue from 'vue'
import Router from 'vue-router'
import China from '@/components/RouterChina'
import West from '@/components/RouterWest'
import Japan from '@/components/RouterJapan'
import Korea from '@/components/RouterKorea'
import Africa from '@/components/RouterAfrica'
import Guangdong from '@/components/GuangDong'
import HuNan from '@/components/HuNan'
import HaiNan from '@/components/HaiNan'
import Detail from '@/components/Detail'
import Kenya from '@/components/Kenya'
import Rwanda from '@/components/Rwanda'
import * as Children from '@/util/router_children'
import {Canada, England, France, German, Spain} from '../util/router_country'
import {Destination, Capital} from '../util/router_korea'
import * as City from '../util/router_citys'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', component: China
    },
    {
      path: '/china',
      name: 'China',
      component: () => import('@/components/RouterChina'),
      // 假装我修补了一个hotFix
      children: [
        {
          path: '/',
          component: Guangdong
        },
        {
          path: '/guangDong',
          component: Guangdong,
          alias: '/gd' // 使用别名 router-link to='/gd' 可访问'/guangDong'
        },
        {
          path: '/huNan',
          component: HuNan},
        {
          path: '/haiNan',
          component: HaiNan
        },
        {
          path: '/detail',
          name: 'Detail', /* 一定要写name, params与query必须用name来识别路径 */
          component: Detail
        }
      ]
    },
    {
      path: '/west',
      name: 'West',
      component: West,
      children: [ /* 嵌套子路由 */
        {path: '/', component: Canada},
        {
          path: '/american',
          name: 'American',
          components: {
            boston: City.Boston,
            newYork: City.NewYork,
            philadelphia: City.Philadelphia,
            washington: City.Washington,
            seattle: City.Seattle,
            sanFrancisco: City.SanFrancisco,
            losAngeles: City.LosAngeles,
            lasVegas: City.LasVegas,
            chicago: City.Chicago,
            detroit: City.Detroit
          }
        },
        {path: '/england', name: 'England', component: England},
        {path: '/france', name: 'France', component: France},
        {path: '/german', name: 'German', component: German},
        {path: '/spain', name: 'Spain', component: Spain},
        {path: '/canada', name: 'Canada', component: Canada}
      ]
    },
    {
      path: '/japan',
      name: 'Japan',
      component: Japan,
      children: [ /* 嵌套子路由 */
        {
          path: '/', component: Children.Tokyo
        },
        {
          path: '/tokyo', name: 'Tokyo', component: Children.Tokyo
        },
        {
          path: '/osaka', name: 'Osaka', component: Children.Osaka
        },
        {
          path: '/hiroshima', name: 'Hiroshima', component: Children.Hiroshima
        },
        {
          path: '/hokkaido', name: 'Hokkaido', component: Children.Hokkaido
        }
      ]
    },
    {
      path: '/korea',
      name: 'Korea',
      component: Korea,
      children: [
        {
          // 未解决问题！！！ 访问过destination后，再访问其它，比如/japan，
          // 网址会变成这样 http://localhost:8080/#/destination/japan 并没有此路径
          // 正确的应该是 http://localhost:8080/#/japan
          // 解决方法 <router-link to="japan" 改为  <router-link :to="{name: 'japan'}"
          // 又引出了新的问题，japan下面的子组件中的默认路径不显示
          path: '/destination/:city/', // 访问方法 http://localhost:8080/#/destination/汉城
          name: 'Destination',
          component: Destination
        },
        {
          path: '/capital',
          name: 'Capital',
          component: Capital,
          props: {cityName: '汉城', population: 1050, area: 605.77}
        }
      ]
    },
    {
      path: '/redirect',
      redirect: '/detail' // 重定向 可以写成下面的箭头函数方式
      /* to => {
      * if (params.level) {
      *   return '/level'
      *  } else {
      *   return '/home'
      *  }
      * } */
    },
    {
      path: '/africa',
      name: 'Africa',
      component: Africa,
      beforeEnter: beforeEnterAfrica, // beforeEnterAfrica不要加括号
      children: [
        {
          path: '/kenya',
          name: 'Kenya',
          component: Kenya
        },
        {
          path: '/rwanda',
          name: 'rwanda',
          component: Rwanda
        }
      ]
    }
  ]
})

function beforeEnterAfrica (to, from, next) {
  console.log(to)
  console.log(from)
  alert('欢迎来到非洲！')
  next()
}

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来resolve这个钩子，执行效果依赖next方法的调用参数
  console.log('从 “' + from.name + '” 来到 “' + to.name + '”')
  next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 这和 router.beforeEach 类似，区别是在导航被确认之前，
  // 同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
  next()
})

// 全局后置守卫
router.afterEach((to, from) => { // 不接受next函数，也不影响导航
  console.log('离开 “' + from.name + '” 前往 “' + to.name + '”')
})

export default router
