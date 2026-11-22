// Splits a tall full-page screenshot into viewable segments: node scripts/split.mjs file.png [segmentHeight]
import sharp from "sharp";
const [file, seg = "1400"] = process.argv.slice(2);
const { width, height } = await sharp(file).metadata();
const h = Number(seg);
for (let i = 0, y = 0; y < height; i++, y += h) {
  const out = file.replace(".png", `-part${i}.png`);
  await sharp(file).extract({ left: 0, top: y, width, height: Math.min(h, height - y) }).toFile(out);
  console.log(out);
}
console.log(width, height);
