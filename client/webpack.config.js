const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: {
     'app': [
       'babel-polyfill',
       'react-hot-loader/patch',
       './src/index'
     ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
            use: [{
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }],
            fallback: 'style-loader'
        })
    }]
  },
  plugins: [
    extractSass,
  ]
};
