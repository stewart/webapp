/* eslint-env node */

"use strict";

const merge = require("webpack-merge");

const common = require("./common");

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",

  output: {
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
