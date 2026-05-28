/**
 * Generates file ./app/_components/blocks/WpBlocksFragment.ts containing
 * a fragment with all the WP core block fragments Faust provides.
 *
 * USAGE: ts-node block-fragments.ts
 */

import { CoreBlocks } from '@faustwp/blocks';
import { glob } from 'glob';
import { mkdirSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

async function go() {
  const filePath = pathToFileURL(__filename).toString();
  const outDir = new URL('./app/_components/blocks', filePath).pathname;
  const outPath = `${outDir}/WpBlocksFragment.ts`;

  const fragments: string[] = [];

  // Core fragment sources
  for (const v of Object.values(CoreBlocks)) {
    if (v.fragments.entry.loc) {
      let body = v.fragments.entry.loc.source.body;

      // { CoreBlocks } from '@faustwp/blocks' is out of date with the schema
      // of WP 6.6, so make some changes/removals.
      switch (v.fragments.key) {
        case 'CoreButtonBlockFragment':
          body = body.replace(/\btext\b/, 'textAlign');
          break;
        case 'CoreImageBlockFragment':
          body = body.replace(/\bcaption\b/, '');
          // TODO citation is now on block.mediaDetails.meta.caption
          break;
        case 'CoreHeadingBlockFragment':
          body = body.replace(/\bcontent\b/, '');
          break;
      }
      fragments.push(body);
    }
  }

  const fragmentFiles = await glob('app/_components/blocks/**/fragments.ts', {
    absolute: true,
    withFileTypes: false,
  });

  // Some fragments will depend on others. We will gather them here and output
  // them directly before the WpBlocksFragment definition.
  const prefixFragments: string[] = [];

  // Custom fragment sources
  const customFragmentModules = await Promise.all(
    fragmentFiles.map(file => import(file)),
  );
  for (const module of customFragmentModules) {
    fragments.push(module.default.entry.loc.source.body);

    // If set, fragments.dependencies should be an array of fragment definition
    // objects (each with .key and .entry).
    if (module.default.dependencies) {
      for (const dep of module.default.dependencies) {
        prefixFragments.push(dep.entry.loc.source.body);
      }
    }
  }

  const lines: string[] = [];

  lines.push('// Do not alter this file. Instead, use `npm run generate:all');
  lines.push('/* eslint-disable */');
  lines.push('');
  lines.push("import { gql } from '@apollo/client';");
  lines.push('');
  lines.push(`const WpBlocksFragment = gql\`
  ${prefixFragments.join('\n')}
  fragment WpBlocksFragment on EditorBlock {
    __typename
    clientId
    name
    renderedHtml
    parentClientId
`);

  for (const fragment of fragments) {
    lines.push('    ' + fragment.trim().replace(/fragment \w+/, '...'));
  }

  lines.push('  }');
  lines.push('`;');
  lines.push('');
  lines.push('export default WpBlocksFragment;');
  lines.push('');

  mkdirSync(outDir, { recursive: true });

  writeFileSync(outPath, lines.join('\n'), { encoding: 'utf8' });
}

go().catch(err => console.error(err));
