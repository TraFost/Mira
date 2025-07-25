import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
      'plugin:prettier/recommended',
    ],
    rules: {
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'typescript-eslint/no-explicit-any': 'off',
    },
    parser: '@typescript-eslint/parser',
  }),
];

export default eslintConfig;
