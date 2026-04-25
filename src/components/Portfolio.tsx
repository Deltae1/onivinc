import { motion } from "framer-motion";
import { Play, Lock } from "lucide-react";

const videos: { title: string; description: string; tag: string; thumbnail?: string; url?: string }[] = [
  { title: "Live Broadcast Production",  tag: "BROADCAST · LIVE",   description: "Election night coverage — multi-camera TD direction for national broadcast." },
  { title: "Digital Media Campaign",     tag: "DIGITAL · MEDIA",    description: "End-to-end production for a major international media client." },
  { title: "Technical Direction",        tag: "TD · NEWS",          description: "Flagship daily news program, Washington DC studio." },
  { title: "Streaming & Podcast",        tag: "STREAM · AUDIO",     description: "Full AV setup and live streaming for a high-profile podcast series." },
  { title: "Special Events Coverage",    tag: "EVENTS · SPORT",     description: "Sporting events and conference production support." },
];

const Portfolio = () => {
  return (
    <section id="work" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="class-label mb-4">// WORK — SELECTED PROJECTS</p>
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
              className="t-card group cursor-pointer overflow-hidden"
              onClick={() => video.url && window.open(video.url, "_blank", "noopener noreferrer")}
            >
              {/* Thumbnail */}
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
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: "linear-gradient(135deg, #0D1117 0%, #080C10 100%)" }}
                  >
                    <Lock className="w-5 h-5" style={{ color: "rgba(10,132,255,0.3)" }} />
                    <span
                      className="class-label"
                      style={{ color: "rgba(10,132,255,0.3)" }}
                    >
                      [CLASSIFIED]
                    </span>
                  </div>
                )}
                {/* Play overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(8,12,16,0.5)" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ background: "#C9A84C" }}
                  >
                    <Play className="w-4 h-4 ml-0.5" style={{ color: "#080C10", fill: "#080C10" }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="class-label mb-2">{video.tag}</p>
                <h3 className="font-semibold mb-1.5" style={{ color: "white" }}>
                  {video.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(210,220,230,0.4)" }}>
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
