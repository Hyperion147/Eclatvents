import React from 'react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[60vh] xs:min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/bgImg.jpeg"
          alt="EclatVents Background"
          className="w-full h-full object-cover object-center blur-sm"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#fdf9ed]/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
        <div className='flex justify-center pb-4 xs:pb-6 sm:pb-8 md:pb-10'>
          <img 
            src="/logos/Tulip.png" 
            alt="EclatVents Logo" 
            className='w-20 xs:w-24 sm:w-28 md:w-32 h-auto transition-all duration-300 hover:scale-105' 
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight">
            <span className="block uppercase">EclatVents</span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-4 xs:mb-5 sm:mb-7 md:mb-8 max-w-[85%] xs:max-w-[90%] sm:max-w-2xl mx-auto leading-relaxed sm:leading-loose">
            Turning Occasions into Masterpieces.
          </p>

          <button
            onClick={scrollToAbout}
            className="bg-black hover:bg-[#b78f52] text-white font-medium xs:font-semibold py-2 xs:py-2.5 sm:py-3 px-5 xs:px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 active:scale-95 shadow-md hover:shadow-xl mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-sm xs:text-base sm:text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;