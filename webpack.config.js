const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './example',
  output: {
    path: path.resolve(__dirname, './example/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  externals: env.production ? {
    vue: 'Vue',
  } : {},
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler',
    },
    extensions: ['.js', '.json', '.ts', '.d.ts', '.vue'],
  },
});
