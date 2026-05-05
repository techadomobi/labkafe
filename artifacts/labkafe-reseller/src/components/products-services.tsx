import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Rocket, Atom, Box, Telescope, Cpu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const vigyanItems = [
  {
    icon: Atom,
    title: "Mini Science Lab",
    description: "Market our small and compact mini labs to schools with limited classroom space today. Perfect for tier 2 and tier 3 city schools.",
  },
  {
    icon: Box,
    title: "LAB IN A BOX",
    description: "Our LIAB provides seventy experiments in one box to improve student conceptual learning — a revolution in affordable science education.",
  },
  {
    icon: Telescope,
    title: "Astronomy Lab",
    description: "Offer advanced astronomy labs to schools and colleges with professional astro-equipment, models, and observation tools.",
  },
  {
    icon: Cpu,
    title: "Robotics & AI Lab",
    description: "Partner with Labscode to deliver cutting-edge Robotics and AI labs to modern schools preparing students for Industry 4.0.",
  },
];

const products = [
  {
    icon: Microscope,
    title: "Lab Furniture",
    badge: "Most Popular",
    badgeColor: "bg-primary text-white",
    description: "Upgrade your business with premium lab furniture solutions. From workbenches to fume hoods, chemical storage units to island benches — all GeM authorized.",
    details: ["Island benches & workstations", "Fume hoods & chemical storage", "GeM authorized supply", "Installation & setup included"],
    cta: "Explore Lab Furniture",
    gradient: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: FlaskConical,
    title: "Lab Equipment",
    badge: "High Margin",
    badgeColor: "bg-indigo-600 text-white",
    description: "Tap into high-value lab equipment sales with zero inventory investment. From analytical instruments to safety gear — full technical support included.",
    details: ["Analytical instruments", "Microscopes & imaging", "Safety equipment", "Full technical support"],
    cta: "Explore Lab Equipment",
    gradient: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

export function ProductsServices() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">OUR EXCLUSIVE PRODUCTS & SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Grow Your Business With Us
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete ecosystem of lab products and services to build a diversified, high-revenue reselling business.
            </p>
          </motion.div>
        </div>

        {/* Two standard product cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group bg-[#F8F9FA] rounded-3xl p-8 border border-border/50 hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${product.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${product.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${product.iconColor}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.badgeColor} shadow-sm`}>
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <ul className="space-y-2 mb-8">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/70">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} flex-shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  data-testid={`button-product-${index}`}
                  className={`p-0 ${product.iconColor} hover:bg-transparent font-bold text-base group-hover:gap-3 transition-all`}
                >
                  {product.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Project Vigyan — full-width highlighted card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
        >
          <div className="bg-gradient-to-br from-[#0A1A2F] via-[#0E284A] to-[#163A6C] p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-blue-300 block mb-1">Flagship Initiative</span>
                    <h3 className="text-3xl font-black text-white">Project Vigyan</h3>
                  </div>
                </div>
                <p className="text-blue-100/80 text-lg leading-relaxed mb-8">
                  Project Vigyan is a flagship initiative by Labscode that provides schools and colleges with experiential learning tools to make science education interactive and practical. Partner with us to bring modern science labs to every institution.
                </p>
                <Button
                  size="lg"
                  data-testid="button-vigyan-contact"
                  className="rounded-full h-14 px-8 bg-white text-[#0A1A2F] hover:bg-blue-50 font-bold shadow-xl"
                >
                  Contact us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Right - accordion */}
              <div>
                <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                  {vigyanItems.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <AccordionItem
                        key={i}
                        value={`item-${i}`}
                        className="border-none bg-white/8 backdrop-blur-sm rounded-2xl px-5 border border-white/10 hover:bg-white/12 transition-colors"
                      >
                        <AccordionTrigger className="text-white hover:no-underline font-bold py-4 gap-3">
                          <div className="flex items-center gap-3">
                            <ItemIcon className="w-5 h-5 text-blue-300 flex-shrink-0" />
                            {item.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-blue-100/80 pb-5 leading-relaxed pl-8">
                          {item.description}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <Button
            size="lg"
            data-testid="button-products-contact"
            className="rounded-full h-14 px-12 text-lg font-bold shadow-xl shadow-primary/20"
          >
            Contact us for details
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
