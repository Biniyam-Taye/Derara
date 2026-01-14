import React, { useState, useEffect } from "react";
import carasol1 from "../../assets/carasol1.png";
import carasol2 from "../../assets/carasol2.png";
import carasol3 from "../../assets/carasol3.jpg";
import carasol4 from "../../assets/carasol4.png";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = 4;

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${current === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      >
        <img
          src={carasol1}
          alt="Premium Ethiopian Coffee Export"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-20 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Premium Ethiopian Coffee Export
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-lg">
            Delivering quality to the world
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${current === 1 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      >
        <img
          src={carasol2}
          alt="Trusted International Partnerships"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-20 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Trusted International Partnerships
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-lg">
            We export with integrity and passion
          </p>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${current === 2 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      >
        <img
          src={carasol3}
          alt="Direct From Ethiopian Farmers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-20 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Direct From Ethiopian Farmers
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-lg">
            Sourced from the finest origins
          </p>
        </div>
      </div>

      {/* Slide 4 */}
      <div
        className={`w-full h-[400px] absolute inset-0 transition-all duration-1000 ease-in-out
          ${current === 3 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      >
        <img
          src={carasol4}
          alt="Experience the Richness of Ethiopian Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-20 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Experience the Richness of Ethiopian Coffee
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-lg">
            From our farms to your cup
          </p>
        </div>
      </div>

      {/* Dots / Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all 
              ${current === index ? "bg-red-600 w-6" : "bg-white/60"}
            `}
          ></button>
        ))}
      </div>

      {/* Fade effect at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black via-white/50 dark:via-black/50 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default Carousel;
