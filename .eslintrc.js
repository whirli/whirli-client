module.exports = {
    root: true, // Don't search up parent folders for more eslintrc files
    plugins: ['@typescript-eslint'],
    parserOptions:  {
        parser:  '@typescript-eslint/parser',
        ecmaVersion: 6,
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    extends:  [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true, // Allow `const { props, state } = this`; false by default
                allowedNames: ['self'], // Allow `const self = this`; `[]` by default
            },
        ],
    },
};
