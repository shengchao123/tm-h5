import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as user from './modules/user'
import * as app from './modules/app'

export const api = {
  ...user,
  ...app
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
