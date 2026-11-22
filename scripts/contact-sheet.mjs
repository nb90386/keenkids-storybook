// Builds docs/screenshots/contact-sheet.png from the first viewport of each "after" capture.
import sharp from "sharp";
import { readdir } from "node:fs/promises";
const dir = "docs/screenshots/after";
const files = (await readdir(dir)).filter((f) => f.endsWith("-1440.png")).sort();
const tileW = 480, tileH = 300, gap = 24, cols = 3, label = 28;
const rows = Math.ceil(files.length / cols);
const W = cols * tileW + (cols + 1) * gap, H = rows * (tileH + label) + (rows + 1) * gap;
const composites = [];
for (const [i, f] of files.entries()) {
  const x = gap + (i % cols) * (tileW + gap), y = gap + Math.floor(i / cols) * (tileH + label + gap);
  const tile = await sharp(`${dir}/${f}`).extract({ left: 0, top: 0, width: 1440, height: 900 }).resize(tileW, tileH).png().toBuffer();
  composites.push({ input: tile, left: x, top: y });
  const name = f.replace("-1440.png", "").replaceAll("_", "/");
  composites.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${tileW}" height="${label}"><text x="0" y="20" font-family="Georgia" font-size="16" fill="#282c26">/${name === "home" ? "" : name}</text></svg>`), left: x, top: y + tileH + 4 });
}
await sharp({ create: { width: W, height: H, channels: 3, background: "#f7f3e9" } }).composite(composites).png().toFile("docs/screenshots/contact-sheet.png");
console.log("contact sheet", W, H, files.length, "pages");
