import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "KeenKids Enrichment: A little more wonder after the bell. Hands-on STEAM after school in Milpitas.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const serif = await readFile(join(process.cwd(), "assets/brygada-600.ttf"));
const figtree = await readFile(join(process.cwd(), "assets/figtree-500.ttf"));
const photo = await readFile(join(process.cwd(), "public/images/v2/hero-tall.jpg"), "base64");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#23453a",
          color: "#fffcf5",
          padding: "64px 72px",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontFamily: "Brygada", fontSize: 30, color: "#c9a05a" }}>KeenKids Enrichment</div>
          <div style={{ fontFamily: "Brygada", fontSize: 76, lineHeight: 1.02, marginTop: 28, letterSpacing: -1.5 }}>
            A little more wonder after the bell.
          </div>
          <div style={{ fontFamily: "Figtree", fontSize: 28, marginTop: 30, color: "rgba(255,252,245,0.8)" }}>
            Hands-on STEAM after school for grades 1–5 in Milpitas.
          </div>
        </div>
        <div style={{ display: "flex", background: "#fffcf5", padding: 12, boxShadow: "0 30px 50px -20px rgba(0,0,0,0.6)" }}>
          <img
            src={`data:image/jpeg;base64,${photo}`}
            width={400}
            height={420}
            style={{ objectFit: "cover", objectPosition: "50% 62%" }}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Brygada", data: serif, style: "normal", weight: 600 },
        { name: "Figtree", data: figtree, style: "normal", weight: 500 },
      ],
    },
  );
}
