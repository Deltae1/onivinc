import { motion } from "framer-motion";
import heroBg from "@/assets/reference/broadcast-studio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Broadcast studio"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(10,10,10,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 font-semibold"
          style={{ color: "#C9A84C" }}
        >
          Washington DC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-bold leading-none mb-5"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "#C9A84C",
            letterSpacing: "-0.02em",
          }}
        >
          ONIV INC.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-semibold leading-tight mb-6"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)", color: "white" }}
        >
          Creative Solutions. Expert Teams. Broadcast-Ready.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Washington DC's premier TV &amp; Digital Media Production firm — delivering
          creative technical services, cloud solutions, training, and consulting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-semibold rounded tracking-wide transition-opacity hover:opacity-90"
            style={{ background: "#C9A84C", color: "#0a0a0a" }}
          >
            Book a Consultation
          </a>
          <a
            href="#work"
            className="px-8 py-4 text-sm font-semibold rounded tracking-wide border transition-colors duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white" }}
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 border rounded-full flex justify-center pt-1.5"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
