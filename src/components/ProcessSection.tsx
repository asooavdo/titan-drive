import { motion } from "framer-motion";
import { Hand, Settings, BarChart3, Ship, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "SELECT",
    titleAr: "اختر",
    description: "Choose your dream vehicle from our premium collection or request a specific model.",
    icon: Hand,
  },
  {
    number: "02",
    title: "CONFIGURE",
    titleAr: "خصص",
    description: "Customize specifications, colors, and optional features to match your preferences.",
    icon: Settings,
  },
  {
    number: "03",
    title: "FINANCE",
    titleAr: "مول",
    description: "Flexible payment options with transparent pricing. No hidden fees, ever.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "SHIP",
    titleAr: "شحن",
    description: "Worldwide shipping from Dubai Auto Zone. Full tracking and insurance included.",
    icon: Ship,
  },
  {
    number: "05",
    title: "DELIVER",
    titleAr: "استلم",
    description: "Keys handed over with complete documentation. Your Titan journey begins.",
    icon: Key,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 crossing-lines opacity-10" />

      {/* Animated Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            THE TITAN <span className="metallic-text">PROCESS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From selection to delivery, experience precision at every step
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-border hidden lg:block" />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-16 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent hidden lg:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-32 h-32 rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-all duration-500 flex items-center justify-center relative"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                      
                      {/* Icon */}
                      <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="font-heading text-sm text-primary-foreground">
                          {step.number}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-heading text-xl tracking-wider mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-arabic text-lg text-primary mb-3" dir="rtl">
                      {step.titleAr}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
