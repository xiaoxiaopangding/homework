const path = require("path");
const ip = require("ip");
const chalk = require("chalk");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
// 判断环境
const isDev = process.env.NODE_ENV === "development";

const port = 3001;

let webpackConfig = {};
if (isDev) {
  webpackConfig = require("../webpack/webpack.dev.config");
} else {
  webpackConfig = require("../webpack/webpack.prod.config");
}
let app = express();

const comliper = webpack(webpackConfig);
const devMiddle = webpackDevMiddleware(comliper);

app.use(devMiddle);
app.use(webpackHotMiddleware(comliper));

const host = "localhost";

app.listen(port, host, err => {
  console.log(`

Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}

${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);
});