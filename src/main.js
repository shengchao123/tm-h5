import Vue from 'vue'
import App from './App'

import store from './store'

import './utils/index'
import './api/index'
import './plugins/index'

Vue.prototype.$store = store;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
