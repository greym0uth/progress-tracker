const path = require('path');
const webpack = require('webpack');
const {
	UglifyJsPlugin
} = webpack.optimize;
const CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins = [];

if (process.env.WEBPACK_ENV === 'production') {
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}));
	plugins.push(new UglifyJsPlugin({
		minimize: true
	}));
}

const static = path.join(__dirname, 'public-src', 'static');

module.exports = {
	entry: path.join(__dirname, 'public-src', 'index.js'),
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.(png|jpg|ico|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}]
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					name: '[name].[ext]'
				}
			}]
		}, {
			test: /\.css$/,
			use: [{
				loader: 'css-loader'
			}]
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['env']
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	},
	plugins: [
		...plugins,
		new CopyWebpackPlugin([{
			from: path.join(static, 'index.html'),
		}, {
			from: path.join(static, 'favicon.ico')
		}])
	]
};
