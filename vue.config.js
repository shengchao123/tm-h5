'use strict'
const path = require('path')
const defaultSettings = require('./src/config.js')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // page title

module.exports = {
  // 在开发环境下，如果想把开发服务器架设在根路径，设置一个条件的值
  publicPath: './',
  // 打包输入的路径
  outputDir: 'dist',
  // 静态资源的目录
  assetsDir: 'static',
  // eslint 检测环境
  lintOnSave: process.env.NODE_ENV === 'development',
  // 生产环境是否构建生成 source map, 可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 本地服务的配置
  devServer: {
    port: 9527,
    open: true,
    // 设置跨域代理
    proxy: {
      '/api/': {
        target: 'http://172.168.102.2:9007',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/sso/': {
        target: 'http://172.168.102.3:8000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/sso': '/'
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components'),
        '@u': resolve('src/utils'),
        '@v': resolve('src/views'),
        '@m': resolve('src/mixins')
      }
    },
    devtool: 'source-map',
    externals: {
      // AMap: 'AMap',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      moment: 'moment',
      axios: 'axios',
      AMap: 'AMap'
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5,
            exclude: /node_modules/i
          })
        ]
      },
      sass: {
        prependData: `
          @import "@/styles/colors.scss";
          @import "@/styles/flex.scss";
          @import "@/styles/global.scss";
          @import "@/styles/atom.scss";
        `
      }
    }
  },

  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                hack: 'true; @import "/src/styles/vant.less";'
              }
            }
          }
        }
      ]
    }
  ]
}
