const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({ filename: 'style.css' });

module.exports = {
  entry: {
     app: [
       'babel-polyfill',
       './src/index'
     ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
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
        test: /\.json$/,
        loader: 'json-loader'
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
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src', 'helpers'),
      gql: path.resolve(__dirname, 'src', 'gql'),
      common: path.resolve(__dirname, 'src', 'namespaces', 'common'),
      customization: path.resolve(__dirname, 'src', 'customization')
    }
  },
  plugins: [
    extractSass
  ]
};
