const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "meetqyEditor",
      template: "./src/index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images"
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
