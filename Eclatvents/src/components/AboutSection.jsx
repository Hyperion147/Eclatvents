import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#fcf1d0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brand Overview
            </h2>
            <h4 className='text-lg font-bold'>Mission</h4>
            <p className="text-gray-600 mb-6">
              To create seamless, stress-free event experiences so our clients can fully enjoy their special moments and cherish lifelong memories.
            </p>
            <h4 className='text-lg font-bold'>Vision</h4>
            <p className="text-gray-600 mb-6">
              To create seamless, stress-free event experiences so our clients can fully enjoy their special moments and cherish lifelong memories.
            </p>
            <h4 className='text-lg font-bold'>Tagline</h4>
            <p className="text-gray-600 mb-6">
              "Turning Occasions into Masterpieces."
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 with Instagram Link */}
              <a href="https://www.instagram.com/eclatvents/p/DHatoWHBrAE/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/logos/img1.jpeg"
                    alt="Img 1"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </a>

              {/* Image 2 with Instagram Link */}
              <a href="https://www.instagram.com/eclatvents/p/DIndXwrhu1z" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/logos/img2.jpeg"
                    alt="Img 2"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </a>

              {/* Image 3 with Instagram Link */}
              <a href="https://www.instagram.com/eclatvents/p/DH5aRnGhmuA/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/logos/img3.jpeg"
                    alt="Img 3"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </a>

              {/* Image 4 with Instagram Link */}
              <a href="https://www.instagram.com/eclatvents/p/DIJPuZThDBQ" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/logos/img4.jpeg"
                    alt="Img 4"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;
