// entry -> output

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "none",
  // entry: "./src/app.js",
  entry: "./src/playground/redux.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: false,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  // solve missing process/browser module
  resolve: {
    fallback: {
      "process/browser": require.resolve("process/browser"),
    },
  },
};
