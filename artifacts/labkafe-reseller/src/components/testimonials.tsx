import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Partnering with Labscode transformed our distribution business. Their zero-inventory model meant we could start selling premium lab products without any upfront capital. Within 6 months, our revenue doubled.",
    name: "Rajesh Kumar",
    title: "Director",
    company: "Scientific Solutions Pvt Ltd, Delhi",
    initials: "RK",
    color: "from-blue-500 to-primary",
  },
  {
    quote: "The GeM authorization support from Labscode opened doors to government school contracts we never thought possible. Their backend team handled everything — logistics, installation, documentation.",
    name: "Priya Sharma",
    title: "Founder",
    company: "EduLab Distributors, Bengaluru",
    initials: "PS",
    color: "from-indigo-500 to-purple-600",
  },
  {
    quote: "What impressed me most was the 24/7 technical support. When a client had issues with equipment installation, Labscode's team was on-site within 24 hours. That kind of commitment builds trust.",
    name: "Arun Mehta",
    title: "Managing Partner",
    company: "Lab World Traders, Mumbai",
    initials: "AM",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote: "The custom branding option is incredible. Our clients receive products under our brand, giving us the credibility of a large manufacturer while keeping operating costs minimal. Highly recommend.",
    name: "Sunita Patel",
    title: "CEO",
    company: "Apex Scientific, Ahmedabad",
    initials: "SP",
    color: "from-orange-500 to-rose-500",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-28 bg-white overflow-hidden relative">
      <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">PARTNER STORIES</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Hear from Our Resellers
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Real results from real partners who built successful businesses with Labscode.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#F8F9FA] rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center mb-8 shadow-lg`}>
                  <Quote className="w-7 h-7 text-white" />
                </div>

                <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium mb-10 italic">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-black text-lg shadow-md`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonials[current].name}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[current].title}, {testimonials[current].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-testid={`testimonial-dot-${i}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                data-testid="button-testimonial-prev"
                className="w-12 h-12 rounded-full border-2 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                data-testid="button-testimonial-next"
                className="w-12 h-12 rounded-full border-2 hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Background cards */}
        <div className="hidden lg:flex gap-6 mt-16 max-w-6xl mx-auto opacity-40 pointer-events-none">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full bg-gradient-to-r ${t.color} transition-all duration-500 ${i === current ? "opacity-100 flex-[2]" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
