module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  extends: [
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/eslint-recommended', // typescript
    'plugin:@typescript-eslint/recommended', // typescript
    'plugin:import/recommended', // import
    'plugin:import/typescript', // import
    'plugin:jsx-a11y/recommended', // jsx-ally
    'plugin:prettier/recommended', // prettier
    'plugin:react-hook-form/recommended', // react
    'plugin:react-hooks/recommended', // react
    'plugin:react/recommended', // react
    'plugin:testing-library/dom', // testing
    'plugin:testing-library/react', // testing
    'plugin:unicorn/recommended', // unicorn
    'prettier', // prettier
    'next/core-web-vitals', // next
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    'react-hook-form',
    'react-hooks',
    'react',
    'simple-import-sort',
    'testing-library',
    'unicorn',
  ],
  rules: {
    eqeqeq: ['error', 'smart'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'never'],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        allowStandaloneDeclarations: false,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'prefer-const': ['error'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^react-.*$'], // React
          [
            '^@\\w', // Packages that start with '@'
            '^', // Anything else
          ],
          ['^@/'], // Absolute imports
          ['^\\.'], // Packages that start with '.'
          ['^\\u0000'], // Side effect imports
        ],
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs'],
        paths: ['**/*'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
    jest: {
      version: 28,
    },
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.lintstagedrc.js',
        '.prettierrc.js',
        'babel.config.js',
        'commitlint.config.js',
        'jest.config.js',
        'next.config.js',
      ],
      rules: {
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest-dom/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:jest/recommended',
      ],
      files: ['**/*.test.*'],
      plugins: ['jest-dom', 'jest-formatting', 'jest'],
    },
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  ignorePatterns: ['react-app-env.d.ts'],
};
