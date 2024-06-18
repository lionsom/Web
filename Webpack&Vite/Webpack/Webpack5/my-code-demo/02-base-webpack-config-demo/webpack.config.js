// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

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
    rules: [],
  },

  /* 插件 */
  plugins: [],

  /* 模式
      开发模式: development
      生产模式: production
  */
  mode: "development",
};