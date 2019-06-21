const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common');
const merge = require('webpack-merge')

const dev = {
  mode: "development",

  devtool: "cheap-source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    hotOnly: true
  },

  output: {
    filename: "[name]_[hash].js",
    path: path.resolve(__dirname, "build")
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/main.css")
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 2,
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        })
      },
    ]
  }
}

module.exports = merge(common, dev);