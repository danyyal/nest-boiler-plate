module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin',"simple-import-sort","import"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'error',
    'complexity': 'off',
    'curly': 'error',
    'valid-jsdoc': 0,
    'prettier/prettier': [
      'error',
      {
        'arrowParens': 'avoid',
        'singleQuote': true,
        'trailingComma': 'all'
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': 'multiline-block-like',
        'next': '*'
      },
      {
        'blankLine': 'never',
        'prev': 'case',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': ['multiline-const', 'multiline-let', 'multiline-var'],
        'next': '*'
      },
      {
        'blankLine': 'never',
        'prev': ['singleline-const', 'singleline-let', 'singleline-var'],
        'next': [
          'singleline-const',
          'singleline-let',
          'singleline-var',
          'multiline-const',
          'multiline-let',
          'multiline-var'
        ]
      }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  },
};