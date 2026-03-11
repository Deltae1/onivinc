import { motion } from "framer-motion";
import { Film, Users, GraduationCap, Lightbulb, Cloud, ServerCog } from "lucide-react";

const services = [
  { icon: Film, title: "Creative Technical Services", description: "Access our 1,000+ strong database of TV and media production talent — from production and design to distribution and logistics. One professional or a full crew, we deliver." },
  { icon: Cloud, title: "Azure Cloud Solutions", description: "End-to-end Microsoft Azure cloud services — infrastructure provisioning, cloud migrations, cost optimization, and managed cloud environments tailored to your organization." },
  { icon: ServerCog, title: "General Cloud Consulting", description: "Evaluate your current tech stack and chart a path to the cloud. We assess your workflows, recommend the right tools, and help you modernize at the right pace." },
  { icon: Lightbulb, title: "Consulting Services", description: "We help TV and media firms evaluate their people, processes and technology — identifying gaps, improving workflows, and unlocking operational efficiency." },
  { icon: GraduationCap, title: "Training & Tech Support", description: "Formal and informal training sessions for individuals and corporate teams. We've trained over 1,000 media professionals in the past six years." },
  { icon: Users, title: "Event Coverage", description: "From conferences and corporate events to weddings and anniversaries — our team provides professional photo and video coverage at pocket-friendly rates." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">What We Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From TV production to cloud infrastructure — we bring over 6 years of expertise to every engagement.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-6 rounded-lg hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
