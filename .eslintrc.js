require('babel-register');
const path = require('path');

module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'immutablejs'
  ],
  'rules': {
    'brace-style': 0,
    'immutablejs/no-native-map-set': 'error',
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'newline-per-chained-call': 1,
    'no-mixed-operators': 0,
    'no-param-reassign': 1,
    'radix': 1,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/jsx-no-bind': [
      'error'
    ],
    'react/prefer-stateless-function': 0,
    'strict': 0
  },
  'env': {
    'browser': true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'eslint.js'),
      },
    }
  },
}
