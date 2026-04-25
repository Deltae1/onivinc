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
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const sanitize = (val: string) => val.replace(/[<>]/g, "").trim();

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          name: sanitize(form.name),
          email: sanitize(form.email),
          phone: sanitize(form.phone),
          projectType: sanitize(form.projectType),
          message: sanitize(form.message),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    borderRadius: "4px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "8px",
  };

  return (
    <section id="contact" style={{ background: "#0a0a0a" }} className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs uppercase tracking-[0.35em] mb-5 font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Get In Touch
            </p>
            <h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
            >
              Let's Work Together
            </h2>
            <p
              className="leading-relaxed mb-12 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Whether you need a day hire or an entire crew — for production, digital media
              strategy, tech support, training, or installation — our team is standing by
              with the talent to bring your vision to life.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Washington, DC" },
                { icon: Mail, text: "hello@onivinc.com" },
                { icon: Phone, text: "+1 (202) 000-0000" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="text-4xl mb-4" style={{ color: "#C9A84C" }}>✓</div>
                  <p className="font-semibold text-white mb-2">Message received.</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={20}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" style={labelStyle}>Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" as const }}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#111" }}>Select type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#111" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm" style={{ color: "rgba(255,80,80,0.8)" }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 text-sm font-semibold rounded tracking-wide transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: "#C9A84C", color: "#0a0a0a" }}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
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
