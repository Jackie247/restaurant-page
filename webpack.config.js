const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname,'./src/index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'dist'),
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template:'src/template.html',
    })
  ]
};