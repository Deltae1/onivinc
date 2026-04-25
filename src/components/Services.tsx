import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Creative Solutions",
    tag: "MEDIA · PRODUCTION",
    description:
      "From day hires to full crews — production, digital media strategy, documentaries, films, elections, breaking news, sporting events, podcasts, and holiday relief. One professional or a full team, delivered.",
  },
  {
    number: "02",
    title: "Consulting Expertise",
    tag: "STRATEGY · OPS",
    description:
      "A tight-knit crew that loves what we do, achieving performance-driven results. We evaluate your people, processes, and technology — and provide recommendations that create competitive advantage.",
  },
  {
    number: "03",
    title: "Expert Teams",
    tag: "TALENT · DEPLOYMENT",
    description:
      "Based on your needs, we provide one professional, virtual techs, or a whole team alongside yours — supporting special events, productions, and long-term engagements.",
  },
  {
    number: "04",
    title: "Training & Support",
    tag: "TRAINING · SUPPORT",
    description:
      "Training and technical support are core competencies. We empower media professionals across Audio, Visual, Production, Editing, and Streaming. Equipment rental and production facilities available.",
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
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="t-card p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="font-bold leading-none"
                  style={{
                    fontSize: "3.5rem",
                    color: "rgba(201,168,76,0.18)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {s.number}
                </div>
                <span className="class-label pt-2">{s.tag}</span>
              </div>
              <div
                className="w-8 mb-6"
                style={{ height: "1px", background: "#C9A84C" }}
              />
              <h3
                className="font-bold text-lg mb-4"
                style={{ color: "white" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(210,220,230,0.45)" }}
              >
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
