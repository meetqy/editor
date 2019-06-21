const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge')

const prod = {
  mode: "production",

  output: {
    filename: "[name]_[hash].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  }
}

module.exports = merge(common, prod);