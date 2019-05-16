import Vue from 'vue'
import Router from 'vue-router'
import Basic from './views/Basic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/basic',
      name:'home',
    },
    {
      path: '/basic',
      name: 'basic',
      component: Basic
    },
    {
      path: '/advance',
      name: 'advance',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Advance.vue')
    }
  ]
})
