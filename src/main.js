import Vue from 'vue'
import App from './App'

import store from './store'
import VueClipboard from 'vue-clipboard2'

import './utils/index'
import './api/index'
import './plugins/index'
import '@/components/index.js'

Vue.use(VueClipboard)
Vue.prototype.$store = store;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
