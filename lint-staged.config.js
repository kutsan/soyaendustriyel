module.exports = {
  '*.{js,ts,tsx}': ['eslint', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
  '*.css': ['stylelint --fix', 'stylelint']
}
