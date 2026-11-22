// Prepares the program photographs for publication.
//
// Every child's face is softened with a feathered blur that is baked into
// the published file. The live KeenKids site hides faces with a CSS blur but
// still serves the sharp originals; this preview never ships the originals.
// Metadata (including the GPS block in one founder photo) is stripped.
//
// Usage: node scripts/process-images.mjs
// Source files live in /source-assets (never deployed; see .vercelignore).

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("source-assets");
const OUT = path.resolve("public/images");

/**
 * Faces are ellipses in source-pixel coordinates: [cx, cy, rx, ry].
 * Ellipses are drawn generously (hair line to chin) and feathered.
 */
const photos = [
  {
    src: "kids-outdoors-hoop-gliders-01.jpg",
    out: "gliders-courtyard.jpg",
    sigma: 9,
    faces: [
      [174, 492, 40, 48],
      [332, 470, 36, 44],
      [428, 450, 32, 38],
      [470, 462, 38, 46],
      [556, 470, 40, 48],
      [752, 503, 34, 42],
      [906, 490, 40, 48],
      [1075, 505, 40, 48],
      [195, 398, 14, 18],
    ],
  },
  {
    src: "two-girls-hoop-gliders-classroom-01.jpg",
    out: "gliders-classroom.jpg",
    sigma: 22,
    faces: [
      [302, 318, 128, 158],
      [798, 330, 118, 142],
    ],
  },
  {
    src: "kids-foil-boats-classroom-01.jpg",
    out: "foil-boats.jpg",
    sigma: 22,
    faces: [
      [126, 236, 126, 150],
      [478, 266, 110, 134],
      [988, 206, 126, 150],
      // children in the background
      [118, 6, 46, 40],
      [262, 52, 40, 44],
      [468, 48, 36, 40],
      [338, 100, 44, 52],
      [26, 14, 30, 30],
    ],
  },
  {
    // About 34 people, faces too small to mask individually with confidence.
    // The whole frame is softened, as the client already does on the live site.
    src: "group-photo-stairs-mabel-mattos-01.jpg",
    out: "build-day-stairs.jpg",
    sigma: 7,
    whole: true,
    faces: [],
  },
];

async function softenFaces({ src, out, sigma, faces, whole }) {
  const input = path.join(SRC, src);
  const base = sharp(input).rotate();
  const { width, height } = await base.metadata();
  const blurred = await sharp(input).rotate().blur(sigma).toBuffer();

  let result;
  if (whole) {
    result = sharp(blurred);
  } else {
    const feather = Math.max(8, Math.round(sigma * 1.5));
    const ellipses = faces
      .map(
        ([cx, cy, rx, ry]) =>
          `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff"/>`,
      )
      .join("");
    const mask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <defs><filter id="f" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${feather}"/></filter></defs>
        <g filter="url(#f)">${ellipses}</g>
      </svg>`,
    );
    // Note: sharp applies operations in a fixed order, so the mask is joined
    // as raw pixels onto the (alpha-free) blurred JPEG.
    const maskAlpha = await sharp(mask)
      .resize(width, height)
      .extractChannel(0)
      .raw()
      .toBuffer({ resolveWithObject: true });
    const blurredMasked = await sharp(blurred)
      .joinChannel(maskAlpha.data, { raw: maskAlpha.info })
      .png()
      .toBuffer();
    result = sharp(input).rotate().composite([{ input: blurredMasked }]);
  }

  await result
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(OUT, out));
  console.log(`✓ ${out} (${width}×${height}, ${whole ? "whole frame" : faces.length + " faces"})`);
}

async function founders() {
  // Anjana: 2736×3648 portrait. Crop to 4:5 around head and shoulders.
  await sharp(path.join(SRC, "founder-anjana-venkat.jpeg"))
    .rotate()
    .resize({ width: 900, height: 1125, fit: "cover", position: "north" })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(OUT, "founder-anjana.jpg"));
  // Shilpa: 400×400 is the largest version published. Kept at native size.
  await sharp(path.join(SRC, "founder-shilpa-javli.jpg"))
    .rotate()
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(OUT, "founder-shilpa.jpg"));
  console.log("✓ founder portraits (metadata stripped)");
}

await mkdir(OUT, { recursive: true });
for (const p of photos) await softenFaces(p);
await founders();
