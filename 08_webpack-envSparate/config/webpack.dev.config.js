const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
module.exports = merge(baseConfig, {
  // 设置模式
  // development 开发模式，会设置development
  // production 准备打包上线的时候，设置production
  mode: "development",
  // 设置source-map，建立js映射文件，方便调试代码和错误
  devtool: "source-map",
  // webpack-dev-server的配置
  devServer: {
    // contentBase: "./public",(文档已经没有该配置选项，执行npm run build报错配置错误)
    hot: true,
    // host: "0.0.0.0",
    host: "localhost",
    port: 8888,
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": "",
        },
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
