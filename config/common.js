/* eslint-env node */

"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = (...args) => require("path").resolve(__dirname, "..", ...args);

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path("build"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
