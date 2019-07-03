const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'meetqy-editor.min.js',
    library: 'MeetqyEditor',
    libraryTarget: 'umd'
  },

  plugins: [
    new CleanWebpackPlugin(),
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
