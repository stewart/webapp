/* eslint-env node */

"use strict";

const path = (...args) => require("path").resolve(__dirname, "..", ...args);

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
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
};
