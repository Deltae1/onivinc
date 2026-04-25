import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const PROJECT_TYPES = [
  "Live Broadcast Production",
  "Digital Media Strategy",
  "Cloud Consulting",
  "Training & Support",
  "Event Coverage",
  "Other",
];

type FormState = {
  name: string; email: string; phone: string;
  projectType: string; message: string;
};
type Status = "idle" | "sending" | "success" | "error";

const sanitize = (val: string) => val.replace(/[<>]/g, "").trim();

const Contact = () => {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:        sanitize(form.name),
          email:       sanitize(form.email),
          phone:       sanitize(form.phone),
          projectType: sanitize(form.projectType),
          message:     sanitize(form.message),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    background:   "rgba(255,255,255,0.03)",
    border:       "1px solid rgba(10,132,255,0.15)",
    color:        "rgba(210,220,230,0.88)",
    padding:      "11px 14px",
    width:        "100%",
    fontSize:     "0.85rem",
    fontFamily:   "'Space Grotesk', sans-serif",
    outline:      "none",
    transition:   "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display:       "block",
    fontFamily:    "'JetBrains Mono', monospace",
    fontSize:      "0.58rem",
    fontWeight:    600,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color:         "rgba(10,132,255,0.6)",
    marginBottom:  "8px",
  };

  const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "#0A84FF");
  const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(10,132,255,0.15)");

  return (
    <section id="contact" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="class-label mb-5">// COMM — OPEN A CHANNEL</p>
            <h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
            >
              Let's Work Together
            </h2>
            <p
              className="leading-relaxed mb-12 text-sm"
              style={{ color: "rgba(210,220,230,0.45)" }}
            >
              Whether you need a day hire or an entire crew — for production, digital media
              strategy, tech support, training, or installation — our team is standing by
              with the talent to bring your vision to life.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, text: "Washington, DC",   tag: "LOC-01" },
                { icon: Mail,   text: "hello@onivinc.com",tag: "COM-01" },
                { icon: Phone,  text: "+1 (202) 000-0000",tag: "COM-02" },
              ].map(({ icon: Icon, text, tag }) => (
                <div key={tag} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid rgba(10,132,255,0.2)", background: "rgba(10,132,255,0.05)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#0A84FF" }} />
                  </div>
                  <div>
                    <p className="class-label mb-0.5">{tag}</p>
                    <p className="text-sm" style={{ color: "rgba(210,220,230,0.55)" }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="t-card h-full flex items-center justify-center text-center p-12">
                <div>
                  <div className="text-4xl mb-4" style={{ color: "#00FF9C" }}>✓</div>
                  <p className="font-semibold text-white mb-2">Transmission received.</p>
                  <p className="text-sm class-label">Response within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input id="name" name="name" type="text" required maxLength={100}
                      autoComplete="name" value={form.name} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input id="email" name="email" type="email" required maxLength={254}
                      autoComplete="email" value={form.email} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input id="phone" name="phone" type="tel" maxLength={20}
                      autoComplete="tel" value={form.phone} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label htmlFor="projectType" style={labelStyle}>Project Type</label>
                    <select id="projectType" name="projectType" value={form.projectType}
                      onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
                      style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="" style={{ background: "#0D1117" }}>Select type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#0D1117" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea id="message" name="message" required rows={5} maxLength={2000}
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={onFocus} onBlur={onBlur} />
                </div>

                {status === "error" && (
                  <p className="text-xs class-label" style={{ color: "rgba(255,80,80,0.8)" }}>
                    Transmission failed. Please retry.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 text-xs font-bold transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{
                    background:   "#C9A84C",
                    color:        "#080C10",
                    fontFamily:   "'JetBrains Mono', monospace",
                    letterSpacing:"0.14em",
                    textTransform:"uppercase",
                  }}
                >
                  {status === "sending" ? "Transmitting…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
