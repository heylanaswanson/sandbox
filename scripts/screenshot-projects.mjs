// scripts/screenshot-projects.mjs
// Usage:
//   npm run shots -- --base http://localhost:8000
//    (or any static server root where "weeks/" is served)
//
// Requires: puppeteer
//   npm i -D puppeteer
//
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const args = process.argv.slice(2);
const baseIndex = args.indexOf('--base');
const base = baseIndex !== -1 ? args[baseIndex + 1] : 'http://localhost:8000';

const portfolioProjectsJson = path.resolve('portfolio', 'projects.json');
const outDir = path.resolve('portfolio', 'images', 'thumbs');
await fs.mkdir(outDir, { recursive: true });

const projects = JSON.parse(await fs.readFile(portfolioProjectsJson, 'utf8'));
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });

for (const p of projects) {
  const url = p.url.startsWith('http') ? p.url : base.replace(/\/$/, '') + '/' + p.url.replace(/^\//, '');
  console.log('Capturing', url);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.waitForTimeout(1000);
    const safe = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const outfile = path.join(outDir, `${safe}.png`);
    await page.screenshot({ path: outfile, fullPage: true });
  } catch (e) {
    console.error('Failed to capture', url, e.message);
  }
}

await browser.close();
console.log('Screenshots saved to', outDir);
