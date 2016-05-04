# [Stylistic Issues](http://eslint.org/docs/rules/#stylistic-issues)

## [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)

> Enforces spacing between arrays square brackets and their first and last elements

### configuration

```json
{
    "array-bracket-spacing": [ "error", "always" ]
}
```

### example

```javascript
// BAD
var arr1 = ["elem1", "elem2", "elem3"];

// GOOD
var arr2 = [ "elem1", "elem2", "elem3" ];
```

## [brace-style](http://eslint.org/docs/rules/brace-style)

> Enforces the Stroustrup brace style variant

### configuration

```json
{
    "brace-style": [ "error", "stroustrup" ]
}
```

# example

```javascript
function foo() {

    return true;
}

if (foo) {
    bar();
}

if (foo) {
    bar();
}
else {
    baz();
}

try {
  somethingRisky();
}
catch(e) {
  handleError();
}
```

## [camelcase](http://eslint.org/docs/rules/camelcase)

> Enforces the use of camel case convention for identifiers: variables, object members, and functions names

### configuration

```json
{
    "camelcase": [ "error", { "properties": "always" } ]
}
```

## [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

> Enforces the spacing after the use of a comma

### configuration

```json
{
    "comma-spacing": "error"
}
```

## [comma-style](http://eslint.org/docs/rules/comma-style)

> Enforces placing the comma used to separate array and object members in the same line of the current one

### configuration

```json
{
    "comma-style": "error"
}
```

### example

```javascript
// BAD
var arr = [
    1
    , 2
];
var obj = {
    m1: "val1"
    , m2: "val2"
};

// BAD
var arr = [
    1,
    2
];
var obj = {
    m1: "val1",
    m2: "val2"
};
```

## [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)

> Disallows the spacing when using computed properties

### configuration

```json
{
    "computed-property-spacing": "error"
}
```

### example

```javascript
var propName = "p1";

var obj = {
    [propName]: "value"
};

var propValue = obj[propName];
```

## [eol-last](http://eslint.org/docs/rules/eol-last)

> Enforces the presence of an **EOL** symbol at the end of the files

### configuration

```json
{
    "eol-last": "error"
}
```

## [func-style](http://eslint.org/docs/rules/func-style)

> Enforces the use of function declarations whenever possible

### configuration

```json
{
    "func-style": [ "error", "declaration" ]
}
```

### example

```javascript
var fn = function () {
    // ...
};

function fn() {
    // ....
}
```

## [indent](http://eslint.org/docs/rules/indent)

> Enforces the use of 4 spaces for indentation (it also enforces the indentation of switch case statements)

### configuration

```json
{
    "indent": [ "error", 4, { "SwitchCase": 1 } ]
}
```

## [key-spacing](http://eslint.org/docs/rules/key-spacing)

> Enforces the alignment of object members taking into account the colons

### configuration

```json
{
    "key-spacing": [ "error", { "align": "colon" } ]
}
```

### example

```javascript
var obj = {
    member         : "v1",
    someOtherMember: "v2",
    anotherMember  : {
        // ...
    },
    nonConsecutiveMember: "v3",

    anotherNonConsecutiveMember: "v4"
};
```

## [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

> Enforces the spacing around keywords

### configuration

```json
{
    "keyword-spacing": "error"
}
```

## [linebreak-style](http://eslint.org/docs/rules/linebreak-style)

> Enforces all line endings are unix like (**LF** = \n)

### configuration

```json
{
    "linebreak-style": "error"
}
```

## [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment)

> Enforces the present of an empty line before comments

### configuration

```json
{
    "lines-around-comment": [ "error", {
        "beforeBlockComment": true,
        "beforeLineComment": true
    } ]
}
```

## [max-depth](http://eslint.org/docs/rules/max-depth)

> Enforces the maximum depth that blocks can be nested to 4

### configuration

```json
{
    "max-depth": [ "warn", 5 ]
}
```

## [max-len](http://eslint.org/docs/rules/max-len)

> Enforces the maximum characters a line can have to 80 

### configuration

```json
{
    "max-len": "error"
}
```

## [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks)

> Enforces the maximum depth that callbacks can be nested to 3

### configuration

```json
{
    "max-nested-callbacks": [ "error", 3 ]
}
```

## [max-params](http://eslint.org/docs/rules/max-params)

> Warns when a function is using more than 4 parameters

### configuration

```json
{
    "max-params": [ "warn", 4 ]
}
```

## [max-statements](http://eslint.org/docs/rules/max-statements)

> Enforces the maximum number of statements that a function can have to 20 (inner functions are not taken into account for the calculation)

### configuration

```json
{
    "max-statements": [ "error", { "max": 20 } ]
}
```

## [max-statements-per-line](http://eslint.org/docs/rules/max-statements-per-line)

> Disallows the use of more than 1 statement in the same line

### configuration

```json
{
    "max-statements-per-line": "error"
}
```

## [new-cap](http://eslint.org/docs/rules/new-cap)

> Enforces the use of capital letters for functions that are called with **new** (constructors)

### configuration

```json
{
    "new-cap": "error"
}
```

## [new-parens](http://eslint.org/docs/rules/new-parens)

> Enforces the use of parenthesis when calling functions with **new** (constructors)

### configuration

```json
{
    "new-parens": "error"
}
```

## [newline-after-var](http://eslint.org/docs/rules/newline-after-var)

> Enforces the presence of an empty line after variable declarations groups

### configuration

```json
{
    "newline-after-var": "error"
}
```

### example

```javascript
// BAD
var v1 = "value 1";
var v2 = "value 1";
console.log(v1, v2);

// GOOD
var v1 = "value 1";
var v2 = "value 1";

console.log(v1, v2);
```

## [newline-before-return](http://eslint.org/docs/rules/newline-before-return)

> Enforces the presence of an empty line before a return statement (only if it is not the only statement within a block)

### configuration

```json
{
    "newline-before-return": "error"
}
```

### example

```javascript
function foo() {
    return;
}

function foo(bar) {
    if (!bar) {
        return;
    }

    return bar;
}
```

## [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call)

> Enforces a new line after each method invocation in a call chain

### configuration

```json
{
    "newline-per-chained-call": [ "error", {
        "ignoreChainWithDepth": 1
    } ]
}
```

### example

```javascript
// GOOD
obj.method1().method2().method3();

// GOOD
obj
    .method1()
    .method2()
    .method3();
```

## [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)

> Disallows the use of the **Array** constructor when called with more than a number parameter (length)

### configuration

```json
{
    "no-array-constructor": "error"
}
```

## [no-bitwise](http://eslint.org/docs/rules/no-bitwise)

> Disallows the use of bitwise operators with the exception of **^** (**XOR**)

### configuration

```json
{
    "no-bitwise": [ "error", { "allow": [ "^" ] } ]
}
```

## [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if)

> Prevents an if statement to be the only statement within an else block (it must be placed right after the else) 

### configuration

```json
{
    "no-lonely-if": "error"
}
```

### example

```javascript
// BAD
if (foo) {
    // ...
}
else {
    if (bar) {
        // ...
    }
}

// GOOD
if (foo) {
    // ...
}
else if (bar) {
    // ...
}
```

## [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

> Prevents mixin tabs with spaces, since only the latter are allowed

### configuration

```json
{
    "no-mixed-spaces-and-tabs": "error"
}
```

## [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)

> Disallows the appearence of multiple consecutive empty lines

### configuration

```json
{
    "no-multiple-empty-lines": "error"
}
```

## [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)

> Disallows nesting ternary constructions

### configuration

```json
{
    "no-nested-ternary": "error"
}
```

## [no-new-object](http://eslint.org/docs/rules/no-new-object)

> Disallows creating objects using the **Object** constructor with **new**

### configuration

```json
{
    "no-new-object": "error"
}
```

## [no-spaced-func](http://eslint.org/docs/rules/no-spaced-func)

> Disallows the spacing between the name and the parenthesis of a function

### configuration

```json
{
    "no-spaced-func": "error"
}
```

### example

```javascript
// BAD
function fn () {
}

// GOOD
function fn() {
}
```

## [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)

> Prevents the existance of trailing spaces

### configuration

```json
{
    "no-trailing-spaces": "error"
}
```

## [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle)

> Enables the use of an underscore at the beginning of identifiers to denote privacy

### configuration

```json
{
    "no-underscore-dangle": "off"
}
```

## [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)

> Prevents the use of ternary operators when the same can be achived just using the conditional expression

### configuration

```json
{
    "no-unneeded-ternary": "error"
}
```

### example

```javascript
// BAD
function isGreaterThan(min, number) {
    return number > min ?
        true :
        false; 
}

// GOOD
function isGreaterThan(min, number) {
    return number > min;
}
```

## [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property)

> Disallows the spacing that can be used between the object and one of its members when trying to access to it

### configuration

```json
{
    "no-whitespace-before-property": "error"
}
```

### example

```javascript
// BAD
console.log(
    foo. bar,
    foo .baz,
    foo . quz
);

// GOOD
console.log(
    foo.bar
);
```

## [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

> Enforces the spacing between object members and opening and closing curly braces

### configuration

```json
{
    "object-curly-spacing": [ "error", "always" ]
}
```

### example

```javascript
// BAD
var obj = {m1: "value1", m2: "value 2"};

// GOOD
var obj = { m1: "value1", m2: "value 2" };
```

## [one-var](http://eslint.org/docs/rules/one-var)

> Disallows the declaration of multiple variables using a single statement

### configuration

```json
{
    "one-var": [ "error", "never" ]
}
```

### example

```javascript
// BAD
var v1 = "value 1", v2, v3 = "value 3";
var
    v4 = "value 4",
    v5,
    v6 = "value 6";

// GOOD
var v1 = "value 1";
var v2;
var v3 = "value 3";
```

## [quote-props](http://eslint.org/docs/rules/quote-props)

> Enforces quotation of object members to be consistent: none or all members have to quoted

### configuration

```json
{
    "quote-props": [ "error", "consistent" ]
}
```

### example

```javascript
```

## [quotes](http://eslint.org/docs/rules/quotes)

> Enforces the use of double quotes for strings

### configuration

```json
{
    "quotes": [ "error", "double" ]
}
```

## [semi](http://eslint.org/docs/rules/semi)

> Enforces the use of semicolons to terminate all the statements with the exception of **blocks**

### configuration

```json
{
    "semi": "error"
}
```

## [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

> Enforces functions and classes to start with an empty line and disallows this behaviour for other blocks

### configuration

```json
{
    "space-before-blocks": [ "error", {
        "classes"  : "always",
        "functions": "always",
        "keywords" : "never"
    } ]
}
```

### example

```javascript
// BAD
function f1() {
    // ...
}

class MyClass {
    // ...
}

for (const item of items) {

    // ...
}

// GOOD
function f1() {

    // ...
}

class MyClass {

    // ...
}

for (const item of items) {
    // ...
}
```

## [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)

> Enforces spacing before function parenthesis only for anonymous functions

### configuration

```json
{
    "space-before-function-paren": [ "error", {
        "anonymous": "always",
        "named"    : "never"
    } ]
}
```

## [space-in-parens](http://eslint.org/docs/rules/space-in-parens)

> Disallows parenthesis and their content to be separated by space 

### configuration

```json
{
    "space-in-parens": "error"
}
```

## [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops)

> Enforces spacing around infix operators

### configuration

```json
{
    "space-infix-ops": "error"
}
```

## [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)

> Enforces or prevents spacing around unary operators

### configuration

```json
{
    "space-unary-ops": "error"
}
```

### example

```javascript
delete foo.bar;

new Foo;

void 0;

++foo;

foo--;
```

## [spaced-comment](http://eslint.org/docs/rules/spaced-comment)

> Enforces spacing after the multiline (/*) or single comment (//) indicator

### configuration

```json
{
    "spaced-comment": "error"
}
```
