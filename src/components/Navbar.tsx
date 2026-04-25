import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#work",     label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About" },
  { href: "#contact",  label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:    scrolled ? "rgba(8,12,16,0.96)"        : "transparent",
        backdropFilter:scrolled ? "blur(14px)"                : "none",
        borderBottom:  scrolled ? "1px solid rgba(10,132,255,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-6 h-6 rotate-45 border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: "rgba(10,132,255,0.5)",
                animation: "pulseGlow 2.5s ease-in-out infinite",
              }}
            >
              <div className="w-2 h-2 rotate-0" style={{ background: "#0A84FF" }} />
            </div>
            <span
              className="font-bold tracking-[0.22em] uppercase text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "white" }}
            >
              ONIV<span style={{ color: "#C9A84C" }}>INC</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(210,220,230,0.5)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(210,220,230,0.5)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs font-semibold px-5 py-2.5 transition-opacity hover:opacity-90"
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
          </div>

          <button
            className="md:hidden p-2"
            style={{ color: "rgba(210,220,230,0.6)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "#080C10", borderBottom: "1px solid rgba(10,132,255,0.1)" }}
          >
            <div className="px-4 py-6 space-y-4 max-w-6xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-1 transition-colors"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(210,220,230,0.5)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center text-xs font-semibold px-5 py-3 mt-2 transition-opacity hover:opacity-90"
                style={{
                  background: "#C9A84C",
                  color: "#080C10",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                onClick={() => setIsOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
