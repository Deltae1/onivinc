import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "FAQ-01",
    question: "What types of clients does ONIV work with?",
    answer:
      "Broadcast networks, digital media companies, federal agencies, nonprofits, corporations, and event organizers across the DMV area and nationally. If it involves media production or cloud infrastructure, we've likely done it.",
  },
  {
    id: "FAQ-02",
    question: "How quickly can you deploy a production crew?",
    answer:
      "We can mobilize single-operator or multi-person crews within 24–48 hours for local engagements. National deployments are coordinated case-by-case based on scope and location.",
  },
  {
    id: "FAQ-03",
    question: "Do you hold certifications for Azure work?",
    answer:
      "Yes. Our cloud team holds active Microsoft Azure certifications including Azure Administrator (AZ-104) and Azure Solutions Architect (AZ-305) credentials.",
  },
  {
    id: "FAQ-04",
    question: "What does your training program look like?",
    answer:
      "We offer both formal structured curricula and informal hands-on sessions covering Audio, Visual, Production, Editing, and Streaming. Programs are tailored to individual, team, and corporate needs with flexible scheduling.",
  },
  {
    id: "FAQ-05",
    question: "Can ONIV handle federal contracting requirements?",
    answer:
      "Yes. We are experienced with federal procurement processes and can operate within GSA schedule, sole-source, and RFP frameworks. Contact us for compliance documentation.",
  },
  {
    id: "FAQ-06",
    question: "What's your pricing model?",
    answer:
      "We operate on day-rate, project-based, and retainer models depending on engagement type. Event coverage and training sessions are quoted per engagement. Contact us for a detailed breakdown.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" style={{ background: "#080C10" }} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="class-label mb-4">// FAQ — FREQUENTLY ASKED</p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
          >
            Common <span style={{ color: "#0A84FF" }}>Queries</span>
          </h2>
          <p className="text-sm max-w-lg" style={{ color: "rgba(210,220,230,0.4)" }}>
            Direct answers to the questions we hear most. For anything else, open a channel.
          </p>
        </motion.div>

        <div className="space-y-2 max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="t-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                aria-expanded={openId === faq.id}
              >
                <div className="flex items-center gap-4">
                  <span className="class-label flex-shrink-0" style={{ color: "rgba(10,132,255,0.6)" }}>
                    {faq.id}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(210,220,230,0.85)" }}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className="w-4 h-4 flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    color: "rgba(10,132,255,0.5)",
                    transform: openId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-5"
                      style={{ borderTop: "1px solid rgba(10,132,255,0.08)" }}
                    >
                      <p
                        className="text-sm leading-relaxed pt-4"
                        style={{ color: "rgba(210,220,230,0.45)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
