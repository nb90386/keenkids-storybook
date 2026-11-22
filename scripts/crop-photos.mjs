// Art-directed crops for V2. Each crop is defined once in source pixels and cut twice:
//   public/images/v2/*        from the face-softened files (safe for the public preview)
//   public/images-clear/v2/*  from the unblurred originals — LOCAL PRIVATE REVIEW ONLY
//                             (git- and Vercel-ignored; never deployed until consent is confirmed)
// Usage: node scripts/crop-photos.mjs   (run scripts/process-images.mjs first)

import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";

const crops = [
  // purpose, softened source, original source, [left, top, width, height]
  { name: "hero-wide", soft: "gliders-courtyard.jpg", orig: "kids-outdoors-hoop-gliders-01.jpg", box: [0, 30, 1200, 790] },
  { name: "hero-tall", soft: "gliders-courtyard.jpg", orig: "kids-outdoors-hoop-gliders-01.jpg", box: [262, 120, 600, 735] },
  { name: "glider-hands", soft: "gliders-classroom.jpg", orig: "two-girls-hoop-gliders-classroom-01.jpg", box: [40, 515, 700, 385] },
  { name: "glider-held", soft: "gliders-classroom.jpg", orig: "two-girls-hoop-gliders-classroom-01.jpg", box: [640, 380, 560, 470] },
  { name: "boats-strip", soft: "foil-boats.jpg", orig: "kids-foil-boats-classroom-01.jpg", box: [40, 440, 1080, 360] },
  { name: "boat-hands", soft: "foil-boats.jpg", orig: "kids-foil-boats-classroom-01.jpg", box: [730, 520, 400, 280] },
  { name: "gliders-raised", soft: "gliders-courtyard.jpg", orig: "kids-outdoors-hoop-gliders-01.jpg", box: [100, 300, 1060, 400] },
];

async function cut(src, box, out) {
  const [left, top, width, height] = box;
  await sharp(src)
    .rotate()
    .extract({ left, top, width, height })
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);
}

await mkdir("public/images/v2", { recursive: true });
const clear = existsSync("source-assets");
if (clear) await mkdir("public/images-clear/v2", { recursive: true });

for (const c of crops) {
  await cut(`public/images/${c.soft}`, c.box, `public/images/v2/${c.name}.jpg`);
  if (clear) await cut(`source-assets/${c.orig}`, c.box, `public/images-clear/v2/${c.name}.jpg`);
  console.log(`✓ ${c.name} ${c.box[2]}×${c.box[3]}${clear ? " (+ private clear)" : ""}`);
}
