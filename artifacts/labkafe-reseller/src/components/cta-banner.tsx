import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0A1A2F]">
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-sm font-bold mb-8 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              Limited Partner Slots Available
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-blue-300 via-primary to-indigo-400 bg-clip-text text-transparent">
                Your Empire?
              </span>
            </h2>

            <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ resellers who are already earning with Labscode. Zero inventory, full support, real profits — starting today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  data-testid="button-cta-apply"
                  className="h-16 px-10 text-lg font-bold rounded-full bg-white text-[#0A1A2F] hover:bg-blue-50 shadow-2xl shadow-white/10"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-cta-contact"
                  className="h-16 px-10 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Talk to Sales
                </Button>
              </motion.div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:labscode@gmail.com"
                data-testid="link-cta-email"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                labscode@gmail.com
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/20" />
              <a
                href="tel:+911234567899"
                data-testid="link-cta-phone"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <PhoneCall className="w-4 h-4" />
                </div>
                +91 1234567899
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
