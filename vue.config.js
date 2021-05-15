'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: "vue/dist/vue.esm.js", //加上这一句
        '@': resolve('src'),
        '@c': resolve('src/components'),
        '@u': resolve('src/utils'),
        '@v': resolve('src/views'),
        '@m': resolve('src/mixins')
      }
    },
    externals: {
      moment: 'moment',
      AMap: 'AMap'
    }
  }
}
