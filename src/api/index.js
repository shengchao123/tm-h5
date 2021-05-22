import Vue from 'vue'

import { urls, fileHost, imgHost } from './urls'
import * as app from './modules/app'
import * as login from './modules/login'
import * as mine from './modules/mine'
import * as originalTravel from './modules/original-travel'
import * as party from './modules/party'

export const api = {
  ...originalTravel,
  ...app,
  ...mine,
  ...login,
  ...party
}

Vue.prototype.$fileHost = fileHost
Vue.prototype.$imgHost = imgHost
Vue.prototype.$api = api
Vue.prototype.$urls = urls
