module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // 'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    // 'linebreak-style': ['error', process.platform === 'win64' ? 'windows' : 'unix'],
    // 'prettier/prettier': 'error' // that can be problematic to giant instructions
  },
};
