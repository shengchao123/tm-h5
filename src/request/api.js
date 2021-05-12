import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as user from './modules/user'
import * as app from './modules/app'
import * as originalTravel from './modules/original-travel'

export const api = {
  ...originalTravel,
  ...user,
  ...app
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
