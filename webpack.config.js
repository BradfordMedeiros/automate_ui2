const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],

        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        IS_PRODUCTION: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

