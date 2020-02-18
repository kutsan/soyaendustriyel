module.exports = {
	root: true,

	env: {
		node: true,
		es6: true,
		browser: true,
		jest: true
	},

	extends: ['eslint:recommended', 'plugin:react/recommended'],

	plugins: ['react'],
	settings: {
		react: { version: 'detect' }
	},

	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module',
		allowImportExportEverywhere: false
	},

	rules: {
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['off', 'single'],
		semi: ['off', 'always'],
		'no-console': 0,
		'react/display-name': 0
	}
}
