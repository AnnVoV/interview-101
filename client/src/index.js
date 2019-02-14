import Vue from 'vue'
import VueRouter from 'vue-router'
import 'prismjs/themes/prism-tomorrow.css'
import Categories from './pages/Categories'
import Questions from './pages/Questions'
import './css/global.less'

VueRouter.install( Vue )

const router = new VueRouter( {
  routes: [
    {
      name: 'home',
      path: '/',
      component: Categories,
    },
    {
      path: '/questions/:pid/:cid',
      component: Questions,
    },
  ]
} )

const app = new Vue( {
  el: '#app',
  router,
  render() {
    return <router-view></router-view>
  }
} )
