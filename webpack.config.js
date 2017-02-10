var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'artifacts');
var APP_DIR = path.resolve(__dirname, 'scripts');

var config = {
  entry: APP_DIR + '/frontpage.jsx',
  output: {
	path: BUILD_DIR,
	filename: 'bundle.js'
  },
  module: {
	loaders: [
	  {
	    test: /\.jsx?/,
		include: APP_DIR,
		loader: 'babel-loader'
    }
	]
}
};

module.exports = config;
