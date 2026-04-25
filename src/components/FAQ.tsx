import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "FAQ-01",
    question: "What types of clients does ONIV work with?",
    answer:
      "ONIV primarily serves broadcast and digital media organizations, federal and private sector IT teams, and event producers in the Washington DC metro area. We also take on remote cloud consulting engagements nationwide.",
  },
  {
    id: "FAQ-02",
    question: "How quickly can you deploy a production crew?",
    answer:
      "For DC-area engagements, we can typically deploy a qualified crew within 24–48 hours. Our talent database of 1,000+ media professionals allows rapid sourcing for projects of any scale.",
  },
  {
    id: "FAQ-03",
    question: "Do you hold certifications for Azure work?",
    answer:
      "Yes. ONIV's cloud practice is backed by Microsoft Azure certifications. We work across the full Azure stack — compute, storage, networking, and media services.",
  },
  {
    id: "FAQ-04",
    question: "What does your training program look like?",
    answer:
      "We offer both formal multi-week curricula and single-day intensive workshops. Programs are tailored to your team's current skill level, equipment, and workflow. We've trained 1,000+ professionals across government and private sector organizations.",
  },
  {
    id: "FAQ-05",
    question: "Can ONIV handle federal contracting requirements?",
    answer:
      "ONIV is structured for federal engagement. We're familiar with federal procurement processes, statement-of-work requirements, and compliance expectations for media and IT contracting.",
  },
  {
    id: "FAQ-06",
    question: "What's your pricing model?",
    answer:
      "Pricing is project-scoped. We provide detailed, transparent quotes with no hidden fees. Submit a quote request and we'll respond within 24 hours with a line-item breakdown tailored to your needs.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-max mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="class-label mb-3">// FAQ — FREQUENTLY ASKED</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Common <span className="text-primary">Queries</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Direct answers to the questions we hear most. For anything else,
            open a channel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="terminal-card border-border px-5 rounded-sm"
              >
                <AccordionTrigger className="py-4 text-left font-display font-medium text-foreground hover:text-primary hover:no-underline transition-colors text-sm">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary/40 flex-shrink-0">{faq.id}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
