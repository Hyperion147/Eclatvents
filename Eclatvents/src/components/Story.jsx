import React from "react";

const Story = () => {
  return (
    <div 
      id="services" 
      className="flex items-center justify-center min-h-[40vh] md:min-h-[50vh] bg-[#f7eed5] py-12 px-6 sm:px-8 md:px-10 mb-10"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-800 mb-4 sm:mb-6">
          Backstory
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed sm:leading-loose">
          Eclatvents was born from a personal experience of chaos during a family wedding. 
          Realizing how much time and joy was lost in the stress of planning, we set out to 
          create a one-stop solution for events—handling everything from weddings to trips, 
          so you can focus on living the moment.
        </p>
      </div>
    </div>
  );
};

export default Story;