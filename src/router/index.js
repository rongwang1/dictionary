import Vue from 'vue'
import Router from 'vue-router'
import Learn from '../pages/learn/Learn'
import Words from '../pages/words/Words'
import Fayin from '../pages/fayin/Fayin'
import Setting from '../pages/setting/Setting'

Vue.use(Router)

const VueRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Learn'
    },
    {
      path: '/Learn',
      name: 'Learn',
      component: Learn,
      meta: {
        title: '学习'
      }
    },
    {
      path: '/Fayin',
      name: 'Fayin',
      component: Fayin,
      meta: {
        title: '发音'
      }
    },
    {
      path: '/Words',
      name: 'Words',
      component: Words,
      meta: {
        title: '生词'
      }
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
      meta: {
        title: '设置'
      }
    }
  ]
})

// 导航守卫(guard)
VueRouter.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default VueRouter
