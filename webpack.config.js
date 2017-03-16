var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR + '/js',
		filename: 'bundle.js'
	},
	devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
	module: {
		loaders:[
			{
				test: /\.jsx?/, exclude: /(node_modules)/, include: APP_DIR, loader: 'babel-loader'
			},
			{
				test: /\.css?/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			},
			// {
			// 	test: /\.css?/, loader: 'style-loader!css-loader'
			// },
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file-loader'
			}
		],
	},
	plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('../css/bundle.css')
    ] 
};

module.exports = config;
