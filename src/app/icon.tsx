import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const background = "#0a0a0a";
const accent = "#3ecf8e";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background,
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: accent,
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          P
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
