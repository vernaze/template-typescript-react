const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
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
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src/ts') ],
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  devtool: 'source-map',
  devServer: {
    // https: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    hot: true,
    port: 9999
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
