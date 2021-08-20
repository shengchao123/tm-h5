import Vue from 'vue'
import { isEmpty } from './validate'
import { msg, calcRpx2px, sourceUrl, avatarUrl, actionIconClass } from './tools'
import { login, notMember, goLogin, isAuthCommunity } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$calcRpx2px = calcRpx2px
Vue.prototype.$msg = msg
Vue.prototype.$login = login
Vue.prototype.$avatarUrl = avatarUrl
Vue.prototype.$notMember = notMember
Vue.prototype.$isAuthCommunity = isAuthCommunity
Vue.prototype.$goLogin = goLogin
Vue.prototype.$sourceUrl = sourceUrl
Vue.prototype.$avatarUrl = avatarUrl
Vue.prototype.$actionIconClass = actionIconClass
Vue.prototype.$windowWidth = uni.getSystemInfoSync().windowWidth
Vue.prototype.$windowHeight = uni.getSystemInfoSync().windowHeight

