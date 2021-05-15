'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
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
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/atom.scss";
          @import "@/styles/flex.scss";
          @import "@/styles/global.scss";
          @import "@/styles/init.scss";
        `
      }
    }
  }
}
