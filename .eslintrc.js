module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'prettier', 'prettier/@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true
  },
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    semi: 'off',
    'comma-dangle': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ]
    }
  ]
}
