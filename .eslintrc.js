module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: [ "@typescript-eslint" ],
  extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
  rules: {
    semi: [ "error", "never" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "computed-property-spacing": [ "error", "always" ],
    "space-in-parens": [ "error", "always" ],
  },
}
