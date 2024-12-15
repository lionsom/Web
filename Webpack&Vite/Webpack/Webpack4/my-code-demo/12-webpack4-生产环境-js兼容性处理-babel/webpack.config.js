const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /*
        js兼容性处理：babel-loader @babel/core 
          1. 基本js兼容性处理 --> @babel/preset-env
            问题：只能转换基本语法，如promise高级语法不能转换
          2. 全部js兼容性处理 --> @babel/polyfill  
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
          3. 需要做兼容性处理的就做：按需加载  --> core-js
      */
      {
        test: /\.js$/,
        exclude: /node_modules|.babelrc.js/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [ '@babel/preset-env' ]
        }
      }

      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: [
      //       [
      //         '@babel/preset-env',
      //         {
      //           useBuiltIns: 'usage',
      //           corejs: {
      //             version: 3
      //           },
      //           targets: {
      //             chrome: '60',
      //             firefox: '60',
      //             ie: '9',
      //             safari: '10',
      //             edge: '17'
      //           }
      //         }
      //       ]
      //     ]
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
}