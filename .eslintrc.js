module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: [  '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'import', 'react', 'json-format' ],
  extends: [ "plugin:react/recommended",  'eslint:recommended', 'plugin:@typescript-eslint/recommended',  'prettier' ],
  rules: {
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'no-irregular-whitespace': 'off',
    'max-len': [ 'warn', { code: 120 } ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [ 'error' ],
    semi: [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'always' ],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0 } ],
    'react/jsx-filename-extension': [ 'warn', { extensions: [ '.tsx' ] } ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [ 'error' ],
    indent: [ 'error', 2 ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 2 },
      },
    ],
    'function-call-argument-newline': [ "error", "always" ]
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
}
