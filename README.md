# @mgtitimoli / eslint-config

A predictable and strict ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

## Installation

```
$ npm install --save-dev eslint @mgtitimoli/eslint-config
```

> This configuration just specifies a group of [ESLint](https://github.com/eslint/eslint) settings, this is why we need to install `eslint`, since by its [use](http://eslint.org/docs/user-guide/command-line-interface) (also have a look to the available [integrations](http://eslint.org/docs/user-guide/integrations)), is how we check our rules are respected

## Usage

[ **DISCLAIMER** ]

I decided not to extend [eslint:recommended](http://eslint.org/docs/user-guide/migrating-to-1.0.0) configuration to support setups where this is not desired (I personally have not found any one yet, but it might appear... *long silence*... someday...). Anyway, if you want to use it together with this config, and I **highly** recommend you to do that, it is as simple as using on each part of the documentation where it says:

```javascript
"@mgtitimoli/eslint-config"
```

the following instead:

```javascript
[
    "eslint:recommended",
    "@mgtitimoli/eslint-config"
]
```

> We can do this since **ESLint** does not restrict you to [extend](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) just one configuration file

### General

**ESLint** allows being configured using a widely amount of [flavours](http://eslint.org/docs/user-guide/configuring#configuration-file-formats), but I personally find the followings very practical:

- Place all the settings under an **eslintConfig** entry in your `package.json`:

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": "@mgtitimoli/eslint-config"
    }
}
```

- Create an `.eslintrc.json` to hold all the configuration:

```json
{
    "extends": "@mgtitimoli/eslint-config"
}
```

### Custom

This configuration, at the same time, extends the following ones (also present in this package)

- [@mgtitimoli/eslint-config/best-practices](./best-practices)
- [@mgtitimoli/eslint-config/variables](./variables)
- [@mgtitimoli/eslint-config/stylistic](./stylistic)
- [@mgtitimoli/eslint-config/es6](./es6)

You can pick just the one(s) that you need, specifying them as follows:

- For example, if you would want to use **best-practices** and **variables** configurations, then your `.eslintrc.json` should contain:

```json
{
    "extends": [
        "@mgtitimoli/eslint-config/best-practices",
        "@mgtitimoli/eslint-config/variables"
    ]
}
```

## About

I will enumerate below some of the reasons that pushed me to publish this package:

1. **The obvious one**: it allows anyone to be able to use it just doing a simple `npm install`
2. I have been using this configuration in a lot of projects and I really liked their resulting shape and low complexity
3. It helps me sharing my passion about code quality and best practices, and encourages teams to take some time to discuss about this

## Other configurations

You might also be interested in the following configurations:

- [@mgtitimoli/eslint-config-babel](https://github.com/mgtitimoli/eslint-config-babel)
- [@mgtitimoli/eslint-config-react](https://github.com/mgtitimoli/eslint-config-react)

## License

[Unlicense](http://unlicense.org)

