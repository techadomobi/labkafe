import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, BarChart3, Headphones, Star, Award, Users } from "lucide-react";
import illustration from "../benefits-illustration.png";

const benefits = [
  {
    icon: Package,
    title: "Branded Packaging",
    description: "Deliver products with high-quality branded packaging and logos to establish your identity in the market.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Inventory",
    description: "Access live updates on stock availability and market trends in real time through our reseller portal.",
  },
  {
    icon: Headphones,
    title: "24/7 Reseller Support",
    description: "Our lab experts are available around the clock to ensure your operations run smoothly, every single day.",
  },
];

const highlights = [
  { icon: Star, label: "Premium Quality", value: "ISO Certified Products" },
  { icon: Award, label: "Recognition", value: "Top Reseller Awards" },
  { icon: Users, label: "Community", value: "Active Partner Network" },
];

export function Benefits() {
  return (
    <section className="py-28 bg-[#F8F9FA] overflow-hidden relative">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">BENEFITS YOU WILL OBTAIN</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Packed With Features to<br />Help You Succeed
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Every tool, resource, and support structure you need to build a thriving lab product reselling business.
              </p>
            </motion.div>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.15 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Highlights row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-4 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xs font-bold text-foreground">{h.value}</div>
                    <div className="text-xs text-muted-foreground">{h.label}</div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                data-testid="button-benefits-contact"
                className="rounded-full h-14 px-8 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow"
              >
                Contact us
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <div className="absolute inset-0 bg-secondary rounded-3xl transform -rotate-2 scale-105 -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src={illustration}
                alt="Business Partnership Illustration"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Trusted by</p>
                <p className="text-2xl font-black text-primary">500+ Partners</p>
              </div>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-primary p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <div>
                <p className="text-xs text-blue-100">Reseller Rating</p>
                <p className="text-xl font-black text-white">4.9 / 5.0</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
