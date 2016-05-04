module.exports = {
    "ecmaFeatures": {
        "modules": true
    },
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType" : "module"
    },
    "rules": {
        "arrow-body-style"      : "error",
        "arrow-parens"          : [ "error", "as-needed" ],
        "arrow-spacing"         : "error",
        "generator-star-spacing": "error",
        "no-const-assign"       : "error",
        "no-duplicate-imports"  : [ "error", { "includeExports": true } ],
        "no-useless-constructor": "error",
        "no-var"                : "error",
        "object-shorthand"      : "error",
        "prefer-arrow-callback" : [ "error", { "allowNamedFunctions": true } ],
        "prefer-const"          : "error",
        "prefer-reflect"        : "error",
        "prefer-rest-params"    : "error",
        "prefer-spread"         : "error",
        "require-yield"         : "error",
        "template-curly-spacing": [ "error", "always" ],
        "yield-star-spacing"    : "error"
    }
};
