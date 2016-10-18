var express = require('express');
var bodyParser = require("body-parser");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var routes = require('./routes');

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
app.use('/api', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
