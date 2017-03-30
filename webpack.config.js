var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'artifacts');
var APP_DIR = path.resolve(__dirname, 'scripts');

var config = {
  entry: {
    front: APP_DIR + '/frontpage.jsx',
    projects: APP_DIR + '/projects.jsx',
    blog: APP_DIR + '/blog.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: "[name]-bundle.js"
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
