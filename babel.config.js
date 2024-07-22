module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],

	// disable decorators before syntax error is fixed
	plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
}
