import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as app from './modules/app'
import * as originalTravel from './modules/original-travel'

export const api = {
  ...originalTravel,
  ...app
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
