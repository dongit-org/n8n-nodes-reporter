import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import n8nNodesBase from 'eslint-plugin-n8n-nodes-base';

export default [
    {
        ignores: ['node_modules/**', 'dist/**'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'n8n-nodes-base': n8nNodesBase,
        },
        rules: {
            ...n8nNodesBase.configs.community.rules,
            'n8n-nodes-base/node-param-display-name-miscased': 'off',
            'n8n-nodes-base/node-param-description-miscased': 'off',
        },
    },
];

