/**
 * 对比：
 *  loader:  1. 下载  2. 使用（配置loader）
 *  plugins: 1. 下载  2. 引入  3. 使用
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
}