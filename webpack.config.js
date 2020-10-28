'use strict'

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { filename, library } = require('./config/constants')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    libraryTarget: 'umd',
    globalObject: 'this',
    library
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
