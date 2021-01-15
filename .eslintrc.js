module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    semi: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['off', 'single'],
    'no-console': 'off',
    'react/prop-types': 'warn'
  }
}
