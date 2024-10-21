import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0D0D0D] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <img
            src="/src/assets/images/logo.png"
            className="w-32"
            alt="Law Firm Logo"
          />
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Our firm
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Our lawyers
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-b border-gray-800">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            23475 Glacier View Dr, Eagle River, Alaska 99577, USA
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Fletcher Law © {year} All Rights Reserved
          </p>
          <div className="text-sm text-gray-400">
            <a
              href="mailto:fletcher@law.com"
              className="hover:text-[#D4AF37] transition-colors"
            >
              fletcher@law.com
            </a>
            <span className="mx-2">|</span>
            <a
              href="tel:+1-846-214-51-75"
              className="hover:text-[#D4AF37] transition-colors"
            >
              +1 846 214-51-75
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
