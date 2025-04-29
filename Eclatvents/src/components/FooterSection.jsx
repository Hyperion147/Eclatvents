import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer id='contact' className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Main content grid - changes layout on mobile */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo - centered on mobile, first item on desktop */}
          <div className="col-span-2 md:col-auto flex justify-center md:block">
            <img 
              src="/logos/Tulip.png" 
              alt="Eclatvents Logo" 
              width={50} 
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-base font-bold mb-1">Our Location</h3>
            <address className="not-italic text-xs md:text-sm">
              Panipat, Haryana
            </address>
          </div>

          {/* Instagram */}
          <div className="text-center">
            <h3 className="text-sm md:text-base font-bold mb-1">Follow Us</h3>
            <a
              href="https://instagram.com/eclatvents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg hover:text-cyan-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="hidden sm:block">
            <img 
              src="/images/scan.png" 
              alt="QR Code" 
              width={70} 
              className="rounded-[10px]"
            />
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-sm md:text-base font-bold mb-1">Contact Us</h3>
            <p className="text-xs md:text-sm">eclatvents@gmail.com</p>
          </div>
        </div>

        {/* Copyright - full width */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} EclatVents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;