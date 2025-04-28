import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSection() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample image URLs (replace with your own)
  const images = [
    "/images/slide1.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
    "/images/slide4.jpeg",
    "/images/slide5.jpeg",
    "/images/slide6.jpeg",
  ];

  return (
    <div className="relative px-4 py-12 max-w-6xl mx-auto">
      {/* Blurry edge mask */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      {/* Slider */}
      <div className="slider-container relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-95 duration-300">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSection;