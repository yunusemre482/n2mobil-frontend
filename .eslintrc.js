module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
    ],

    overrides: [
        {
            files: ['test/**.spec.js'],
            env: {
                jest: true
            },
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
}
