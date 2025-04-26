import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, we started as a small team with big dreams. Our journey has been 
              marked by innovation, dedication, and a commitment to excellence in everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, we're proud to serve thousands of customers worldwide, delivering 
              exceptional quality and service that sets us apart in our industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-bold text-gray-900">2010:</span> Company founded
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-bold text-gray-900">2015:</span> Reached 1000 customers
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-bold text-gray-900">2020:</span> Expanded internationally
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Our team" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Our office" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Team meeting" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Company event" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;