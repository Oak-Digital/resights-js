// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
      'src/generated/**/*.ts',
      'data/**/*',
    ],
  },
  {
    files: ['src/generated/**/*.ts', 'data/**/*'],
    rules: {
      // overrides
      'eslint-comments/no-unlimited-disable': 'off',
      'no-irregular-whitespace': 'off',
    },
  },
  {
    files: ['src/cli/**/*.ts'],
    rules: {
      // overrides
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
