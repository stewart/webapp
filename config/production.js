/* eslint-env node */

"use strict";

const merge = require("webpack-merge");

const common = require("./common");

module.exports = merge(common, {
  devtool: "source-map",
});
