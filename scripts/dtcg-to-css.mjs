#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

function isDtcgToken(node) {
  return node && typeof node === 'object' && '$value' in node;
}

function flattenDtcg(node, prefix = []) {
  if (isDtcgToken(node)) {
    return [[prefix.join('-'), node.$value]];
  }
  if (!node || typeof node !== 'object') return [];
  const out = [];
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    out.push(...flattenDtcg(value, [...prefix, key]));
  }
  return out;
}

function dtcgToCss(bundle, sourceLabel) {
  const tokens = flattenDtcg(bundle);
  const lines = tokens.map(
    ([name, value]) => `  --${name}: ${value};`,
  );
  return `/* Generated from ${sourceLabel} by scripts/dtcg-to-css.mjs. Do not edit by hand. */\n:root {\n${lines.join('\n')}\n}\n`;
}

const jobs = [
  // Each DTCG bundle is emitted twice:
  //  - public/brand/* — URL-served, for Mechanism B's external consumers
  //    (the third-party tool's <link href="…/brand/overrides.css">)
  //  - app/brand/* — JS-importable, consumed by app/layout.tsx so the
  //    shell's own chrome paints with the same tokens. Loading via a
  //    regular `import` (rather than a manual <link> in <head>) keeps
  //    Next.js's per-route CSS dependency tracing intact.
  {
    in: 'lib/themes/uswds.json',
    outs: ['public/brand/overrides.css', 'app/brand/overrides.css'],
  },
  {
    in: 'lib/themes/uswds-alt.json',
    outs: ['public/brand/overrides-alt.css', 'app/brand/overrides-alt.css'],
  },
];

for (const { in: src, outs } of jobs) {
  const srcPath = resolve(repoRoot, src);
  const bundle = JSON.parse(await readFile(srcPath, 'utf8'));
  const css = dtcgToCss(bundle, src);
  for (const dst of outs) {
    const dstPath = resolve(repoRoot, dst);
    await writeFile(dstPath, css);
    console.log(`${src} -> ${dst}`);
  }
}
