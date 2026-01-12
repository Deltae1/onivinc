import { motion } from "framer-motion";
import { Palette, Code, TrendingUp, MessageSquare, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Beautiful, modern designs tailored to your brand identity and business goals.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke solutions built with the latest technologies and best practices.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    description: "Data-driven strategies to help your business reach its full potential.",
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Expert guidance to navigate complex challenges and opportunities.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and attention to detail for flawless delivery.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your timeline and deliver projects on schedule.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive services designed to elevate your business and exceed your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
