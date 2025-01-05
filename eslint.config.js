// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import vueslint from 'eslint-plugin-vue'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  vueslint.configs.recommended
);