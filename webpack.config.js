/* eslint indent: "off", no-mixed-spaces-and-tabs: "off" */

const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

module.exports = {
	entry: {
		client: path.join(__dirname, '/src/client.jsx'),
		vendor: ['react', 'react-dom']
	},

	devtool: isProd ? false : 'eval-source-map',

	output: {
		filename: '[name].bundle.[hash].js',
		path: path.join(__dirname, '/build/'),
		publicPath: '/'
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules'],
		alias: {
			'@': path.join(__dirname, '/src/')
		}
	},

	devServer: {
		hot: true,
		open: true,
		host: '0.0.0.0',
		contentBase: path.join(__dirname, 'build'),
		stats: 'errors-only',
		historyApiFallback: true,
		clientLogLevel: 'silent'
	},

	mode: isProd ? 'production' : 'development',

	optimization: {
		minimizer: isProd
			? [
					new TerserPlugin({
						terserOptions: {
							output: {
								comments: false
							}
						},
						extractComments: false
					})
			  ]
			: [],
		splitChunks: {
			chunks: 'all'
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: isProd
					? [
							{ loader: MiniCssExtractPlugin.loader },
							{ loader: 'css-loader' },
							{
								loader: 'postcss-loader',
								options: {
									plugins: () => {
										return [
											require('autoprefixer')({
												overrideBrowserslist: 'last 2 versions'
											}),
											require('cssnano')({
												preset: 'default'
											})
										]
									}
								}
							}
					  ]
					: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg$/,
				loader: '@svgr/webpack'
			}
		]
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			inject: 'body',
			minify: isProd
				? {
						collapseWhitespace: true,
						collapseBooleanAttributes: true,
						minifyCSS: true,
						minifyJS: true,
						processConditionalComments: true,
						quoteCharacter: '"'
				  }
				: false
		}),
		new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'async' }),
		new MiniCssExtractPlugin({ filename: 'styles.bundle.[contenthash].css' }),
		new CopyPlugin([
			{ from: 'src/public/assets/' },
			{ from: 'src/public/config/' },
			{ from: 'src/public/images/' }
		])
	]
}
