const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './ts/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.html?$/,
        exclude: /node_modules/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src/ts') ],
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      filename: 'index.html'
    })
  ],
  node: {
    fs: 'empty'
  }
};
