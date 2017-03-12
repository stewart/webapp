"use strict";

const path = require("path");

let config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
}

module.exports = config;
