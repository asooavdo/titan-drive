import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Globe, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Quality",
    titleAr: "جودة معتمدة",
    description: "Every vehicle undergoes 150+ point inspection before delivery",
    stat: "150+",
    statLabel: "Quality Checks",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    titleAr: "شحن عالمي",
    description: "Delivering luxury vehicles to 50+ countries with full insurance",
    stat: "50+",
    statLabel: "Countries",
  },
  {
    icon: Award,
    title: "Premium Service",
    titleAr: "خدمة متميزة",
    description: "Dedicated relationship manager for personalized experience",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    titleAr: "ثقة وشفافية",
    description: "No hidden fees. Clear documentation. Complete peace of mind",
    stat: "100%",
    statLabel: "Transparency",
  },
];

const CountUp = ({ target, duration = 2 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    
    if (isNaN(numericValue)) {
      setCount(target);
      return;
    }

    let start = 0;
    const end = numericValue;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start + suffix);
      if (start >= end) {
        clearInterval(timer);
        setCount(target);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const WhyTitanSection = () => {
  return (
    <section id="why-titan" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 crossing-lines opacity-10" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, hsla(37, 36%, 61%, 0.3) 0%, transparent 70%)",
        }}
      />

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
            WHY <span className="metallic-text">TITAN?</span>
          </h2>
          <p className="font-arabic text-2xl text-primary mb-4" dir="rtl">
            لماذا تيتان؟
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Excellence isn't just our standard—it's our foundation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="titan-card p-8 h-full flex flex-col items-center text-center relative overflow-hidden">
                  {/* Hexagon Icon Container */}
                  <div className="relative mb-6">
                    <div 
                      className="w-24 h-24 flex items-center justify-center bg-background border-2 border-primary/50 group-hover:border-primary transition-all duration-500"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      <Icon className="w-10 h-10 text-primary animate-float" />
                    </div>
                    {/* Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{
                        background: "radial-gradient(circle, hsla(37, 36%, 61%, 0.5) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Stat Counter */}
                  <div className="mb-4">
                    <div className="font-heading text-4xl metallic-text">
                      <CountUp target={feature.stat} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl tracking-wide mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-arabic text-primary mb-3" dir="rtl">
                    {feature.titleAr}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTitanSection;
