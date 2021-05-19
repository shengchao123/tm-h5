import Vue from 'vue'
import { isEmpty } from './validate'
import { msg, calcRpx2px } from './tools'
import { login } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$calcRpx2px = calcRpx2px
Vue.prototype.$msg = msg
Vue.prototype.$login = login
