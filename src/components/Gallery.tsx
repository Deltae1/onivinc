import { motion } from "framer-motion";

const projects = [
  {
    id: "PRJ-001",
    code: "ALPHA",
    title: "Broadcast Infrastructure Overhaul",
    category: "MEDIA · PRODUCTION",
    description: "End-to-end technical director services for a major DC broadcast network. Full crew coordination, live switching, and post-production pipeline.",
    tags: ["Live Production", "TD Services", "Crew Coordination"],
    status: "COMPLETED",
    year: "2023",
  },
  {
    id: "PRJ-002",
    code: "BRAVO",
    title: "Azure Cloud Migration",
    category: "CLOUD · AZURE",
    description: "Migrated a mid-size media firm's on-premise infrastructure to Azure. Reduced operational costs by 40% and improved uptime to 99.9%.",
    tags: ["Azure", "Cloud Migration", "Cost Optimization"],
    status: "COMPLETED",
    year: "2023",
  },
  {
    id: "PRJ-003",
    code: "CHARLIE",
    title: "Media Workflow Modernization",
    category: "CONSULT · STRATEGY",
    description: "Full operational audit and workflow redesign for a DC-area production house. Identified critical bottlenecks and implemented automation.",
    tags: ["Consulting", "Workflow", "Automation"],
    status: "COMPLETED",
    year: "2022",
  },
  {
    id: "PRJ-004",
    code: "DELTA",
    title: "Corporate Event Coverage — Summit 2024",
    category: "EVENTS · COVERAGE",
    description: "Professional photo and video coverage for a 500-person policy summit on Capitol Hill. Multi-camera setup, same-day delivery.",
    tags: ["Event Coverage", "Video", "Photography"],
    status: "COMPLETED",
    year: "2024",
  },
  {
    id: "PRJ-005",
    code: "ECHO",
    title: "Production Team Training Program",
    category: "TRAINING · SUPPORT",
    description: "Delivered a 12-week broadcast technology curriculum to 80 media professionals across three DC-area organizations.",
    tags: ["Training", "Broadcast Tech", "Curriculum"],
    status: "COMPLETED",
    year: "2024",
  },
  {
    id: "PRJ-006",
    code: "FOXTROT",
    title: "Cloud Cost Optimization Audit",
    category: "CLOUD · CONSULTING",
    description: "Comprehensive Azure spend audit for a federal media contractor. Identified $120K in annual savings through rightsizing and policy enforcement.",
    tags: ["Azure", "Cost Audit", "Policy"],
    status: "COMPLETED",
    year: "2024",
  },
];

const Gallery = () => {
  return (
    <section id="work" className="section-padding bg-muted/30">
      <div className="container-max mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="class-label mb-3">// OPS — FIELD RECORD</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Selected <span className="text-primary">Operations</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A representative sample of engagements. Detailed case studies
            available on request.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="terminal-card p-6 group flex flex-col"
            >
              {/* Top meta */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground/40">{proj.id}</span>
                  <span className="font-mono text-xs text-primary/50">·</span>
                  <span className="font-mono text-xs text-primary/70 tracking-widest">OP-{proj.code}</span>
                </div>
                <span className="font-mono text-xs text-phosphor/60">{proj.year}</span>
              </div>

              {/* Category */}
              <p className="font-mono text-xs text-primary/60 tracking-widest mb-2">{proj.category}</p>

              {/* Title */}
              <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {proj.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-3" />

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs border border-border text-muted-foreground/60 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-phosphor/70" />
                <span className="font-mono text-xs text-phosphor/60 tracking-widest">{proj.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
