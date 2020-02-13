const webpack = require('webpack')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

module.exports = {
	entry: {
		client: path.join(__dirname, '/src/client.jsx'),
		vendor: ['react']
	},

	devtool: isProd ? false : 'eval-source-map',

	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, '/build')
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules']
	},

	devServer: {
		contentBase: path.join(__dirname, 'build'),
		stats: 'errors-only',
		historyApiFallback: true
	},

	mode: isProd ? 'production' : 'development',

	optimization: {
		minimize: isProd ? true : false
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
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles.bundle.css' }),
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
		})
	]
}
