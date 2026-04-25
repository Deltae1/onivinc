import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";

const BOOT_LINES = [
  { text: "ONIV-INC OS v4.2.1 — SECURE BOOT", delay: 0 },
  { text: "verifying kernel integrity...........[OK]", delay: 0.3 },
  { text: "loading service modules................[OK]", delay: 0.6 },
  { text: "zero-trust policy enforcement..........[ON]", delay: 0.9 },
  { text: "cloud infrastructure stack.............[OK]", delay: 1.2 },
  { text: "media production network...............[OK]", delay: 1.5 },
  { text: "session authenticated — access granted.", delay: 1.8 },
];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const FONT = 11;
    const CHARS = "01";
    type Column = { x: number; y: number; speed: number; opacity: number };
    let cols: Column[] = [];

    const initCols = () => {
      const count = Math.floor(canvas.width / (FONT * 1.4));
      cols = Array.from({ length: count }, (_, i) => ({
        x: i * (FONT * 1.4),
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.08 + Math.random() * 0.18,
      }));
    };
    initCols();

    let raf: number;
    const draw = () => {
      ctx.fillStyle = "rgba(8,12,16,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT}px "JetBrains Mono", monospace`;
      cols.forEach((col) => {
        ctx.fillStyle = `rgba(10,132,255,${col.opacity})`;
        ctx.fillText(CHARS[Math.floor(Math.random() * 2)], col.x, col.y);
        col.y += col.speed;
        if (col.y > canvas.height) {
          col.y = -FONT;
          col.speed = 0.3 + Math.random() * 0.5;
          col.opacity = 0.06 + Math.random() * 0.14;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(() => { resize(); initCols(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Binary rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(10,132,255,0.06)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(245,166,35,0.04)_0%,transparent_55%)]" />

      {/* Horizontal rule */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 container-max mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — main copy */}
        <div>
          {/* Classification strip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 border border-primary/25 bg-primary/5 px-3 py-1.5 mb-8"
          >
            <Shield className="w-3 h-3 text-primary" />
            <span className="font-mono text-xs tracking-widest uppercase text-primary/80">
              ONIV-INC · DC · EST. 2017 · CLEARED
            </span>
            <span className="cursor-blink" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
          >
            Innovative.{" "}
            <span className="text-primary">Modern.</span>
            <br />
            <span className="text-amber">Budget-Friendly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Washington DC's premier TV &amp; digital media production firm —
            delivering creative technical services, cloud solutions, training,
            and consulting. Operated by one of the best broadcast TDs in the
            district.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              className="btn-scan inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-sm font-mono text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="btn-scan inline-flex items-center justify-center gap-2 border border-border text-muted-foreground px-7 py-3 rounded-sm font-mono text-xs tracking-widest uppercase hover:border-primary/40 hover:text-foreground transition-all"
            >
              View Services
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border"
          >
            {[
              { val: "1,000+", label: "Professionals Trained" },
              { val: "6+", label: "Years Operating" },
              { val: "DC", label: "Based & Deployed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-primary">{s.val}</div>
                <div className="font-mono text-xs text-muted-foreground mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — boot terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="terminal-card p-6 font-mono text-xs"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
            <span className="class-label">// ONIV-INC · SECURE TERMINAL</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-phosphor/60" />
            </div>
          </div>

          {/* Boot lines */}
          <div className="space-y-2">
            {BOOT_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: line.delay + 0.5 }}
                className={`leading-relaxed ${
                  line.text.includes("[OK]")
                    ? "text-phosphor/80"
                    : line.text.includes("access granted")
                    ? "text-amber"
                    : line.text.includes("[ON]")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-primary/40 select-none">❯ </span>
                {line.text}
              </motion.div>
            ))}

            {/* Blinking prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-4 flex items-center gap-1 text-primary"
            >
              <Zap className="w-3 h-3" />
              <span>oniv@dc:~$</span>
              <span className="cursor-blink" />
            </motion.div>
          </div>

          {/* Bottom meta */}
          <div className="mt-6 pt-4 border-t border-border grid grid-cols-2 gap-3">
            {[
              { k: "ENTITY", v: "ONIV Incorporated" },
              { k: "JURISDICTION", v: "Washington, DC" },
              { k: "CLEARANCE", v: "Zero-Trust Active" },
              { k: "UPTIME", v: "6+ years" },
            ].map(({ k, v }) => (
              <div key={k}>
                <div className="text-muted-foreground/50 text-xs mb-0.5">{k}</div>
                <div className="text-foreground/80">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground/50 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
