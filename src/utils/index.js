import Vue from 'vue'
import { isEmpty } from './validate'
import { msg, calcRpx2px ,imgUrlDeal,avatarUrl} from './tools'
import { login, notMember, goLogin } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$calcRpx2px = calcRpx2px
Vue.prototype.$msg = msg
Vue.prototype.$login = login
Vue.prototype.$avatarUrl = avatarUrl
Vue.prototype.$notMember = notMember
Vue.prototype.$goLogin = goLogin
Vue.prototype.$imgUrlDeal = imgUrlDeal
Vue.prototype.$avatarUrl = avatarUrl
Vue.prototype.$windowWidth = uni.getSystemInfoSync().windowWidth
Vue.prototype.$windowHeight = uni.getSystemInfoSync().windowHeight

