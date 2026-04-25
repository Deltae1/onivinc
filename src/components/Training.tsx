import { motion } from "framer-motion";
import audioImg  from "@/assets/reference/audio-mixing-console.jpg";
import studioImg from "@/assets/reference/broadcast-studio.jpg";
import cameraImg from "@/assets/reference/camera-operator.jpg";
import editImg   from "@/assets/reference/video-editing.jpg";
import streamImg from "@/assets/reference/podcast-streaming.jpg";

const disciplines = [
  { label: "Audio",      tag: "AUD-01", image: audioImg  },
  { label: "Visual",     tag: "VIS-02", image: studioImg },
  { label: "Production", tag: "PRD-03", image: cameraImg },
  { label: "Editing",    tag: "EDT-04", image: editImg   },
  { label: "Streaming",  tag: "STR-05", image: streamImg },
];

const Training = () => {
  return (
    <section id="training" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="class-label mb-4">// TRN — TRAINING MODULES</p>
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
              className="t-card group overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="relative w-full h-full">
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
                      "linear-gradient(to top, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.3) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="class-label mb-1" style={{ color: "rgba(10,132,255,0.6)" }}>
                    {d.tag}
                  </p>
                  <p className="font-bold text-xs uppercase tracking-[0.18em]" style={{ color: "white" }}>
                    {d.label}
                  </p>
                  <div
                    className="mt-2 w-4 group-hover:w-8 transition-all duration-300"
                    style={{ height: "1px", background: "#C9A84C" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
