// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'		//路由

/*ajax*/
import axios from 'axios'
import VueAxios from 'vue-axios'

/*管理全局变量*/
import store from './store'				//vuex

import App from './App'

import routes from './routes'

//Vue 加载中间件
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
const router = new VueRouter({
  mode: 'history',
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  store,//vuex
  render: h =>h(App)
})
