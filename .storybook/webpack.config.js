// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


const path = require('path');
module.exports = {
  plugins: [
    // your custom plugins
  ],
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
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }

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
 
};
