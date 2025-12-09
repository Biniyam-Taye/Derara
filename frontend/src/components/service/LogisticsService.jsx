import React, { useState } from "react";

// --- New Data for Logistics Service ---
const logisticsService = {
    title: "Global Logistics & Export",
    tagline: "Seamless farm-to-warehouse delivery, maximizing freshness and efficiency.",
    overview: "Managing international coffee trade requires precision. We handle all end-to-end documentation, customs clearance, and freight forwarding, utilizing established global shipping lanes (sea and air) tailored to the specific needs of perishable cargo. Our proactive tracking system gives you visibility every step of the way.",
    main_image: 'https://images.unsplash.com/photo-1549419137-b45d2f831201?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for a shipping container/port image
    features: [
        { name: 'Full Documentation', description: 'Handling COOs, Phytosanitary, and mandatory export certificates.', icon: 'D' },
        { name: 'Preferred Freight', description: 'Pre-negotiated rates and priority space on major shipping lines.', icon: 'F' },
        { name: 'Temperature Control', description: 'Optional cold chain logistics for high-value or green beans.', icon: 'T' },
        { name: 'Customs Expertise', description: 'Swift clearance through major international ports (Rotterdam, New York).', icon: 'C' },
    ],
    details: {
        tab1: {
            title: 'Incoterms & Freight',
            content: "We provide flexible shipping options, commonly quoting on CIF (Cost, Insurance, and Freight) or FOB (Free On Board). Our logistics team advises on the optimal method—air freight for speed, or sea freight for cost-efficiency—to meet your specific delivery timelines.",
            cta: 'Review Our Incoterms Guide',
        },
        tab2: {
            title: 'Risk & Insurance',
            content: "All cargo is fully insured from our warehouse to your destination port against damage, loss, and spoilage. We maintain comprehensive 'All Risk' policies through top-tier marine insurers to guarantee your investment is protected.",
            cta: 'Download Insurance Certificate',
        },
    },
};

// --- Sub-Components (Reused) ---

// A simple Icon component for visual appeal (using the feature's first letter)
const FeatureIcon = ({ letter }) => (
    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
        {letter}
    </div>
);

// The main component, cloned with new data
const LogisticsServiceDetailSection = ({ service = logisticsService }) => {
    const [activeTab, setActiveTab] = useState('tab1');

    // Determine the content for the currently active tab
    const tabContent = service.details[activeTab];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative py-20">
            {/* Background Texture/Overlay for visual depth */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/black-linen.png)' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header & Tagline */}
                <header className="text-center mb-16">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-500 font-[--font-Ovo] drop-shadow-md tracking-tight">
                        {service.title}
                    </h1>
                    <p className="mt-4 text-2xl text-gray-300 max-w-4xl mx-auto">
                        {service.tagline}
                    </p>
                </header>

                {/* --- 1. Main Split Layout: Overview and Image --- */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">

                    {/* Left: Overview Text */}
                    <div className="lg:w-1/2 space-y-6">
                        <h3 className="text-4xl font-bold text-gray-100 border-l-4 border-yellow-600 pl-4">
                            Reliable Global Transit
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            {service.overview}
                        </p>

                        {/* Call to Action Button */}
                        <button className="mt-8 px-8 py-3 bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            Get a Real-Time Shipping Quote &rarr;
                        </button>
                    </div>

                    {/* Right: Feature Image */}
                    <div className="lg:w-1/2 shadow-2xl shadow-yellow-800/50 rounded-xl overflow-hidden">
                        <img
                            src="https://i.pinimg.com/1200x/f3/ec/aa/f3ecaacd8a181a684f66a6f5364fcb3b.jpg"
                            alt={service.title}
                            className="w-full h-96 object-cover object-center transition duration-500 hover:scale-[1.03]"
                        />
                    </div>
                </div>

                {/* --- 2. Features Grid --- */}
                <div className="bg-gray-800 p-10 rounded-2xl shadow-inner shadow-gray-700/50 mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
                        Our Export Guarantee
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <FeatureIcon letter={feature.icon} />
                                <div>
                                    <h4 className="text-xl font-semibold text-white">{feature.name}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 3. Tabbed Details Section --- */}
                <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-yellow-700/50">

                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-700 mb-6">
                        {Object.keys(service.details).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`
                                    px-6 py-3 text-lg font-medium transition-colors duration-300 
                                    ${activeTab === key
                                        ? 'border-b-4 border-yellow-500 text-yellow-500 bg-gray-800'
                                        : 'text-gray-400 hover:text-yellow-600 hover:bg-gray-700/50'
                                    }
                                `}
                            >
                                {service.details[key].title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 space-y-6">
                        <p className="text-lg leading-relaxed text-gray-300">
                            {tabContent.content}
                        </p>

                        {/* Tab-Specific Call to Action */}
                        <button className="inline-flex items-center px-6 py-2 border border-yellow-600 text-yellow-600 font-semibold rounded-full hover:bg-yellow-600 hover:text-gray-900 transition duration-300">
                            {tabContent.cta}
                            <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogisticsServiceDetailSection;