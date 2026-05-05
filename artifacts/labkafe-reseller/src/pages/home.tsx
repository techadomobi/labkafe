import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeClients } from "@/components/marquee-clients";
import { Stats } from "@/components/stats";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HowItWorks } from "@/components/how-it-works";
import { ResellerEarnings } from "@/components/reseller-earnings";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

const homeFaqs = [
  {
    question: "What is the Labscode Reseller Program?",
    answer:
      "The Labscode Reseller Program is a business partnership that lets you sell premium laboratory products — furniture, equipment, and science programs — to schools, colleges, and institutions. You earn competitive margins on every sale without holding any inventory.",
  },
  {
    question: "Do I need prior experience in lab products to join?",
    answer:
      "Not at all. We provide complete product training, sales collateral, and a dedicated support team to help you get started. Many of our top resellers come from unrelated industries like real estate, IT, or education consultancy.",
  },
  {
    question: "What is the investment required to become a reseller?",
    answer:
      "There is no upfront inventory investment. You simply register, get onboarded, and start selling. Labscode handles all stock, fulfillment, and logistics — your only investment is your time and sales effort.",
  },
  {
    question: "How much can I earn as a Labscode reseller?",
    answer:
      "Earnings depend on your sales volume. Starter partners typically earn ₹10K–₹75K per month. Growth-stage resellers earn ₹75K–₹4L, and enterprise partners managing large territories can earn ₹4L+ per month. Your margins range from 10% to 25% depending on product category and volume.",
  },
  {
    question: "What kind of support does Labscode provide to its resellers?",
    answer:
      "Labscode provides a dedicated reseller portal, 24/7 technical support, co-marketing materials, proposal writing assistance, product training, and access to a community of 500+ active partners. We handle delivery, installation, and after-sales service at client sites.",
  },
  {
    question: "Can I get GeM authorization through Labscode?",
    answer:
      "Yes. Labscode is a GeM-authorized seller, and as our reseller partner you can leverage our GeM catalog to supply to government schools, colleges, and institutions. Our team assists you with the entire government procurement process.",
  },
  {
    question: "How long does the onboarding process take?",
    answer:
      "Registration approval takes less than 48 hours. Full onboarding — including product training, portal setup, and branding — is completed within 5–7 business days. You can start pitching clients within the first week.",
  },
  {
    question: "Is there a territory exclusivity for resellers?",
    answer:
      "Yes, we offer territory protection to Growth and Enterprise tier partners. Once you establish a territory, no other Labscode reseller can actively market in that area. Contact us to discuss territory options.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        <Hero />
        <MarqueeClients />
        <Stats />
        <WhyChooseUs />
        <HowItWorks />
        <ResellerEarnings />
        <GalleryShowcase />
        <Testimonials />
        <Faq
          faqs={homeFaqs}
          tag="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Want to Know"
          subtitle="Got questions about the reseller program? Here are the answers our most common partner inquiries."
        />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
