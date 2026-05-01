import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Hrs. Live Production" },
  { value: "10+",  label: "Yrs. Broadcast · Cloud · AI" },
  { value: "9",    label: "Broadcast Clients" },
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
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: "rgba(210,220,230,0.82)", letterSpacing: "-0.01em" }}
            >
              Broadcast Production, Cloud Infrastructure, Data &amp; AI
            </h2>
            <div className="space-y-5" style={{ color: "rgba(210,220,230,0.5)", fontSize: "0.95rem" }}>
              <p className="leading-relaxed">
                ONIV INC. operates at the intersection of live broadcast production and
                cloud infrastructure — delivering creative technical solutions for live
                television, digital media, and the systems that power them.
              </p>
              <p className="leading-relaxed">
                From live Technical Directing and YouTube series production to Azure cloud architecture,
                AI integration, and cybersecurity — we build and operate the full stack.
                On-site, remote, or hybrid, for clients who need broadcast standards and
                modern infrastructure.
              </p>
            </div>
            <p className="mt-8 font-semibold" style={{ color: "#C9A84C" }}>
              One aim above all: streamline your effectiveness — through production,
              infrastructure, and technology.
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
