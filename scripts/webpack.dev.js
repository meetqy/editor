const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  module: {
    
  },

  devtool: "inline-cheap-source-map",

  devServer: {
    contentBase: '../demo',
    compress: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "meetqyEditor"
    })
  ],

  output: {
    filename: "meetqyEditor.js",
    path: path.resolve(__dirname, "../demo")
  }
};
