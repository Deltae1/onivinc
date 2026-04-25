import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroBg from "@/assets/reference/broadcast-studio.jpg";

const BOOT_LINES = [
  { text: "ONIV-INC OS v3.0 · SECURE BOOT",           delay: 0 },
  { text: "kernel integrity................[OK]",       delay: 0.4 },
  { text: "zero-trust enforcement..........[ON]",      delay: 0.8 },
  { text: "cloud infra stack...............[OK]",      delay: 1.2 },
  { text: "media production network........[OK]",      delay: 1.6 },
  { text: "session authenticated — access granted.",   delay: 2.0 },
];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const FONT = 11;
    type Col = { x: number; y: number; speed: number; opacity: number };
    let cols: Col[] = [];

    const initCols = () => {
      cols = Array.from(
        { length: Math.floor(canvas.width / (FONT * 1.5)) },
        (_, i) => ({
          x:       i * (FONT * 1.5),
          y:       Math.random() * canvas.height,
          speed:   0.25 + Math.random() * 0.4,
          opacity: 0.05 + Math.random() * 0.12,
        })
      );
    };
    initCols();

    let raf: number;
    const draw = () => {
      ctx.fillStyle = "rgba(8,12,16,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT}px "JetBrains Mono", monospace`;
      cols.forEach((col) => {
        ctx.fillStyle = `rgba(10,132,255,${col.opacity})`;
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", col.x, col.y);
        col.y += col.speed;
        if (col.y > canvas.height) {
          col.y     = -FONT;
          col.speed   = 0.25 + Math.random() * 0.4;
          col.opacity = 0.04 + Math.random() * 0.1;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(() => { resize(); initCols(); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Broadcast photo */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Broadcast studio" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.75) 55%, rgba(8,12,16,0.4) 100%)",
          }}
        />
      </div>

      {/* Binary rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.45, mixBlendMode: "screen" }}
      />

      {/* Horizontal divider line */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(10,132,255,0.08), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — main copy */}
          <div>
            {/* Classification badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-8 px-3 py-1.5"
              style={{
                border: "1px solid rgba(10,132,255,0.25)",
                background: "rgba(10,132,255,0.06)",
              }}
            >
              <Shield className="w-3 h-3" style={{ color: "#0A84FF" }} />
              <span className="class-label">ONIV-INC · DC · EST. 2017 · SECURED</span>
              <span className="cursor" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h1
                className="font-bold leading-none mb-4"
                style={{
                  fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
                  color: "#C9A84C",
                  letterSpacing: "-0.02em",
                }}
              >
                ONIV INC.
              </h1>
              <p
                className="font-semibold leading-tight mb-3"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "white" }}
              >
                Creative Solutions. Expert Teams.
              </p>
              <p
                className="font-medium mb-8"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
                  color: "rgba(210,220,230,0.5)",
                }}
              >
                Broadcast-Ready.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(210,220,230,0.5)", fontSize: "0.95rem" }}
            >
              Washington DC's premier TV &amp; Digital Media Production firm — delivering
              creative technical services, cloud solutions, training, and consulting.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 text-xs font-bold transition-opacity hover:opacity-90"
                style={{
                  background: "#C9A84C",
                  color: "#080C10",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Book a Consultation
              </a>
              <a
                href="#work"
                className="px-7 py-3.5 text-xs font-bold transition-all duration-200"
                style={{
                  border: "1px solid rgba(10,132,255,0.3)",
                  color: "rgba(10,132,255,0.8)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(10,132,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(10,132,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(10,132,255,0.3)";
                }}
              >
                View Our Work
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex gap-8 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { val: "1,000+", label: "Trained" },
                { val: "10+",    label: "Years" },
                { val: "9",      label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-bold text-2xl" style={{ color: "#C9A84C" }}>{s.val}</div>
                  <div className="class-label mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — boot terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="t-card p-6 hidden lg:block"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
          >
            <div
              className="flex items-center justify-between mb-5 pb-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="class-label">// ONIV-INC · SECURE TERMINAL</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,80,80,0.5)" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,200,0,0.5)" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(0,255,156,0.5)" }} />
              </div>
            </div>

            {BOOT_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: line.delay + 0.5 }}
                className="mb-2 leading-relaxed"
                style={{
                  color: i === BOOT_LINES.length - 1
                    ? "#00FF9C"
                    : i === 0
                    ? "rgba(201,168,76,0.9)"
                    : "rgba(10,132,255,0.7)",
                }}
              >
                {i === 0 ? "" : "> "}{line.text}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-4 pt-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(210,220,230,0.3)",
              }}
            >
              $ <span className="cursor" />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
