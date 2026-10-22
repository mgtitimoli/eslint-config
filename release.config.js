/**
 * @type {import("semantic-release").GlobalConfig}
 */
const releaseConfig = {
  branches: ["main"],
  plugins: [
    ["@semantic-release/commit-analyzer", {preset: "conventionalcommits"}],
    [
      "@semantic-release/release-notes-generator",
      {preset: "conventionalcommits"}
    ],
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        // Access and provenance come from package.json's publishConfig
        prepareCmd: "yarn version ${nextRelease.version}",
        publishCmd: "yarn npm publish"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore: Create release ${nextRelease.version} [skip ci]"
      }
    ],
    "@semantic-release/github"
  ]
};

export default releaseConfig;
