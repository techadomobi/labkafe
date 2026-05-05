import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-blue-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="text-3xl font-black tracking-tight text-white mb-6 flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center text-2xl">
                  L
                </div>
                Labkafe
              </span>
            </Link>
            <p className="text-blue-100/70 mb-6 leading-relaxed mt-4">
              India's leading laboratory solutions company. Empowering educators and researchers with premium equipment and reliable services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <span className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Reseller Program
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">School Labs</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">College Labs</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-blue-100/70 hover:text-white transition-colors cursor-pointer">Project Vigyan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100/70">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:labscode@gmail.com" className="hover:text-white transition-colors">labscode@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-blue-100/70">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="tel:+911234567899" className="hover:text-white transition-colors">+91 1234567899</a>
              </li>
              <li className="flex items-start gap-3 text-blue-100/70">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>sector-2 gurugram, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/50 text-sm">
            © 2024 Labkafe. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-100/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
