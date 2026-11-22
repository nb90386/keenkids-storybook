// Photo paths. The public preview always uses face-softened files.
// NEXT_PUBLIC_PHOTO_SET=clear switches to unblurred crops that exist only on a
// reviewer's machine (public/images-clear is git- and Vercel-ignored) — for
// private review until guardian consent is documented. See docs/v2/PHOTOGRAPHY.md.
const clear = process.env.NEXT_PUBLIC_PHOTO_SET === "clear";

export const photo = (name: string) => (clear ? `/images-clear/v2/${name}.jpg` : `/images/v2/${name}.jpg`);
