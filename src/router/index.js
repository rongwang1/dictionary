import Vue from 'vue'
import Router from 'vue-router'
import Learn from '../pages/learn/Learn'
import Words from '../pages/words/Words'
import Fayin from '../pages/fayin/Fayin'
import Setting from '../pages/setting/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Learn'
    },
    {
      path: '/Learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/Fayin',
      name: 'Fayin',
      component: Fayin
    },
    {
      path: '/Words',
      name: 'Words',
      component: Words
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
