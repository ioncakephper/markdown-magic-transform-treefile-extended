const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

// Markdown Magic Transform: File Tree Renderer
//
// Options:
// - descriptions          (object | function)   Default: {}       Map or function to provide descriptions for files/folders
// - descriptionsFile      (string | null)       Default: null     Path to external JSON file with descriptions
// - dirsOnly              (boolean)             Default: false    Include only directories in the output
// - exclude               (string[])            Default: ['node_modules', '.git', '.github', '.vscode', '.DS_Store']       List of paths to exclude from output
// - filesOnly             (boolean)             Default: false    Include only files in the output
// - flat                  (boolean)             Default: false    Render a flat list instead of a tree
// - ignore                (string[])            Default: ["node_modules"]  Glob patterns to ignore
// - maxDepth              (number | undefined)  Default: undefined  Maximum folder depth to scan
// - pattern               (string[])            Default: ["**/*"] Glob pattern(s) to include
// - root                  (string | undefined)  Default: basename(dir) + "/"  Custom label for the root node
// - showDescriptions      (boolean)             Default: false    Whether to show descriptions next to entries
// - showHidden            (boolean)             Default: true     Whether to show hidden files/folders
// - showSize              (boolean)             Default: false    Whether to show file sizes in parentheses
// - dir                   (string)              Default: process.cwd()  Root directory to scan

/**
 * Markdown Magic Transform: File Tree Renderer
 *
 * Renders a folder-first, size-aware, optionally described file tree.
 *
 * @param {Object} context - The transform context.
 * @param {string} context.transform - The transform name.
 * @param {Object} context.options - Per-call options.
 * @param {Object} context.settings - Global markdown-magic settings.
 * @returns {string} Markdown-formatted file tree
 */
function fileTreeExtended({ transform, options = {}, settings = {} }) {
  const defaultOptions = {
    dir: process.cwd(),
    pattern: ['**/*'],
    ignore: ['node_modules', '.git', '.github', '.vscode', '.DS_Store'],
    maxDepth: undefined,
    filesOnly: false,
    dirsOnly: false,
    exclude: [],
    root: undefined,
    showSize: false,
    showDescriptions: false,
    descriptions: {},
    descriptionsFile: null,
    flat: false,
    showHidden: true,
  };

  const globalOptions =
    (settings?.transformDefaults && settings.transformDefaults[transform]) ||
    {};

  const opts = {
    ...defaultOptions,
    ...globalOptions,
    ...options,
  };

  const {
    dir,
    pattern,
    ignore,
    maxDepth,
    filesOnly,
    dirsOnly,
    exclude,
    root,
    showSize,
    showDescriptions,
    descriptions,
    descriptionsFile,
    flat,
    showHidden,
  } = opts;

  let externalDescriptions = {};
  if (descriptionsFile) {
    const fullPath = path.isAbsolute(descriptionsFile)
      ? descriptionsFile
      : path.join(dir, descriptionsFile);
    if (fs.existsSync(fullPath)) {
      externalDescriptions = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    }
  }

  const rawPaths = fg
    .sync(pattern, {
      cwd: dir,
      ignore,
      onlyFiles: false,
      onlyDirectories: false,
      deep: maxDepth,
      dot: showHidden,
    })
    .filter((p) => !exclude.includes(p));

  const allEntries = [];

  for (const relPath of rawPaths) {
    const fullPath = path.join(dir, relPath);
    const stat = fs.existsSync(fullPath) ? fs.statSync(fullPath) : null;
    const isFile = stat?.isFile();
    const isDir = stat?.isDirectory();

    let sizeStr = '';
    if (showSize && isFile) {
      const size = stat.size;
      if (size < 1024) sizeStr = `(${size} B)`;
      else if (size < 1024 * 1024) sizeStr = `(${(size / 1024).toFixed(1)} KB)`;
      else sizeStr = `(${(size / (1024 * 1024)).toFixed(1)} MB)`;
    }

    allEntries.push({
      path: relPath,
      parts: relPath.split('/'),
      sizeStr,
      isFile,
      isDir,
    });

    // Add all parent folders explicitly
    const parts = relPath.split('/');
    for (let i = 1; i < parts.length; i++) {
      const folderPath = parts.slice(0, i).join('/');
      if (!allEntries.some((e) => e.path === folderPath)) {
        allEntries.push({
          path: folderPath,
          parts: parts.slice(0, i),
          sizeStr: '',
          isFile: false,
          isDir: true,
        });
      }
    }
  }

  if (flat) {
    const longest = allEntries.reduce((len, { path, sizeStr }) => {
      const entry = sizeStr ? `${path} ${sizeStr}` : path;
      return Math.max(len, entry.length);
    }, 0);

    const lines = [];
    if (root) lines.push(root);

    for (const { path: p, sizeStr } of allEntries) {
      let entry = sizeStr ? `${p} ${sizeStr}` : p;
      let line = entry;

      let desc =
        typeof descriptions === 'function'
          ? descriptions(p)
          : descriptions?.[p] || externalDescriptions?.[p];

      if (showDescriptions && desc) {
        const padding = ' '.repeat(longest - entry.length + 8);
        line += padding + '# ' + desc;
      }

      lines.push(line);
    }

    return '```\n' + lines.join('\n') + '\n```';
  }

  // Build tree
  const tree = {};
  for (const { path: p, parts, sizeStr, isFile, isDir } of allEntries) {
    let node = tree;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLeaf = i === parts.length - 1;

      if (!node[part]) node[part] = {};

      if (!node[part]._meta) {
        node[part]._meta = {
          path: parts.slice(0, i + 1).join('/'),
          isDir: !isFile || !isLeaf,
        };
      }

      if (isLeaf && isFile) {
        node[part]._meta.sizeStr = sizeStr;
        node[part]._meta.isDir = false;
      }

      node = node[part];
    }
  }

  const longestEntryLength = (node, prefix = '') => {
    let max = 0;
    for (const key of Object.keys(node)) {
      if (key === '_meta') continue;
      const meta = node[key]._meta || {};
      const entry = meta.sizeStr
        ? `${prefix}${key} ${meta.sizeStr}`
        : `${prefix}${key}`;
      max = Math.max(max, entry.length);
      max = Math.max(max, longestEntryLength(node[key], prefix + '    '));
    }
    return max;
  };

  const lines = [];
  const rootLabel = root || path.basename(dir) + '/';
  lines.push(rootLabel);

  const maxLength = longestEntryLength(tree);

  const render = (node, prefix = '', maxLength) => {
    const keys = Object.keys(node).filter((k) => k !== '_meta');

    const folders = keys
      .filter((k) => node[k]._meta?.isDir !== false)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'case' }));
    const files = keys
      .filter((k) => node[k]._meta?.isDir === false)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'case' }));

    const sortedKeys = [...folders, ...files];

    sortedKeys.forEach((key, index) => {
      const child = node[key];
      const last = index === sortedKeys.length - 1;
      const branch = last ? '└── ' : '├── ';
      const nextPrefix = prefix + (last ? '    ' : '│   ');

      const meta = child._meta || {};
      const entry = meta.sizeStr ? `${key} ${meta.sizeStr}` : key;
      const line = prefix + branch + entry;

      let desc =
        typeof descriptions === 'function'
          ? descriptions(meta.path || key)
          : descriptions?.[meta.path || key] ||
            externalDescriptions?.[meta.path || key];

      const padded =
        showDescriptions && desc
          ? line + ' '.repeat(maxLength - line.length + 8) + '# ' + desc
          : line;

      lines.push(padded);
      render(child, nextPrefix, maxLength);
    });
  };

  render(tree, '', maxLength);
  return '```\n' + lines.join('\n') + '\n```';
}

module.exports = fileTreeExtended;
