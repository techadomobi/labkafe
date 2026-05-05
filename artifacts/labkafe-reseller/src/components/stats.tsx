import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Reseller Partners", description: "Trusted distributors across India" },
  { value: 10000, suffix: "+", label: "Products Available", description: "Premium lab-grade SKUs" },
  { value: 28, suffix: "+", label: "States Covered", description: "Pan-India distribution network" },
  { value: 99, suffix: "%", label: "On-Time Delivery", description: "Reliable last-mile logistics" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#0A1A2F]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-[#0E284A] to-[#0A1A2F]" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #2575B5 0%, transparent 50%), radial-gradient(circle at 75% 50%, #163A6C 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">BY THE NUMBERS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Our Impact in Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-5xl md:text-6xl font-black text-white mb-2 bg-gradient-to-r from-blue-300 to-primary bg-clip-text text-transparent">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                <div className="text-blue-300/70 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
