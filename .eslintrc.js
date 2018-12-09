module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/require-prop-types": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
