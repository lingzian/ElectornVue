import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Alert',
      name: 'Alert',
      component: require('@/page/alert').default
    },
    {
      path: '*',
      redirect: '/Alert'
    }
  ]
})
