// Turns Next's static export (out/) into a Hostinger-ready dist/:
//   dist/index.html  dist/404.html  dist/assets/…  dist/.htaccess  (+ sitemap.xml, robots.txt, llms.txt, og.jpg, icons)
import { cpSync, existsSync, renameSync, rmSync, copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const out = join(root, 'out');
const dist = join(root, 'dist');

if (!existsSync(out)) {
  console.error('✖ out/ not found — did `next build` run with output: "export"?');
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
cpSync(out, dist, { recursive: true });

// Move Next build files (JS, CSS, fonts) under assets/
const nextDir = join(dist, '_next');
if (existsSync(nextDir)) {
  mkdirSync(join(dist, 'assets'), { recursive: true });
  rmSync(join(dist, 'assets', '_next'), { recursive: true, force: true });
  renameSync(nextDir, join(dist, 'assets', '_next'));
}

// Always ship the Apache config (dotfiles can be skipped by some copy steps)
copyFileSync(join(root, 'public', '.htaccess'), join(dist, '.htaccess'));

rmSync(out, { recursive: true, force: true });
console.log('✔ dist/ ready — upload its contents to public_html on Hostinger.');
