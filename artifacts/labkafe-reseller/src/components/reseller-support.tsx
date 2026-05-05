import { motion } from "framer-motion";
import {
  Headphones,
  BookOpen,
  MonitorSmartphone,
  Megaphone,
  FileText,
  Users,
} from "lucide-react";

const supports = [
  {
    icon: MonitorSmartphone,
    title: "Dedicated Reseller Portal",
    body: "A powerful dashboard to track orders, manage clients, view commissions, and check live inventory — all in one place, available 24/7.",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Product Training & Certification",
    body: "Comprehensive product knowledge training for you and your team. Certified Labscode resellers close 3x more deals on average.",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    body: "Our team of lab specialists is available round the clock for any product queries, installation support, or client escalations.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Megaphone,
    title: "Co-Marketing & Collateral",
    body: "Access Labscode-branded brochures, presentations, product demos, and co-branded marketing assets to accelerate your sales.",
    color: "from-orange-400 to-rose-400",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: FileText,
    title: "Proposal & Quotation Support",
    body: "Our pre-sales team will help you craft winning proposals and quotations for large institutional tenders and government RFPs.",
    color: "from-purple-400 to-indigo-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Partner Community",
    body: "Join an exclusive WhatsApp and online community of 500+ resellers to share leads, best practices, and success strategies.",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

export function ResellerSupport() {
  return (
    <section className="py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              FULL PARTNER SUPPORT
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              We're With You Every Step
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Labscode's reseller support ecosystem is built so you can focus on selling while we handle everything else.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supports.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl p-8 border border-border/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${s.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
