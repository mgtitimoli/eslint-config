module.exports = {
    "extends": [
        "./best-practices",
        "./variables",
        "./stylistic",
        "./es6"
    ].map(require.resolve)
};
