module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
    'import',
    'react',
    'json-format' 
  ],
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier' 
  ],
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
    'max-len': [
      'warn',
      {
        code: 120 
      } 
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error' 
    ],
    semi: [
      'error',
      'never' 
    ],
    'object-curly-spacing': [
      'error',
      'always' 
    ],
    'array-bracket-spacing': [
      'error',
      'always' 
    ],
    'computed-property-spacing': [
      'error',
      'always' 
    ],
    'space-in-parens': [
      'error',
      'always' 
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0 
      } 
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.tsx' 
        ] 
      } 
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error' 
    ],
    indent: [
      'error',
      2 
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'array-bracket-newline': [
      "error",
      "always" 
    ],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'always',
        ArrayPattern: {
          minItems: 2 
        },
      },
    ],
    'function-call-argument-newline': [
      "error",
      "always" 
    ],
    "react/jsx-max-props-per-line": [
      'error',
      {
        "maximum": {
          "single": 1,
          "multi": 1 
        } 
      } 
    ],
    "react/jsx-curly-newline": [
      'error',
      {
        multiline: "require",
        singleline: "consistent" 
      } 
    ],
    "react/jsx-one-expression-per-line": [
      "error",
      {
        "allow": "none" 
      } 
    ],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line" 
      } 
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      'line-aligned' 
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "always" 
    ],
    'object-property-newline':[
      "error",
      {
        "allowAllPropertiesOnSameLine": false 
      } 
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true 
        }
      } 
    ],
    "react/no-unescaped-entities": "off",
  },
  settings: {
    'import/resolver': {
      typescript: {
      },
    },
    react: {
      version: 'detect',
    },
  },
}
