import { motion } from "framer-motion";

const clientNames = [
  "IIT Kharagpur", "Anna University", "AIIMS", "Birla High School", "Army Public School",
  "ISRO", "DRDO", "CSIR Labs", "Apollo Hospitals", "Tata Steel",
  "Air Force School", "Aliah University", "Reliance Industries", "Fortis Healthcare", "Adani Group",
  "Armed Forces Medical College", "Bureau of Indian Standards", "ICAR Institutes", "Manipal Hospitals", "L&T",
];

export function MarqueeClients() {
  const doubled = [...clientNames, ...clientNames];

  return (
    <div className="py-10 bg-white border-y border-border overflow-hidden">
      <div className="mb-4 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Trusted by India's most prestigious institutions</p>
      </div>
      <div className="relative flex overflow-hidden gap-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 flex-shrink-0 whitespace-nowrap"
        >
          {doubled.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#F8F9FA] border border-border rounded-full text-sm font-semibold text-foreground/70 flex-shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
