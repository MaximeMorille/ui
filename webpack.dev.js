const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3033",
    "webpack/hot/only-dev-server",
    "./demos/index.jsx"
  ],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "./dist/public"),
    port: 3033,
    host: "localhost",
    publicPath: "/",
    historyApiFallback: true,
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, loader: "file?name=[name].[ext]" }
    ],
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader",],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules",],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
      },
    ],
  },  
  plugins: [
    /*new webpack.HotModuleReplacementPlugin(),*/
    new webpack.NamedModulesPlugin(),
  ]
});
