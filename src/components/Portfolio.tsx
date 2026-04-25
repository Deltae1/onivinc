import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Replace with real { title, description, thumbnail, url } when Elvin provides YouTube links
const videos: { title: string; description: string; thumbnail?: string; url?: string }[] = [
  { title: "Live Broadcast Production", description: "Election night coverage — multi-camera TD direction for national broadcast." },
  { title: "Digital Media Campaign", description: "End-to-end production for a major international media client." },
  { title: "Technical Direction", description: "Flagship daily news program, Washington DC studio." },
  { title: "Streaming & Podcast", description: "Full AV setup and live streaming for a high-profile podcast series." },
  { title: "Special Events Coverage", description: "Sporting events and conference production support." },
];

const Portfolio = () => {
  return (
    <section id="work" style={{ background: "#0a0a0a" }} className="py-28 md:py-36">
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
            Selected Work
          </p>
          <h2
            className="font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Our Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group rounded overflow-hidden cursor-pointer"
              style={{ background: "#111" }}
              onClick={() =>
                video.url && window.open(video.url, "_blank", "noopener noreferrer")
              }
            >
              <div className="aspect-video relative overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
                    }}
                  >
                    <span
                      className="text-xs uppercase tracking-[0.2em]"
                      style={{ color: "rgba(255,255,255,0.12)" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "#C9A84C" }}
                  >
                    <Play className="w-5 h-5 ml-0.5" style={{ color: "#0a0a0a", fill: "#0a0a0a" }} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1.5" style={{ color: "white" }}>
                  {video.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
