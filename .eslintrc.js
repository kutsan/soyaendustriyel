module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    semi: 'off',
    'react/require-default-props': 'off',
  },
}
