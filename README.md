# markdown-magic-transform-treefile-extended

This `markdown-magic` transform generates a dynamic file tree in your markdown files. It's an extended version of the built-in `fileTree` transform, with additional options for customizing the output.

<!-- doc-gen BADGES style=for-the-badge -->
[![npm version](https://img.shields.io/npm/v/markdown-magic-transform-treefile-extended.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![npm downloads](https://img.shields.io/npm/dw/markdown-magic-transform-treefile-extended.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![actions status](https://img.shields.io/github/actions/workflow/status/ioncakephper/markdown-magic-transform-treefile-extended/ci.yml?branch=main&style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/actions) [![codecov](https://img.shields.io/codecov/c/github/ioncakephper/markdown-magic-transform-treefile-extended?branch=main&style=for-the-badge)](https://codecov.io/gh/ioncakephper/markdown-magic-transform-treefile-extended) [![release](https://img.shields.io/github/v/release/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/releases) [![maintained](https://img.shields.io/github/commit-activity/y/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/graphs/commit-activity) [![stars](https://img.shields.io/github/stars/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/stargazers) [![forks](https://img.shields.io/github/forks/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/network/members) [![watchers](https://img.shields.io/github/watchers/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/watchers) [![last commit](https://img.shields.io/github/last-commit/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/commits) [![contributors](https://img.shields.io/github/contributors/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/graphs/contributors) [![issues](https://img.shields.io/github/issues/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/issues) [![pull requests](https://img.shields.io/github/issues-pr/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/pulls) [![repo size](https://img.shields.io/github/repo-size/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended) [![top language](https://img.shields.io/github/languages/top/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended) [![languages](https://img.shields.io/github/languages/count/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/search?l=)
<!-- end-doc-gen -->


## Options

| Option             | Type                   | Default                     | Description |
|--------------------|------------------------|-----------------------------|-------------|
| `descriptions`     | `object` or `function` | `{}`                        | Map or function to provide descriptions for files/folders |
| `descriptionsFile` | `string` or `null`     | `null`                      | Path to external JSON file with descriptions |
| `dirsOnly`         | `boolean`              | `false`                     | Include only directories in the output |
| `exclude`          | `string[]`             | `[]`                        | List of paths to exclude from output |
| `filesOnly`        | `boolean`              | `false`                     | Include only files in the output |
| `flat`             | `boolean`              | `false`                     | Render a flat list instead of a tree |
| `ignore`           | `string[]`             | `["node_modules"]`          | Glob patterns to ignore |
| `maxDepth`         | `number` or `undefined`| `undefined`                 | Maximum folder depth to scan |
| `pattern`          | `string[]`             | `["**/*"]`                  | Glob pattern(s) to include |
| `root`             | `string` or `undefined`| `basename(dir) + "/"`       | Custom label for the root node |
| `showDescriptions` | `boolean`              | `true`                      | Whether to show descriptions next to entries |
| `showSize`         | `boolean`              | `false`                     | Whether to show file sizes in parentheses |
| `dir`              | `string`               | `process.cwd()`             | Root directory to scan |



## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for details on how to raise issues, propose changes, and submit pull requests. In short:

- Open issues for bugs or feature requests with clear reproduction steps.
- For code contributions, fork the repo, create a branch, add tests, and open a PR against `main`.


## Helper Scripts


<!-- doc-gen SCRIPTS format=list -->
- `docs` (line [7](./package.json#L7))

  ```bash
  npx markdown-magic **/*.md --config ./markdown-magic.config.js
  ```

- `test` (line [8](./package.json#L8))

  ```bash
  echo "Error: no test specified" && exit 1
  ```
<!-- end-doc-gen -->


## License


This project is licensed under the terms of the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Acknowledgments

<!-- doc-gen ACKNOWLEDGEMENTS style=for-the-badge -->
- [fast-glob](https://www.npmjs.com/package/fast-glob) — It's a very fast and efficient glob library for Node.js
- [markdown-magic-scripts](https://www.npmjs.com/package/markdown-magic-scripts) — Automatically generate a dynamic, customizable dashboard of your npm scripts in your README.md using this markdown-magic transform. Keep your project documentation in sync with your package.json.
- [markdown-magic-transform-acknowledgements](https://www.npmjs.com/package/markdown-magic-transform-acknowledgements) — A markdown-magic transform that auto-generates an Acknowledgements section for contributors, dependencies, and custom entries.
- [markdown-magic-transform-badges](https://www.npmjs.com/package/markdown-magic-transform-badges) — No description available
<!-- end-doc-gen -->


## Project Structure

<!-- doc-gen fileTreeExtended root="Root" showDescriptions=true showSize=false -->
```
Root
├── CONTRIBUTING.md             # This file provides guidelines for contributing to the project.
├── index.js                    # This is the main entry point of the `fileTreeExtended` transform.
├── LICENSE                     # This file contains the project's license information.
├── markdown-magic.config.js    # This is the configuration file for `markdown-magic`.
├── package-lock.json           # This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.
├── package.json                # This file contains metadata about the project and its dependencies.
├── README.md                   # This file provides a general overview of the project.
└── RULES_OF_CONDUCT.md         # This file outlines the rules of conduct for the project's community.
```
<!-- end-doc-gen -->