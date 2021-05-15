import Vue from 'vue'
import { isEmpty } from './validate'
import { msg, calcPxFit } from './tools'
import { login } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$calcPxFit = calcPxFit
Vue.prototype.$msg = msg
Vue.prototype.$login = login
