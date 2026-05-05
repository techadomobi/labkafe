import { motion } from "framer-motion";

const galleryItems = [
  { label: "Chemistry Lab Setup", category: "Furniture", gradient: "from-blue-500 to-primary", size: "col-span-2 row-span-2" },
  { label: "Biology Microscopy Station", category: "Equipment", gradient: "from-emerald-500 to-teal-500", size: "" },
  { label: "Physics Lab", category: "Equipment", gradient: "from-indigo-500 to-purple-500", size: "" },
  { label: "Robotics & AI Lab", category: "STEM", gradient: "from-orange-500 to-rose-500", size: "" },
  { label: "Mini Science Lab", category: "Compact", gradient: "from-yellow-500 to-orange-500", size: "" },
  { label: "Astronomy Observatory", category: "Astronomy", gradient: "from-purple-600 to-indigo-700", size: "col-span-2" },
];

const stats = [
  { value: "2,500+", label: "Labs Installed" },
  { value: "800+", label: "Schools Served" },
  { value: "200+", label: "Colleges & Universities" },
  { value: "28+", label: "States Covered" },
];

export function GalleryShowcase() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              OUR INSTALLATIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Labs We've Built Across India
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              From compact mini science kits to fully furnished research-grade labs — see what you'll be selling.
            </p>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 auto-rows-[180px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${item.size}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <span className="text-white font-black text-lg leading-tight">
                  {item.label}
                </span>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-[#F8F9FA] rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
