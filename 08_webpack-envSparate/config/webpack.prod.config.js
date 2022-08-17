const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = merge(baseConfig, {
  // 设置模式
  // development 开发模式，会设置development
  // production 准备打包上线的时候，设置production
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            // 忽略不进行copy的件
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
});
