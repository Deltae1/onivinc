import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Creative Solutions",
    description:
      "From day hires to full crews — production, digital media strategy, documentaries, films, elections, breaking news, sporting events, podcasts, and holiday relief. One professional or a full team, delivered.",
  },
  {
    number: "02",
    title: "Consulting Expertise",
    description:
      "A tight-knit crew that loves what we do, achieving performance-driven results. We evaluate your people, processes, and technology — and provide recommendations that create competitive advantage.",
  },
  {
    number: "03",
    title: "Expert Teams",
    description:
      "Based on your needs, we provide one professional, virtual techs, or a whole team alongside yours — supporting special events, productions, and long-term engagements. We also cover family events: birthdays, weddings, conferences, and graduations.",
  },
  {
    number: "04",
    title: "Training & Support",
    description:
      "Training and technical support are core competencies. We empower media professionals across Audio, Visual, Production, Editing, and Streaming. We also provide rental equipment and production facilities with insurance coverage.",
  },
];

const Services = () => {
  return (
    <section id="services" style={{ background: "#0d0d0d" }} className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] mb-4 font-semibold"
            style={{ color: "#C9A84C" }}
          >
            What We Do
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Our Services
          </h2>
        </motion.div>

        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 transition-colors duration-300"
              style={{ background: "#0d0d0d" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
            >
              <div
                className="text-5xl font-bold mb-5 leading-none"
                style={{ color: "rgba(201,168,76,0.2)" }}
              >
                {s.number}
              </div>
              <div
                className="w-8 mb-6"
                style={{ height: "1px", background: "#C9A84C" }}
              />
              <h3 className="text-xl font-bold mb-4" style={{ color: "white" }}>
                {s.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
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
