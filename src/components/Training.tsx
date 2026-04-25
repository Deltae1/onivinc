import { motion } from "framer-motion";
import audioImg from "@/assets/reference/audio-mixing-console.jpg";
import studioImg from "@/assets/reference/broadcast-studio.jpg";
import cameraImg from "@/assets/reference/camera-operator.jpg";
import editImg from "@/assets/reference/video-editing.jpg";
import streamImg from "@/assets/reference/podcast-streaming.jpg";

const disciplines = [
  { label: "Audio", image: audioImg },
  { label: "Visual", image: studioImg },
  { label: "Production", image: cameraImg },
  { label: "Editing", image: editImg },
  { label: "Streaming", image: streamImg },
];

const Training = () => {
  return (
    <section id="training" style={{ background: "#0d0d0d" }} className="py-28 md:py-36">
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
            Training &amp; Support
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Empowering Media Professionals
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="relative rounded overflow-hidden group"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={d.image}
                alt={d.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: "white" }}
                >
                  {d.label}
                </span>
                <div
                  className="mt-2 w-5"
                  style={{ height: "1px", background: "#C9A84C" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
