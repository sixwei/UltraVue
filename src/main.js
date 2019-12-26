// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'

import axios from './utils/http.js'
import VueAxios from 'vue-axios'

import './styles/theme.less'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueAxios, axios)

// window._ = require('lodash')





/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})


