import React, { useRef } from "react";
import { Calendar, Award, TrendingUp, Users, Flag } from "lucide-react";
import localFarmers from "./images/local-farmers.png";
import excellence from "./images/excellence.jpg";
import globalVision from "./images/globalvision.png";

// Mock Data for History
const historyData = [
  {
    title: "Ethiopian Roots",
    description:
      "Born in the heart of Addis Ababa, Derara was founded with a singular mission: to honor Ethiopia's coffee heritage. We started by building direct relationships with local farmers to ensure every bean tells the story of its origin.",
    icon: <Flag className="w-6 h-6 text-white" />,
    image: localFarmers,
  },
  {
    title: "Local Excellence",
    description:
      "By implementing sustainable export practices and innovative processing methods, we've set new benchmarks for quality in Ethiopia. Our foundation is built on empowering our community and perfecting our craft.",
    icon: <Award className="w-6 h-6 text-white" />,
    image: excellence,
  },
  {
    title: "Global Vision",
    description:
      "Our journey is just beginning. With plans to establish presence in major global hubs like Dubai and London, we are committed to being the premier bridge between Ethiopian soil and the international stage.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    image: globalVision,
  },
];

const OurHistory = () => {
  return (
    <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-black bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-red-500 dark:text-red-500 font-outfit font-bold uppercase tracking-widest text-sm animate-fade-in-up">
            Our Journey
          </h2>
          <h1 className="text-4xl md:text-5xl font-playfair font-black tracking-tight text-gray-900 dark:text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              History
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-outfit">
            Founded in the heart of Ethiopia, we are on a mission to bring 
            our rich heritage to every corner of the globe.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-red-600/50 to-transparent rounded-full"></div>

          <div className="space-y-12 md:space-y-0">
            {historyData.map((item, index) => {
              const isEvent = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-16 ${
                    isEvent ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Side (Uses the previously empty spacer) */}
                  <div className="hidden md:block w-5/12 group mt-8">
                    <div className="overflow-hidden rounded-2xl border border-gray-300 dark:border-white/10 shadow-lg relative h-64 md:h-80">
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[400px] object-cover transform transition-transform duration-700  group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Icon/Dot on the Center Line */} 
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20 border-4 border-white dark:border-gray-900">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-16 md:pl-0">
                    <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 p-8 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30">
                      {/* Mobile Image (Visible only on mobile) */}
                      <div className="md:hidden w-full h-56 rounded-xl overflow-hidden mb-6 border border-gray-300 dark:border-white/10 mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm lg:text-base font-outfit">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
