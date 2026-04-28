const clients = [
  "U.S. Agency for Global Media",
  "International Monetary Fund",
  "Voice of America",
  "Middle East Broadcasting Networks",
  "Fox Business",
  "21st Century Fox",
  "NBC Universal",
  "NBC Sports Washington",
  "Diversity Education Institute",
];

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

  return (
    <section
      style={{
        background:   "rgba(10,132,255,0.04)",
        borderTop:    "1px solid rgba(10,132,255,0.25)",
        borderBottom: "1px solid rgba(10,132,255,0.12)",
        overflow:     "hidden",
        padding:      "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "stretch", height: "40px" }}>

        {/* Pinned label */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "0 20px", flexShrink: 0,
            borderRight: "1px solid rgba(10,132,255,0.15)",
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(201,168,76,0.7)", whiteSpace: "nowrap",
          }}>
            // VERIFIED OPERATORS
          </span>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(0,255,156,0.6)", flexShrink: 0 }} />
        </div>

        {/* Scrolling area */}
        <div style={{ overflow: "hidden", flex: 1, position: "relative" }}>
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: 60,
            background: "linear-gradient(to left, rgba(8,12,20,1), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            display: "flex", alignItems: "center", height: "100%",
            animation: "marquee 36s linear infinite",
            width: "max-content",
          }}>
            {doubled.map((name, i) => (
              <div key={`${name}-${i}`} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#C9A84C", whiteSpace: "nowrap",
                  padding: "1px 6px",
                }}>
                  {name}
                </span>
                <span style={{ color: "rgba(10,132,255,0.3)", margin: "0 16px", fontSize: "0.5rem" }}>·</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientLogos;
