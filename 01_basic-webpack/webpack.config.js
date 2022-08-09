// webpack的配置文件
const path = require("path");
module.exports = {
  // 入口文件--需指定入口文件，默认会去找/src/index.js，index.js可以更改命名
  entry: "./src/index.js",
  // 出口文件--即打包后输出目录
  output: {
    // 必须是绝对路径，可以指定任意的打包文件夹名称这里指定的是build文件夹
    path: path.resolve(__dirname, "./build"),
    // 打包出书的文件名称
    filename: "bundle.js",
  },
};
