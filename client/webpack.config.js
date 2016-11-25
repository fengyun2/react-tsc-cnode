"use strict"

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
    // name: 是入口文件的键名 filename 是输出的文件名
    new webpack
        .optimize
        .CommonsChunkPlugin({name: "lib", filename: "lib.js"}),
    // new webpack.DefinePlugin({'process.env': config.dev.env}),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage

    new webpack
        .optimize
        .OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name]-[hash].css'),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({filename: 'index.html', template: 'index.html', inject: true})
]

if (process.env.NODE_ENV === "prod") {
    plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: false, mangle: false}))
}

module.exports = {
    entry: {
        app: "./src/index.tsx",
        lib: [
            "react",
            "react-dom",
            "redux",
            "redux-thunk",
            "react-redux",
            "react-router"
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name]-[hash].js'
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
        alias: { // 自从用上了 typescript, 这个玩意识别不了呀
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                loader: "babel!ts"
            },
            // {
            //     test: /\.scss$/,
            //     loader: "style!css!sass"
            // }, {
            //     test: /\.css$/,
            //     loader: "style!css"
            // },

            {
                        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            },
                        {
                        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
            },
                        {
                        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less')
            },


            {
                test: /.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            }
        ],
    },
    plugins: plugins,
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
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