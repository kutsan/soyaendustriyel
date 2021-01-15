module.exports = {
  '*.{js,jsx}': ['eslint', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.css': ['stylelint --fix', 'stylelint']
}
