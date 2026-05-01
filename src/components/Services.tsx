import { motion } from "framer-motion";
import { Film, Cloud, Monitor, Lightbulb, GraduationCap, Users, Play } from "lucide-react";

const services = [
  {
    number: "SVC-01",
    icon: Film,
    tag: "MEDIA · PRODUCTION",
    title: "Creative Technical Services",
    description:
      "Access our 1,000+ strong database of TV and media production talent — from production and design to distribution and logistics. One professional or a full crew, we deliver.",
  },
  {
    number: "SVC-02",
    icon: Cloud,
    tag: "CLOUD · AZURE",
    title: "Azure Cloud Solutions",
    description:
      "End-to-end Microsoft Azure cloud services — infrastructure provisioning, cloud migrations, cost optimization, and managed cloud environments tailored to your organization.",
  },
  {
    number: "SVC-03",
    icon: Monitor,
    tag: "CONSULT · INFRA",
    title: "General Cloud Consulting",
    description:
      "Evaluate your current tech stack and chart a path to the cloud. We assess your workflows, recommend the right tools, and help you modernize at the right pace.",
  },
  {
    number: "SVC-04",
    icon: Lightbulb,
    tag: "STRATEGY · OPS",
    title: "Consulting Services",
    description:
      "We help TV and media firms evaluate their people, processes, and technology — identifying gaps, improving workflows, and unlocking operational efficiency.",
  },
  {
    number: "SVC-05",
    icon: GraduationCap,
    tag: "TRAINING · SUPPORT",
    title: "Training & Tech Support",
    description:
      "Formal and informal training sessions for individuals and corporate teams. We've trained over 1,000 media professionals across Audio, Visual, Production, Editing, and Streaming.",
  },
  {
    number: "SVC-06",
    icon: Users,
    tag: "EVENTS · COVERAGE",
    title: "Event Coverage",
    description:
      "From conferences and corporate events to weddings and anniversaries — professional photo and video coverage at pocket-friendly rates with same-day delivery options.",
  },
  {
    number: "SVC-07",
    icon: Play,
    tag: "YOUTUBE · DIGITAL",
    title: "YouTube & Digital Content Production",
    description:
      "End-to-end YouTube series production — concept development, shooting, editing, post-production, and channel management. From single episodes to full series, we produce content that performs.",
  },
];

const Services = () => {
  return (
    <section id="services" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="class-label mb-4">// SVC — SERVICE MANIFEST</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            What We <span style={{ color: "#0A84FF" }}>Deploy</span>
          </h2>
          <p className="text-sm max-w-lg" style={{ color: "rgba(210,220,230,0.4)" }}>
            Seven service lines. One firm. Covering the full spectrum from YouTube series
            production to cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="t-card p-7"
            >
              {/* Top row: icon + number */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid rgba(10,132,255,0.2)", background: "rgba(10,132,255,0.06)" }}
                >
                  <s.icon className="w-4 h-4" style={{ color: "#0A84FF" }} />
                </div>
                <span className="class-label pt-1">{s.number}</span>
              </div>

              {/* Category tag */}
              <p
                className="class-label mb-3"
                style={{ color: "rgba(10,132,255,0.7)", letterSpacing: "0.16em" }}
              >
                {s.tag}
              </p>

              {/* Amber rule */}
              <div className="w-6 mb-4" style={{ height: "1px", background: "#C9A84C" }} />

              <h3 className="font-bold text-base mb-3" style={{ color: "white" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(210,220,230,0.42)" }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
