import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Users, Target, Percent } from "lucide-react";

const earningTiers = [
  {
    tier: "Starter",
    range: "₹1L – ₹5L / month",
    margin: "10–15%",
    commission: "₹10K – ₹75K",
    description: "Perfect for first-time resellers building their client base in local schools and colleges.",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
    targets: ["3–8 institutions", "Local territory", "1–2 product lines"],
  },
  {
    tier: "Growth",
    range: "₹5L – ₹20L / month",
    margin: "15–20%",
    commission: "₹75K – ₹4L",
    description: "For established resellers with a solid client network spanning multiple districts or a state.",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    targets: ["10–25 institutions", "District/state territory", "Full catalog access"],
    featured: true,
  },
  {
    tier: "Enterprise",
    range: "₹20L+ / month",
    margin: "20–25%",
    commission: "₹4L – ₹5L+",
    description: "For large-scale distributors running a dedicated team and managing major institutional contracts.",
    color: "from-orange-400 to-rose-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    targets: ["50+ institutions", "Multi-state territory", "Dedicated account manager"],
  },
];

const earningHighlights = [
  { icon: Percent, label: "Avg. Gross Margin", value: "15–25%" },
  { icon: TrendingUp, label: "Avg. Monthly Revenue", value: "₹8L+" },
  { icon: DollarSign, label: "Top Reseller Earnings", value: "₹25L/mo" },
  { icon: Users, label: "Active Earning Partners", value: "500+" },
  { icon: BarChart3, label: "YoY Partner Growth", value: "42%" },
  { icon: Target, label: "Avg. Deal Value", value: "₹3.2L" },
];

export function ResellerEarnings() {
  return (
    <section className="py-28 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
              EARNING POTENTIAL
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              How Much Can You Earn?
            </h2>
            <p className="mt-5 text-blue-100/70 text-lg max-w-2xl mx-auto">
              Your income grows as your client base grows. Here's what our partners earn at every stage of their journey.
            </p>
          </motion.div>
        </div>

        {/* Earning tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {earningTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className={`relative rounded-3xl overflow-hidden ${tier.featured ? "ring-2 ring-primary shadow-2xl shadow-primary/20" : ""}`}
            >
              {tier.featured && (
                <div className="bg-primary text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                  Most Common Tier
                </div>
              )}
              <div className={`h-1.5 bg-gradient-to-r ${tier.color}`} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
                <div className={`w-14 h-14 rounded-2xl ${tier.bg} flex items-center justify-center mb-6`}>
                  <TrendingUp className={`w-7 h-7 ${tier.iconColor}`} />
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{tier.tier}</h3>
                <p className={`text-lg font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                  {tier.range}
                </p>
                <p className="text-blue-100/60 text-sm mb-6 leading-relaxed">{tier.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm border-b border-white/10 py-2">
                    <span className="text-blue-100/60">Margin Range</span>
                    <span className="text-white font-bold">{tier.margin}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/10 py-2">
                    <span className="text-blue-100/60">Monthly Earnings</span>
                    <span className="text-white font-bold">{tier.commission}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {tier.targets.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100/70 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tier.color} flex-shrink-0`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {earningHighlights.map((h, index) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-xl font-black text-white mb-1">{h.value}</div>
                <div className="text-blue-100/60 text-xs leading-tight">{h.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
