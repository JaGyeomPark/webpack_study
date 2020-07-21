const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    lib: [
      'lodash'
    ],
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]',
      entryOnly: true,
    })
  ]
};