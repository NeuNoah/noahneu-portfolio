import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f4f4f1",
          color: "#151515",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 3 }}>
          <span>NN / NOAH NEU</span>
          <span>2027</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1, fontWeight: 600, letterSpacing: -4 }}>
            <span>Technik verstehen.</span>
            <span>Probleme lösen.</span>
          </div>
          <div style={{ fontSize: 25, color: "#6d6d67" }}>Fachabitur Informatik · IT-Ausbildung ab August 2027</div>
        </div>
        <div style={{ height: 1, width: "100%", background: "#d4d4ce" }} />
      </div>
    ),
    { ...size },
  );
}
