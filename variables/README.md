# [Variables](http://eslint.org/docs/rules/#variables)

## Usage

- `.eslintrc.json`

```json
{
    "extends": "@mgtitimoli/eslint-config/variables"
}
```

## Rules settings

### [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)

> Prevents shallowing (declare local variables that takes precedence over the ones in higher scopes) native references

#### configuration

```json
{
    "no-shadow-restricted-names": "error"
}
```

### [no-undef-init](http://eslint.org/docs/rules/no-undef-init)

> Disallows the explicit (and unnecessary) use of **undefined** on variables initialization

#### configuration

```json
{
    "no-undef-init": "error"
}
```

### [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)

> Disallows the use of variables before defined them

#### configuration

```json
{
    "no-use-before-define": "error"
}
```
