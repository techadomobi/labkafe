import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  tag?: string;
  dark?: boolean;
}

export function Faq({ faqs, title, subtitle, tag, dark }: FaqProps) {
  return (
    <section className={`py-28 relative overflow-hidden ${dark ? "bg-[#0A1A2F]" : "bg-white"}`}>
      {dark && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
        </>
      )}
      {!dark && (
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tag && (
              <p className={`font-bold tracking-widest uppercase text-sm mb-3 ${dark ? "text-blue-400" : "text-primary"}`}>
                {tag}
              </p>
            )}
            {title && (
              <h2 className={`text-4xl md:text-5xl font-black leading-tight mb-4 ${dark ? "text-white" : "text-foreground"}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg leading-relaxed ${dark ? "text-blue-100/70" : "text-muted-foreground"}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className={`border rounded-2xl px-6 ${
                    dark
                      ? "border-white/10 bg-white/5 hover:bg-white/8"
                      : "border-border/60 bg-[#F8F9FA] hover:border-primary/30"
                  } transition-colors`}
                >
                  <AccordionTrigger
                    className={`text-left font-bold text-base py-5 hover:no-underline ${dark ? "text-white" : "text-foreground"}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`text-sm leading-relaxed pb-5 ${dark ? "text-blue-100/75" : "text-muted-foreground"}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
