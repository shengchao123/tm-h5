import Vue from 'vue'
import bus from '@u/bus.js'
import { isEmpty, numSeparate } from './tool'

Vue.use(bus)
Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$numSeparate = numSeparate
