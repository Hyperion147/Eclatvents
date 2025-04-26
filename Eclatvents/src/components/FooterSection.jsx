import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Single responsive layout */}
        <div className="flex flex-row md:flex-row justify-between items-center gap-6">
          {/* Location - Shows as column on mobile, row on desktop */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Our Location</h3>
            <address className="not-italic text-xs md:text-sm">
              Panipat, Haryana
            </address>
          </div>

          {/* Instagram - Center aligned on both views */}
          <div className="text-center">
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Follow Us</h3>
            <a 
              href="https://instagram.com/eclatvents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl hover:text-cyan-300 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Contact - Shows as column on mobile, row on desktop */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Contact Us</h3>
            <p className="text-xs md:text-sm">eclatvents@gmail.com</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Eclatvents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;