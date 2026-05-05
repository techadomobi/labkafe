import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  Microscope,
  Atom,
  Cpu,
  Telescope,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";

const packages = [
  {
    icon: FlaskConical,
    name: "Chemistry Lab",
    subtitle: "Complete Chemistry Setup",
    price: "₹3.5L – ₹18L",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
    badge: "Most Popular",
    badgeBg: "bg-primary text-white",
    features: [
      "Fume hoods & chemical storage",
      "Analytical balances & burettes",
      "Reagent-grade glassware set",
      "Safety equipment & PPE",
      "Installation & staff training",
      "1-year service warranty",
    ],
  },
  {
    icon: Microscope,
    name: "Biology Lab",
    subtitle: "Life Science Equipment",
    price: "₹2.8L – ₹14L",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "High Demand",
    badgeBg: "bg-emerald-600 text-white",
    features: [
      "Research & student microscopes",
      "Dissection kits & specimen sets",
      "Incubators & centrifuges",
      "Slides, stains & reagents",
      "Aquarium & terrarium units",
      "Digital imaging attachments",
    ],
  },
  {
    icon: Atom,
    name: "Physics Lab",
    subtitle: "Classical & Modern Physics",
    price: "₹2.2L – ₹10L",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    badge: "GeM Listed",
    badgeBg: "bg-indigo-600 text-white",
    features: [
      "Optics & wave instruments",
      "Mechanics & dynamics kits",
      "Electricity & magnetism boards",
      "Oscilloscopes & multimeters",
      "Thermodynamics apparatus",
      "Modern physics kits",
    ],
  },
  {
    icon: Cpu,
    name: "Robotics & AI Lab",
    subtitle: "Future-Ready STEM",
    price: "₹4L – ₹22L",
    color: "from-orange-400 to-rose-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    badge: "New",
    badgeBg: "bg-orange-500 text-white",
    features: [
      "Arduino & Raspberry Pi kits",
      "3D printers & scanners",
      "AI cameras & sensors",
      "Drone programming kits",
      "IoT development boards",
      "Curriculum & teacher training",
    ],
  },
  {
    icon: Telescope,
    name: "Astronomy Lab",
    subtitle: "Space Science Setup",
    price: "₹5L – ₹30L",
    color: "from-purple-400 to-indigo-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    badge: "Premium",
    badgeBg: "bg-purple-600 text-white",
    features: [
      "Professional telescopes",
      "Planetarium software licenses",
      "Star & constellation models",
      "Solar observation equipment",
      "Meteorological instruments",
      "Astrophotography accessories",
    ],
  },
  {
    icon: Zap,
    name: "Mini Science Lab",
    subtitle: "Compact All-in-One",
    price: "₹1.5L – ₹6L",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    badge: "Best for Tier-2/3",
    badgeBg: "bg-yellow-500 text-white",
    features: [
      "70+ experiments in one kit",
      "Covers Phy, Chem & Bio",
      "Compact & portable design",
      "No dedicated lab room needed",
      "NCERT curriculum aligned",
      "Quick 1-day setup",
    ],
  },
];

export function LabPackages() {
  return (
    <section id="packages" className="py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              LAB PACKAGES
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Ready-to-Sell Lab Packages
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Pre-configured, institution-tested lab setups that you can pitch
              and sell with zero technical expertise required.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-400 flex flex-col"
              >
                {/* Card top accent */}
                <div className={`h-1.5 bg-gradient-to-r ${pkg.color} w-full`} />

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${pkg.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${pkg.iconColor}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${pkg.badgeBg}`}>
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{pkg.subtitle}</p>
                  <p className={`text-lg font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-6`}>
                    {pkg.price}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground/75">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className={`w-full rounded-full font-bold border-2 group-hover:bg-gradient-to-r group-hover:${pkg.color} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                  >
                    Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <Button
            size="lg"
            className="rounded-full h-14 px-12 text-lg font-bold shadow-xl shadow-primary/20"
          >
            View Full Product Catalog <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
