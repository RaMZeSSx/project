module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'strict': 0,
    "quotes": ["error", "single"],
    "no-alert": 0,
    "no-console": 0,
    "one-var": 0,
    "no-plusplus": 0,
  },
};
