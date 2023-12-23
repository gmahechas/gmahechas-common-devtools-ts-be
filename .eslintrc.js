module.exports = {
	'env': {
		'es2021': true,
		'node': true,
	},
	'root': true,
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': '2021',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'prettier',
	],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'rules': {
		'@typescript-eslint/explicit-function-return-type': [
			'error', {
				'allowExpressions': true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				'arrowParameter': true,
				'memberVariableDeclaration': true,
				'parameter': true,
				'propertyDeclaration': true,
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				'vars': 'all',
				'args': 'after-used',
				'ignoreRestSiblings': false,
			},
		],
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/naming-convention': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				'path': 'always',
				'types': 'prefer-import',
				'lib': 'always'
			}
		],
		"@typescript-eslint/unified-signatures": "error",

		// moving to eslint-stylistic
		"semi": "off",
    "@typescript-eslint/semi": "error",
		"padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "error",
	},
};
