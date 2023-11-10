module.exports = {
    plugins: [
        // '@stylistic'
    ],
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
        "quotes": 0,
        "no-alert": 0,
        "no-console": 0,
        "one-var": 0,
        "no-plusplus": 0,
        "indent": ["error", 4],
        "max-len": 0,
        // '@stylistic/indent': ['error', 2],
    },
};
