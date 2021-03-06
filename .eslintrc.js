module.exports = {
  env: {
    browser: true,
    es6: true
  },

  extends: "eslint:recommended",

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    camelcase: [2, {properties: "always"}],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, {before: false, after: true}],
    "comma-style": [2, "last"],
    "handle-callback-err": [2, "^.*(e|E)rr" ],
    indent: [2, 2],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "linebreak-style": [ "error", "unix" ],
    "max-depth": [1, 3],
    "max-len": [1, 80, 4],
    "max-nested-callbacks": [1, 3],
    "no-cond-assign": 2,
    "no-constant-condition": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": 2,
    "no-nested-ternary": 2,
    "no-self-compare": 2,
    "quote-props": [2, "as-needed"],
    "no-sync": 1,
    "no-throw-literal": 2,
    "no-underscore-dangle": 0,
    "quote-props": [2, "as-needed"],
    quotes: [2, "double", "avoid-escape"],
    radix: 2,
    "semi-spacing": [2, { before: false, after: true }],
    semi: [2, "always"],
    "keyword-spacing": [2, { before: true, after: true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [2, "never"],
    "spaced-comment": [2, "always"],
    "valid-jsdoc": 2,
    yoda: [2, "never"],
  },

  plugins: [ "react" ]
};
