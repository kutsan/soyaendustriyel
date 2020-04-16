module.exports = {
	'*.{js,jsx}': ['eslint', 'prettier --write'],
	'*.css': ['stylelint --fix', 'stylelint', 'prettier --write']
}
