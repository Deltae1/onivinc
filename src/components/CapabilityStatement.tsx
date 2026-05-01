import { motion } from "framer-motion";
import { Building2, Target, User, BarChart3, Zap } from "lucide-react";

const sections = [
  {
    icon: Building2,
    tag: "CAP-01",
    label: "COMPANY OVERVIEW",
    title: "ONIV INC.",
    content: [
      "Established 2017 · Washington, DC",
      "Creative solutions firm operating at the intersection of live broadcast production, digital media, cloud infrastructure, and AI.",
      "Serving federal agencies, international organizations, and major broadcast networks from the nation's capital.",
    ],
  },
  {
    icon: Target,
    tag: "CAP-02",
    label: "CORE COMPETENCIES",
    title: "What We Do Best",
    items: [
      "Live Broadcast Production & Technical Directing",
      "YouTube & Digital Series Production",
      "Cloud Infrastructure (Azure) & AI Integration",
      "Media Workflow Consulting & Optimization",
      "Professional Training & Workforce Development",
      "Cybersecurity for Broadcast Environments",
    ],
  },
  {
    icon: User,
    tag: "CAP-03",
    label: "KEY PERSONNEL",
    title: "Leadership",
    content: [
      "Founder & Principal — 10+ years in broadcast production and cloud infrastructure. Former Lead Technical Director at VOA/USAGM. Production credits include NBC, Fox, IMF, and Middle East Broadcasting Networks.",
      "Deep expertise spanning live television, YouTube series production, Azure cloud architecture, and AI — with hands-on experience across federal and commercial media environments.",
    ],
  },
  {
    icon: BarChart3,
    tag: "CAP-04",
    label: "PAST PERFORMANCE",
    title: "By the Numbers",
    stats: [
      { value: "10,000+", label: "Hours of Live Production" },
      { value: "1,000+", label: "Media Professionals Trained" },
      { value: "9", label: "Major Media & Broadcast Clients" },
      { value: "10+", label: "Years in Operation" },
    ],
  },
  {
    icon: Zap,
    tag: "CAP-05",
    label: "DIFFERENTIATORS",
    title: "Why ONIV",
    items: [
      "Full-stack capability — production + cloud + AI under one roof",
      "DC-based with cleared access to federal media environments",
      "YouTube-native production pipeline — concept to channel optimization",
      "Dual expertise: broadcast-grade production meets modern digital distribution",
      "Proven at scale — from single-camera shoots to multi-network live broadcasts",
    ],
  },
];

const CapabilityStatement = () => {
  return (
    <section
      id="capability"
      style={{ background: "#0A0E14" }}
      className="section-padding"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="class-label mb-4">// CAP — CAPABILITY STATEMENT</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Capability <span style={{ color: "#C9A84C" }}>Statement</span>
          </h2>
          <p className="text-sm max-w-lg" style={{ color: "rgba(210,220,230,0.4)" }}>
            A summary of our qualifications, experience, and differentiators — at a glance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`t-card p-7 ${s.tag === "CAP-04" ? "md:col-span-2" : ""}`}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1px solid rgba(201,168,76,0.2)",
                    background: "rgba(201,168,76,0.06)",
                  }}
                >
                  <s.icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                </div>
                <span className="class-label pt-1">{s.tag}</span>
              </div>

              {/* Category label */}
              <p
                className="class-label mb-3"
                style={{ color: "rgba(201,168,76,0.7)", letterSpacing: "0.16em" }}
              >
                {s.label}
              </p>

              {/* Amber rule */}
              <div className="w-6 mb-4" style={{ height: "1px", background: "#C9A84C" }} />

              <h3 className="font-bold text-base mb-4" style={{ color: "white" }}>
                {s.title}
              </h3>

              {/* Content paragraphs */}
              {s.content && (
                <div className="space-y-3">
                  {s.content.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(210,220,230,0.45)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Bulleted items */}
              {s.items && (
                <ul className="space-y-2.5">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "#C9A84C" }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(210,220,230,0.45)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stats grid */}
              {s.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {s.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4"
                      style={{
                        border: "1px solid rgba(201,168,76,0.12)",
                        background: "rgba(201,168,76,0.03)",
                      }}
                    >
                      <div
                        className="font-bold mb-1"
                        style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#C9A84C" }}
                      >
                        {stat.value}
                      </div>
                      <div className="class-label" style={{ fontSize: "0.55rem" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityStatement;
