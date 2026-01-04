import { Home, Car, Phone, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Car, label: "Gallery", href: "#gallery" },
  { icon: Phone, label: "Call", action: () => window.location.href = "tel:+971XXXXXXXXX" },
  { icon: MessageCircle, label: "WhatsApp", action: () => window.open("https://wa.me/971XXXXXXXXX", "_blank") },
];

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, item: typeof navItems[0]) => {
    setActiveIndex(index);
    if (item.action) {
      item.action();
    } else if (item.href) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="bg-secondary/95 backdrop-blur-xl border-t border-border">
        <div className="flex items-center justify-around py-3 px-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <button
                key={item.label}
                onClick={() => handleClick(index, item)}
                className="flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300"
              >
                <div className={`relative ${isActive ? "text-primary" : "text-foreground/60"}`}>
                  <Icon className="w-6 h-6" />
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </div>
                <span className={`text-xs font-heading tracking-wider ${isActive ? "text-primary" : "text-foreground/60"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
