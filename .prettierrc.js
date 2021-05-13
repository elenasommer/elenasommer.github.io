module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    arrowParens: 'always',

    overrides: [
        {
            files: '*.njk',
            options: {
                parser: 'html',
            },
        },
    ],
};
