module.exports = {
    "rules": {
        "array-bracket-spacing"    : [ "error", "always" ],
        "brace-style"              : [ "error", "stroustrup" ],
        "camelcase"                : [ "error", { "properties": "always" } ],
        "comma-spacing"            : "error",
        "comma-style"              : "error",
        "computed-property-spacing": "error",
        "eol-last"                 : "error",
        "func-style"               : [ "error", "declaration" ],
        "indent"                   : [ "error", 4, { "SwitchCase": 1 } ],
        "key-spacing"              : [ "error", { "align": "colon" } ],
        "keyword-spacing"          : "error",
        "linebreak-style"          : "error",
        "lines-around-comment"     : [ "error", {
            "beforeBlockComment": true,
            "beforeLineComment" : true
        } ],
        "max-depth"               : "error",
        "max-len"                 : "error",
        "max-nested-callbacks"    : [ "error", 3 ],
        "max-params"              : [ "warn", 4 ],
        "max-statements"          : [ "error", { "max": 20 } ],
        "max-statements-per-line" : "error",
        "new-cap"                 : "error",
        "new-parens"              : "error",
        "newline-after-var"       : "error",
        "newline-per-chained-call": [ "error", {
            "ignoreChainWithDepth": 1
        } ],
        "no-array-constructor"         : "error",
        "no-bitwise"                   : [ "error", { "allow": [ "^" ] } ],
        "no-lonely-if"                 : "error",
        "no-mixed-spaces-and-tabs"     : "error",
        "no-multiple-empty-lines"      : [ "error", { "max": 1 } ],
        "no-nested-ternary"            : "error",
        "no-new-object"                : "error",
        "no-spaced-func"               : "error",
        "no-trailing-spaces"           : "error",
        "no-underscore-dangle"         : "off",
        "no-unneeded-ternary"          : "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing"         : [ "error", "always" ],
        "one-var"                      : [ "error", "never" ],
        "quote-props"                  : [ "error", "consistent" ],
        "quotes"                       : [ "error", "double" ],
        "semi"                         : "error",
        "space-before-blocks"          : "error",
        "space-before-function-paren"  : [ "error", {
            "anonymous": "always",
            "named"    : "never"
        } ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment" : "error"
    }
};
