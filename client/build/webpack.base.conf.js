/**
* @Date:   2016-09-27T09:55:50+08:00
* @Last modified time: 2016-10-07T09:33:07+08:00
*/

var path = require('path')
const autoprefixer = require('autoprefixer')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '',
      '.ts',
      '.tsx',
      '.js',
      '.vue',
      '.jsx',
      '.json',
      '.html',
      '.css',
      '.scss',
      '.less'
    ],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      }, {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: projectRoot,
          exclude: /node_modules/
      },
      {
          test: /\.scss$/,
          loader: ['style', 'css!sass'],
          include: projectRoot,
          exclude: /node_modules/
      },
      {
          test: /\.less$/,
          loader: ['style', 'css!less'],
          include: projectRoot,
          exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.html$/,
        loader: 'vue-html'
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  postcss: [
    autoprefixer({
        flexbox: true,
        browsers: ['> 0.1%'],
        cascade: false,
        supports: true
    })
    ],
}
