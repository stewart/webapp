/* eslint-env node */

"use strict";

const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const common = require("./common");

const css = new ExtractTextPlugin("style.css");

module.exports = merge(common, {
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: css.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
    ],
  },

  plugins: [ css ],
});
