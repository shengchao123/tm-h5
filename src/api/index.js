import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as app from './modules/app'
import * as login from './modules/login'
import * as mine from './modules/mine'
import * as originalTravel from './modules/original-travel'
import * as evaluateDetail from './modules/evaluate-detail'
import * as activity from './modules/activity'

export const api = {
  ...originalTravel,
  ...app,
  ...mine,
  ...login,
  ...evaluateDetail,
  ...activity
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
