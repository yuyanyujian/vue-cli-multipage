module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  // add your custom rules here
  rules: {
    indent: 0,
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': ['off'],
    'no-extend-native': ['error', {
      'exceptions': ['Object', 'Date', 'String', 'Array', 'Function']
    }],
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false
    }],
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
