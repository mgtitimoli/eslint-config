# [Best Practices](http://eslint.org/docs/rules/#best-practices)

## Usage

`.eslintrc.json`

```json
{
    "extends": "@mgtitimoli/eslint-config/best-practices"
}
```

## Rules settings

### [accesor-pairs](http://eslint.org/docs/rules/accessor-pairs)

> Enforces the specification of a getter whenever a setter has been declared

#### configuration

```json
{
    "accessor-pairs": "error"
}
```

### [array-callback-return](http://eslint.org/docs/rules/array-callback-return)

> Prevents missing **return** statements array’s methods callbacks

#### configuration

```json
{
    "array-callback-return": "error"
}
```

### [complexity](http://eslint.org/docs/rules/complexity)

> Enforces [cyclomatic complexity](http://jscomplexity.org/complexity) to be less or equal to 4

#### configuration

```json
{
    "complexity": [ "error", 4 ]
}
```

### [consistent-return](http://eslint.org/docs/rules/consistent-return)

> Warns if there is an empty **return** and there is already another that returns a value

#### configuration

```json
{
    "consistent-return": "warn"
}
```

### [curly](http://eslint.org/docs/rules/curly)

> Enforces to wrap all **block** statements with curly braces

#### configuration

```json
{
    "curly": [ "error", "all" ]
}
```

### [dot-location](http://eslint.org/docs/rules/dot-location)

#### configuration

> Enforces the dot in a member expression to be on the same line as the property portion

```json
{
    "dot-location": [ "error", "property" ]
}
```

#### example

```javascript
// BAD
var prop1 = obj.
    prop1;

// GOOD
var prop2 = obj
    .prop2;
```

### [dot-notation](http://eslint.org/docs/rules/dot-notation)

> Enforces the use of the dot notation style whenever possible

#### configuration

```json
{
    "dot-notation": "error"
}
```

### [eqeqeq](http://eslint.org/docs/rules/eqeqeq)

> Disallows the use of type-unsafe equality operators

#### configuration

```json
{
    "eqeqeq": "error"
}
```

### [no-caller](http://eslint.org/docs/rules/no-caller)

> Disallows the use of **arguments.caller** and **arguments.callee**

#### configuration

```json
{
    "no-caller": "error"
}
```

### [no-else-return](http://eslint.org/docs/rules/no-else-return)

> Disallows the use of an **else** construction if a **return** statement is present in the *possitive* block 

#### configuration

```json
{
    "no-else-return": "error"
}
```

#### example

```javascript
// BAD
function f1() {

    if (condition) {
        return "value";
    }
    else {
        // ...
    }
}

// GOOD
function f2() {

    if (condition) {
        return "value";
    }

    // ...
}
```

### [no-eval](http://eslint.org/docs/rules/no-eval)

> Disallows the use of **eval**

#### configuration

```json
{
    "no-eval": "error"
}
```

### [no-extend-native](http://eslint.org/docs/rules/no-extend-native)

> Disallows the modification of the **prototype** of builtin objects

#### configuration

```json
{
    "no-extend-native": "error"
}
```

### [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)

> Prevents an unnecessary use of **bind**

#### configuration

```json
{
    "no-extra-bind": "error"
}
```

### [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)

> Disallows the declaration of a float number without having specified the integer or the decimal part

#### configuration

```json
{
    "no-floating-decimal": "error"
}
```

### [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)

> Disallows the use of shorter notations for type conversions

#### configuration

```json
{
    "no-implicit-coercion": "error"
}
```

#### example

```javascript
// BAD
var fooBoolean = !!foo;
var fooNumber  = +foo;
var fooString  = "" + foo;

// GOOD
var fooBoolean = Boolean(foo);
var fooNumber  = Number(foo);
var fooString  = String(foo);
```

### [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)

> Disallows the execution of an implied **eval()** through the use of **setTimeout()**, **setInterval()** or **execScript()**

#### configuration

```json
{
    "no-implied-eval": "error"
}
```

### [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)

> Disallows the use of the **this** keyword outside of classes, class-like objects, or functions that do not specify **@this** in their jsdoc

#### configuration

```json
{
    "no-invalid-this": "error"
}
```

### [no-labels](http://eslint.org/docs/rules/no-labels)

> Disallows the use of labels

#### configuration

```json
{
    "no-labels": "error"
}
```

### [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)

> Prevents the declaration of blocks not related to any statement 

#### configuration

```json
{
    "no-lone-blocks": "error"
}
```

### [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)

> Disallows multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters

#### configuration

```json
{
    "no-multi-spaces": [ "error", { "exceptions": {
        "AssignmentExpression": true,
        "Property"            : true,
        "VariableDeclarator"  : true
    } } ]
}
```

### [no-multi-str](http://eslint.org/docs/rules/no-multi-str)

> Disallows the use of multiline strings

#### configuration

```json
{
    "no-multi-str": "error"
}
```

### [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign)

> Prevents the overriding (assignment) of built-in native objects

#### configuration

```json
{
    "no-native-reassign": "error"
}
```

### [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)

> Disallows the creation of primitive values using their wrappers constructors

#### configuration

```json
{
    "no-new-wrappers": "error"
}
```

### [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)

> Disallows the use of octal escape sequences (unicodes or hexadecimals sequences should be used instead)

#### configuration

```json
{
    "no-octal-escape": "error"
}
```

### [no-return-assign](http://eslint.org/docs/rules/no-return-assign)

> Prevents assignments done within return statements

#### configuration

```json
{
    "no-return-assign": [ "error", "always" ]
}
```

### [no-self-compare](http://eslint.org/docs/rules/no-self-compare)

> Prevents comparisons against the same value 

#### configuration

```json
{
    "no-self-compare": "error"
}
```

### [no-sequences](http://eslint.org/docs/rules/no-sequences)

> Disallows the use of the **comma** operator with the exception of **for** statements and if it appears in an expression between brackets  

#### configuration

```json
{
    "no-sequences": "error"
}
```

### [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)

> Disallows the use of primitive values in a **throw** statement

#### configuration

```json
{
    "no-throw-literal": "error"
}
```

### [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)

> Warns about loop conditions that do not change within the loop

#### configuration

```json
{
    "no-unmodified-loop-condition": "warn"
}
```

### [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)

#### configuration

> Prevents expressions to be used as statements with the exception of a [short circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation)

```json
{
    "no-unused-expressions": [ "error", {
        "allowShortCircuit": true
    } ]
}
```

#### example

```javascript
// short circuit example
console && console.error("something");
```

### [no-useless-call](http://eslint.org/docs/rules/no-useless-call)

> Prevents an unnecessary use of **call**

#### configuration

```json
{
    "no-useless-call": "error"
}
```

### [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat)

> Prevents an unnecessary use of **concat**

#### configuration

```json
{
    "no-useless-concat": "error"
}
```

### [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

> Prevents an unnecessary constructor declaration

#### configuration

```json
{
    "no-useless-constructor": "error"
}
```

### [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)

> Prevents unnecessary escaping in strings and regular expressions

#### configuration

```json
{
    "no-useless-escape": "error"
}
```

### [no-with](http://eslint.org/docs/rules/no-with)

> Disallows the use of **with**

#### configuration

```json
{
    "no-with": "error"
}
```

### [radix](http://eslint.org/docs/rules/radix)

> Disallows the use of **parseInt** without having specified the radix parameter

#### configuration

```json
{
    "radix": "error"
}
```

### [wrap-iife](http://eslint.org/docs/rules/wrap-iife)

> Enforces iifes to be always wrapped with parentheses

#### configuration

```json
{
    "wrap-iife": [ "error", "inside" ]
}
```

#### example

```javascript
var counter = (function () {

    var number = 0;

    return function increment() {

        number++;

        return number;
    };
})();
```

### [yoda](http://eslint.org/docs/rules/yoda)

> Disallow the use of [yoda conditions](https://en.wikipedia.org/wiki/Yoda_conditions)

#### configuration

```json
{
    "yoda": "error"
}
```

#### example

```javascript
// BAD
if ("error" === result) {
    // ...
}

// GOOD
if (result === "error") {
    // ...
}
```
