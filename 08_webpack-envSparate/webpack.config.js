// webpack的配置文件
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
module.exports = {
  target: "web", //node的项目值为'node'
  // 设置模式
  // development 开发模式，会设置development
  // production 准备打包上线的时候，设置production
  mode: "development",
  // 设置source-map，建立js映射文件，方便调试代码和错误
  devtool: "source-map",
  // watch:true,
  // 入口文件--需指定入口文件，默认会去找/src/index.js，index.js可以更改命名
  entry: "./src/main.js",
  // 出口文件--即打包后输出目录
  output: {
    // 必须是绝对路径，可以指定任意的打包文件夹名称这里指定的是build文件夹
    path: path.resolve(__dirname, "./build"),
    // 打包出书的文件名称
    filename: "bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]",
  },
  // webpack-dev-server的配置
  devServer: {
    // contentBase: "./public",(文档已经没有该配置选项，执行npm run build报错配置错误)
    hot: true,
    host: "0.0.0.0",
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
  resolve: {
    // 默认值：.js .json .wasm
    extensions: [".js", ".json", ".wasm", ".vue", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      js: path.resolve(__dirname, "./src/js"),
    },
  },
  module: {
    rules: [
      {
        // 正则表达式进行匹配
        test: /\.css$/,
        // 方式一
        // loader: "css-loader",
        // 方式二
        // use: ["css-loader"],
        // 方式三
        use: [
          // { loader: "css-loader" },
          "style-loader",
          "css-loader",
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         // file-loader默认使用ES6模块解析，将其关闭，启用CommonJS模块，不配置这个，html文件中的图片路径不对
      //         // html文件中引用的图片路径不对，路径包含文本[object%20Module]
      //         esModule: false,
      //         outputPath: "img",
      //         name: "[name]_[hash:6].[ext]",
      //       },
      //     },
      //   ],
      //   // 在webpack5中使用旧的assets loader（file-loader/url-loader\raw-loader等）和asset模块时，你可能想停止当前asset模块的处理，并再次启动处理，这可能导致asset重复，你可以通过下面设置来解决
      //   // 不配置的话会出现一张图片打包后生成两张图片，而且其中一张无法打开，html文件中刚好引用的就是这张图片，也会导致图片无法正常显示
      //   type: "javascript/auto",
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         esModule: false,
      //         outputPath: "img",
      //         name: "[name]_[hash:6].[ext]",
      //         limit: 10 * 1024,
      //       },
      //     },
      //   ],
      //   type: "javascript/auto",
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        // 实现url-loader的limit效果
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      // {
      //   test: /\.(ttf|eot|woff2?)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "font/[name]_[hash:6].[ext]",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(ttf|eot|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         // plugins: [
      //         //   "@babel/plugin-transform-arrow-functions",
      //         //   "@babel/plugin-transform-block-scoping",
      //         // ],
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 用于生成HTML文档的标题
      title: "webpack项目",
      // webpack模板的路径
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      // 使用选项式API
      __VUE_OPTIONS_API__: true,
      // 是否开启生产模式下的devtools调试工具
      __VUE_PROD_DEVTOOLS__: false,
    }),
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
    // 使用vue-loader必须使用的插件
    new VueLoaderPlugin(),
  ],
};
