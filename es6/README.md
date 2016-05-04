# [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)

## [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)

> Ensures arrow functions bodies are enclosed with curly braces only when needed

### configuration

```json
{
    "arrow-body-style": "error"
}
```

### example

```javascript
// BAD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(curNumber => {

    return curNumber % 2 !== 0;
}); 

// GOOD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(
    curNumber => curNumber % 2  !== 0
); 
```

## [arrow-parens](http://eslint.org/docs/rules/arrow-parens)

> Ensures arrow functions arguments are enclosed with brackets only when needed (no arguments or more than one)

### configuration

```json
{
    "arrow-parens": [ "error", "as-needed" ]
}
```

### example

```javascript
// BAD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(
    (curNumber) => curNumber % 2 !== 0
); 

// GOOD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(
    curNumber => curNumber % 2 !== 0
); 
```

## [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing)

> Enforces the spacing between arguments, fat arrow and body of arrow functions

### configuration

```json
{
    "arrow-spacing": "error"
}
```

### example

```javascript
// GOOD
(arg1, arg2) => arg1 > arg2

(arg1, arg2) => {
    // ...
}
```

## [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)

> Enforces the spacing between the function keyword and the star in generators

### configuration

```json
{
    "generator-star-spacing": "error"
}
```

### example

```javascript
// GOOD
function gen1 *() {
    // ...
}
```

## [no-const-assign](http://eslint.org/docs/rules/no-const-assign)

> Alerts of constants that are trying to be modified

### configuration

```json
{
    "no-const-assign": "error"
}
```

## [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)

> Avoids the use of multiple imports/exports statements of the same file

### configuration

```json
{
    "no-duplicate-imports": [ "error", { "includeExports": true } ]
}
```

### example

```javascript
// BAD
import { fn1 } from "module";
import { fn2 } from "module";

// GOOD
import { fn1, fn2 } from "module";
```

## [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)

> Disallows the declaration of empty constructors

### configuration

```json
{
    "no-useless-constructor": "error"
}
```

## [no-var](http://eslint.org/docs/rules/no-var)

> Disallows the declaration of variables using **var**

### configuration

```json
{
    "no-var": "error"
}
```

## [object-shorthand](http://eslint.org/docs/rules/object-shorthand)

> Enforces the use of object literals shorthand notation whenever possible

### configuration

```json
{
    "object-shorthand": "error"
}
```

### example

```javascript
const name = "some name";
const age  = 20;

// BAD
const user = {
    age   : age,
    name  : name,
    logout: function() {} {
        // ...
    }
}

// GOOD
const user = {
    age,
    name,
    logout() {
        // ...
    }
};
```

## [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback)

> Disallows the use of anonymous function expressions as callbacks, preferring arrow functions for this cases

### example

```javascript
// BAD
asyncFn(function(error, result) {
    // callback body
});

// GOOD
asyncFn(function onDone(error, result) => {
    // callback body
});

asyncFn((error, result) => {
    // callback body
});
```

### configuration

```json
{
    "prefer-arrow-callback": [ "error", { "allowNamedFunctions": true } ]
}
```

## [prefer-const](http://eslint.org/docs/rules/prefer-const)

> Enforces the use of const statements for variables that are not reassigned

### configuration

```json
{
    "prefer-const": "error"
}
```

## [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect)

> Disallows the use of old APIs now provided on the Reflect object

### configuration

```json
{
    "prefer-reflect": "error"
}
```

## [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params)

> Enforces the use of rest operator whenever **arguments** object is found

### configuration

```json
{
    "prefer-rest-params": "error"
}
```

### example

```javascript
// BAD
function sumWithArguments() {

    const numbers = Array.from(arguments);

    return numbers.reduce(
        (result, curNumber) => result + curNumber,
        0
    );
}

// GOOD
function sumWithSpread(...numbers) {

    return args.reduce(
        (result, curArg) => result + curArg,
        0
    );
}
```

## [prefer-spread](http://eslint.org/docs/rules/prefer-spread)

> Enforces the use of the spread operator instead of **Function.prototype.apply**

### configuration

```json
{
    "prefer-spread": "error"
}
```

### example

```javascript
const args = [ "arg1", "arg2", "arg3" ];

// BAD
myFunc.apply(null, args);

// GOOD
myFunc(...args);
```

## [require-yield](http://eslint.org/docs/rules/require-yield)

> Prevents the declaration of generators that do not include **yield** statements

### configuration

```json
{
    "require-yield": "error"
}
```

## [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing)

> Enforces the spacing inside of template literals

### configuration

```json
{
    "template-curly-spacing": [ "error", "always" ]
}
```

### example

```javascript
const user    = "John Doe";
const message = `Hello ${ user }`;
```

## [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing)

> Enforces the spacing after the star in **yield*** expressions

### configuration

```json
{
    "yield-star-spacing": "error"
}
```

### example

```javascript
// GOOD
function *generator() {

    yield* other();
}
```
