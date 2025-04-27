import React from 'react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#fdf9ed] py-20 md:py-32 flex items-center justify-center min-h-[50vh]">
      <div className="container mx-auto px-4">
        {/* Flex container to center all items */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          
          {/* Company Name - Now properly centered and responsive */}
          <h1 className="text-4xl uppercase md:text-6xl lg:text-7xl font-bold text-[#4169e1] mb-4 md:mb-6 w-full max-w-4xl mx-auto px-4 [text-shadow:_7px_5px_9px_rgba(0,0,0,0.3)]">
            Eclatvents
          </h1>
          
          {/* Description - Properly centered with better responsive sizing */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 w-full max-w-2xl mx-auto px-4 leading-relaxed">
            A brief, compelling description of your company's mission, values, or what makes you unique.
            Keep it concise but impactful.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToAbout}
            className="bg-[#000000] hover:bg-[#b78f52] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-lg shadow-blue-200/50 cursor-pointer mt-20"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;