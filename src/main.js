import Vue from 'vue'
import App from './App'

import store from './store'

import './utils/index'
import './api/index'
import './plugins/index'
import '@/components/index.js'


Vue.config.productionTip = false

App.mpType = 'app'


new Vue({
  store,
  render: h => h(App)
}).$mount("#app")