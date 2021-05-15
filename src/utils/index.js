import Vue from 'vue'
import { isEmpty, addArrayAttr } from './validate'
import { msg } from './tools'
import { login } from './login'

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$msg = msg
Vue.prototype.$login = login
