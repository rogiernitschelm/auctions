const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
     app: [
       'babel-polyfill',
       'react-hot-loader/patch',
       'webpack-dev-server/client?http://localhost:8080',
       'webpack/hot/only-dev-server',
       './src/index'
     ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src', 'helpers'),
      gql: path.resolve(__dirname, 'src', 'gql'),
      common: path.resolve(__dirname, 'src', 'namespaces', 'common')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    compress: true,
    port: 8080,
    hot: true
  }
};
