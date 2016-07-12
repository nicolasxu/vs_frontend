'use strict';
// webpack.config.js

var webpack = require('webpack');
var	path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryBasePath  = __dirname;
var outputBasePath = __dirname + '/dist';


module.exports = {
	context: entryBasePath,
	entry:{
		app: ['webpack/hot/dev-server', './appEntry.js']
	},
	output: {
		path: outputBasePath,
		filename: './bundle.js',
		sourceMapFilename: '[file].map' // set source map output name rule
	}, 
	devtool: 'source-map', // enable source map
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template: 'html!index.html'}),
		// new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
	], 
	module: {
		loaders: [
			{test: /\.scss$/, loader: 'style!css!sass'}, 
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.html$ /, loader: 'raw'},
			{
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000" 
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } 
    ]
	}
}
