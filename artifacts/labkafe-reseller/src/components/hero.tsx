import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Building2 } from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  proprietorName: z.string().min(2, "Proprietor name is required"),
  panNo: z.string().min(10, "Valid PAN is required"),
  gstNo: z.string().min(15, "Valid GST is required"),
  contactNo: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required"),
});

export function Hero() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      proprietorName: "",
      panNo: "",
      gstNo: "",
      contactNo: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Application Submitted Successfully",
      description: "Our team will contact you shortly.",
    });
    form.reset();
  }

  const headline = "EXPAND YOUR BUSINESS THROUGH OUR RESELLER PROGRAM".split(" ");

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden bg-[#0A1A2F]">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0E284A] to-[#163A6C] opacity-90" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#163A6C]/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        {/* Hexagon pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              RESELLER PROGRAM
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium text-blue-100 mb-6"
            >
              Be your own Boss, build your Own Brand
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg text-blue-100/70 mb-10 max-w-xl leading-relaxed"
            >
              Join our premium reseller program today. Access top-quality products and full backend support with zero inventory headaches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-white text-[#0A1A2F] hover:bg-gray-100">
                View Benefits <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-primary to-purple-500" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Come partner with Labkafe</h3>
                  <p className="text-blue-200 text-sm">Register to get started</p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100">Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter company name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="proprietorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100">Proprietor Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="panNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100">PAN No.</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter PAN" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11 uppercase" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gstNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100">GST No.</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter GST" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11 uppercase" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="contactNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100">Contact No.</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <div className="bg-white/10 border border-white/10 border-r-0 rounded-l-md px-3 flex items-center text-blue-200">
                              +91
                            </div>
                            <Input placeholder="Mobile number" className="rounded-l-none bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100">Email ID</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400 h-11" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base font-bold mt-4" size="lg">
                    Submit Registration
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
