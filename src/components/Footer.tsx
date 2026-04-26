import { Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  "Creative Technical Services",
  "Azure Cloud Solutions",
  "Cloud Consulting",
  "Training & Support",
  "Event Coverage",
];

const navLinks = ["Services", "Work", "About", "FAQ", "Contact"];

const socials = [
  { icon: Mail, href: "mailto:info@onivinc.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#080C10", borderTop: "1px solid rgba(10,132,255,0.08)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-5 h-5 rotate-45 border flex items-center justify-center"
                style={{ borderColor: "rgba(10,132,255,0.4)" }}
              >
                <div className="w-1.5 h-1.5" style={{ background: "#0A84FF" }} />
              </div>
              <span
                className="font-bold tracking-[0.22em] uppercase text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "white" }}
              >
                ONIV<span style={{ color: "#0A84FF" }}>INC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(210,220,230,0.35)" }}>
              Washington DC's premier TV &amp; Digital Media Production firm. Innovative.
              Modern. Budget-Friendly. Established 2017.
            </p>
            <div className="flex items-center gap-3 mb-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                  style={{ border: "1px solid rgba(10,132,255,0.18)", color: "rgba(210,220,230,0.35)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "rgba(10,132,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(210,220,230,0.35)";
                    e.currentTarget.style.borderColor = "rgba(10,132,255,0.18)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2" style={{ color: "rgba(210,220,230,0.35)" }}>
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#0A84FF" }} />
                <span className="text-xs leading-relaxed">2001 L St NW, Suite 500<br />Washington, DC</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "rgba(210,220,230,0.35)" }}>
                <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: "#0A84FF" }} />
                <a href="tel:+12027435659" className="text-xs transition-colors duration-200"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(210,220,230,0.35)")}
                >(202) 743-5659</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <p className="class-label mb-5">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(210,220,230,0.35)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(210,220,230,0.35)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <p className="class-label mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(210,220,230,0.35)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(210,220,230,0.35)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-1">
            <p className="class-label mb-5">Get Started</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(210,220,230,0.35)" }}>
              Ready to work together? Let's open a channel and build something great.
            </p>
            <a
              href="#contact"
              className="inline-block text-xs font-bold px-5 py-3 transition-opacity hover:opacity-90"
              style={{
                background:    "#0A84FF",
                color:         "white",
                fontFamily:    "'JetBrains Mono', monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Submit a Request
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "rgba(210,220,230,0.22)" }}>
            © {new Date().getFullYear()} ONIV Incorporated. All rights reserved. · Washington, DC
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00FF9C", animation: "blink 2s ease-in-out infinite" }}
            />
            <span className="class-label" style={{ color: "rgba(0,255,156,0.4)" }}>
              ZERO-TRUST · SECURE · ONIV-INC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
