module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    'ecmaVersion': 'latest',
  },
  rules: {
    'max-len': ['error', {'code': 120}],
    'eol-last': ['error', 'always'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
