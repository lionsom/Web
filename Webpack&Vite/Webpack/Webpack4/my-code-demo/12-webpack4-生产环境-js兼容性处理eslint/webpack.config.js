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
      /**
       * js语法检查：eslint-loader eslint
       * 注意：只检查自己写的源代码，不检查第三方库的源代码，所以需要添加exclude排除项。
       * 
       * 设置检查规则：
       *   airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint
       *   package.json中eslintConfig中设置。eslintConfig中设置规则时，使用extends来继承规则。
       *  
       *     "eslintConfig": {
       *        "extends": "airbnb-base"
       *      }
       * 
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true
        }
      }
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