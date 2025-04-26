import React from 'react';


const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gray-50 pt-50 pb-20 md:py-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Flex container to center all items */}
        <div className="flex flex-col items-center justify-center text-center max-w-300">
          
          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Company Name
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            A brief, compelling description of your company's mission, values, or what makes you unique.
            Keep it concise but impactful.
          </p>
          
          {/* CTA Button with scroll to AboutSection */}
          <button 
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-4xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-blue-200 cursor-pointer mt-25"
          >
            Learn More
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;