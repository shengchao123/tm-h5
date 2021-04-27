
## CDN 加载资源

[CDN 网站：https://www.bootcdn.cn/](https://www.bootcdn.cn/)

1. 搜索相关内容，如 vue，获取稳定版本 script 标签
2. 将 script 标签放入项目 public -> index.html body 中
3. 在 vue.config.js 中加入 externals
```js
module.exports = {
  ···
  ···
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue', '.scss', '.css'],
      alias: {
       ···
      },
    },
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      'Axios':'axios'
    }
  },
```

