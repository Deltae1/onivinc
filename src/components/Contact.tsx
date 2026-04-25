import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    id: "COMM-01",
    label: "Email",
    value: "hello@onivinc.com",
    href: "mailto:hello@onivinc.com",
    note: "Primary channel — 24hr response",
  },
  {
    icon: MapPin,
    id: "COMM-02",
    label: "Location",
    value: "Washington, DC",
    href: "#",
    note: "Metro area · on-site available",
  },
  {
    icon: Clock,
    id: "COMM-03",
    label: "Operating Hours",
    value: "Mon–Fri · 9AM–6PM EST",
    href: "#",
    note: "Emergency response available",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-max mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="class-label mb-3">// COMM — CONTACT CHANNELS</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Open a <span className="text-primary">Channel</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Reach us through any of the following verified channels. All
            communications are handled directly — no call centers, no bots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="terminal-card p-6 group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-primary/25 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/40">{item.id}</span>
              </div>

              <p className="font-mono text-xs text-primary/60 tracking-widest mb-1">{item.label}</p>
              <p className="font-display text-base font-medium text-foreground group-hover:text-primary transition-colors mb-1 flex items-center gap-1">
                {item.value}
                {item.href !== "#" && <ExternalLink className="w-3 h-3 opacity-40" />}
              </p>
              <div className="h-px bg-gradient-to-r from-primary/15 to-transparent my-3" />
              <p className="font-mono text-xs text-muted-foreground/50">{item.note}</p>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-4 border border-border bg-muted/10 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-phosphor/60 flex-shrink-0 animate-pulse" />
          <p className="font-mono text-xs text-muted-foreground/60">
            All transmissions are end-to-end. ONIV does not share contact data
            with third parties.{" "}
            <span className="text-primary/60">Zero-trust policy active.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
