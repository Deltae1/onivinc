import { motion } from "framer-motion";

const operations = [
  {
    id: "PRJ-001",
    code: "OP-ALPHA",
    year: "2023",
    category: "MEDIA · PRODUCTION",
    title: "Broadcast Infrastructure Overhaul",
    description:
      "End-to-end technical director services for a major DC broadcast network. Full crew coordination, live switching, and post-production pipeline.",
    tags: ["Live Production", "TD Services", "Crew Coordination"],
  },
  {
    id: "PRJ-002",
    code: "OP-BRAVO",
    year: "2023",
    category: "CLOUD · AZURE",
    title: "Azure Cloud Migration",
    description:
      "Migrated a mid-size media firm's on-premise infrastructure to Azure. Reduced operational costs by 40% and improved uptime to 99.9%.",
    tags: ["Azure", "Cloud Migration", "Cost Optimization"],
  },
  {
    id: "PRJ-003",
    code: "OP-CHARLIE",
    year: "2022",
    category: "CONSULT · STRATEGY",
    title: "Media Workflow Modernization",
    description:
      "Full operational audit and workflow redesign for a DC-area production house. Identified critical bottlenecks and implemented automation.",
    tags: ["Consulting", "Workflow", "Automation"],
  },
  {
    id: "PRJ-004",
    code: "OP-DELTA",
    year: "2024",
    category: "EVENTS · COVERAGE",
    title: "Corporate Event Coverage — Summit 2024",
    description:
      "Professional photo and video coverage for a 500-person policy summit on Capitol Hill. Multi-camera setup with same-day delivery.",
    tags: ["Event Coverage", "Video", "Photography"],
  },
  {
    id: "PRJ-005",
    code: "OP-ECHO",
    year: "2024",
    category: "TRAINING · SUPPORT",
    title: "Production Team Training Program",
    description:
      "Delivered a 12-week broadcast technology curriculum to 80 media professionals across three DC-area organizations.",
    tags: ["Training", "Broadcast Tech", "Curriculum"],
  },
  {
    id: "PRJ-006",
    code: "OP-FOXTROT",
    year: "2024",
    category: "CLOUD · CONSULTING",
    title: "Cloud Cost Optimization Audit",
    description:
      "Comprehensive Azure spend audit for a federal media contractor. Identified $120K in annual savings through rightsizing and policy enforcement.",
    tags: ["Azure", "Cost Audit", "Policy"],
  },
];

const Portfolio = () => {
  return (
    <section id="work" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="class-label mb-4">// OPS — FIELD RECORD</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Selected <span style={{ color: "#0A84FF" }}>Operations</span>
          </h2>
          <p className="text-sm max-w-lg" style={{ color: "rgba(210,220,230,0.4)" }}>
            A representative sample of engagements. Detailed case studies available on request.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {operations.map((op, i) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="t-card p-6 flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="class-label">{op.id}</span>
                  <span style={{ color: "rgba(10,132,255,0.3)", fontSize: "0.5rem" }}>·</span>
                  <span className="class-label" style={{ color: "rgba(10,132,255,0.8)" }}>{op.code}</span>
                </div>
                <span
                  className="class-label"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  {op.year}
                </span>
              </div>

              {/* Category */}
              <p
                className="class-label mb-3"
                style={{ color: "rgba(10,132,255,0.65)", letterSpacing: "0.16em" }}
              >
                {op.category}
              </p>

              {/* Amber rule */}
              <div className="w-6 mb-4" style={{ height: "1px", background: "#C9A84C" }} />

              {/* Title + description */}
              <h3 className="font-semibold text-sm mb-3 leading-snug" style={{ color: "white" }}>
                {op.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-5 flex-1"
                style={{ color: "rgba(210,220,230,0.4)" }}
              >
                {op.description}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {op.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5"
                    style={{
                      border: "1px solid rgba(10,132,255,0.18)",
                      color: "rgba(210,220,230,0.4)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#00FF9C" }}
                />
                <span
                  className="class-label"
                  style={{ color: "rgba(0,255,156,0.7)" }}
                >
                  COMPLETED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
