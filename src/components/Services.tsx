import { motion } from "framer-motion";
import { Film, Cloud, ServerCog, Lightbulb, GraduationCap, Users } from "lucide-react";

const services = [
  {
    id: "SVC-01",
    icon: Film,
    title: "Creative Technical Services",
    description:
      "Access our 1,000+ strong database of TV and media production talent — from production and design to distribution and logistics. One professional or a full crew, we deliver.",
    tag: "MEDIA · PRODUCTION",
  },
  {
    id: "SVC-02",
    icon: Cloud,
    title: "Azure Cloud Solutions",
    description:
      "End-to-end Microsoft Azure cloud services — infrastructure provisioning, cloud migrations, cost optimization, and managed cloud environments tailored to your organization.",
    tag: "CLOUD · AZURE",
  },
  {
    id: "SVC-03",
    icon: ServerCog,
    title: "General Cloud Consulting",
    description:
      "Evaluate your current tech stack and chart a path to the cloud. We assess your workflows, recommend the right tools, and help you modernize at the right pace.",
    tag: "CONSULT · INFRA",
  },
  {
    id: "SVC-04",
    icon: Lightbulb,
    title: "Consulting Services",
    description:
      "We help TV and media firms evaluate their people, processes, and technology — identifying gaps, improving workflows, and unlocking operational efficiency.",
    tag: "STRATEGY · OPS",
  },
  {
    id: "SVC-05",
    icon: GraduationCap,
    title: "Training & Tech Support",
    description:
      "Formal and informal training sessions for individuals and corporate teams. We've trained over 1,000 media professionals across the last six years.",
    tag: "TRAINING · SUPPORT",
  },
  {
    id: "SVC-06",
    icon: Users,
    title: "Event Coverage",
    description:
      "From conferences and corporate events to weddings and anniversaries — professional photo and video coverage at pocket-friendly rates.",
    tag: "EVENTS · COVERAGE",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="class-label mb-3">// SVC — SERVICE MANIFEST</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What We <span className="text-primary">Deploy</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Six service lines. One firm. Covering the full spectrum from media
            production to cloud infrastructure.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="terminal-card p-6 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 border border-primary/25 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <svc.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/50">{svc.id}</span>
              </div>

              {/* Tag */}
              <p className="font-mono text-xs text-primary/60 tracking-widest mb-2">{svc.tag}</p>

              {/* Title */}
              <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {svc.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-primary/20 to-transparent mb-3" />

              {/* Body */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
