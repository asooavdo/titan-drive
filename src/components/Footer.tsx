import { motion } from "framer-motion";
import titanLogo from "@/assets/titan-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border relative">
      <div className="absolute inset-0 crossing-lines opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={titanLogo}
              alt="Titan Auto FZE"
              className="h-12 w-auto"
            />
            <p className="font-heading text-xs tracking-widest text-muted-foreground">
              CRAFTED BY TITANS, DRIVEN BY YOU
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Titan Auto FZE
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Dubai Auto Zone, UAE
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
