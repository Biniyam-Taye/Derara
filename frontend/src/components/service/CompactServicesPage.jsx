import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ethiopianFarmerImg from "../../assets/ethiopian-farmer.jpg";
import precisionProcessingImg from "../../assets/processing-machine.jpg";
import wholesalePartnershipImg from "../../assets/wholesale-partnership.jpg";
import coffeeCherriesBg from "../../assets/coffee-cherries-bg.jpg";
import logisticsNewImg from "../../assets/logistics-new.jpg";
import wholesaleNewImg from "../../assets/wholesale-new.jpg";
import processingDryingImg from "../../assets/processing-drying.jpg";
import partnershipHandshakeImg from "../../assets/partnership-handshake.jpg";
import logisticsTruckImg from "../../assets/logistics-truck-v3.jpg";

const servicesData = [
    {
        id: 1,
        slug: "ethical-sourcing",
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
        slug: "precision-processing",
        title: "PRECISION PROCESSING",
        tagline: "Crafted with Care",
        description: "We employ state-of-the-art processing methods and custom-designed profiles for each single-origin lot, guided by moisture content, density, and varietal characteristics. Our goal is a perfectly repeatable, clean, and expressive cup.",
        image: precisionProcessingImg,
        bentoImage: processingDryingImg,
        features: [
            "Advanced Processing",
            "Custom Profiles",
            "Post-Process QC",
            "Nitrogen Packaging"
        ]
    },
    {
        id: 3,
        slug: "global-logistics",
        title: "GLOBAL LOGISTICS",
        tagline: "Worldwide Delivery",
        description: "Seamless handling of customs, freight forwarding, and container shipping worldwide, ensuring timely delivery from Addis Ababa to your door. We minimize time between harvest and your roastery.",
        image: logisticsNewImg,
        bentoImage: logisticsTruckImg,
        features: [
            "Customs Clearance",
            "International Freight",
            "Container Shipping",
            "Real-time Tracking"
        ]
    },
    {
        id: 4,
        slug: "wholesale-partnership",
        title: "WHOLESALE PARTNERSHIP",
        tagline: "Built for Roasters",
        description: "Flexible volume contracts for roasters and distributors globally. Personalized consultation to match specific flavor profiles and pricing needs with dedicated support throughout your journey.",
        image: wholesaleNewImg,
        bentoImage: partnershipHandshakeImg,
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
    const navigate = useNavigate();

    return (
        <div className="bg-[#2D1B13] text-white overflow-hidden">
            {/* Hero Section - Redesigned */}
            {/* Hero Section - Redesigned - Smaller */}
            <div className="relative pt-28 pb-12 px-6 bg-gradient-to-b from-[#FFC436] from-10% via-[#FFC436] via-30% to-[#2D1B13] overflow-hidden">
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

                {/* Brownish Layers Design - Branding Integration */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* TOP LEFT: Paint Design Curve - Fluid Layer 1 */}
                    <svg className="absolute top-0 left-0 w-[70%] md:w-[50%] h-[600px] text-[#2D1B13] opacity-20" viewBox="0 0 800 800" preserveAspectRatio="none">
                        <path fill="currentColor" d="M0,0 L600,0 C450,50 500,200 300,350 C150,460 50,500 0,650 Z" />
                    </svg>

                    {/* TOP LEFT: Paint Design Curve - Fluid Layer 2 */}
                    <svg className="absolute top-0 left-0 w-[65%] md:w-[45%] h-[500px] text-[#5D4037] opacity-15" viewBox="0 0 800 800" preserveAspectRatio="none">
                        <path fill="currentColor" d="M0,0 L500,0 C350,40 400,180 250,300 C120,400 30,420 0,550 Z" />
                    </svg>

                    {/* TOP: Wave Design - Mirrored from Bottom */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                        <svg className="relative block w-full h-[300px] md:h-[400px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".15" fill="#5D4037"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".25" fill="#3E2723"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".4" fill="#2D1B13"></path>
                        </svg>
                        {/* Gradient Overlay for Smooth Transition */}
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#FFC436]/90 via-[#FFC436]/40 to-transparent mix-blend-overlay"></div>
                    </div>

                    {/* Layer 1: Light Mocha - Top/Abstract */}
                    <svg className="absolute top-0 right-0 w-full h-[80%] text-[#8B5E3C] opacity-5 transform translate-x-1/2 -translate-y-1/4 blur-3xl" viewBox="0 0 200 200" fill="currentColor">
                        <path d="M45,-76C58.3,-69.3,69.1,-58.3,78.2,-46C87.3,-33.7,94.7,-20.1,93.4,-6.9C92.1,6.3,82.1,19.1,72.3,30.8C62.5,42.5,52.9,53.1,41.9,61.8C30.9,70.5,18.5,77.3,5.3,79.8C-7.9,82.3,-21.9,80.5,-34.5,74.5C-47.1,68.5,-58.3,58.3,-67.4,46.5C-76.5,34.7,-83.5,21.3,-82.5,8.3C-81.5,-4.7,-72.5,-17.3,-62.7,-27.9C-52.9,-38.5,-42.3,-47.1,-31.1,-55.1C-19.9,-63.1,-8.1,-70.5,2.9,-75.1C13.9,-79.7,27.8,-81.5,41.7,-82.7L45,-76Z" transform="translate(100 100)" />
                    </svg>

                    {/* Layer 2: Medium Roast - Wave Transition */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg className="relative block w-full h-[300px] md:h-[400px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".15" fill="#5D4037"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".25" fill="#3E2723"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".4" fill="#2D1B13"></path>
                        </svg>
                        {/* Gradient Overlay for Smooth Transition */}
                        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#FFC436]/90 via-[#FFC436]/40 to-transparent mix-blend-overlay"></div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
                    {/* Badge */}
                    <div className="inline-block border-2 border-black rounded-full px-5 py-1.5 mb-6 bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-black font-black text-xs tracking-[0.2em] uppercase font-serif">Premium Logistics Partner</span>
                    </div>

                    {/* Main Heading - Redesigned - Smaller */}
                    <div className="mb-6 text-black">
                        {/* High Contrast Black & White - UPDATED to match Blog Style */}
                        {/* High Contrast Black & White - Reverted to Original Style */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-2 relative z-10"
                        >
                            OUR <span className="relative inline-block text-black drop-shadow-[0_2px_0_rgba(255,255,255,1)]">
                                SERVICES
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-black opacity-100" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99992C18.5002 9.00003 33.5002 5.00002 48.0002 2.50002C62.5002 0.000021 77.5002 2.00002 91.5002 4.50002C105.5 7.00002 120.5 9.00003 134.5 9.00003C148.5 9.00003 163.5 6.50002 177.5 4.00002C191.5 1.50002 199.5002 2.50002 199.5002 2.50002" stroke="currentColor" strokeWidth="3" /></svg>
                            </span>
                        </motion.h1>
                        <p className="text-sm md:text-lg font-sans font-black mt-6 tracking-[0.25em] uppercase drop-shadow-xl">
                            <span className="text-black">SEAMLESS</span> <span className="text-[#D62828] mx-2">•</span> <span className="text-[#D62828]">RELIABLE</span> <span className="text-[#D62828] mx-2">•</span> <span className="text-black">GLOBAL</span>
                        </p>
                    </div>

                    {/* Description - Updated - Readable Sans-Serif */}
                    <p className="text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed font-sans font-medium mb-8 drop-shadow-sm px-4">
                        We connect Ethiopian coffee farmers with roasters worldwide through vertically integrated export solutions.
                    </p>

                    {/* Buttons - Added - Smaller */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <button className="px-6 py-2.5 bg-[#2D1B13] text-[#FFC436] text-sm md:text-base font-black rounded-full hover:scale-105 transition-transform duration-300 shadow-xl border-2 border-[#2D1B13]">
                            GET A QUOTE
                        </button>
                        <button className="px-6 py-2.5 bg-transparent text-[#2D1B13] text-sm md:text-base font-black rounded-full hover:bg-[#2D1B13] hover:text-[#FFC436] transition-all duration-300 border-2 border-[#2D1B13]">
                            LEARN MORE
                        </button>
                    </motion.div>

                    {/* Mini Service Cards - Integrated in Hero */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 text-left relative z-20">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col bg-[#1A100B] rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[#FFC436]/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group border border-[#2D1B13] h-full relative font-sans"
                            >
                                {/* Top Image Area */}
                                <div className="relative h-60 w-full overflow-hidden shrink-0">
                                    {/* Bookmark Icon */}
                                    <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full text-white/90 hover:bg-[#FFC436] hover:text-black transition-colors cursor-pointer">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                    </div>

                                    <img
                                        src={service.heroImage || (service.id === 1 ? coffeeCherriesBg : service.image)}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1A100B] to-transparent opacity-90"></div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1 relative -mt-4 bg-[#1A100B]">
                                    {/* Title Row */}
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-black text-white leading-tight max-w-[80%] tracking-tight group-hover:text-[#FFC436] transition-colors">
                                            {service.title}
                                        </h3>
                                        <span className="text-[#FFC436] font-black text-base bg-[#2D1B13] px-2.5 py-0.5 rounded-lg border border-[#332018]">
                                            #{service.id.toString().padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-200 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Tags/Pills Row */}
                                    <div className="flex flex-wrap gap-2 mt-auto mb-8">
                                        <span className="flex items-center gap-1 px-3 py-1.5 bg-[#2D1B13] text-gray-300 text-xs font-bold rounded-lg border border-[#332018]">
                                            <svg className="w-3 h-3 text-[#FFC436]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            5.0
                                        </span>
                                        {service.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-[#2D1B13] text-gray-300 text-xs font-bold rounded-lg border border-[#332018]">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <button
                                        onClick={() => navigate(`/services/${service.slug}`)}
                                        className="w-full py-3.5 bg-white text-black font-black text-base rounded-2xl hover:bg-[#FFC436] transition-colors duration-300 shadow-xl uppercase tracking-wide"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Smooth Fade Transition from Hero to Services */}
            <div className="w-full h-32 bg-gradient-to-b from-[#FFC436] via-[#FFDFA0] to-[#FFF5D1] -mt-1 relative z-10"></div>

            {/* Services Section - Asymmetrical Bento Grid */}
            <div className="bg-[#FFF5D1] py-20 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    {/* Roadmap Visual Connector (Desktop Only) */}
                    <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 1200 1000" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFC436" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#FFC436" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#FFC436" stopOpacity="0.3" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* The Journey Line: Winding Path connecting Card Centers */}
                            <path
                                d="M 350 250 H 850 C 950 250 950 400 850 500 L 350 750 C 250 800 250 750 350 750 H 850"
                                fill="none"
                                stroke="url(#roadmapGrad)"
                                strokeWidth="4"
                                strokeDasharray="15 15"
                                style={{ filter: 'url(#glow)' }}
                                className="opacity-60"
                            >
                                <animate attributeName="stroke-dashoffset" from="300" to="0" dur="10s" repeatCount="indefinite" />
                            </path>

                            {/* Connection Nodes */}
                            <circle cx="350" cy="250" r="8" fill="#FFC436"><animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" /></circle>
                            <circle cx="850" cy="250" r="8" fill="#FFC436"><animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="1s" /></circle>
                            <circle cx="250" cy="750" r="8" fill="#FFC436"><animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="2s" /></circle>
                            <circle cx="850" cy="750" r="8" fill="#FFC436"><animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="3s" /></circle>
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[600px] relative z-10">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_20px_60px_-15px_rgba(255,196,54,0.3)]
                                    ${index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'}
                                `}
                            >
                                {/* Background Image with Zoom Effect */}
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="absolute inset-0 bg-[#1A100B]/20 z-10 group-hover:bg-[#1A100B]/0 transition-colors duration-700"></div>
                                    <img
                                        src={service.bentoImage || (service.id === 1 ? coffeeCherriesBg : service.image)}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 will-change-transform opacity-85 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Content Overlay - Gradient Glass */}
                                <div className="absolute inset-x-0 bottom-0 h-[65%] group-hover:h-full bg-gradient-to-t from-[#1A100B] via-[#1A100B]/90 to-transparent flex flex-col justify-end p-8 md:p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">


                                    {/* Floating Icon */}
                                    <div className="mb-4 transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#FFC436]">
                                        {service.id === 1 && <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>}
                                        {service.id === 2 && <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>}
                                        {service.id === 3 && <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 12 2 22h20c0-10-4.48-20-10-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>}
                                        {service.id === 4 && <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>}
                                    </div>

                                    {/* Main Title */}
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-none tracking-tight group-hover:text-[#FFC436] transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className="text-[#FFC436] font-serif italic text-lg mb-4 opacity-90">
                                        {service.tagline}
                                    </p>

                                    {/* Description */}
                                    {/* Description - Glass Card Wrapper - Animated Reveal */}
                                    <div className="shrink-0 relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border-0 group-hover:border group-hover:border-white/10 shadow-none group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] max-h-0 opacity-0 p-0 mb-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:p-6 group-hover:mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-2xl pointer-events-none"></div>
                                        <p className="relative z-10 text-gray-50 text-base md:text-lg leading-relaxed font-medium tracking-wide drop-shadow-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features Pill Box */}
                                    <div className="flex flex-wrap gap-2 mb-6 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-75">
                                        {service.features.map((feature, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-bold text-[#FFC436]">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <div
                                        onClick={() => navigate(`/services/${service.slug}`)}
                                        className="flex items-center gap-4 pt-4 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                                    >
                                        <span className="text-white font-black uppercase tracking-widest text-sm group-hover:text-[#FFC436] transition-colors">Learn More</span>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FFC436] group-hover:text-black transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Torn Paper Divider */}
            <div className="text-[#F5F0E1]">
                <TornPaperDivider flip={true} />
            </div>

            {/* CTA Section */}
            <div className="bg-[#2D1B13] py-20 px-6 relative overflow-hidden">
                {/* Background Icons Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Coffee Beans */}
                    <svg className="absolute top-[10%] left-[5%] w-12 h-12 text-[#FFC436] opacity-[0.03] rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute bottom-[20%] right-[10%] w-16 h-16 text-[#FFC436] opacity-[0.04] -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute top-[40%] left-[20%] w-8 h-8 text-[#FFC436] opacity-[0.05] rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute top-[15%] right-[25%] w-10 h-10 text-[#FFC436] opacity-[0.03] rotate-[30deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute bottom-[35%] left-[45%] w-14 h-14 text-[#FFC436] opacity-[0.04] rotate-[15deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>

                    {/* Business/Chart Icons */}
                    <svg className="absolute top-[25%] left-[80%] w-16 h-16 text-[#FFC436] opacity-[0.05] -rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 17.08l1.5 1.41z" /></svg>
                    <svg className="absolute bottom-[15%] left-[15%] w-20 h-20 text-[#FFC436] opacity-[0.04] rotate-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                    <svg className="absolute top-[60%] right-[5%] w-12 h-12 text-[#FFC436] opacity-[0.05] -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                    <svg className="absolute top-[5%] left-[40%] w-14 h-14 text-[#FFC436] opacity-[0.03] rotate-[5deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>

                    {/* Handshake/Deal */}
                    <svg className="absolute top-[80%] left-[30%] w-16 h-16 text-[#FFC436] opacity-[0.04] rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-3.26 3.26c-.39.39-.39 1.02 0 1.41L14 14l-4 4-6-6 1.41-1.41c.39-.39 1.02-.39 1.41 0L8.5 12l2.75-2.75-5.66-5.66c-.78-.78-2.05-.78-2.83 0l-.88.88c-.78.78-.78 2.05 0 2.83l8.49 8.49c.78.78 2.05.78 2.83 0l4.24-4.24c.78-.78.78-2.05 0-2.83L14 6z" /></svg>
                    <svg className="absolute top-[30%] left-[10%] w-12 h-12 text-[#FFC436] opacity-[0.03] -rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-3.26 3.26c-.39.39-.39 1.02 0 1.41L14 14l-4 4-6-6 1.41-1.41c.39-.39 1.02-.39 1.41 0L8.5 12l2.75-2.75-5.66-5.66c-.78-.78-2.05-.78-2.83 0l-.88.88c-.78.78-.78 2.05 0 2.83l8.49 8.49c.78.78 2.05.78 2.83 0l4.24-4.24c.78-.78.78-2.05 0-2.83L14 6z" /></svg>

                    {/* Ethiopia/Globe Icons */}
                    <svg className="absolute top-[70%] left-[60%] w-24 h-24 text-[#FFC436] opacity-[0.03] rotate-[15deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                    <svg className="absolute bottom-[25%] left-[80%] w-14 h-14 text-[#FFC436] opacity-[0.05] -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c.96-1.65 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>

                    {/* Coffee Cup */}
                    <svg className="absolute top-[50%] left-[85%] w-12 h-12 text-[#FFC436] opacity-[0.04] rotate-[20deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm2-5h-2V5h2v3z" /></svg>
                    <svg className="absolute bottom-[10%] left-[5%] w-10 h-10 text-[#FFC436] opacity-[0.03] -rotate-[20deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm2-5h-2V5h2v3z" /></svg>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#FFB500] text-2xl md:text-3xl font-serif italic mb-6">
                        Ready to Partner?
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        LET'S BRING <span className="text-[#FFB500]">ETHIOPIAN COFFEE</span> TO YOUR BUSINESS
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Get in touch today to discuss how we can support your coffee sourcing needs.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <button className="px-10 py-5 bg-[#FFB500] text-[#2D1B13] font-black rounded-full hover:bg-white transition-all duration-300 shadow-2xl text-xl">
                            GET IN TOUCH
                        </button>
                        <button className="w-16 h-16 bg-white text-[#2D1B13] rounded-full flex items-center justify-center hover:bg-[#FFB500] transition-all duration-300 shadow-2xl">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BrewlabServicesPage;
