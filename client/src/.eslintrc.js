module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-alert': 0,
    'no-restricted-globals': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/label-has-associated-control': 0,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // should add ".ts" if typescript project,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 0,
    'no-debugger': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-undef': 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-shadow': 0,
    'no-unused-vars': 'warn',
  },
};
