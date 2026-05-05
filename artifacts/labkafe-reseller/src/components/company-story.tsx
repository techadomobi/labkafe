import { motion } from "framer-motion";
import { Flag, Users, Globe, Award, Rocket, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2014",
    icon: Flag,
    title: "Founded in Kolkata",
    body: "Labkafe was established with a simple mission: to provide affordable, high-quality laboratory equipment to schools and colleges across India that were underserved by traditional suppliers.",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    year: "2016",
    icon: Users,
    title: "Reseller Program Launched",
    body: "Recognizing the need for a distributed sales network, Labkafe launched its official reseller partner program — starting with 25 partners across 5 states.",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    year: "2018",
    icon: Globe,
    title: "Pan-India Expansion",
    body: "Labkafe crossed 100 reseller partners and expanded operations to 15 states, establishing regional fulfilment hubs in Delhi, Mumbai, Bengaluru, and Chennai.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    year: "2020",
    icon: Award,
    title: "ISO & GeM Certification",
    body: "Achieved ISO 9001:2015 certification and became a GeM-authorized seller, unlocking a massive new channel for resellers to supply to government institutions.",
    color: "from-orange-400 to-rose-400",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    year: "2022",
    icon: Rocket,
    title: "Project Vigyan Launch",
    body: "Launched the flagship 'Project Vigyan' initiative — a science education movement bringing experiential STEM labs to rural and semi-urban schools through the reseller network.",
    color: "from-purple-400 to-indigo-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    year: "2024",
    icon: Sparkles,
    title: "500+ Partners & Growing",
    body: "Today, Labkafe stands as India's most trusted lab solutions company with 500+ active resellers, 10,000+ products, and a presence in 28+ states — and we're just getting started.",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

export function CompanyStory() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              OUR JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              A Decade of Lab Excellence
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From a Kolkata startup to India's most trusted laboratory solutions brand — here's our story.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/60 to-primary/10 -translate-x-0.5" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((m, index) => {
              const Icon = m.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isLeft ? "" : "lg:[direction:rtl]"}`}
                >
                  <div className={`${isLeft ? "" : "lg:[direction:ltr]"} pb-10 lg:pb-16`}>
                    <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className={`w-7 h-7 ${m.iconColor}`} />
                        </div>
                        <div>
                          <span className={`text-3xl font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                            {m.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{m.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{m.body}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${m.color} shadow-lg border-4 border-white`} />
                  </div>

                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
