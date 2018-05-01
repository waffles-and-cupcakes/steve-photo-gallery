const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      'jsx': true
    }
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-uses-vars': ERROR,
    'react/jsx-uses-react': ERROR,
    'arrow-parens': OFF,
    'no-plusplus': OFF
  }
};