import { ImageResponse } from "next/og";

export const alt = "GATHA — I build modern websites that work.";
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
          backgroundColor: "#111111",
          backgroundImage:
            "linear-gradient(to right, rgba(123,160,130,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(123,160,130,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid rgba(123,160,130,0.35)",
            paddingBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
                border: "1px solid #7BA082",
                color: "#7BA082",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              G
            </div>
            <span
              style={{
                fontSize: "26px",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              GATHA
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.22em",
              color: "#7BA082",
            }}
          >
            PORTFOLIO / 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "96px",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            <span>I BUILD MODERN</span>
            <span>WEBSITES THAT</span>
            <span style={{ color: "#7BA082" }}>WORK.</span>
          </div>
          <p
            style={{
              marginTop: "28px",
              fontSize: "20px",
              lineHeight: 1.5,
              color: "#c4c7c7",
              maxWidth: "680px",
            }}
          >
            Fullstack engineer crafting high-performance web systems, clean
            architecture, and modern digital experiences.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(123,160,130,0.35)",
            paddingTop: "20px",
            fontSize: "14px",
            letterSpacing: "0.16em",
          }}
        >
          <span style={{ color: "#7BA082" }}>HELLO@GATHA.DEV</span>
          <span style={{ color: "#8e9192" }}>
            YOGA AGATHA PASARIBU — JAKARTA, ID
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
