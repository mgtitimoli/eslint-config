import baseEslintConfig from "./base.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
const eslintConfig = [{ignores: [".yarn"]}, ...baseEslintConfig];

export default eslintConfig;
