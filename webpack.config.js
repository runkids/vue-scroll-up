const webpack = require('webpack');

// 這個插件可以用來提取CSS程式, 使其變成一個獨立CSS檔
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// 這個插件可以複製檔案，有時候我們並不想對某些檔案做處理，只想單純使用它，就可以用這個插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');

// 這個變數儲存目前 env, 可以用這個變數決定要不要壓縮程式碼等等
const isProduction = (process.env.NODE_ENV === 'production')

// 定義網站根目錄函數
const root = src => path.join(__dirname, './', src)

// 定義一個方便取得路徑的函數
const src = file => path.join(root('resource/script'), file)

// 隱藏警告
// process.noDeprecation = true

const webpackConfig = {
    entry:
    {
        app: './src/main.js',
        //vendors: ['jquery', 'axios', 'lodash', 'd3'] //第三方JS集中在此
    },
    output: {
        filename: 'vue-scroll-up.js',  //檔案輸出名稱
        path: path.resolve(__dirname, 'dist'), //檔案輸出路徑
        publicPath: '/dist/', //server路徑
        library: 'CountTo',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    devtool: !isProduction ? "inline-source-map" : false, 

    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'], //當我們使用 import 或 require 不帶副檔名時
        alias: {
          'vue':'vue/dist/vue.js',//指定 vue 對應使用的真實 js 檔案
          '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader', 
                    }, 
                    {
                        loader: 'css-loader', 
                    }, 
                    {
                        loader: 'postcss-loader', 
                        options: {
                            plugins: function () { 
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, 
                    {
                        loader: 'sass-loader' 
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': process.env.NODE_ENV
        }),


        new ExtractTextPlugin("style.css"),

        // 利用 webpack.ProvidePlugin 讓 $ 和 jQuery 可以連結到 jquery library
        new webpack.ProvidePlugin({ 
        }),
    ],

    devServer: {
        inline: true , 
        port: 8080,
        hot: true,
    }

}   

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(
        //如果執行環境是 Production, 那麼就將程式 minimize,uglify
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new UglifyJsPlugin({
            sourceMap: true,
            parallel: true
        }),
    );
}

module.exports = webpackConfig;