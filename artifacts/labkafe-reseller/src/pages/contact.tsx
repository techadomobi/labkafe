import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  Clock,
  MessageSquare,
  Headphones,
  Globe,
  ShieldCheck,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "sales@labkafe.com",
    href: "mailto:sales@labkafe.com",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9147163562",
    href: "tel:+919147163562",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "207, 2nd Floor, Ambuja Eco Centre, Salt Lake Sector V, Kolkata - 700091",
    href: "#",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM to 6:00 PM IST",
    href: "#",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const contactChannels = [
  {
    icon: Headphones,
    title: "Partner Support",
    description: "For existing reseller partners — commission queries, order tracking, portal access.",
    contact: "partners@labkafe.com",
    color: "from-blue-400 to-primary",
    bg: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Building2,
    title: "New Reseller Enquiry",
    description: "Interested in joining our program? Our business development team will guide you.",
    contact: "sales@labkafe.com",
    color: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: Globe,
    title: "GeM & Government Sales",
    description: "Assistance with government tender bids, GeM listings, and institutional RFPs.",
    contact: "gem@labkafe.com",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Technical Support",
    description: "Post-delivery installation, maintenance, and product warranty support.",
    contact: "support@labkafe.com",
    color: "from-orange-400 to-rose-400",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const officeLocations = [
  { city: "Kolkata (HQ)", address: "207, 2nd Floor, Ambuja Eco Centre, Salt Lake Sector V, Kolkata - 700091", phone: "+91 9147163562" },
  { city: "Delhi NCR", address: "B-45, Sector 57, Noida, Uttar Pradesh - 201301", phone: "+91 9147163563" },
  { city: "Bengaluru", address: "12th Floor, Prestige Shantiniketan, Whitefield, Bengaluru - 560048", phone: "+91 9147163564" },
  { city: "Mumbai", address: "Unit 804, One BKC, Bandra Kurla Complex, Mumbai - 400051", phone: "+91 9147163565" },
];

const contactFaqs = [
  {
    question: "How quickly do you respond to enquiries?",
    answer:
      "Our sales team responds to all enquiries within 24 business hours (Mon–Sat). For urgent matters you can call us directly at +91 9147163562 during business hours (9 AM – 6 PM IST).",
  },
  {
    question: "I'm an existing reseller — how do I get partner support?",
    answer:
      "Existing partners can reach the partner success team directly at partners@labkafe.com or through the reseller portal. You can also reach your dedicated account manager via WhatsApp if you're on the Growth or Enterprise tier.",
  },
  {
    question: "Can I visit the Labkafe office for a meeting?",
    answer:
      "Yes, we welcome in-person meetings at any of our four offices (Kolkata, Delhi, Bengaluru, Mumbai). Please write to us at sales@labkafe.com to schedule a meeting and we'll arrange it within 3–5 business days.",
  },
  {
    question: "Do you have regional offices outside of the four metros?",
    answer:
      "We have field representatives and stockist partners in Hyderabad, Chennai, Ahmedabad, Pune, Bhubaneswar, and Guwahati. Contact the head office to connect with your nearest field team.",
  },
  {
    question: "How do I register as a reseller?",
    answer:
      "Fill in the partner registration form on our Home page with your company details (name, PAN, GST, contact info). Our team reviews all applications within 48 hours and gets in touch to begin onboarding.",
  },
  {
    question: "Can I get a product demo before deciding to partner?",
    answer:
      "Absolutely. We offer online product demos for all major categories and in-person demo visits to our Kolkata and Delhi showrooms by appointment. Email sales@labkafe.com to book a demo session.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    form.reset();
  }

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
                GET IN TOUCH
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Contact Us
              </h1>
              <p className="text-blue-100/70 text-xl max-w-2xl mx-auto leading-relaxed">
                Ready to become a Labkafe reseller or have questions about our
                programs? Reach out — our team responds within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-black text-foreground mb-3">Let's Talk</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're interested in joining our reseller program,
                    have a product inquiry, or need support — we're here to help.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group block"
                      >
                        <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${info.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          <p className="text-foreground font-semibold leading-relaxed text-sm">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-[#0A1A2F] to-[#163A6C] rounded-3xl p-6 text-white"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">Become a Reseller</h3>
                  </div>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-4">
                    Ready to start? Go to our home page and fill the partner
                    registration form to apply directly.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-[#0A1A2F] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Register Now →
                  </a>
                </motion.div>
              </div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-primary to-purple-500" />

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground">Send Us a Message</h3>
                      <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Full name" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <div className="bg-muted border border-border border-r-0 rounded-l-md px-3 flex items-center text-muted-foreground text-sm">
                                    +91
                                  </div>
                                  <Input placeholder="Mobile number" className="rounded-l-none h-11" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your inquiry..."
                                className="min-h-[140px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 text-base font-bold rounded-full"
                      >
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departmental Contact Channels */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">DEPARTMENTS</p>
                <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                  Reach the Right Team
                </h2>
                <p className="mt-3 text-muted-foreground text-lg">
                  For faster responses, contact the department that matches your query directly.
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactChannels.map((ch, index) => {
                const Icon = ch.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-[#F8F9FA] rounded-3xl p-7 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ch.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`w-14 h-14 rounded-2xl ${ch.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${ch.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{ch.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ch.description}</p>
                    <a
                      href={`mailto:${ch.contact}`}
                      className={`text-sm font-bold ${ch.iconColor} hover:underline`}
                    >
                      {ch.contact}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">OUR OFFICES</p>
                <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                  Find Us Across India
                </h2>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {officeLocations.map((loc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{loc.city}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{loc.address}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-primary font-semibold text-sm flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4" /> {loc.phone}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-sm h-96">
              <iframe
                title="Labkafe Office Location"
                src="https://maps.google.com/maps?q=Ambuja+Eco+Centre+Salt+Lake+Sector+V+Kolkata&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "384px" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <Faq
          faqs={contactFaqs}
          tag="CONTACT FAQs"
          title="Common Contact Questions"
          subtitle="Answers to the most common queries about reaching our team and getting started."
        />
      </main>
      <Footer />
    </div>
  );
}
