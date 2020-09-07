import Vue from 'vue'
import Router from 'vue-router'
import Learn from '../pages/learn/Learn'

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
    }
  ]
})

// 导航守卫(guard)
VueRouter.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default VueRouter
