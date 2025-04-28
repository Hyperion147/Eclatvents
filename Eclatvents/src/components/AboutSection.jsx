import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#fcf1d0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brand Overview
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold">Mission</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  To create seamless, stress-free event experiences so our clients can fully enjoy their special moments and cherish lifelong memories.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold">Vision</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  To create seamless, stress-free event experiences so our clients can fully enjoy their special moments and cherish lifelong memories.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold">Tagline</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  "Turning Occasions into Masterpieces."
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "https://www.instagram.com/eclatvents/p/DHatoWHBrAE/",
                  src: "/logos/img1.jpeg",
                  alt: "Img 1"
                },
                {
                  href: "https://www.instagram.com/eclatvents/p/DIndXwrhu1z",
                  src: "/logos/img2.jpeg",
                  alt: "Img 2"
                },
                {
                  href: "https://www.instagram.com/eclatvents/p/DH5aRnGhmuA/",
                  src: "/logos/img3.jpeg",
                  alt: "Img 3"
                },
                {
                  href: "https://www.instagram.com/eclatvents/p/DIJPuZThDBQ",
                  src: "/logos/img4.jpeg",
                  alt: "Img 4"
                }
              ].map(({ href, src, alt }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
