import React, { useState } from "react";

// --- New Data for Roasting Service ---
const roastingService = {
    title: "Precision Roasting & Packaging",
    tagline: "Unlocking the full genetic potential of every Ethiopian bean.",
    overview: "Our roasting is a scientific craft, not just an art. We employ state-of-the-art Loring Smart Roasters and custom-designed roast profiles for each single-origin lot, guided by moisture content, density, and varietal characteristics. Our goal is a perfectly repeatable, clean, and expressive cup.",
    main_image: 'https://images.unsplash.com/photo-1541167760496-1628856ab22d?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for a high-tech roaster image
    features: [
        { name: 'Loring Roasters', description: 'Advanced roasters for clean energy and highly precise profile control.', icon: 'L' },
        { name: 'Custom Profiles', description: 'Temperature, airflow, and time optimized for specific bean characteristics.', icon: 'P' },
        { name: 'Post-Roast QC', description: 'Color tracking, density check, and cupping within 24 hours of roasting.', icon: 'C' },
        { name: 'Nitrogen Flushing', description: 'Packaging with a nitrogen flush for maximum freshness and shelf life.', icon: 'N' },
    ],
    details: {
        tab1: {
            title: 'Roast Profile Development',
            content: "We document and analyze over 50 data points per roast cycle, allowing us to generate detailed historical profiles. This ensures that every future batch of a specific lot tastes exactly the same, crucial for our wholesale partners.",
            cta: 'Explore Our Roasting Technology',
        },
        tab2: {
            title: 'Packaging & Logistics',
            content: "Beans are rested post-roast to degas, then immediately packaged in high-barrier, de-gassing valve bags. We use specialized logistics partners to ensure prompt delivery, minimizing time between our roastery and your shelf.",
            cta: 'View Shipping Options & Rates',
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
const RoastingServiceDetailSection = ({ service = roastingService }) => {
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
                            The Science of Flavor
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            {service.overview}
                        </p>

                        {/* Call to Action Button */}
                        <button className="mt-8 px-8 py-3 bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            Request a Roasting Consultation &rarr;
                        </button>
                    </div>

                    {/* Right: Feature Image */}
                    <div className="lg:w-1/2 shadow-2xl shadow-yellow-800/50 rounded-xl overflow-hidden">
                        <img
                            src="https://i.pinimg.com/736x/01/e5/04/01e504843e2c8ec4117d442c3b74db6b.jpg"
                            alt={service.title}
                            className="w-full h-96 object-cover object-center transition duration-500 hover:scale-[1.03]"
                        />
                    </div>
                </div>

                {/* --- 2. Features Grid --- */}
                <div className="bg-gray-800 p-10 rounded-2xl shadow-inner shadow-gray-700/50 mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
                        The Roasting Difference
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

export default RoastingServiceDetailSection;