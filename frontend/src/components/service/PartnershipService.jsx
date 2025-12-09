import React, { useState } from "react";

// --- New Data for Partnership Service ---
const partnershipService = {
    title: "Wholesale Partnership & Support",
    tagline: "Building successful coffee programs through shared expertise and dedicated service.",
    overview: "We view our clients as partners. Our wholesale program goes beyond supplying beans; we offer comprehensive support tailored for specialty cafes, roasters, and distributors. This includes consultation on equipment, custom blending, staff training, and ongoing market trend analysis to ensure your business thrives.",
    main_image: 'https://images.unsplash.com/photo-1517248135460-49c748c90858?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for a busy, high-quality cafe scene
    features: [
        { name: 'Training & Education', description: 'Certified barista training, brewing optimization, and sensory analysis workshops.', icon: 'E' },
        { name: 'Equipment Consulting', description: 'Guidance and procurement support for high-end espresso and brewing gear.', icon: 'G' },
        { name: 'Custom Blending', description: 'Developing signature, repeatable blends for unique flavor profiles.', icon: 'B' },
        { name: 'Dedicated Account Manager', description: 'A single point of contact for all orders, questions, and support needs.', icon: 'A' },
    ],
    details: {
        tab1: {
            title: 'Pricing & Tiers',
            content: "We offer tiered pricing structures based on volume and contract length, designed to provide the best value for both emerging and established businesses. Our commitment to fair trade ensures transparency in how pricing relates to farm-gate costs.",
            cta: 'View Wholesale Price Sheet',
        },
        tab2: {
            title: 'Marketing & POS Support',
            content: "Partners receive access to our high-quality product photography, origin story content, and point-of-sale materials. We help you tell the story of the coffee's journey to your customers.",
            cta: 'Request Marketing Toolkit',
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
const PartnershipServiceDetailSection = ({ service = partnershipService }) => {
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
                            Your Success is Our Goal
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            {service.overview}
                        </p>

                        {/* Call to Action Button */}
                        <button className="mt-8 px-8 py-3 bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            Apply for a Wholesale Account &rarr;
                        </button>
                    </div>

                    {/* Right: Feature Image */}
                    <div className="lg:w-1/2 shadow-2xl shadow-yellow-800/50 rounded-xl overflow-hidden">
                        <img
                            src="https://i.pinimg.com/736x/1f/3a/22/1f3a2261445d92b1b4188e8bcf3fa347.jpg"
                            alt={service.title}
                            className="w-full h-96 object-cover object-center transition duration-500 hover:scale-[1.03]"
                        />
                    </div>
                </div>

                {/* --- 2. Features Grid --- */}
                <div className="bg-gray-800 p-10 rounded-2xl shadow-inner shadow-gray-700/50 mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
                        Dedicated Partner Services
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

export default PartnershipServiceDetailSection;