module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿的视口宽度
      unitToConvert: 'px',
      unitPrecision: 3,
      replace: true,
      exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
  }
}
