module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-order-config-yandex'],
	plugins: ['stylelint-order'],
	rules: {
		indentation: 'tab',
		'declaration-empty-line-before': [
			'never',
			{
				ignore: ['after-comment', 'after-declaration', 'inside-single-line-block']
			}
		],
		'color-hex-length': 'long'
	}
}
