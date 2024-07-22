module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:prettier/recommended', // Add this line
		'prettier' // Add this line
	],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			legacyDecorators: true
		}
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }], // Add this line
		'no-unused-vars': 'off', // Add this line
		'trailingComma': 'none' // Add this line
	}
}
