/* eslint-env node */

"use strict";

const env = process.env.NODE_ENV || "development";

if (["development", "production"].includes(env)) {
  module.exports = require(`./config/${env}`);
} else {
  throw new Error(`Invalid environment: ${env}`);
}
