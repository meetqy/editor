const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/core/index.js",
  },

  output: {
    filename: "[name]_[hash].js",
    path: path.resolve(__dirname, 'dev'),
    library: 'MeetqyEditor',
    libraryTarget: 'umd',
    libraryExport: 'default',  // new 类名.defalut的方式，变成  new 类名
  },

  devServer: {
    contentBase: path.join(__dirname, "dev"),
    hot: true,
  },

  devtool: "cheap-source-map",
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "meetqyEditor",
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
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
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts"
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              importLoaders: 2
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
