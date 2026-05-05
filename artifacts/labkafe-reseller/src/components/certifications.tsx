import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe, BadgeCheck, Star, Cpu } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Certified",
    body: "Our quality management systems meet the highest international standards for lab product manufacturing and supply.",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    title: "GeM Authorized Seller",
    body: "Labkafe is an authorized Government e-Marketplace (GeM) seller, enabling resellers to bid for and win government contracts.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Award,
    title: "Best Lab Solutions Brand 2023",
    body: "Recognized as India's Best Laboratory Solutions Brand by the Education Excellence Awards for three consecutive years.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: BadgeCheck,
    title: "NSIC Registered",
    body: "Registered with the National Small Industries Corporation, ensuring compliance and eligibility for government procurement.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "4.9 ★ Partner Rating",
    body: "Consistently rated 4.9 out of 5 by our reseller partners for product quality, support responsiveness, and on-time delivery.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Cpu,
    title: "NEP 2020 Aligned",
    body: "All our lab programs and products are aligned with India's National Education Policy 2020 guidelines for STEM education.",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

export function Certifications() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              TRUST & COMPLIANCE
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Certifications & Awards
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our credentials speak for themselves. Partner with a brand your clients will trust instantly.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="flex gap-5 bg-[#F8F9FA] rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${cert.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
