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

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 flex items-center justify-center px-10" style={{ minWidth: "230px" }}>
    <span className="redact text-xs font-semibold uppercase tracking-[0.18em]">{name}</span>
  </div>
);

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

  return (
    <section
      className="py-14 overflow-hidden"
      style={{
        background: "#080C10",
        borderTop:    "1px solid rgba(10,132,255,0.08)",
        borderBottom: "1px solid rgba(10,132,255,0.08)",
      }}
    >
      <p
        className="text-center mb-8 class-label"
        style={{ color: "rgba(201,168,76,0.55)" }}
      >
        // VERIFIED OPERATORS — TRUSTED BY
      </p>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{ animation: "marquee 32s linear infinite", width: "max-content" }}
        >
          {doubled.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
      <p
        className="text-center mt-5 class-label"
        style={{ color: "rgba(10,132,255,0.3)" }}
      >
        hover to reveal
      </p>
    </section>
  );
};

export default ClientLogos;
