const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    scripts: './scripts.js',
    react_with_dom: './vendors/react-with-dom.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    watchFiles: ['**/*']
  },
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      minChunks: 2,
      chunks: 'all',
      minSize: 1,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {importLoaders: 1}
        },
          'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};
