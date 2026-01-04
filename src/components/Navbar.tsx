import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import titanLogo from "@/assets/titan-logo.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Gallery", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "Why Titan", href: "#why-titan" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/971XXXXXXXXX?text=Hello%20Titan%20Auto!%20I'm%20interested%20in%20your%20vehicles.", "_blank");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img 
                src={titanLogo} 
                alt="Titan Auto FZE" 
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-heading text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="titanOutline" 
                size="sm"
                className="gap-2"
                onClick={() => window.location.href = "tel:+971XXXXXXXXX"}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button 
                variant="titan" 
                size="sm"
                className="gap-2"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/98 backdrop-blur-xl pt-24"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl tracking-wider text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-4 mt-8">
                  <Button 
                    variant="titanOutline" 
                    size="lg"
                    className="gap-2 w-full"
                    onClick={() => window.location.href = "tel:+971XXXXXXXXX"}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                  <Button 
                    variant="titan" 
                    size="lg"
                    className="gap-2 w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
