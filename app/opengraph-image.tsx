import { ImageResponse } from "next/og";

export const alt =
  "Karolaine Sorrechio Advocacia — Estratégia jurídica que protege o que realmente importa.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0D0D0D",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold gradient circle */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            bottom: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Decorative monogram */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "340px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(201,169,110,0.06)",
            lineHeight: 1,
            fontFamily: "serif",
          }}
        >
          KS
        </div>

        {/* Top gold line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#C9A96E",
            }}
          />
          <span
            style={{
              color: "#C9A96E",
              fontSize: "13px",
              letterSpacing: "0.35em",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
          >
            ADVOCACIA COM EXCELÊNCIA
          </span>
        </div>

        {/* Logo KS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "44px",
          }}
        >
          <span
            style={{
              fontSize: "88px",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#C9A96E",
              lineHeight: 1,
              fontFamily: "serif",
            }}
          >
            KS
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              gap: "4px",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "14px",
                letterSpacing: "0.25em",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
              }}
            >
              KAROLAINE SORRECHIO
            </span>
            <span
              style={{
                color: "#C9A96E",
                fontSize: "12px",
                letterSpacing: "0.3em",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
              }}
            >
              ADVOGADA
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.2,
            fontFamily: "serif",
            maxWidth: "700px",
          }}
        >
          Estratégia jurídica que protege o que{" "}
          <span style={{ color: "#C9A96E", fontStyle: "italic" }}>
            realmente importa.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: "28px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "sans-serif",
            maxWidth: "540px",
            lineHeight: 1.6,
          }}
        >
          Atendimento jurídico personalizado, com soluções inteligentes,
          seguras e eficientes.
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "100px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{ width: "32px", height: "1px", background: "#C9A96E" }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              letterSpacing: "0.2em",
              fontFamily: "sans-serif",
            }}
          >
            karlainesorrechio.adv.br
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
