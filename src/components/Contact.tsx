import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, AlertTriangle, Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Creative Technical Services",
  "Azure Cloud Solutions",
  "General Cloud Consulting",
  "Consulting Services",
  "Training & Tech Support",
  "Event Coverage",
  "Other",
];

type FormState = {
  name: string; org: string; email: string; phone: string;
  service: string; message: string;
};
type Status = "idle" | "sending" | "success" | "error";

const sanitize = (val: string) => val.replace(/[<>]/g, "").trim();

const Contact = () => {
  const [form, setForm]     = useState<FormState>({ name: "", org: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:    sanitize(form.name),
          org:     sanitize(form.org),
          email:   sanitize(form.email),
          phone:   sanitize(form.phone),
          service: sanitize(form.service),
          message: sanitize(form.message),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    background:  "rgba(255,255,255,0.03)",
    border:      "1px solid rgba(10,132,255,0.15)",
    color:       "rgba(210,220,230,0.88)",
    padding:     "11px 14px",
    width:       "100%",
    fontSize:    "0.85rem",
    fontFamily:  "'Space Grotesk', sans-serif",
    outline:     "none",
    transition:  "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display:       "block",
    fontFamily:    "'JetBrains Mono', monospace",
    fontSize:      "0.58rem",
    fontWeight:    600,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color:         "rgba(210,220,230,0.45)",
    marginBottom:  "8px",
  };

  const reqStyle: React.CSSProperties = { color: "#0A84FF", marginLeft: "3px" };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "#0A84FF");
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(10,132,255,0.15)");

  return (
    <section id="contact" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">

        {/* ─── Channel cards ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="class-label mb-4">// COMM — CONTACT CHANNELS</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Open a <span style={{ color: "#0A84FF" }}>Channel</span>
          </h2>
          <p className="text-sm max-w-lg mb-12" style={{ color: "rgba(210,220,230,0.4)" }}>
            Reach us through any of the following verified channels. All communications
            are handled directly — no call centers, no bots.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: Mail,
                tag:  "COMM-01",
                label: "Email",
                value: "info@onivinc.com",
                sub:  "Primary channel — 24hr response",
                href: "mailto:info@onivinc.com",
              },
              {
                icon: MapPin,
                tag:  "COMM-02",
                label: "Location",
                value: "Washington, DC",
                sub:  "Metro area · on-site available",
                href: null,
              },
              {
                icon: Clock,
                tag:  "COMM-03",
                label: "Operating Hours",
                value: "Mon–Fri · 9AM–6PM EST",
                sub:  "Emergency response available",
                href: null,
              },
            ].map(({ icon: Icon, tag, label, value, sub, href }) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="t-card p-6"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid rgba(10,132,255,0.2)", background: "rgba(10,132,255,0.06)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#0A84FF" }} />
                  </div>
                  <span className="class-label">{tag}</span>
                </div>
                <p className="class-label mb-2" style={{ color: "rgba(10,132,255,0.7)" }}>{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="font-semibold text-sm transition-colors duration-200"
                    style={{ color: "white" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0A84FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-sm" style={{ color: "white" }}>{value}</p>
                )}
                <p
                  className="mt-3 text-xs"
                  style={{
                    color: "rgba(210,220,230,0.3)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Zero-trust notice */}
          <div
            className="flex items-start gap-3 px-5 py-4"
            style={{ border: "1px solid rgba(10,132,255,0.12)", background: "rgba(10,132,255,0.04)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#00FF9C" }} />
            <p
              className="text-xs"
              style={{ color: "rgba(210,220,230,0.4)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.06em" }}
            >
              All transmissions are end-to-end. ONIV does not share contact data with third parties.{" "}
              <span style={{ color: "#0A84FF" }}>Zero-trust policy active.</span>
            </p>
          </div>
        </motion.div>

        {/* ─── Engagement form ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2
            className="font-bold mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "white" }}
          >
            Start an <span style={{ color: "#0A84FF" }}>Engagement</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: "rgba(210,220,230,0.4)" }}>
            Tell us what you need. We'll review your request and respond within 24 hours
            with a detailed quote.
          </p>

          {status === "success" ? (
            <div className="t-card p-16 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-4" style={{ color: "#00FF9C" }}>✓</div>
                <p className="font-semibold text-white mb-2">Transmission received.</p>
                <p className="text-sm class-label">Response within 24 hours.</p>
              </div>
            </div>
          ) : (
            <div className="t-card p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Full Name <span style={reqStyle}>*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required maxLength={100}
                      autoComplete="name" placeholder="Jane Smith"
                      value={form.name} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="org" style={labelStyle}>Organization</label>
                    <input
                      id="org" name="org" type="text" maxLength={120}
                      autoComplete="organization" placeholder="ACME Corp"
                      value={form.org} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email <span style={reqStyle}>*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required maxLength={254}
                      autoComplete="email" placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input
                      id="phone" name="phone" type="tel" maxLength={20}
                      autoComplete="tel" placeholder="+1 (202) 555-0100"
                      value={form.phone} onChange={handleChange}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" style={labelStyle}>
                    Service Required <span style={reqStyle}>*</span>
                  </label>
                  <select
                    id="service" name="service" required value={form.service}
                    onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    <option value="" style={{ background: "#0D1117" }}>Select a service module</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0D1117" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>
                    Project Details <span style={reqStyle}>*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={6} maxLength={2000}
                    placeholder="Describe your project, timeline, scope, and any specific requirements..."
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                {/* Disclaimer */}
                <div
                  className="flex items-start gap-3 px-4 py-3"
                  style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
                >
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "rgba(201,168,76,0.5)" }} />
                  <p
                    style={{
                      color: "rgba(210,220,230,0.35)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.06em",
                      lineHeight: "1.6",
                    }}
                  >
                    This form is protected by zero-trust validation. Do not submit sensitive
                    credentials or classified materials via this channel.
                  </p>
                </div>

                {status === "error" && (
                  <p className="text-xs class-label" style={{ color: "rgba(255,80,80,0.8)" }}>
                    Transmission failed. Please retry.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 text-xs font-bold transition-opacity hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-3"
                  style={{
                    background:    "#0A84FF",
                    color:         "white",
                    fontFamily:    "'JetBrains Mono', monospace",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {status === "sending" ? "Transmitting…" : (
                    <><span>Submit Request</span><Send className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
