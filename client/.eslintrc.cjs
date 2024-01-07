module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    // 'airbnb/hooks',
    // 'plugin:react/jsx-runtime',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['off', 'windows'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/prefer-default-export': [
      'off',
    ],
    'import/extensions': ['error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
