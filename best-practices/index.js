module.exports = {
    "rules": {
        "accessor-pairs"       : "error",
        "array-callback-return": "error",
        "complexity"           : [ "error", 4 ],
        "consistent-return"    : "warn",
        "curly"                : [ "error", "all" ],
        "dot-location"         : [ "error", "property" ],
        "dot-notation"         : "error",
        "eqeqeq"               : "error",
        "no-caller"            : "error",
        "no-else-return"       : "error",
        "no-eval"              : "error",
        "no-extend-native"     : "error",
        "no-extra-bind"        : "error",
        "no-floating-decimal"  : "error",
        "no-implicit-coercion" : "error",
        "no-implied-eval"      : "error",
        "no-invalid-this"      : "error",
        "no-labels"            : "error",
        "no-lone-blocks"       : "error",
        "no-multi-spaces"      : [ "error", { "exceptions": {
            "AssignmentExpression": true,
            "Property"            : true,
            "VariableDeclarator"  : true
        } } ],
        "no-multi-str"                : "error",
        "no-native-reassign"          : "error",
        "no-new-wrappers"             : "error",
        "no-octal-escape"             : "error",
        "no-return-assign"            : [ "error", "always" ],
        "no-self-compare"             : "error",
        "no-sequences"                : "error",
        "no-throw-literal"            : "error",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions"       : [ "error", {
            "allowShortCircuit": true
        } ],
        "no-useless-call"       : "error",
        "no-useless-concat"     : "error",
        "no-useless-constructor": "error",
        "no-useless-escape"     : "error",
        "no-with"               : "error",
        "radix"                 : "error",
        "wrap-iife"             : [ "error", "inside" ],
        "yoda"                  : "error"
    }
};
