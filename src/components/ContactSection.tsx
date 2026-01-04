import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    titleAr: "الموقع",
    value: "Dubai Auto Zone, UAE",
    action: () => window.open("https://maps.google.com/?q=Dubai+Auto+Zone", "_blank"),
  },
  {
    icon: Phone,
    title: "Phone",
    titleAr: "الهاتف",
    value: "+971 XX XXX XXXX",
    action: () => window.location.href = "tel:+971XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    titleAr: "البريد",
    value: "info@titanauto.ae",
    action: () => window.location.href = "mailto:info@titanauto.ae",
  },
  {
    icon: Clock,
    title: "Hours",
    titleAr: "الأوقات",
    value: "Sat-Thu: 9AM - 9PM",
    action: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/titanautodubai", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/titanautodubai", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/971XXXXXXXXX", label: "WhatsApp" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Titan Auto! I'm interested in your vehicles and would like more information.");
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
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
            CONTACT <span className="metallic-text">TITAN</span>
          </h2>
          <p className="font-arabic text-2xl text-primary mb-4" dir="rtl">
            تواصل معنا
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to find your perfect vehicle? Our team is standing by.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={item.action || undefined}
                    className={`titan-card p-6 ${item.action ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm tracking-wider text-foreground">
                          {item.title}
                        </h3>
                        <p className="font-arabic text-xs text-primary mb-1" dir="rtl">
                          {item.titleAr}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="titan-card p-8 text-center"
            >
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl tracking-wider mb-2 text-foreground">
                Prefer WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get instant responses from our team
              </p>
              <Button
                variant="titan"
                size="lg"
                className="gap-2 w-full sm:w-auto"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="titan-card p-8">
              <h3 className="font-heading text-2xl tracking-wider mb-6 text-foreground">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm tracking-wider text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-heading text-sm tracking-wider text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-heading text-sm tracking-wider text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm tracking-wider text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about the vehicle you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="titan"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
