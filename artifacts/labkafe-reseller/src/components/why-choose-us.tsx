import { motion } from "framer-motion";
import { PackageX, Layers, PenTool, CheckCircle2, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: PackageX,
    title: "Zero Inventory, Zero Hassle",
    description: "We maintain the stock so you don't have to. Focus entirely on sales and client relationships while we handle warehousing and fulfillment.",
    highlight: "No upfront stock investment",
    color: "bg-blue-50",
    iconColor: "text-primary",
    hoverGradient: "from-blue-500 to-primary",
  },
  {
    icon: Layers,
    title: "Massive Product Catalog",
    description: "Choose from a wide range of over 10,000+ high-quality lab products across furniture, equipment, chemicals, and more.",
    highlight: "10,000+ SKUs available",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
    hoverGradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: PenTool,
    title: "Custom Branding",
    description: "Build your own brand identity using our premium packaging, white-labeling, and expert store setup services — all included.",
    highlight: "Your brand, our products",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    hoverGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "GeM Authorization",
    description: "Partner with Labscode for GeM (Government e-Marketplace) authorization, premium lab products, and full installation support for govt. contracts.",
    highlight: "Unlock government orders",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverGradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Truck,
    title: "Delivery & Technical Support",
    description: "We provide last-mile delivery, skilled technical assistance, and installation support at the client site upon material delivery.",
    highlight: "End-to-end logistics",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    hoverGradient: "from-orange-500 to-red-400",
  },
  {
    icon: CheckCircle2,
    title: "Dedicated Reseller Portal",
    description: "Access a powerful partner dashboard with real-time inventory, order tracking, commission reports, and client management tools.",
    highlight: "Full business visibility",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    hoverGradient: "from-rose-500 to-pink-500",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute -right-40 top-20 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -left-40 bottom-20 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Everything You Need to<br />Launch and Grow Your Business
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              We've built the most comprehensive reseller support system in the Indian laboratory market. Here's what you get from day one.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#F8F9FA] border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-400 cursor-default overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl`} />

                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{feature.description}</p>

                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.hoverGradient} bg-opacity-10 text-xs font-bold`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${feature.iconColor} bg-current`} />
                  <span className={feature.iconColor}>{feature.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
