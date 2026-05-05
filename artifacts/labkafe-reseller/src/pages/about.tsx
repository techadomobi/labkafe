import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { CompanyStory } from "@/components/company-story";
import { Certifications } from "@/components/certifications";
import { ResellerSupport } from "@/components/reseller-support";
import { Stats } from "@/components/stats";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize access to quality laboratory infrastructure across India by empowering a network of passionate resellers and distributors.",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A future where every school and institution in India has a world-class science lab — built by our reseller network, powered by Labkafe.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Users,
    title: "Our People",
    description:
      "A dedicated team of lab specialists, logistics experts, and partner success managers working every day to help you grow.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Our Reach",
    description:
      "With 500+ active resellers spread across 28+ states, Labkafe is India's most trusted laboratory solutions partner for resellers.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const teamMembers = [
  { name: "Arpan Ghosh", role: "Founder & CEO", initials: "AG", color: "from-blue-500 to-primary", bio: "Former IIT researcher turned entrepreneur with 15+ years in science education and lab infrastructure." },
  { name: "Shreya Banerjee", role: "Head of Reseller Success", initials: "SB", color: "from-indigo-500 to-purple-600", bio: "Built the reseller program from scratch. Personally onboarded the first 100 partners across India." },
  { name: "Rohit Sharma", role: "VP – Product & Supply Chain", initials: "RS", color: "from-emerald-500 to-teal-600", bio: "Oversees a catalog of 10,000+ SKUs and a logistics network spanning 28 states with 99% on-time delivery." },
  { name: "Ananya Mishra", role: "Head of Education Programs", initials: "AM", color: "from-orange-500 to-rose-500", bio: "Architect of Project Vigyan — bringing experiential science labs to 800+ schools across underserved regions." },
];

const aboutFaqs = [
  {
    question: "When was Labkafe founded?",
    answer:
      "Labkafe was founded in 2014 in Kolkata, West Bengal, with the mission of making quality lab infrastructure accessible to every educational institution in India — regardless of size or location.",
  },
  {
    question: "What makes Labkafe different from other lab suppliers?",
    answer:
      "Unlike traditional suppliers who operate directly, Labkafe has built a pan-India reseller network that allows local partners to serve institutions in their territory. This gives clients a local touch with Labkafe's product quality and support backend. We also combine furniture, equipment, chemicals, and science programs in one ecosystem.",
  },
  {
    question: "Is Labkafe only for schools, or for colleges and research institutes too?",
    answer:
      "Labkafe serves the full institutional spectrum — CBSE/ICSE/state board schools, central universities, IITs and NITs, medical and engineering colleges, research institutes like CSIR labs, and government bodies like DRDO and ISRO.",
  },
  {
    question: "What is Project Vigyan?",
    answer:
      "Project Vigyan is Labkafe's flagship science education initiative. It provides schools and colleges with complete, ready-to-use science lab setups — including Mini Science Labs, Lab-in-a-Box, Robotics Labs, Astronomy Labs, and more — designed to make science education experiential and practical.",
  },
  {
    question: "Is Labkafe ISO certified?",
    answer:
      "Yes. Labkafe is ISO 9001:2015 certified, GeM-authorized, and NSIC registered. We have also received recognition as India's Best Laboratory Solutions Brand by the Education Excellence Awards for three consecutive years.",
  },
  {
    question: "How can I join the Labkafe team?",
    answer:
      "We are always looking for passionate individuals in sales, operations, technical support, and education programs. Send your resume to careers@labkafe.com and our HR team will get in touch within 5 business days.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative pt-40 pb-20 bg-[#0A1A2F] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0E284A] to-[#163A6C] opacity-90" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                WHO WE ARE
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                About Labkafe
              </h1>
              <p className="text-blue-100/70 text-xl max-w-2xl mx-auto leading-relaxed">
                India's leading laboratory solutions company, empowering educators,
                researchers, and reseller partners with premium equipment and
                end-to-end support since 2014.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                WHAT DRIVES US
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Our Mission & Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, index) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className="bg-[#F8F9FA] rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-5`}>
                      <Icon className={`w-7 h-7 ${v.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CompanyStory />
        <Stats />

        {/* Leadership Team */}
        <section className="py-28 bg-white relative overflow-hidden">
          <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">THE TEAM</p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                  Meet Our Leadership
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  The people behind India's most trusted lab solutions partner.
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group bg-[#F8F9FA] rounded-3xl p-8 border border-border/50 hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 text-white text-2xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Certifications />
        <HowItWorks />
        <Benefits />
        <ResellerSupport />
        <Testimonials />
        <Clients />
        <Faq
          faqs={aboutFaqs}
          tag="ABOUT LABKAFE"
          title="Frequently Asked Questions"
          subtitle="Learn more about our company, certifications, and what makes us the best lab partner in India."
        />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
