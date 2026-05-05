import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always show the solid navbar
  const solidNav = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        solidNav
          ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-black tracking-tight text-primary cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center text-xl">
              L
            </div>
            <span className={solidNav ? "text-primary" : "text-white"}>
              Labkafe
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <span
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : solidNav
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              variant={solidNav ? "default" : "secondary"}
              className="font-semibold rounded-full px-6"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={solidNav ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={solidNav ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.name} href={link.href}>
                    <span
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 border-b border-border/50 font-medium cursor-pointer ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
              <Link href="/contact">
                <Button
                  className="w-full mt-4 font-semibold rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
