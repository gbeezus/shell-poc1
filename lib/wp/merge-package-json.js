const fs = require('node:fs');
const basePackage = require('../../package.json');
const wpPackage = require('../../starterkits/wp/package-wp.json');
const path = require('node:path');

const mergedPackage = {
  ...basePackage,
  scripts: {
    ...wpPackage?.scripts,
    ...basePackage.scripts,
  },
  dependencies: Object.fromEntries(
    Object.entries({
      ...wpPackage?.dependencies,
      ...basePackage.dependencies,
    }).sort(),
  ),
  devDependencies: Object.fromEntries(
    Object.entries({
      ...wpPackage?.devDependencies,
      ...basePackage.devDependencies,
    }).sort(),
  ),
  overrides: wpPackage.overrides,
};

fs.writeFileSync(
  path.resolve(__dirname, '../../package.json'),
  JSON.stringify(mergedPackage, null, 2),
);
