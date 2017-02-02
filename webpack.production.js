require('babel-register')

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const defaults = require('./webpack.defaults')

module.exports = Object.assign(defaults, {
  plugins: defaults.plugins.concat([
    new AssetsPlugin({
      path: path.join(__dirname, 'assets')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
})
