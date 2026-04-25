import { Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = ["About", "Services", "Work", "Contact", "Tech Support"];
const socials = [
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
          <div className="max-w-xs">
            <div
              className="text-xl font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "white" }}
            >
              ONIV INC.
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Washington DC's premier TV &amp; Digital Media Production firm — creative
              technical services, cloud solutions, training, and consulting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Navigation
              </p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Follow
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} All Rights Reserved | ONIV INC.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            Washington, DC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
