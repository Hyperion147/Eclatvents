import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsOpen(false); // Close mobile menu if open
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close mobile menu when any link is clicked
    };

    return (
        <nav className="bg-[#fdf9ed] shadow-lg px-20 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Image on the left */}
                    <div className="flex-shrink-0 flex items-center">
                        <button
                            onClick={scrollToTop}
                            className="focus:outline-none cursor-pointer"
                            aria-label="Return to top"
                        >
                            <img
                                className="h-15 w-auto hover:opacity-80 transition-opacity duration-200"
                                src="/logos/Logo HD.png"
                                alt="Company Logo"
                            />
                        </button>
                    </div>

                    {/* Desktop Navigation links on the right */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        <a
                            href="#about"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300"
                        >
                            Overview
                        </a>
                        <a
                            href="#services"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-300"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation links (shown when hamburger is clicked) */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#about"
                        onClick={handleLinkClick}
                        className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                    >
                        Overview
                    </a>
                    <a
                        href="#services"
                        onClick={handleLinkClick}
                        className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;