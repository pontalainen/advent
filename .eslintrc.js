const fs = require('fs');

const strpkg = fs.readFileSync('package.json');
const _ = require('lodash');

const pkg = JSON.parse(strpkg.toString());

const rules = {
    'max-len': [
        'error',
        {
            code: 120,
            ignoreRegExpLiterals: true,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        },
    ],
    indent: [2, 4, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 1,
    eqeqeq: [2, 'smart'],
    'function-paren-newline': 0,
    'guard-for-in': 2,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'import/extensions': 0,
    'lines-between-class-members': 0,
    'new-cap': 0,
    'newline-per-chained-call': 0,
    'no-alert': 1,
    'no-loops/no-loops': 0,
    'no-new': 1,
    'no-param-reassign': ['error', { props: false }],
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-useless-computed-key': 0,
    'no-useless-constructor': 1,
    'no-console': 0,
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'node/no-missing-import': 0,
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unsupported-features': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'object-curly-newline': 0,
    'n/no-missing-import': 0,
    'n/no-extraneous-import': 0,
    'node/no-extraneous-import': 0,
    'optimize-regex/optimize-regex': 'warn',
    'prefer-destructuring': [
        'error',
        {
            VariableDeclarator: { array: false, object: true },
            AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
    ],
    'promise/avoid-new': 'off',
    'security/detect-object-injection': 0,
    'xss/no-location-href-assign': 2,
    'xss/no-mixed-html': 2,
    camelcase: 0,
    quotes: ['error', 'single'],
    strict: 1,
};

module.exports = _.merge(
    {
        plugins: [
            'no-jquery',
            'editorconfig',
            'eslint-comments',
            'import',
            'json',
            'lodash',
            'no-inferred-method-name',
            'no-loops',
            'node',
            'optimize-regex',
            'promise',
            'security',
            'xss',
        ],
        extends: [
            'airbnb-base',
            'plugin:eslint-comments/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:node/recommended',
            'plugin:security/recommended',
            'plugin:editorconfig/noconflict',
            'prettier',
        ],
        env: {
            es6: true,
            browser: true,
            mocha: true,
        },
        globals: {
            route: true,
            jQuery: true,
            $: true,
        },
        parserOptions: {
            parser: '@babel/eslint-parser',
            ecmaVersion: 2020,
            sourceType: 'module',
            jsx: false,
            useJSXTextNode: false,
            ecmaFeatures: {
                impliedStrict: true,
                globalReturn: false,
                jsx: false,
            },
            babelOptions: {
                configFile: './.babelrc',
            },
        },
        settings: {
            jest: {
                version: 27, // We need this here because of older stylelint plugin
            },
            'import/resolver': {
                'babel-module': {
                    allowExistingDirectories: true,
                    tryExtensions: ['.js', '.ts', '.vue'],
                },
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts'],
                'vue-eslint-parser': ['.vue'],
            },
            'import/cache': {
                lifetime: 60,
            },
            ecmascript: 6,
        },
        rules,
    },
    pkg.eslintConfig,
);
