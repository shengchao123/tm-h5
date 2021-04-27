import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as user from './modules/user'

export const api = {
  ...user
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
