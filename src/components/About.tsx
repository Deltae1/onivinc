import { motion } from "framer-motion";

const stats = [
  { value: "10+",    label: "Years Experience" },
  { value: "1,000+", label: "Professionals Trained" },
  { value: "9",      label: "Major Media Clients" },
];

const About = () => {
  return (
    <section id="about" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="class-label mb-5">// IDENT — WHO WE ARE</p>
            <h2
              className="font-bold leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
            >
              Washington DC's Premier TV &amp; Digital Media Production Firm
            </h2>
            <div className="space-y-5" style={{ color: "rgba(210,220,230,0.5)", fontSize: "0.95rem" }}>
              <p className="leading-relaxed">
                ONIV INC. is a creative solutions firm focused on differentiated strategic
                positioning and smart design — creating engaging content and delivering
                innovative solutions in IT Infrastructure for Digital Broadcast Operations,
                Cloud Architecture, and Cyber Security.
              </p>
              <p className="leading-relaxed">
                We provide analytics-based creative technical services in Digital Media
                production and Live Television Broadcast programming. Our team holds expertise
                in Cloud Architecture, Cybersecurity, AI, Virtual Reality, Technical
                Directing, AudioVisual Production, Editing, Mixing, Signal Flow, Film,
                and Photography.
              </p>
            </div>
            <p className="mt-8 font-semibold" style={{ color: "#C9A84C" }}>
              One aim above all: streamline your effectiveness — through our people,
              processes, and technology.
            </p>
          </motion.div>

          {/* Right — stats as terminal cards */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="t-card p-8"
              >
                <div
                  className="font-bold leading-none mb-3"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    color: "#C9A84C",
                  }}
                >
                  {stat.value}
                </div>
                <div className="class-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
