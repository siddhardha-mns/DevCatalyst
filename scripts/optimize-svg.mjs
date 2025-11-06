#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { optimize } from 'svgo';

const root = process.cwd();
const targets = [path.join(root, 'public'), path.join(root, 'src')];

const isExcluded = (p) => /\\node_modules\\|\\dist\\|\\\.git\\/.test(p);

async function* walk(dir) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (isExcluded(p)) continue;
    if (e.isDirectory()) yield* walk(p);
    else if (p.toLowerCase().endsWith('.svg')) yield p;
  }
}

const config = {
  multipass: true,
  plugins: [
    'preset-default',
    { name: 'removeDimensions', active: false }, // keep width/height if present
    { name: 'convertStyleToAttrs', active: true },
    { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
  ],
};

async function main() {
  const svgs = [];
  for (const t of targets) for await (const p of walk(t)) svgs.push(p);
  if (svgs.length === 0) {
    console.log('No SVG files found under public/ or src/.');
    return;
  }
  let saved = 0;
  for (const file of svgs) {
    try {
      const input = await fs.readFile(file, 'utf8');
      const res = optimize(input, { path: file, ...config });
      if (res.data && res.data.length > 0 && res.data !== input) {
        await fs.writeFile(file, res.data, 'utf8');
        saved++;
      }
    } catch (e) {
      console.error('SVGO failed:', file, e.message);
    }
  }
  console.log(`Optimized ${saved}/${svgs.length} SVGs in-place.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
