// node scripts/sheet.mjs <dir> <suffix e.g. -1440.png> <out> [cropW cropH tileW cols]
import sharp from "sharp";
import { readdir } from "node:fs/promises";
const [dir, suffix, out, cw = "1440", ch = "900", tw = "460", cols = "4"] = process.argv.slice(2);
const files = (await readdir(dir)).filter((f) => f.endsWith(suffix)).sort();
const W = +cw, H = +ch, tileW = +tw, tileH = Math.round((tileW * H) / W), gap = 20, label = 26, C = +cols;
const rows = Math.ceil(files.length / C);
const comps = [];
for (const [i, f] of files.entries()) {
  const x = gap + (i % C) * (tileW + gap), y = gap + Math.floor(i / C) * (tileH + label + gap);
  const meta = await sharp(`${dir}/${f}`).metadata();
  const buf = await sharp(`${dir}/${f}`).extract({ left: 0, top: 0, width: meta.width, height: Math.min(meta.height, Math.round((meta.width * H) / W)) }).resize(tileW, tileH).png().toBuffer();
  comps.push({ input: buf, left: x, top: y });
  const name = "/" + f.replace(suffix, "").replace(/^home$/, "").replaceAll("_", "/");
  comps.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${tileW}" height="${label}"><text x="0" y="19" font-family="Georgia" font-size="15" fill="#2a2d29">${name}</text></svg>`), left: x, top: y + tileH + 3 });
}
await sharp({ create: { width: C * (tileW + gap) + gap, height: rows * (tileH + label + gap) + gap, channels: 3, background: "#ece6d9" } }).composite(comps).png().toFile(out);
console.log(out, files.length);
