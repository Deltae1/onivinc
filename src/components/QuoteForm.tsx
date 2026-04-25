import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SERVICE_OPTIONS = [
  { value: "creative-technical", label: "Creative Technical Services" },
  { value: "azure-cloud", label: "Azure Cloud Solutions" },
  { value: "cloud-consulting", label: "General Cloud Consulting" },
  { value: "consulting", label: "Consulting Services" },
  { value: "training", label: "Training & Tech Support" },
  { value: "event-coverage", label: "Event Coverage" },
  { value: "other", label: "Other / Multiple" },
];

const QuoteForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    honeypot: "", // zero-trust: hidden anti-bot field
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Zero-trust: reject if honeypot filled (bot)
    if (form.honeypot) return;

    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.service || !form.details.trim()) {
      toast({
        title: "Incomplete submission",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email format check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate async submission — replace with real endpoint
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Request received.",
        description: "We'll review your submission and respond within 24 hours.",
      });
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="quote" className="section-padding bg-background">
        <div className="container-max mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="terminal-card p-10 text-center"
          >
            <div className="w-14 h-14 border border-phosphor/40 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-7 h-7 text-phosphor/80" />
            </div>
            <p className="class-label mb-3">// STATUS — REQUEST QUEUED</p>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              Transmission Received
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Your request has been logged. A member of the ONIV team will
              respond within 24 business hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/40 px-6 py-2 hover:bg-primary/10 transition-colors"
            >
              Submit Another
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="section-padding bg-background">
      <div className="container-max mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="class-label mb-3">// RFQ — REQUEST FOR QUOTE</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Start an <span className="text-primary">Engagement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Tell us what you need. We'll review your request and respond within
            24 hours with a detailed quote.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="terminal-card p-8 max-w-2xl"
          noValidate
          autoComplete="off"
        >
          {/* Honeypot — hidden from users, catches bots (zero-trust) */}
          <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
            <label htmlFor="zt-trap">Leave this empty</label>
            <input
              id="zt-trap"
              name="honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Full Name <span className="text-primary">*</span>
              </Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                required
                className="bg-muted/30 border-border focus:border-primary/60 font-mono text-sm rounded-sm"
              />
            </div>
            <div>
              <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Organization
              </Label>
              <Input
                name="org"
                value={form.org}
                onChange={handleChange}
                placeholder="ACME Corp"
                className="bg-muted/30 border-border focus:border-primary/60 font-mono text-sm rounded-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-muted/30 border-border focus:border-primary/60 font-mono text-sm rounded-sm"
              />
            </div>
            <div>
              <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Phone
              </Label>
              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (202) 555-0100"
                className="bg-muted/30 border-border focus:border-primary/60 font-mono text-sm rounded-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Service Required <span className="text-primary">*</span>
            </Label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full h-10 bg-muted/30 border border-border text-foreground px-3 font-mono text-sm rounded-sm focus:outline-none focus:border-primary/60 transition-colors"
            >
              <option value="" disabled>Select a service module</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <Label className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Project Details <span className="text-primary">*</span>
            </Label>
            <Textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Describe your project, timeline, scope, and any specific requirements..."
              required
              className="bg-muted/30 border-border focus:border-primary/60 font-mono text-sm rounded-sm min-h-[140px] resize-none"
            />
          </div>

          {/* Security notice */}
          <div className="flex items-start gap-2 mb-6 p-3 border border-border bg-muted/20">
            <AlertTriangle className="w-3 h-3 text-primary/60 mt-0.5 flex-shrink-0" />
            <p className="font-mono text-xs text-muted-foreground/60 leading-relaxed">
              This form is protected by zero-trust validation. Do not submit
              sensitive credentials or classified materials via this channel.
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full btn-scan bg-primary text-primary-foreground rounded-sm font-mono text-xs tracking-widest uppercase py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="cursor-blink" /> Transmitting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Submit Request <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteForm;
