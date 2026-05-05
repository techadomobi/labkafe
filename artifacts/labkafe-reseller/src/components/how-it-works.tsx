import { motion } from "framer-motion";
import { ClipboardList, Handshake, Package, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Register as a Partner",
    description: "Fill out our simple partner registration form with your business details — PAN, GST, and contact information. Approval takes less than 48 hours.",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Get Onboarded",
    description: "Our dedicated reseller success team will onboard you, set up your custom branding, and walk you through the product catalog and ordering process.",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    number: "03",
    icon: Package,
    title: "Place Orders & Deliver",
    description: "Receive orders from your clients, place them through our portal with zero inventory investment. We handle fulfillment, packaging, and last-mile delivery.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Earn competitive margins on every sale. Scale your business by expanding your client base while Labscode handles all backend operations seamlessly.",
    color: "from-orange-400 to-rose-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Start Earning in 4 Simple Steps
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Joining Labscode's reseller network is fast, straightforward, and completely risk-free.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative w-28 h-28 rounded-full ${step.bg} border-4 border-white shadow-xl flex items-center justify-center mb-8 z-10`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <Icon className={`w-10 h-10 ${step.iconColor}`} />
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-xs font-black flex items-center justify-center shadow-md`}>
                      {step.number.slice(-2)}
                    </div>
                  </motion.div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300 group-hover:border-primary/20 h-full">
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
