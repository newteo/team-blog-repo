var path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// var webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './index.js',
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'react-redux'
    ]
  },

  output: {
    filename: 'application.js',
    path: path.join(__dirname, './dist')
  },
/*  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],*/
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader!stylus-loader'),
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=8192'
      },
    ],
    resolve: {
      extensions: ['', '.js', '.styl', 'css', 'jsx']
    }
  },
  plugins: [
    new ExtractTextPlugin('application.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
}
