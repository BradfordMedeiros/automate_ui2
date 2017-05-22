const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = require('./env');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'eval-source-map',
  output: {
    filename: 'build/bundle.js'
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
    new CleanPlugin('build/'),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({ minimize: true, compress: { warnings: false } }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
  ],
};

