import Vue from 'vue'

import { urls, fileHost } from './urls'
import * as app from './modules/app'
import * as login from './modules/login'
import * as mine from './modules/mine'
import * as originalTravel from './modules/original-travel'
import * as evaluateDetail from './modules/evaluate-detail'
import * as activity from './modules/activity'
import * as party from './modules/party'
import * as note from './modules/note'

export const api = {
  ...originalTravel,
  ...app,
  ...mine,
  ...login,
  ...evaluateDetail,
  ...activity,
  ...party,
  ...note
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
