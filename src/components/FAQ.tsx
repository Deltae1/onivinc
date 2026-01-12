import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple project might take 2-4 weeks, while larger projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer competitive pricing tailored to each project's requirements. After understanding your needs, we provide a detailed quote with transparent pricing. No hidden fees – what we quote is what you pay.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely! We offer various support packages including monthly maintenance, updates, and priority support. We're committed to your long-term success, not just project completion.",
  },
  {
    question: "How do I track my order status?",
    answer: "Once your project begins, you'll have access to our client portal where you can track progress in real-time, communicate with our team, and view all project milestones.",
  },
  {
    question: "What if I need revisions?",
    answer: "We include a reasonable number of revisions in every project. Our goal is your complete satisfaction. We work closely with you throughout the process to minimize extensive revisions.",
  },
  {
    question: "Can I request a refund?",
    answer: "We stand behind our work. If you're not satisfied with the initial concepts, we offer a money-back guarantee within the first 7 days. Terms and conditions apply based on project type.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
