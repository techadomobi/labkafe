import { Navbar } from "@/components/navbar";
import { ProductsServices } from "@/components/products-services";
import { LabPackages } from "@/components/lab-packages";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { ResellerSupport } from "@/components/reseller-support";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Microscope, Armchair, Rocket, FlaskConical, Cpu, Telescope } from "lucide-react";

const categories = [
  { icon: Armchair, name: "Lab Furniture", count: "3,000+ SKUs", color: "bg-blue-50", iconColor: "text-primary" },
  { icon: Microscope, name: "Lab Equipment", count: "4,500+ SKUs", color: "bg-indigo-50", iconColor: "text-indigo-500" },
  { icon: FlaskConical, name: "Chemicals & Reagents", count: "1,200+ SKUs", color: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: Cpu, name: "Robotics & AI", count: "400+ SKUs", color: "bg-orange-50", iconColor: "text-orange-500" },
  { icon: Telescope, name: "Astronomy", count: "250+ SKUs", color: "bg-purple-50", iconColor: "text-purple-600" },
  { icon: Rocket, name: "Project Vigyan", count: "6 Programs", color: "bg-rose-50", iconColor: "text-rose-500" },
];

const productFaqs = [
  {
    question: "Do I need to stock products myself?",
    answer:
      "No. Labkafe maintains all inventory in our centralized warehouses. You take the order from your client, place it through the reseller portal, and we handle fulfilment, packing, and last-mile delivery directly to the institution.",
  },
  {
    question: "What is the typical lead time from order to delivery?",
    answer:
      "Standard products are delivered within 7–14 business days across India. Custom furniture and large lab setups may take 3–6 weeks depending on specification and site readiness. Urgent orders are handled case-by-case.",
  },
  {
    question: "Can I white-label Labkafe products under my own brand?",
    answer:
      "Yes. Our custom branding program allows you to put your company logo on packaging, product documentation, and certain equipment models. This gives you the credibility of a manufacturer while keeping overhead zero.",
  },
  {
    question: "Are Labkafe products eligible for government procurement (GeM)?",
    answer:
      "Yes. Labkafe is a registered GeM seller. Many products are GeM-listed and you can facilitate government school and college orders through the GeM portal with Labkafe's full support.",
  },
  {
    question: "What is Project Vigyan and how can I sell it?",
    answer:
      "Project Vigyan is Labkafe's flagship initiative to bring experiential science education to institutions. It includes Mini Science Labs, Lab-in-a-Box, Astronomy Labs, and Robotics Labs. As a reseller you can pitch these turnkey programs to any school or college and earn 12–20% margin on each program sold.",
  },
  {
    question: "Do you provide installation and after-sales support?",
    answer:
      "Absolutely. Labkafe's technical team handles installation and commissioning at the client site. We also offer Annual Maintenance Contracts (AMC) that you can sell as add-ons, giving you a recurring revenue stream.",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative pt-40 pb-20 bg-[#0A1A2F] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0E284A] to-[#163A6C] opacity-90" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                OUR CATALOG
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Products & Services
              </h1>
              <p className="text-blue-100/70 text-xl max-w-2xl mx-auto leading-relaxed">
                10,000+ lab-grade SKUs across furniture, equipment, chemicals, and
                science programs — everything you need to build a thriving reselling business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">BROWSE BY CATEGORY</p>
                <h2 className="text-3xl md:text-4xl font-black text-foreground">
                  6 Product Categories, 10,000+ SKUs
                </h2>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group bg-[#F8F9FA] rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center cursor-default"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${cat.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{cat.name}</h3>
                    <p className="text-muted-foreground text-xs">{cat.count}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ProductsServices />
        <LabPackages />
        <GalleryShowcase />
        <ResellerSupport />
        <Faq
          faqs={productFaqs}
          tag="PRODUCT FAQs"
          title="Common Product Questions"
          subtitle="Answers to everything you need to know about our catalog, delivery, and support."
        />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
