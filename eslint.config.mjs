// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import esLintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    eslint.configs.recommended,
    esLintConfigPrettier,
    ...tseslint.configs.recommended
);
