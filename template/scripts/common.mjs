import fs from 'node:fs';

// Remotion's bundled Chrome download is skipped; render with the installed Edge.
const candidates = [
  process.env.BROWSER_EXECUTABLE,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);

export const browserExecutable = candidates.find((p) => fs.existsSync(p));
if (!browserExecutable) {
  throw new Error('Edge not found. Set BROWSER_EXECUTABLE to a Chromium/Edge path.');
}
