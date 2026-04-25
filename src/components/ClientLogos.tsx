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
  <div
    className="flex-shrink-0 flex items-center justify-center px-10"
    style={{ minWidth: "220px" }}
  >
    <span
      className="text-xs font-semibold uppercase tracking-[0.18em] whitespace-nowrap"
      style={{ color: "rgba(255,255,255,0.28)" }}
    >
      {name}
    </span>
  </div>
);

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

  return (
    <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="py-12 overflow-hidden">
      <p
        className="text-center text-xs uppercase tracking-[0.35em] mb-8"
        style={{ color: "rgba(201,168,76,0.6)" }}
      >
        Trusted By
      </p>
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
        >
          {doubled.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
