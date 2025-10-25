# markdown-magic-transform-treefile-extended

This `markdown-magic` transform generates a dynamic file tree in your markdown files. It's an extended version of the built-in `fileTree` transform, with additional options for customizing the output.

<!-- doc-gen BADGES style=for-the-badge -->
[![npm version](https://img.shields.io/npm/v/markdown-magic-transform-treefile-extended.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![npm downloads](https://img.shields.io/npm/dw/markdown-magic-transform-treefile-extended.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) [![actions status](https://img.shields.io/github/actions/workflow/status/ioncakephper/markdown-magic-transform-treefile-extended/ci.yml?branch=main&style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/actions) [![codecov](https://img.shields.io/codecov/c/github/ioncakephper/markdown-magic-transform-treefile-extended?branch=main&style=for-the-badge)](https://codecov.io/gh/ioncakephper/markdown-magic-transform-treefile-extended) [![release](https://img.shields.io/github/v/release/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/releases) [![maintained](https://img.shields.io/github/commit-activity/y/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/graphs/commit-activity) [![stars](https://img.shields.io/github/stars/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/stargazers) [![forks](https://img.shields.io/github/forks/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/network/members) [![watchers](https://img.shields.io/github/watchers/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/watchers) [![last commit](https://img.shields.io/github/last-commit/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/commits) [![contributors](https://img.shields.io/github/contributors/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/graphs/contributors) [![issues](https://img.shields.io/github/issues/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/issues) [![pull requests](https://img.shields.io/github/issues-pr/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/pulls) [![repo size](https://img.shields.io/github/repo-size/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended) [![top language](https://img.shields.io/github/languages/top/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended) [![languages](https://img.shields.io/github/languages/count/ioncakephper/markdown-magic-transform-treefile-extended?style=for-the-badge)](https://github.com/ioncakephper/markdown-magic-transform-treefile-extended/search?l=)
<!-- end-doc-gen -->

## Table of Contents

<!-- doc-gen TOC -->
- [markdown-magic-transform-treefile-extended](#markdown-magic-transform-treefile-extended)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Examples](#examples)
      - [Basic Usage](#basic-usage)
      - [Show File Sizes Use the `showSize` option to display the size of each](#show-file-sizes-use-the-showsize-option-to-display-the-size-of-each)
      - [Show Descriptions](#show-descriptions)
      - [Show File Sizes and Descriptions](#show-file-sizes-and-descriptions)
      - [Show Descriptions from File](#show-descriptions-from-file)
      - [Custom Root](#custom-root)
      - [Maximum Depth](#maximum-depth)
      - [Only Directories](#only-directories)
      - [Only Files](#only-files)
      - [Flat Tree](#flat-tree)
      - [Exclude Files](#exclude-files)
      - [Pattern Matching](#pattern-matching)
  - [Options](#options)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Project Structure](#project-structure)
<!-- end-doc-gen -->

## Installation

Install the package using npm:

```bash
npm install markdown-magic-transform-treefile-extended
```

## Usage

1.  **Add an HTML comment to your `README.md`:**

    This comment will be replaced by the file tree.

    ```html
    <!-- __doc-gen__ fileTreeExtended -->
    <!-- __end-doc-gen__ -->
    ```

2.  **Create and configure the transform in `markdown-magic.config.js`:**

    ```javascript
    const fileTreeExtended = require('markdown-magic-transform-treefile-extended');

    module.exports = {
      transforms: {
        fileTreeExtended,
      },
    };
    ```

3.  **Run the `markdown-magic` command:**

    ```bash
    npx markdown-magic README.md --config markdown-magic.config.js
    ```

4.  **README.md should now look like this:**

    ```html
    <!-- __doc-gen__ fileTreeExtended -->
    ```

    <!-- doc-gen fileTreeExtended -->
    ```
    markdown-magic-transform-treefile-extended/
    ├── .qodo
    │   ├── agents
    │   └── workflows
    ├── _descriptions.json
    ├── .gitignore
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── eslint.config.mjs
    ├── index.js
    ├── LICENSE
    ├── markdown-magic.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── RULES_OF_CONDUCT.md
    ```
    <!-- end-doc-gen -->

    ```html
    <!-- __end-doc-gen__ -->
    ```

### Examples

#### Basic Usage

This is the default output of the transform.

```html
<!-- __doc-gen__ fileTreeExtended -->
```

<!-- doc-gen fileTreeExtended -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── package-lock.json
├── package.json
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Show File Sizes Use the `showSize` option to display the size of each

file.

```html
<!-- __doc-gen__ fileTreeExtended showSize=true -->
```

<!-- doc-gen fileTreeExtended showSize=true -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json (698 B)
├── .gitignore (2.1 KB)
├── .prettierrc.json (68 B)
├── CHANGELOG.md (2.1 KB)
├── CONTRIBUTING.md (1.1 KB)
├── eslint.config.mjs (1.1 KB)
├── index.js (7.7 KB)
├── LICENSE (1.1 KB)
├── markdown-magic.config.js (1.8 KB)
├── package-lock.json (330.0 KB)
├── package.json (2.8 KB)
├── README.md (150.6 KB)
└── RULES_OF_CONDUCT.md (829 B)
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Show Descriptions

Use the `showDescriptions` option to display the
descriptions of files and folders. The descriptions are sourced from the
`descriptions` property in `transformDefaults.fileTreeExtended` in your
`markdown-magic.config.js` file.

<!-- doc-gen CODE src="markdown-magic.config.js" language=js -->
```js
module.exports = {
  transformDefaults: {
    BADGES: {
      style: 'for-the-badge',
    },
    fileTreeExtended: {
      descriptions: {
        '.qodo':
          'Qodana is a static analysis tool that can be used to find bugs and improve code quality.',
        node_modules: "This directory contains all the project's dependencies.",
        '.gitignore':
          'This file specifies which files and folders should be ignored by Git.',
        'CONTRIBUTING.md':
          'This file provides guidelines for contributing to the project.',
        'index.js':
          'This is the main entry point of the `fileTreeExtended` transform.',
        LICENSE: "This file contains the project's license information.",
        'markdown-magic.config.js':
          'This is the configuration file for `markdown-magic`.',
        'package-lock.json':
          'This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.',
        'package.json':
          'This file contains metadata about the project and its dependencies.',
        'README.md': 'This file provides a general overview of the project.',
        '_descriptions.json':
          'This JSON file contains descriptions for files to be used in the dynamic file tree.',
        'eslint.config.mjs':
          'This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.',
        'RULES_OF_CONDUCT.md':
          "This file outlines the rules of conduct for the project's community.",
      },
    },
  },
  transforms: {
    SCRIPTS: require('markdown-magic-scripts'),
    BADGES: require('markdown-magic-transform-badges'),
    ACKNOWLEDGEMENTS: require('markdown-magic-transform-acknowledgements'),
    fileTreeExtended: require('./index'),
  },
};
```
<!-- end-doc-gen -->

```html
<!-- __doc-gen__ fileTreeExtended showSize=true -->
```

<!-- doc-gen fileTreeExtended showDescriptions=true -->
```
markdown-magic-transform-treefile-extended/
├── .qodo                       # Qodana is a static analysis tool that can be used to find bugs and improve code quality.
│   ├── agents
│   └── workflows
├── _descriptions.json          # This JSON file contains descriptions for files to be used in the dynamic file tree.
├── .gitignore                  # This file specifies which files and folders should be ignored by Git.
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md             # This file provides guidelines for contributing to the project.
├── eslint.config.mjs           # This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
├── index.js                    # This is the main entry point of the `fileTreeExtended` transform.
├── LICENSE                     # This file contains the project's license information.
├── markdown-magic.config.js    # This is the configuration file for `markdown-magic`.
├── package-lock.json           # This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.
├── package.json                # This file contains metadata about the project and its dependencies.
├── README.md                   # This file provides a general overview of the project.
└── RULES_OF_CONDUCT.md         # This file outlines the rules of conduct for the project's community.
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Show File Sizes and Descriptions

Use both `showSize` and
`showDescriptions` to display both the size and description of each file. The
descriptions are sourced from the `descriptions` property in
`transformDefaults.fileTreeExtended` in your `markdown-magic.config.js` file.

```html
<!-- __doc-gen__ fileTreeExtended showSize=true showDescriptions=true -->
```

<!-- doc-gen fileTreeExtended showSize=true showDescriptions=true -->
```
markdown-magic-transform-treefile-extended/
├── .qodo                                # Qodana is a static analysis tool that can be used to find bugs and improve code quality.
│   ├── agents
│   └── workflows
├── _descriptions.json (698 B)           # This JSON file contains descriptions for files to be used in the dynamic file tree.
├── .gitignore (2.1 KB)                  # This file specifies which files and folders should be ignored by Git.
├── .prettierrc.json (68 B)
├── CHANGELOG.md (2.1 KB)
├── CONTRIBUTING.md (1.1 KB)             # This file provides guidelines for contributing to the project.
├── eslint.config.mjs (1.1 KB)           # This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
├── index.js (7.7 KB)                    # This is the main entry point of the `fileTreeExtended` transform.
├── LICENSE (1.1 KB)                     # This file contains the project's license information.
├── markdown-magic.config.js (1.8 KB)    # This is the configuration file for `markdown-magic`.
├── package-lock.json (330.0 KB)         # This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.
├── package.json (2.8 KB)                # This file contains metadata about the project and its dependencies.
├── README.md (150.6 KB)                 # This file provides a general overview of the project.
└── RULES_OF_CONDUCT.md (829 B)          # This file outlines the rules of conduct for the project's community.
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Show Descriptions from File

Use the `descriptionsFile` option to load
descriptions from an external JSON file.

```html
<!-- __doc-gen__ fileTreeExtended showDescriptions=true descriptionsFile="_descriptions.json" -->
```

<!-- doc-gen fileTreeExtended showDescriptions=true descriptionsFile="_descriptions.json" -->
```
markdown-magic-transform-treefile-extended/
├── .qodo                       # Qodana is a static analysis tool that can be used to find bugs and improve code quality.
│   ├── agents
│   └── workflows
├── _descriptions.json          # This JSON file contains descriptions for files to be used in the dynamic file tree.
├── .gitignore                  # This file specifies which files and folders should be ignored by Git.
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md             # This file provides guidelines for contributing to the project.
├── eslint.config.mjs           # This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
├── index.js                    # This is the main entry point of the `fileTreeExtended` transform.
├── LICENSE                     # This file contains the project's license information.
├── markdown-magic.config.js    # This is the configuration file for `markdown-magic`.
├── package-lock.json           # This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.
├── package.json                # This file contains metadata about the project and its dependencies.
├── README.md                   # This file provides a general overview of the project.
└── RULES_OF_CONDUCT.md         # This file outlines the rules of conduct for the project's community.
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Custom Root

Label Use the `root` option to set a custom label for the
root of the file tree.

```html
<!-- __doc-gen__ fileTreeExtended root="My Project" -->
```

<!-- doc-gen fileTreeExtended root="My Project" -->
```
My Project
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── package-lock.json
├── package.json
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Maximum Depth

Use the `maxDepth` option to limit the depth of the file
tree.

```html
<!-- __doc-gen__ fileTreeExtended maxDepth=1 -->
```

<!-- doc-gen fileTreeExtended maxDepth=1 -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── package-lock.json
├── package.json
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Only Directories

Use the `dirsOnly` option to show only directories in
the file tree.

```html
<!-- __doc-gen__ fileTreeExtended dirsOnly=true -->
```

<!-- doc-gen fileTreeExtended dirsOnly=true -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── package-lock.json
├── package.json
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Only Files

Use the `filesOnly` option to show only files in the file
tree.

```html
<!-- __doc-gen__ fileTreeExtended filesOnly=true -->
```

<!-- doc-gen fileTreeExtended filesOnly=true -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── package-lock.json
├── package.json
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Flat Tree

Use the `flat` option to render a flat list instead of a tree.

```html
<!-- __doc-gen__ fileTreeExtended flat=true -->
```

<!-- doc-gen fileTreeExtended flat=true -->
```
.gitignore
.prettierrc.json
.qodo
CHANGELOG.md
CONTRIBUTING.md
eslint.config.mjs
index.js
LICENSE
markdown-magic.config.js
package-lock.json
package.json
README.md
RULES_OF_CONDUCT.md
_descriptions.json
.qodo/agents
.qodo/workflows
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Exclude Files

Use the `exclude` option to exclude files or directories
from the output.

```html
<!-- __doc-gen__ fileTreeExtended exclude="['package.json', 'package-lock.json']" -->
```

<!-- doc-gen fileTreeExtended exclude="['package.json', 'package-lock.json']" -->
```
markdown-magic-transform-treefile-extended/
├── .qodo
│   ├── agents
│   └── workflows
├── _descriptions.json
├── .gitignore
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.js
├── LICENSE
├── markdown-magic.config.js
├── README.md
└── RULES_OF_CONDUCT.md
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

#### Pattern Matching

Use the `pattern` option to include only files and
directories that match a glob pattern.

```html
<!-- __doc-gen__ fileTreeExtended pattern="['**/*.js']" -->
```

<!-- doc-gen fileTreeExtended pattern="['**/*.js']" -->
```
markdown-magic-transform-treefile-extended/
```
<!-- end-doc-gen -->

```html
<!-- __end-doc-gen__ -->
```

## Options

Options can be provided in two ways:

1. **In the HTML comment:**
   Options can be added as `key=value` or `"key"="value"` pairs

2. **In `markdown-magic.config.js`:** You can provide default values for the
   transform in the `transformDefaults` section of your `markdown-magic.config.js`
   file. These defaults will be used unless overridden in the HTML comment.

| Option             | Type                    | Default               | Description                                               |
| ------------------ | ----------------------- | --------------------- | --------------------------------------------------------- |
| `descriptions`     | `object` or `function`  | `{}`                  | Map or function to provide descriptions for files/folders |
| `descriptionsFile` | `string` or `null`      | `null`                | Path to external JSON file with descriptions              |
| `dirsOnly`         | `boolean`               | `false`               | Include only directories in the output                    |
| `exclude`          | `string[]`              | `[]`                  | List of paths to exclude from output                      |
| `filesOnly`        | `boolean`               | `false`               | Include only files in the output                          |
| `flat`             | `boolean`               | `false`               | Render a flat list instead of a tree                      |
| `ignore`           | `string[]`              | `["node_modules"]`    | Glob patterns to ignore                                   |
| `maxDepth`         | `number` or `undefined` | `undefined`           | Maximum folder depth to scan                              |
| `pattern`          | `string[]`              | `["**/*"]`            | Glob pattern(s) to include                                |
| `root`             | `string` or `undefined` | `basename(dir) + "/"` | Custom label for the root node |
| `showDescriptions` | `boolean` | `false` | Whether to show descriptions next to entries |
| `showHidden` | `boolean` | `true` | Whether to show hidden files and folders (those starting with a dot). Set to `false` to exclude them |
| `showSize` | `boolean` | `false` | Whether to show file sizes in parentheses. |
| `dir` | `string` | `process.cwd()` | Root directory to scan |

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for
details on how to raise issues, propose changes, and submit pull requests. In
short: - Open issues for bugs or feature requests with clear reproduction steps.

- For code contributions, fork the repo, create a branch, add tests, and open a
  PR against `main`. ## Helper Scripts

<!-- doc-gen SCRIPTS format=list -->
- `docs` — Generate documentation by processing README.md with markdown-magic. (line [13](./package.json#L13))

  ```bash
  npx markdown-magic **/*.md --config ./markdown-magic.config.js
  ```

- `fix` — Automatically fix linting issues and format codebase. (line [8](./package.json#L8))

  ```bash
  npm run lint:fix && npm run format && npm run format:package
  ```

- `format` — Format all project files using Prettier. (line [9](./package.json#L9))

  ```bash
  prettier --write .
  ```

- `format:package` — Format the package.json file using Prettier. (line [10](./package.json#L10))

  ```bash
  prettier --write package.json
  ```

- `lint` — Lint all project files to ensure code quality and consistency. (line [11](./package.json#L11))

  ```bash
  eslint . --ext .js,.json,.yaml,.yml,.md
  ```

- `lint:fix` — Lint all project files and automatically fix issues where possible. (line [12](./package.json#L12))

  ```bash
  eslint . --ext .js,.json,.yaml,.yml,.md --fix
  ```

- `prep` — Prepare the project for publishing by generating docs and formatting code. (line [14](./package.json#L14))

  ```bash
  npm run docs && npm run fix
  ```

- `test` — Run the test suite using Jest. (line [7](./package.json#L7))

  ```bash
  jest --passWithNoTests
  ```
  <!-- end-doc-gen -->

## License

This project is licensed under the terms of the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Acknowledgments

<!-- doc-gen ACKNOWLEDGEMENTS style=for-the-badge -->
- [eslint](https://www.npmjs.com/package/eslint) — An AST-based pattern checker for JavaScript.
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) — No description available
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) — No description available
- [fast-glob](https://www.npmjs.com/package/fast-glob) — It's a very fast and efficient glob library for Node.js
- [jest](https://www.npmjs.com/package/jest) — Delightful JavaScript Testing.
- [prettier](https://www.npmjs.com/package/prettier) — Prettier is an opinionated code formatter
<!-- end-doc-gen -->

## Project Structure

<!-- doc-gen fileTreeExtended root="Root" showDescriptions=true showSize=false -->
```
Root
├── .qodo                       # Qodana is a static analysis tool that can be used to find bugs and improve code quality.
│   ├── agents
│   └── workflows
├── _descriptions.json          # This JSON file contains descriptions for files to be used in the dynamic file tree.
├── .gitignore                  # This file specifies which files and folders should be ignored by Git.
├── .prettierrc.json
├── CHANGELOG.md
├── CONTRIBUTING.md             # This file provides guidelines for contributing to the project.
├── eslint.config.mjs           # This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
├── index.js                    # This is the main entry point of the `fileTreeExtended` transform.
├── LICENSE                     # This file contains the project's license information.
├── markdown-magic.config.js    # This is the configuration file for `markdown-magic`.
├── package-lock.json           # This file is automatically generated for any operations where `npm` modifies either the `node_modules` tree, or `package.json`.
├── package.json                # This file contains metadata about the project and its dependencies.
├── README.md                   # This file provides a general overview of the project.
└── RULES_OF_CONDUCT.md         # This file outlines the rules of conduct for the project's community.
```
<!-- end-doc-gen -->
