const path = require("path");
const ip = require("ip");
const chalk = require("chalk");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const port = 3001;

let webpackConfig = require("../webpack/webpack.dev.config");
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