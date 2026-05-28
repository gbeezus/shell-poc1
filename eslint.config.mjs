// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import f1BaseConfig from '@forumone/eslint-config-es5';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  f1BaseConfig,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'react/jsx-boolean-value': ['error', 'always'],
    },
  },
  {
    files: ['**/*.stories.tsx', '**/*Args.tsx'],
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    files: ['next.config.js', '.storybook/**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: [
      'lib/drupal/generate-graphql-types.ts',
      'util/drupal/prepMenuItems.ts',
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Ignore generated Icons
    '**/icon/icons/*.tsx',
  ]),
  ...storybook.configs['flat/recommended'],
]);

export default config;
