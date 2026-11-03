// Renders every caption in captions/*.json as a transparent 1080x1920 PNG
// into out/pngs/<script>/NN.png, for use in CapCut or any editor.
import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {browserExecutable} from './common.mjs';

const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
// Optional argument: one captions file name, to skip the others
const only = process.argv[2];
const files = fs.readdirSync('captions').filter((f) => f.endsWith('.json') && !f.startsWith('demo') && (!only || f === only));
if (!only) files.push('../captions-extra.json');

for (const file of files) {
  const p = path.join('captions', file);
  if (!fs.existsSync(p)) continue;
  const {items} = JSON.parse(fs.readFileSync(p, 'utf8'));
  const dir = path.join('out', 'pngs', path.basename(file, '.json'));
  fs.mkdirSync(dir, {recursive: true});
  for (const [i, item] of items.entries()) {
    const inputProps = {text: item.text, emphasis: !!item.emphasis};
    const composition = await selectComposition({serveUrl, id: 'CaptionStill', inputProps, browserExecutable});
    const output = path.join(dir, String(i + 1).padStart(2, '0') + '.png');
    await renderStill({serveUrl, composition, output, inputProps, imageFormat: 'png', browserExecutable});
    console.log(output);
  }
}
