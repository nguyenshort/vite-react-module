module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "prettier.trailingComma": "off",
        "semi": "off",
        "@typescript-eslint/semi": ["off"],
        "@typescript-eslint/no-var-requires": "off",
        "max-len": ["error", { "code": 150 }],
        '@typescript-eslint/ban-ts-comment': 'off'
    },
};
