/** 
 * webpack有个merge的函数可以合并配置项【可自行观看】
 * https://webpack.js.org/guides/production/#setup
 * 
 * webpack 配置基础文件
 * @Author: chenlinjuan(930227)[779804644@qq.com] 
 * @Date: 2018-05-11 20:30:49 
 * @Last Modified by: chenlinjuan
 * @Last Modified time: 2018-05-23 15:44:02
 */

const merge = require("webpack-merge");
const path = require("path");
// 添加plugins
const chalk = require("chalk");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = merge({
  entry: path.resolve(process.cwd(), "src/index.js"),
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        //配置babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ProgressBarPlugin({
      format:
        "  build [:bar] " + chalk.green.bold(":percent") + " (:elapsed seconds)"
    })
  ]
});