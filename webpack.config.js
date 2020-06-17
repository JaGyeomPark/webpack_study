// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');
const argv = require("minimist")(process.argv.slice(2))

console.log(argv)

module.exports = {
  entry: {
    index: `./src/index.js`,
    index2: `./src/index2.js`,
    index3: `./src/index3.js`,
    vender: ['lodash']
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      name: 'vender',
      chunks: 'initial',
    },
  },
};