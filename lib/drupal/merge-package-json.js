const fs = require('node:fs');
const basePackage = require('../../package.json');
const drupalPackage = require('../../starterkits/drupal/package-drupal.json');
const path = require('node:path');

const mergedPackage = {
  ...basePackage,
  scripts: {
    ...drupalPackage?.scripts,
    ...basePackage.scripts,
  },
  dependencies: Object.fromEntries(
    Object.entries({
      ...drupalPackage?.dependencies,
      ...basePackage.dependencies,
    }).sort(),
  ),
  devDependencies: Object.fromEntries(
    Object.entries({
      ...drupalPackage?.devDependencies,
      ...basePackage.devDependencies,
    }).sort(),
  ),
};

// Next for Drupal insists on installing an old version of Next.
// Until that's fixed (hopefully in 2.0.0), we add an override.
mergedPackage.overrides = {
  ...(mergedPackage.overrides || {}),
  next: basePackage.dependencies.next,
};

fs.writeFileSync(
  path.resolve(__dirname, '../../package.json'),
  JSON.stringify(mergedPackage, null, 2),
);
