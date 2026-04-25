import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Professionals Trained" },
  { value: "9", label: "Major Media Clients" },
];

const About = () => {
  return (
    <section id="about" style={{ background: "#0a0a0a" }} className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
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
              Who We Are
            </p>
            <h2
              className="font-bold leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
            >
              Washington DC's Premier TV &amp; Digital Media Production Firm
            </h2>
            <div className="space-y-5" style={{ color: "rgba(255,255,255,0.55)" }}>
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-0"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="py-10"
                style={{
                  borderBottom: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div
                  className="font-bold leading-none mb-3"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "#C9A84C" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm uppercase tracking-[0.25em]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
