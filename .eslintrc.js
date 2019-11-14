module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  rules: {
    'linebreak-style': [1, 'windows'],
    'no-plusplus': [1, {
      'allowForLoopAfterthoughts': true
    }],
    'comma-dangle': [1, 'never'],
    'space-before-function-paren': [1, 'always'],
    'no-underscore-dangle': [1, {
      allow: ['__REDUX_DEVTOOLS_EXTENSION__']
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx']
    }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  }
}
