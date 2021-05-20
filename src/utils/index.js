import Vue from 'vue'
import { isEmpty } from './validate'
import { msg, calcRpx2px } from './tools'
import { login, notMember, goLogin } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$calcRpx2px = calcRpx2px
Vue.prototype.$msg = msg
Vue.prototype.$login = login
Vue.prototype.$notMember = notMember
Vue.prototype.$goLogin = goLogin
