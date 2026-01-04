import React from "react";
import ethiopianFarmerImg from "../../assets/ethiopian-farmer.jpg";
import precisionProcessingImg from "../../assets/precision-processing.jpg";
import wholesalePartnershipImg from "../../assets/wholesale-partnership.jpg";

const servicesData = [
    {
        id: 1,
        title: "ETHICAL SOURCING & QUALITY",
        tagline: "From Farm to Cup",
        description: "Direct partnerships with smallholder farmers across legendary regions like Yirgacheffe, Sidamo, and Guji. This not only guarantees premium, traceable, single-origin beans but also empowers local communities through fair pricing and sustainable agricultural development.",
        image: ethiopianFarmerImg,
        features: [
            "Direct Farm Trade",
            "Full Traceability",
            "Sustainability Focus",
            "Certified Q-Grading"
        ]
    },
    {
        id: 2,
        title: "PRECISION PROCESSING",
        tagline: "Crafted with Care",
        description: "We employ state-of-the-art processing methods and custom-designed profiles for each single-origin lot, guided by moisture content, density, and varietal characteristics. Our goal is a perfectly repeatable, clean, and expressive cup.",
        image: precisionProcessingImg,
        features: [
            "Advanced Processing",
            "Custom Profiles",
            "Post-Process QC",
            "Nitrogen Packaging"
        ]
    },
    {
        id: 3,
        title: "GLOBAL LOGISTICS",
        tagline: "Worldwide Delivery",
        description: "Seamless handling of customs, freight forwarding, and container shipping worldwide, ensuring timely delivery from Addis Ababa to your door. We minimize time between harvest and your roastery.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
        features: [
            "Customs Clearance",
            "International Freight",
            "Container Shipping",
            "Real-time Tracking"
        ]
    },
    {
        id: 4,
        title: "WHOLESALE PARTNERSHIP",
        tagline: "Built for Roasters",
        description: "Flexible volume contracts for roasters and distributors globally. Personalized consultation to match specific flavor profiles and pricing needs with dedicated support throughout your journey.",
        image: wholesalePartnershipImg,
        features: [
            "Volume Contracts",
            "Custom Blending",
            "Competitive Pricing",
            "Dedicated Support"
        ]
    }
];

// Torn Paper divider SVG component - Brewlab style
const TornPaperDivider = ({ flip = false }) => (
    <div className={`w-full ${flip ? 'rotate-180' : ''} -mb-1`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z"
                fill="currentColor"
                className="drop-shadow-lg">
                <animate attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    values="M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z;
                         M0,5 C120,25 240,30 360,35 C480,30 600,20 720,15 C840,20 960,35 1080,40 C1200,35 1320,15 1440,5 L1440,120 L0,120 Z;
                         M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z"/>
            </path>
        </svg>
    </div>
);

const BrewlabServicesPage = () => {
    return (
        <div className="bg-[#2D1B13] text-white overflow-hidden">
            {/* Hero Section - Redesigned */}
            {/* Hero Section - Redesigned - Smaller */}
            <div className="relative pt-16 pb-12 px-6 bg-[#FFC436] overflow-hidden">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-20 mixed-blend-multiply" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d1b13' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                {/* Decorative Coffee/Agriculture Icons Pattern - EXPANDED */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    {/* Coffee Beans - Scattered */}
                    <svg className="absolute top-10 left-[10%] w-12 h-12 text-[#2D1B13] -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute top-32 right-[20%] w-16 h-16 text-[#2D1B13] rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute bottom-20 left-[15%] w-20 h-20 text-[#2D1B13] -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute top-[50%] left-[8%] w-8 h-8 text-[#2D1B13]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>

                    {/* Coffee Cups/Mugs */}
                    <svg className="absolute top-[20%] right-[45%] w-14 h-14 text-[#2D1B13] opacity-80 rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20,3H4V17a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V15h2V5H20ZM18,17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5H18ZM20,13H18.5V7H20Z" /></svg>
                    <svg className="absolute bottom-[20%] right-[35%] w-10 h-10 text-[#2D1B13] opacity-60 -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.5,4h-13A1.5,1.5,0,0,0,4,5.5V16A4,4,0,0,0,8,20h8a4,4,0,0,0,4-4V5.5A1.5,1.5,0,0,0,18.5,4Zm-2.73,8.45-1.5,1.5a1,1,0,0,1-1.42,0l-1.5-1.5a1,1,0,0,1,0-1.42l1.5-1.5a1,1,0,0,1,1.42,0l1.5,1.5A1,1,0,0,1,15.77,12.45Z" /></svg>

                    {/* Steam */}
                    <svg className="absolute top-[18%] right-[42%] w-8 h-8 text-[#2D1B13] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M10,2Q12,5,10,8T10,14" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                    <svg className="absolute top-[18%] right-[46%] w-8 h-8 text-[#2D1B13] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14,4Q16,7,14,10T14,16" stroke="currentColor" strokeWidth="2" fill="none" /></svg>

                    {/* Leaves */}
                    <svg className="absolute top-20 left-[30%] w-10 h-10 text-[#2D1B13] rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20.8a6,6,0,0,0,3.58-1.5,15.76,15.76,0,0,0,5.42-11.3Z" /></svg>
                    <svg className="absolute bottom-40 right-[15%] w-14 h-14 text-[#2D1B13] -rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20.8a6,6,0,0,0,3.58-1.5,15.76,15.76,0,0,0,5.42-11.3Z" /></svg>
                    <svg className="absolute top-[40%] left-[5%] w-12 h-12 text-[#2D1B13] rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20.8a6,6,0,0,0,3.58-1.5,15.76,15.76,0,0,0,5.42-11.3Z" /></svg>

                    {/* Wheat/Agriculture */}
                    <svg className="absolute top-10 right-[35%] w-12 h-12 text-[#2D1B13] rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 12 2 22h20c0-10-4.48-20-10-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    <svg className="absolute bottom-10 left-[40%] w-16 h-16 text-[#2D1B13] -rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 12 2 22h20c0-10-4.48-20-10-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>

                    {/* Sun/Nature */}
                    <svg className="absolute top-[15%] right-[5%] w-16 h-16 text-[#2D1B13]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z" /></svg>

                    {/* Drops */}
                    <svg className="absolute top-[60%] right-[30%] w-8 h-8 text-[#2D1B13]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>
                    <svg className="absolute top-[25%] left-[20%] w-6 h-6 text-[#2D1B13]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>

                    {/* Truck/Logistics */}
                    <svg className="absolute bottom-[25%] right-[10%] w-14 h-14 text-[#2D1B13] opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
                    {/* Badge */}
                    <div className="inline-block border-2 border-black rounded-full px-5 py-1.5 mb-6 bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-black font-black text-xs tracking-[0.2em] uppercase font-serif">Premium Logistics Partner</span>
                    </div>

                    {/* Main Heading - Redesigned - Smaller */}
                    <div className="mb-6 text-black">
                        {/* High Contrast Black & White */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-2 relative z-10">
                            OUR <span className="relative inline-block text-black drop-shadow-[0_2px_0_rgba(255,255,255,1)]">
                                SERVICES
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-black opacity-100" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99992C18.5002 9.00003 33.5002 5.00002 48.0002 2.50002C62.5002 0.000021 77.5002 2.00002 91.5002 4.50002C105.5 7.00002 120.5 9.00003 134.5 9.00003C148.5 9.00003 163.5 6.50002 177.5 4.00002C191.5 1.50002 199.5002 2.50002 199.5002 2.50002" stroke="currentColor" strokeWidth="3" /></svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl font-serif italic font-bold text-black mt-2 tracking-wide opacity-90">
                            Seamless • Reliable • Global
                        </p>
                    </div>

                    {/* Description - Updated - Smaller */}
                    <p className="text-base md:text-lg text-black max-w-xl mx-auto leading-relaxed font-medium mb-6 font-serif">
                        We connect Ethiopian coffee farmers with roasters worldwide through vertically integrated export solutions.
                    </p>

                    {/* Buttons - Added - Smaller */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="px-6 py-2.5 bg-[#2D1B13] text-[#FFC436] text-sm md:text-base font-black rounded-full hover:scale-105 transition-transform duration-300 shadow-xl border-2 border-[#2D1B13]">
                            GET A QUOTE
                        </button>
                        <button className="px-6 py-2.5 bg-transparent text-[#2D1B13] text-sm md:text-base font-black rounded-full hover:bg-[#2D1B13] hover:text-[#FFC436] transition-all duration-300 border-2 border-[#2D1B13]">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Mini Service Cards - Integrated in Hero */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 text-left relative z-20">
                        {servicesData.map((service) => (
                            <div key={service.id} className="bg-white p-6 rounded-3xl shadow-[0_15px_30px_rgba(45,27,19,0.1)] hover:shadow-[0_25px_50px_rgba(45,27,19,0.25)] hover:-translate-y-4 hover:scale-105 transition-all duration-500 ease-out group relative overflow-hidden cursor-pointer border-4 border-transparent hover:border-[#FFC436]/30">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF5] to-[#fff] opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-[#2D1B13] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                                {/* Watermark Background Icon */}
                                <div className="absolute -right-4 -bottom-4 text-[#2D1B13] opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 transform rotate-12">
                                    {service.id === 1 && <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>} {/* Bean */}
                                    {service.id === 2 && <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>} {/* Drop */}
                                    {service.id === 3 && <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 12 2 22h20c0-10-4.48-20-10-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>} {/* Globe-ish */}
                                    {service.id === 4 && <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>} {/* People */}
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Number Badge - Animated - Now with Icons inside */}
                                    <div className="w-12 h-12 rounded-full bg-[#2D1B13] flex items-center justify-center mb-4 shadow-lg group-hover:bg-[#FFC436] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out origin-center border-2 border-[#fff] group-hover:border-[#2D1B13]">
                                        {/* Icon Inside Badge */}
                                        {service.id === 1 && <svg className="w-6 h-6 text-[#FFC436] group-hover:text-[#2D1B13] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20.8a6,6,0,0,0,3.58-1.5,15.76,15.76,0,0,0,5.42-11.3Z" /></svg>}
                                        {service.id === 2 && <svg className="w-6 h-6 text-[#FFC436] group-hover:text-[#2D1B13] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>}
                                        {service.id === 3 && <svg className="w-6 h-6 text-[#FFC436] group-hover:text-[#2D1B13] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 12 2 22h20c0-10-4.48-20-10-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>}
                                        {service.id === 4 && <svg className="w-6 h-6 text-[#FFC436] group-hover:text-[#2D1B13] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>}
                                    </div>

                                    {/* Title - Bold & Sharp */}
                                    <h3 className="text-[#2D1B13] font-black text-base uppercase tracking-tight mb-2 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Tagline - Serif */}
                                    <p className="text-[#2D1B13] opacity-70 font-serif italic text-sm border-l-2 border-[#FFC436] pl-3 group-hover:border-[#2D1B13] transition-colors duration-500 mt-auto">
                                        {service.tagline}
                                    </p>
                                </div>

                                {/* Decorative Bottom Bar */}
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FFC436] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Torn Paper Divider */}
            <div className="text-[#FFC436]">
                <TornPaperDivider />
            </div>

            {/* Services Section - Cream Background - Grid Layout */}
            <div className="bg-[#F5F0E1] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {servicesData.map((service) => (
                            <div key={service.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E6DCC5]">
                                {/* Card Image Area - Smaller */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-[#2D1B13] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Number Badge - Smaller & Stylized */}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#FFC436] rounded-full flex items-center justify-center shadow-lg z-20 border-2 border-white">
                                        <span className="text-[#2D1B13] text-xl font-black">{service.id}</span>
                                    </div>

                                    {/* Tagline Overlay Badge */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-md z-20">
                                        <p className="text-[#2D1B13] text-xs font-serif italic font-bold tracking-wide">
                                            {service.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Area - Compact */}
                                <div className="p-8">
                                    {/* Title - Smaller */}
                                    <h2 className="text-2xl md:text-3xl font-black text-[#FF4500] mb-4 leading-tight">
                                        {service.title}
                                    </h2>

                                    {/* Description - Truncated visual */}
                                    <p className="text-black text-sm md:text-base leading-relaxed mb-6 line-clamp-3 font-bold">
                                        {service.description}
                                    </p>

                                    {/* Features - Pills */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.features.slice(0, 4).map((feature, idx) => (
                                            <span key={idx} className="bg-[#F5F0E1] text-[#2D1B13] text-xs font-bold px-3 py-1 rounded-full border border-[#E6DCC5]">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Area */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <button className="text-[#2D1B13] font-black text-sm tracking-wider hover:text-[#FFC436] transition-colors uppercase group-hover:underline decoration-2 underline-offset-4">
                                            Learn More
                                        </button>
                                        <div className="w-10 h-10 bg-[#2D1B13] text-white rounded-full flex items-center justify-center group-hover:bg-[#FFC436] group-hover:text-[#2D1B13] transition-all duration-300">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Torn Paper Divider */}
            <div className="text-[#F5F0E1]">
                <TornPaperDivider flip={true} />
            </div>

            {/* CTA Section */}
            <div className="bg-[#2D1B13] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#FFB500] text-2xl md:text-3xl font-serif italic mb-6">
                        Ready to Partner?
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        LET'S BRING <span className="text-[#FFB500]">ETHIOPIAN COFFEE</span> TO YOUR BUSINESS
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Get in touch today to discuss how we can support your coffee sourcing needs.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button className="px-10 py-5 bg-[#FFB500] text-[#2D1B13] font-black rounded-full hover:bg-white transition-all duration-300 shadow-2xl text-xl">
                            GET IN TOUCH
                        </button>
                        <button className="w-16 h-16 bg-white text-[#2D1B13] rounded-full flex items-center justify-center hover:bg-[#FFB500] transition-all duration-300 shadow-2xl">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrewlabServicesPage;
