// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
const { Generator } = require("webpack");

module.exports = {
  /* 入口
      相对路径和绝对路径都行
  */
  entry: "./src/main.js",

  /* 输出 */
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "mainA.js",
  },

  /* 加载器 */
  module: {
    rules: [
      {
        test: /\.css$/,  // 只检测.css文件
        use: [
          /*
            loader执行顺序是从右到左，从下到上
            loader的配置顺序不能乱
          */
          'style-loader', // 将js中的css通过创建style标签添加到html文件中生效
          'css-loader' // 将css文件编译成commonjs模块加载到js中，里面内容是字符串
        ],
      },
      {
        test: /\.less$/,
        /* loader vs use: 
            loader: 只能使用一个loader 
            use: 可以使用多个loader
        */
        use: [
          'style-loader', // 将js中的css通过创建style标签添加到html文件中生效
          'css-loader', // 将css文件编译成commonjs模块加载到js中，里面内容是字符串
          'less-loader', // 将less文件编译成css文件
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader', // 将 Sass 编译成 CSS
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'stylus-loader', // 将 Stylus 文件编译为 CSS
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb的图片会被base64处理
            // 优点: 减少请求数量
            // 缺点: 体积会更大
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          // 将图片文件输出到 static/images 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: 'static/images/[hash][ext][query]'
        }
      }
    ],
  },

  /* 插件 */
  plugins: [],

  /* 模式
      开发模式: development
      生产模式: production
  */
  mode: "development",
};