'use strict';

module.exports = {
    "globals": {
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    },
    'plugins': ['react'],
    'env': {
        'browser': true,
        'es6': true,
        'mocha': true,
        'commonjs': true,
        'node': true
    },
    'rules': {
        'comma-dangle': [2, 'always-multiline'],
        'no-cond-assign': [2, 'always'],
        'no-console': 0,
        'no-constant-condition': 1,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 1,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [1, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 1,
        'no-unreachable': 2,
        'use-isnan': 1,
        'valid-jsdoc': 2,
        'valid-typeof': 2,

        'accessor-pairs': 2,
        'block-scoped-var': 1,
        'complexity': [1, 10],
        'consistent-return': 1,
        'curly': [2, 'multi-line'],
        'default-case': 2,
        'dot-location': [2, 'property'],
        'dot-notation': [2, {
            'allowKeywords': true
        }],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 0,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 0,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': [2, {
            'ignore': [-1, 0, 1, 2, 10, 100, 60, 1000]
        }],
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 0,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': [0, {
            'props': false
        }],
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 0,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 1,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 0,
        'wrap-iife': 2,
        'yoda': 2,
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 0,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 0,
        'no-unused-vars': [1, {
            'args': 'none'
        }],
        'no-use-before-define': 1,
        'callback-return': 2,
        'global-require': 0,
        'handle-callback-err': 1,
        'no-mixed-requires': [1, {
            'grouping': true
        }],
        'no-new-require': 1,
        'no-path-concat': 2,
        'no-process-exit': 2,
        'no-restricted-modules': 0,
        'no-sync': 0,


        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [1, '1tbs', {
            'allowSingleLine': true
        }],
        'comma-spacing': [1, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'me'],
        'eol-last': 0,
        'func-names': 0,
        'indent': [1, 4, { 'SwitchCase': 1 }],
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'linebreak-style': 2,
        'lines-around-comment': [0, {
            'beforeBlockComment': true
        }],
        'max-depth': [1, 4],
        'new-cap': 1,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],
        'no-negated-condition': 0,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-spaced-func': 2,
        'no-trailing-spaces': 0,
        'no-underscore-dangle': 2,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': 0,
        'one-var': [2, 'never'],
        'operator-assignment': [0, 'never'],
        'operator-linebreak': [1, 'after', {
            'overrides': {
                '|': 'after'
            }
        }],
        'padded-blocks': [0, 'never'],
        'quote-props': [2, 'as-needed'],
        'quotes': [2, 'single'],
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'semi': [2, 'always'],
        'sort-vars': 0,
        'keyword-spacing': ['error', {'before': true, 'after': true, 'overrides': {}}],
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': [1, {
            'int32Hint': false
        }],
        'space-unary-ops': 2,
        'wrap-regex': 2,

        'arrow-parens': [1, 'always'],
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        'constructor-super': 2,
        'generator-star-spacing': [1, {
            'before': true,
            'after': false
        }],
        'no-arrow-condition': 0,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-var': 2,
        'object-shorthand': 0,
        'prefer-arrow-callback': 1,
        'prefer-const': 1,
        'prefer-spread': 1,
        'prefer-template': 1,

        'react/forbid-prop-types': 1,
        'react/jsx-boolean-value': [1, 'never'],
        'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-handler-names': [1, {
          'eventHandlerPrefix': 'handle',
          'eventHandlerPropPrefix': 'on'
        }],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-indent': [1, 4],
        'react/jsx-key': 2,
        'react/jsx-no-bind': [1, {
          'ignoreRefs': false,
          'allowArrowFunctions': true,
          'allowBind': true
        }],
        'react/jsx-no-duplicate-props': [2, { 'ignoreCase': false}],
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 1,
        'react/no-is-mounted': 1,
        'react/no-multi-comp': 1,
        'react/no-unknown-property': 1,
        'react/prefer-es6-class': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 2,
        'react/jsx-wrap-multilines': 1
    }
}
