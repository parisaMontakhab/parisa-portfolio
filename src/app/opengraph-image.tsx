import { ImageResponse } from "next/og";

export const alt = "Parisa Montakhabisani — Full-Stack Developer portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const background = "#0a0a0a";
const surface = "#141414";
const border = "rgba(255, 255, 255, 0.08)";
const accent = "#3ecf8e";
const foreground = "#f4f4f5";
const muted = "#a1a1aa";
const dotGray = "#3a3a3a";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: background,
        border: `1px solid ${border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          paddingTop: 72,
          paddingBottom: 72,
          paddingLeft: 80,
          paddingRight: 48,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: accent,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: foreground,
            lineHeight: 1.1,
            marginTop: 24,
          }}
        >
            Parisa Montakhabisani
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: accent,
            marginTop: 16,
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 22,
            color: muted,
            lineHeight: 1.5,
            marginTop: 28,
          }}
        >
          <div>Building modern web applications</div>
          <div>from frontend to backend.</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 16,
            color: muted,
            lineHeight: 1.6,
            marginTop: 36,
          }}
        >
          <div>React • Next.js • TypeScript</div>
          <div>Node.js • MongoDB</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 72,
          paddingBottom: 72,
          paddingRight: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 320,
            border: `1px solid ${border}`,
            borderRadius: 16,
            background: surface,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 20,
              paddingRight: 20,
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: dotGray,
                  marginRight: 6,
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: dotGray,
                  marginRight: 6,
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  background: dotGray,
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 28,
              paddingBottom: 28,
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <div
              style={{
                width: 120,
                height: 10,
                borderRadius: 4,
                background: accent,
                marginBottom: 14,
              }}
            />
            <div
              style={{
                width: 200,
                height: 10,
                borderRadius: 4,
                background: dotGray,
                marginBottom: 14,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 24,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 10,
                  borderRadius: 4,
                  background: accent,
                  marginBottom: 10,
                }}
              />
              <div
                style={{
                  width: 140,
                  height: 10,
                  borderRadius: 4,
                  background: dotGray,
                }}
              />
            </div>
            <div
              style={{
                width: 100,
                height: 10,
                borderRadius: 4,
                background: dotGray,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 14,
              paddingBottom: 14,
              paddingLeft: 20,
              paddingRight: 20,
              borderTop: `1px solid ${border}`,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                background: accent,
                marginRight: 8,
              }}
            />
            <div
              style={{
                width: 100,
                height: 8,
                borderRadius: 4,
                background: dotGray,
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
