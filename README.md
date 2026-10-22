# @mgtitimoli/eslint-config

A predictable and strict ESLint (flat config) and Prettier configuration.

## Contents

- [Installation](#installation)
- [Configs](#configs)
- [Usage](#usage)
- [Migrating from 0.x](#migrating-from-0x)
- [License](#license)

## Installation

```sh
yarn add --dev @mgtitimoli/eslint-config eslint
```

The [`typescript.js`](./typescript.js) config also needs `typescript`:

```sh
yarn add --dev typescript
```

## Configs

- [`base.js`](./base.js): general rules plus the
  [import](https://www.npmjs.com/package/eslint-plugin-import),
  [perfectionist](https://www.npmjs.com/package/eslint-plugin-perfectionist),
  [prefer-arrow-functions](https://www.npmjs.com/package/eslint-plugin-prefer-arrow-functions),
  [prettier](https://www.npmjs.com/package/eslint-plugin-prettier),
  [stylistic](https://www.npmjs.com/package/@stylistic/eslint-plugin) and
  [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
  plugins.
- [`typescript.js`](./typescript.js): `base.js` plus
  [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) with
  type-aware rules.
- [`react.js`](./react.js): [React](https://www.npmjs.com/package/eslint-plugin-react)
  and [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) rules.
- [`next.js`](./next.js): `react.js` plus the
  [Next.js](https://www.npmjs.com/package/@next/eslint-plugin-next) Core Web
  Vitals rules.
- [`prettier.config.js`](./prettier.config.js): the Prettier options, applied
  through ESLint.

## Usage

Create an `eslint.config.js` and export the config the project needs:

```js
// JavaScript only
export {default} from "@mgtitimoli/eslint-config/base.js";
```

```js
// TypeScript
export {default} from "@mgtitimoli/eslint-config/typescript.js";
```

```js
// TypeScript + Next.js
import nextEslintConfig from "@mgtitimoli/eslint-config/next.js";
import typescriptEslintConfig from "@mgtitimoli/eslint-config/typescript.js";

const eslintConfig = [...typescriptEslintConfig, ...nextEslintConfig];

export default eslintConfig;
```

The configs require ESLint 9: ESLint 10 is not supported yet by
`eslint-plugin-import` and `eslint-plugin-react`.

## Migrating from 0.x

Version 1 is a rewrite using ESLint's
[flat config](https://eslint.org/docs/latest/use/configure/configuration-files):

- Replace `.eslintrc.*` (or the `eslintConfig` entry in `package.json`) with an
  `eslint.config.js` as shown in [Usage](#usage).
- The `best-practices`, `es6`, `stylistic` and `variables` configs no longer
  exist: use `base.js` (or one of the configs that extend it) instead.

See ESLint's
[migration guide](https://eslint.org/docs/latest/use/configure/migration-guide)
for the rest of the changes.

## License

[Unlicense](http://unlicense.org)
