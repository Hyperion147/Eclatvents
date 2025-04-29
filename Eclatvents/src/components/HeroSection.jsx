import React from 'react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Blurred Background with Fallback */}
      <div 
        className="absolute inset-0 bg-[#fdf9ed]"
        aria-hidden="true"
      >
        <img
          src="/images/bgImg.jpeg"
          alt="Background"
          className="w-full h-full object-cover blur-sm"
          loading="eager"
        />
      </div>

      {/* Semi-transparent Overlay (optional) */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className='flex justify-center pb-6 md:pb-10'>
          <img 
            src="/logos/Tulip.png" 
            alt="EclatVents Logo" 
            className='w-24 md:w-32 h-auto' 
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-black mb-4 md:mb-6 px-4 leading-tight">
            <span className="block uppercase tracking-wide">EclatVents</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-2xl mx-auto px-2 leading-relaxed">
            Turning Occasions into Masterpieces.
          </p>

          <button
            onClick={scrollToAbout}
            className="bg-black hover:bg-[#b78f52] text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 shadow-md hover:shadow-lg mt-12 sm:mt-16 md:mt-20"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;