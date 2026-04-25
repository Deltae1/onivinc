import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container-max mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-primary/60 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary" />
              </div>
              <span className="font-mono text-sm tracking-widest uppercase text-foreground">
                ONIV<span className="text-primary">INC</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              Washington DC's premier TV &amp; Digital Media Production firm.
              Innovative. Modern. Budget-Friendly. Established 2017.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:hello@onivinc.com"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Creative Technical Services",
                "Azure Cloud Solutions",
                "Cloud Consulting",
                "Training & Support",
                "Event Coverage",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Request a Quote", href: "#quote" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground/40">
            © {year} ONIV Incorporated. All rights reserved. · Washington, DC
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-phosphor/50 animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">
              ZERO-TRUST · SECURE · ONIV-INC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
