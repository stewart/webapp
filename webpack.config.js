/* eslint-env node */

"use strict";

const path = require("path");

let config = {
  entry: "./src/index.js",

  devtool: "cheap-module-eval-source-map",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },

      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = config;
