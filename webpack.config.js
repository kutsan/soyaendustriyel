const path = require('path')

const prod = process.env.NODE_ENV === 'production'

const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/client.tsx'),

  devtool: prod ? false : 'inline-source-map',

  mode: prod ? 'production' : 'development',

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.join(__dirname, '/build/'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      '@': path.join(__dirname, '/src/')
    }
  },

  stats: 'minimal',

  devServer: {
    open: true,
    host: '0.0.0.0',
    static: path.join(__dirname, '/build/'),
    historyApiFallback: true
  },

  optimization: {
    minimizer: prod
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: prod
          ? [
              { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      ['autoprefixer'],
                      ['cssnano', { preset: 'default' }]
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
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        { from: 'src/public/assets/' },
        { from: 'src/public/config/' },
        { from: 'src/public/images/' }
      ]
    }),
    ...(prod
      ? [
          new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'sw.js'
          })
        ]
      : [])
  ]
}
