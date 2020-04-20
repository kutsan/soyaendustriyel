module.exports = {
	root: true,

	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},

	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],

	env: {
		node: true,
		browser: true,
		jest: true
	},

	plugins: ['react', 'react-hooks'],
	settings: {
		react: { version: 'detect' }
	},

	rules: {
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['off', 'single'],
		semi: ['off', 'always'],
		'no-console': 0,
		'react/display-name': 0,
		'react/prop-types': 1
	}
}
