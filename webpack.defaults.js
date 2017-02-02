import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
const __ENV__ = process.env.NODE_ENV || 'development'
const __DEV__ = /^(dev|develop|development)$/.test(__ENV__)

module.exports = {
  // 入口文件 `index.js`
  // 命名 `vendors` 或 `packages` 都可以
  // 第三方庫 `react`, `react-dom`, `react-router`
  entry: {
    index: './index.js',
    vendors: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  // 打包目錄 `./assets/`
  // 輸出文件 `application.js`
  // `publicPath` 和 `chunkFilename` 這裏沒用到
  output: {
    path: path.join(__dirname, 'assets'),
    filename: __ENV__ ? 'application.js' : 'application-[hash].js'
  },
  module: {
    loaders: [
      // 正則表達式 `\.jsx?$` 適配 `js` 和 `.jsx`
      // 正常情況有 `exclude` 沒 `include`
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      // 正常情況有 `exclude` 沒 `include` 或兩者都沒
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=4096'
      },
      // 加載字體文件
      {
        test: /\.(woff2|woff|eot|ttf)$/,
        loader: 'url-loader?limit=1024'
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(__ENV__)
      }
    }),
    new ExtractTextPlugin(__ENV__ ? 'application.css' : 'application-[hash].css'),
    new webpack.optimize.CommonsChunkPlugin('packages', __ENV__ ? 'vendors.js' : 'vendors-[hash].js')
  ],
  // 擴展名都是有 `.` 的
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl', '.json']
  }
}
