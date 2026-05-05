import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const clientsData = {
  "Government Schools": [
    "Air Force School Tezpur", "Army Public School", "Assam Rifles Public School", 
    "Delhi Police Public School", "Government Girls Senior Secondary School Bhiwani", "HAL New Public School"
  ],
  "Private Schools": [
    "Birla High School Mukundapur", "Birla Open Minds International School Srinagar", 
    "Chakrapani Residential School Rajgir", "Chrysalis High Horamavu", 
    "Claret School Burdwan", "DAV Kalisindh Thermal Public School"
  ],
  "Colleges": [
    "Adarsh College Madhepura", "Atal Bihari Vajpayee Government Institute of Engineering & Technology", 
    "Avadh Girls Inter College Karja", "Awadh Bihari Singh Mahavidyalaya College", 
    "BNMV College Sahugarh", "Balurghat Mahila Mahavidyalaya"
  ],
  "Universities": [
    "Aliah University", "Anna University Chennai", "Bhupendra Narayan Mandal University", 
    "Bihar Agricultural University", "Central Research Facility IIT Kharagpur", "Central University of Haryana"
  ],
  "Research Institutes": [
    "Animal & Fisheries Resources Department", "Armed Forces Medical College Pune", 
    "Atal Incubation Centre NIPER Guwahati", "Bihar State Seed and Organic Certification Agency", 
    "Bureau of Indian Standards BIS Kolkata", "Central Council for Research in Ayurvedic Sciences"
  ],
  "Government": ["DRDO", "ISRO", "CSIR Labs", "ICAR Institutes"],
  "Medical": ["AIIMS", "Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals"],
  "Industries": ["Tata Steel", "Reliance Industries", "L&T", "Adani Group"]
};

// Flatten all for "All" tab
const allClients = Object.values(clientsData).flat();

export function Clients() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", ...Object.keys(clientsData)];

  const displayClients = activeTab === "All" ? allClients : clientsData[activeTab as keyof typeof clientsData] || [];

  return (
    <section className="py-24 bg-[#F8F9FA] border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-wide uppercase mb-2">TRUSTED BY LEADING INSTITUTIONS</h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground">
              Partnering with India's finest
            </h3>
          </motion.div>
        </div>

        {/* Tabs - Scrollable on mobile */}
        <div className="mb-12 flex justify-center">
          <ScrollArea className="w-full max-w-5xl whitespace-nowrap rounded-lg">
            <div className="flex w-max space-x-2 p-1 pb-4 mx-auto">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-6 transition-all ${
                    activeTab === tab 
                      ? "shadow-md" 
                      : "bg-white hover:bg-gray-100 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden md:flex" />
          </ScrollArea>
        </div>

        {/* Clients Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
            >
              {displayClients.map((client, index) => (
                <motion.div
                  layout
                  key={`${client}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="bg-white border border-border/60 shadow-sm rounded-xl px-6 py-4 flex items-center justify-center text-center max-w-[300px] flex-grow hover:shadow-md hover:border-primary/30 transition-all cursor-default"
                >
                  <span className="font-semibold text-foreground/80">{client}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
