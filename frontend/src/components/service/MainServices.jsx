import React from "react";
import { serviceData } from "../../assets/assets";

const BACKGROUND_IMAGE_URL = "https://i.pinimg.com/1200x/dc/1f/5a/dc1f5aa4e3328db331e4b61f22ae9a85.jpg";

const RightArrowSVG = () => (
    <svg
        className="w-4 text-yellow-600 group-hover:text-yellow-500 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const MainServices = () => {
    return (
        <div
            id="services"
            className="relative w-full py-20 px-[5%] sm:px-[10%] lg:px-[12%] scroll-mt-20 overflow-hidden bg-gray-900"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to bottom, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.7) 40%, rgba(17, 24, 39, 0.9) 70%, rgb(17, 24, 39) 100%), 
            url('${BACKGROUND_IMAGE_URL}')
          `,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>

            <div className="relative z-10">
                <h4
                    className="text-center mb-2 text-xl font-medium text-yellow-400 font-[--font-Ovo]"
                    data-animation="slide-up"
                >
                    From Origin to Export
                </h4>

                <h2
                    className="text-center text-5xl md:text-6xl font-extrabold text-white font-[--font-Ovo]"
                    data-animation="slide-up"
                >
                    Our Coffee Export Services
                </h2>

                <p
                    className="text-center max-w-3xl mx-auto mt-5 mb-16 text-lg text-gray-200 font-[--font-Ovo]"
                    data-animation="fade-in"
                >
                    As an Ethiopian-based company, we specialize in exporting premium, single-origin green coffee beans. We
                    ensure exceptional quality, responsible sourcing, and streamlined international logistics for roasters
                    around the globe.
                </p>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10"
                    data-animation="grid-fade-in"
                >
                    {serviceData.map(({ icon, title, description, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            className="group block transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                        >
                            <div className="h-full border border-yellow-600/30 rounded-xl p-8 shadow-xl bg-white/95 dark:bg-gray-800/95 hover:shadow-2xl hover:shadow-yellow-600/50 dark:hover:shadow-yellow-700/40">
                                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                                    {icon.slice(-1)}
                                </div>

                                <h3 className="text-xl font-bold my-4 text-gray-800 dark:text-white group-hover:text-yellow-600 transition-colors duration-300">
                                    {title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-6 dark:text-gray-300">{description}</p>

                                <div className="flex items-center gap-2 text-sm mt-5 font-semibold text-yellow-600 group-hover:text-yellow-500 transition-colors duration-300">
                                    Discover more
                                    <RightArrowSVG />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainServices;
