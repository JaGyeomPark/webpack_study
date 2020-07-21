const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/lib-manifest.json'),
    }),
    new HtmlWebpackPlugin({
      template: "dist/main.html",
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `
        <html>
          <title>hello</title>
          <head>
            <script src="lib.js"></script>
            ${htmlWebpackPlugin.tags.headTags}
          </head>
          <body>
            ${htmlWebpackPlugin.tags.bodyTags}
            ${console.log(htmlWebpackPlugin)}

          </body>
        </html>
      `
    }),
  ]
};