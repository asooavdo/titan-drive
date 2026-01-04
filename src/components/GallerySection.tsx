import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, MessageCircle, Zap, Car, Crown, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carElectric from "@/assets/car-electric.jpg";
import carLuxury from "@/assets/car-luxury.jpg";
import heroCar from "@/assets/hero-car.jpg";

const categories = [
  { id: "all", label: "All", icon: Car },
  { id: "luxury", label: "Luxury", icon: Crown },
  { id: "sports", label: "Sports", icon: Gauge },
  { id: "suv", label: "SUV", icon: Car },
  { id: "electric", label: "Electric", icon: Zap },
];

const vehicles = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    category: "sports",
    price: "From $485,000",
    specs: { power: "770 HP", speed: "0-100: 2.8s", top: "350 km/h" },
    image: heroCar,
  },
  {
    id: 2,
    name: "Mercedes-Benz S-Class",
    category: "luxury",
    price: "From $115,000",
    specs: { power: "496 HP", speed: "0-100: 4.5s", top: "250 km/h" },
    image: carSedan,
  },
  {
    id: 3,
    name: "Range Rover Sport",
    category: "suv",
    price: "From $95,000",
    specs: { power: "523 HP", speed: "0-100: 4.3s", top: "250 km/h" },
    image: carSuv,
  },
  {
    id: 4,
    name: "Ferrari 488 GTB",
    category: "sports",
    price: "From $265,000",
    specs: { power: "661 HP", speed: "0-100: 3.0s", top: "330 km/h" },
    image: carSports,
  },
  {
    id: 5,
    name: "Porsche Taycan Turbo S",
    category: "electric",
    price: "From $185,000",
    specs: { power: "750 HP", speed: "0-100: 2.8s", top: "260 km/h" },
    image: carElectric,
  },
  {
    id: 6,
    name: "Bentley Continental GT",
    category: "luxury",
    price: "From $225,000",
    specs: { power: "626 HP", speed: "0-100: 3.7s", top: "333 km/h" },
    image: carLuxury,
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  const handleInquire = (vehicleName: string) => {
    const message = encodeURIComponent(`Hello Titan Auto! I'm interested in the ${vehicleName}. Please provide more details.`);
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, "_blank");
  };

  return (
    <section id="gallery" className="py-24 bg-secondary/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 crossing-lines opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            TITAN <span className="metallic-text">GALLERY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collection of the world's finest automobiles
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-wider transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary glow-gold"
                    : "bg-secondary/50 text-foreground border-border hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="titan-card group overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Speed Lines Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button variant="titan" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl tracking-wide mb-2 text-foreground">
                  {vehicle.name}
                </h3>
                <p className="metallic-text font-heading text-lg mb-4">
                  {vehicle.price}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(vehicle.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-2 bg-background/50 rounded border border-border"
                    >
                      <div className="text-xs text-muted-foreground uppercase">
                        {key}
                      </div>
                      <div className="font-heading text-sm text-foreground">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="titan"
                  className="w-full gap-2"
                  onClick={() => handleInquire(vehicle.name)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
