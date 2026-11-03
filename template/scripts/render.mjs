// Usage: node scripts/render.mjs captions/<file>.json [out.mp4]
import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import {browserExecutable} from './common.mjs';

const captionsPath = process.argv[2] ?? 'captions/demo-placeholder.json';
const props = JSON.parse(fs.readFileSync(captionsPath, 'utf8'));
const out = process.argv[3] ?? path.join('out', path.basename(captionsPath, '.json') + '.mp4');

if (!fs.existsSync(path.join('public', props.clip))) {
  throw new Error(`Clip public/${props.clip} not found. Drop your screen recording there.`);
}

const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const composition = await selectComposition({serveUrl, id: 'Overlay', inputProps: props, browserExecutable});
await renderMedia({
  serveUrl,
  composition,
  codec: 'h264',
  outputLocation: out,
  inputProps: props,
  browserExecutable,
});
console.log('Rendered', out);
