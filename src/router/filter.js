import router from '../router'
import config from '@/config.js'

router.beforeEach(async (to, from, next) => {
  // start progress bar
  // 获取请求参数
  const ciphertext = to.query.ciphertext
  if (ciphertext) {
    localStorage.setItem(config.localStorageKey, ciphertext)
  }
  next()
})

router.afterEach(() => {
})
