const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfig = require('./webpack.config')

webpackConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify("production")
    },
  }),
  new ExtractTextPlugin('application.css'),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]

module.exports = webpackConfig
