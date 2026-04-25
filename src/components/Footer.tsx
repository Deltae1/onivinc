import { Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = ["About", "Services", "Work", "Contact", "Tech Support"];
const socials = [
  { icon: Twitter,   href: "#", label: "Twitter/X" },
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background:  "#080C10",
        borderTop:   "1px solid rgba(10,132,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-14">

          {/* Brand */}
          <div className="max-w-xs">
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
                ONIV<span style={{ color: "#C9A84C" }}>INC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(210,220,230,0.35)" }}>
              Washington DC's premier TV &amp; Digital Media Production firm — creative
              technical services, cloud solutions, training, and consulting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            {/* Nav */}
            <div>
              <p className="class-label mb-5">Navigation</p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-")}`}
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

            {/* Social */}
            <div>
              <p className="class-label mb-5">Follow</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200"
                    style={{ color: "rgba(210,220,230,0.35)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(210,220,230,0.35)")}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "rgba(210,220,230,0.22)" }}>
            © {new Date().getFullYear()} All Rights Reserved | ONIV INC.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00FF9C", animation: "blink 2s ease-in-out infinite" }}
            />
            <span
              className="class-label"
              style={{ color: "rgba(0,255,156,0.4)" }}
            >
              ZERO-TRUST ACTIVE · SECURED · DC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
