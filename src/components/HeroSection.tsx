import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import titanLogo from "@/assets/titan-logo.jpg";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const tagline = "CRAFTED BY TITANS, DRIVEN BY YOU";

  const handleExplore = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury Sports Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Crossing Lines Pattern */}
      <div className="absolute inset-0 crossing-lines opacity-30" />

      {/* Animated Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, hsla(37, 36%, 61%, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={titanLogo}
              alt="Titan Auto FZE"
              className="h-24 md:h-32 w-auto glow-gold"
            />
          </motion.div>

          {/* Tagline with typing effect simulation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-wider">
              {tagline.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 1 + index * 0.05 }}
                  className={char === "," ? "text-primary" : "text-foreground"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Arabic Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="font-arabic text-xl md:text-2xl text-muted-foreground mb-4 text-right"
            dir="rtl"
          >
            اختر سيارتك الزيرو، ونوصلها لك عالميًا باحترافية
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
          >
            Premium luxury vehicles sourced from Dubai Auto Zone. 
            Worldwide shipping with unmatched professionalism.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="titan"
              size="xl"
              className="gap-2 animate-pulse-gold"
              onClick={handleExplore}
            >
              <Sparkles className="h-5 w-5" />
              Explore Models
            </Button>
            <Button
              variant="titanOutline"
              size="xl"
              className="gap-2"
              onClick={handleContact}
            >
              <Globe className="h-5 w-5" />
              Book Consultation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.3 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { value: "500+", label: "Vehicles Delivered" },
              { value: "50+", label: "Countries Reached" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl metallic-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-xs tracking-widest text-muted-foreground">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="h-6 w-6 text-primary scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
