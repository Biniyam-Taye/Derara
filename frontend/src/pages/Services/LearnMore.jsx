import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import ethiopianFarmerImg from "../../assets/ethiopian-farmer.jpg";
import precisionProcessingImg from "../../assets/processing-machine.jpg";
import wholesalePartnershipImg from "../../assets/wholesale-partnership.jpg";
import logisticsNewImg from "../../assets/logistics-new.jpg";
import processingDryingImg from "../../assets/processing-drying.jpg";
import partnershipHandshakeImg from "../../assets/partnership-handshake.jpg";
import logisticsTruckImg from "../../assets/logistics-truck-v3.jpg";
import wholesaleNewImg from "../../assets/wholesale-new.jpg";

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
        ],
        detailedContent: {
            overview: "Our ethical sourcing program connects you directly with Ethiopia's finest coffee farmers, ensuring every bean tells a story of quality, sustainability, and community empowerment.",
            benefits: [
                {
                    title: "Direct Trade Relationships",
                    description: "We work directly with over 500 smallholder farmers across Ethiopia's premier coffee regions, eliminating middlemen and ensuring fair compensation."
                },
                {
                    title: "Complete Traceability",
                    description: "Every batch comes with full documentation tracking the coffee from specific farms to your roastery, including farmer profiles and processing details."
                },
                {
                    title: "Sustainability Commitment",
                    description: "Our farmers use environmentally friendly practices, including organic farming methods, shade-grown cultivation, and water conservation techniques."
                },
                {
                    title: "Quality Assurance",
                    description: "All coffees are Q-graded by certified professionals, ensuring you receive only specialty-grade beans scoring 80+ points."
                }
            ],
            process: [
                "Farm Selection & Partnership Development",
                "Harvest Monitoring & Quality Control",
                "Processing & Drying Supervision",
                "Cupping & Grading Evaluation",
                "Documentation & Certification",
                "Export & Delivery Coordination"
            ],
            stats: {
                readers: "500+",
                label: "Partner Farmers"
            }
        }
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
        ],
        detailedContent: {
            overview: "Our precision processing facility combines traditional Ethiopian methods with modern technology to unlock the full potential of each coffee lot.",
            benefits: [
                {
                    title: "Multiple Processing Methods",
                    description: "We offer washed, natural, honey, and experimental processing methods tailored to enhance each coffee's unique characteristics."
                },
                {
                    title: "Climate-Controlled Drying",
                    description: "Our raised beds and mechanical dryers ensure optimal moisture levels (10-12%) while preventing over-fermentation or mold development."
                },
                {
                    title: "Custom Roast Profiles",
                    description: "We work with you to develop processing profiles that complement your roasting style and target flavor profile."
                },
                {
                    title: "Quality Control",
                    description: "Multiple cupping sessions throughout processing ensure consistency and identify any defects before export."
                }
            ],
            process: [
                "Cherry Selection & Sorting",
                "Processing Method Application",
                "Controlled Fermentation (if applicable)",
                "Precision Drying & Moisture Monitoring",
                "Hulling & Density Sorting",
                "Final Grading & Packaging"
            ],
            stats: {
                readers: "10+",
                label: "Processing Methods"
            }
        }
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
        ],
        detailedContent: {
            overview: "Our global logistics network ensures your coffee arrives fresh, on time, and in perfect condition, no matter where you are in the world.",
            benefits: [
                {
                    title: "Streamlined Customs",
                    description: "We handle all export documentation, permits, and customs clearance, ensuring smooth passage through international borders."
                },
                {
                    title: "Climate-Controlled Shipping",
                    description: "Specialized containers maintain optimal temperature and humidity levels throughout transit, preserving coffee freshness."
                },
                {
                    title: "Flexible Shipping Options",
                    description: "Choose from full container loads (FCL), less than container loads (LCL), or air freight for urgent orders."
                },
                {
                    title: "Real-Time Tracking",
                    description: "Monitor your shipment from warehouse to destination with our advanced tracking system and regular status updates."
                }
            ],
            process: [
                "Order Confirmation & Documentation",
                "Warehouse Preparation & Packaging",
                "Export Clearance & Certification",
                "Container Loading & Sealing",
                "Ocean/Air Freight Transit",
                "Destination Customs & Final Delivery"
            ],
            stats: {
                readers: "50+",
                label: "Countries Served"
            }
        }
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
        ],
        detailedContent: {
            overview: "Our wholesale partnership program is designed for roasters and distributors who demand consistency, quality, and reliable supply chains.",
            benefits: [
                {
                    title: "Flexible Contracts",
                    description: "From single-origin lots to year-round supply agreements, we offer contract terms that match your business needs and growth trajectory."
                },
                {
                    title: "Custom Blending",
                    description: "Work with our team to create signature blends that showcase Ethiopian coffee's diversity while meeting your taste and price targets."
                },
                {
                    title: "Competitive Pricing",
                    description: "Volume discounts and long-term partnership benefits ensure you get the best value without compromising on quality."
                },
                {
                    title: "Dedicated Account Manager",
                    description: "Your personal contact for orders, samples, market insights, and any questions throughout our partnership."
                }
            ],
            process: [
                "Initial Consultation & Needs Assessment",
                "Sample Selection & Cupping",
                "Contract Negotiation & Terms",
                "First Order & Quality Verification",
                "Ongoing Support & Reorders",
                "Partnership Review & Optimization"
            ],
            stats: {
                readers: "200+",
                label: "Active Partners"
            }
        }
    }
];

export default function LearnMore() {
    const { serviceSlug } = useParams();
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const service = servicesData.find(s => s.slug === serviceSlug);

    if (!service) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-black mb-4">Service Not Found</h1>
                    <button
                        onClick={() => navigate('/services')}
                        className="px-6 py-3 bg-black text-[#FFC436] font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    const { detailedContent } = service;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white pb-20 font-sans selection:bg-[#D62828] selection:text-white">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D62828] to-[#FFC436] origin-left z-50"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <div className="relative min-h-[85vh] w-full flex flex-col overflow-hidden bg-[#050505]">
                {/* Premium Abstract Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {/* Golden/Brown Theme - Centered & Lowered to clear Navbar */}
                    <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[80vh] h-[80vh] rounded-full bg-[#B8860B] opacity-20 blur-[140px] animate-pulse" />
                    <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[90vh] h-[90vh] rounded-full bg-[#FFD700] opacity-10 blur-[140px]" />
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70vh] h-[70vh] rounded-full bg-[#4E342E] opacity-50 blur-[120px]" />
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                <div className="relative z-20 flex-grow flex flex-col justify-end pb-16 pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => navigate('/services')}
                            className="group flex items-center gap-3 mb-8 text-white/80 hover:text-[#FFC436] transition-colors duration-300"
                        >
                            <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-[#FFC436] group-hover:text-black transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <span className="font-bold uppercase tracking-widest text-xs hidden sm:block">Back to Services</span>
                        </button>

                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-black bg-[#FFC436] rounded-full uppercase shadow-lg shadow-black/20">
                            {service.tagline}
                        </span>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight max-w-5xl drop-shadow-lg break-words" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                            {service.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#FFC436] flex items-center justify-center text-black font-bold text-lg">
                                    D
                                </div>
                                <div>
                                    <p className="font-bold text-base">Derara Coffee</p>
                                    <p className="text-xs uppercase tracking-wider opacity-80">Premium Service</p>
                                </div>
                            </div>
                            <div className="hidden sm:block h-8 w-px bg-white/30" />
                            <div className="flex gap-6">
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider text-[#FFC436]">Included</p>
                                    <p className="text-sm font-medium">{service.features.length} Key Features</p>
                                </div>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider text-[#FFC436]">{detailedContent.stats.label}</p>
                                    <p className="text-sm font-medium">{detailedContent.stats.readers}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-30">
                <div className="bg-white dark:bg-[#0a0a0a] rounded-t-3xl p-6 sm:p-10 lg:p-14 shadow-2xl dark:shadow-2xl dark:border dark:border-white/10 border-t border-gray-100 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(255,196,54,0.15)]">

                    {/* Intro & Main Description */}
                    <div className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none mt-4 font-serif text-justify leading-relaxed">

                        {/* Drop Cap Intro */}
                        <div className="mb-12">
                            <p className="break-inside-avoid text-gray-800 dark:text-gray-200 leading-9 text-lg sm:text-xl relative">
                                <span className="float-left text-[5.5rem] font-bold text-[#D62828] mr-4 mt-[-8px] leading-[0.75] font-serif">
                                    {detailedContent.overview.charAt(0)}
                                </span>
                                <span className="uppercase tracking-widest text-sm font-bold mr-2">
                                    Overview
                                </span>
                                {detailedContent.overview.slice(1)}
                            </p>
                        </div>

                        {/* Feature Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="my-12 relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={service.bentoImage || service.image}
                                alt={service.title}
                                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-serif italic text-xl">The art of {service.title.toLowerCase()} </p>
                            </div>
                        </motion.div>

                        {/* Detailed Description */}
                        <p className="mb-12">
                            {service.description}
                        </p>


                        {/* Key Benefits Section (Magazine Style) */}
                        <h2 className="text-3xl font-black text-black dark:text-white mt-16 mb-8 font-sans border-l-4 border-[#FFC436] pl-4">
                            Key Benefits
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                            {detailedContent.benefits.map((benefit, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#FFC436] transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-[#D62828] font-serif">{benefit.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{benefit.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Process Section */}
                        <h2 className="text-3xl font-black text-black dark:text-white mt-20 mb-8 font-sans border-l-4 border-[#FFC436] pl-4">
                            Our Process
                        </h2>

                        <div className="not-prose space-y-4 mb-16">
                            {detailedContent.process.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <p className="font-serif text-lg text-gray-900 dark:text-gray-100 font-medium text-right">
                                        {step}
                                    </p>
                                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow group-hover:bg-[#FFC436] transition-colors"></div>
                                    <div className="w-12 h-12 flex-shrink-0 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold font-sans group-hover:bg-[#FFC436] transition-colors">
                                        {idx + 1}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* CTA / Contact Card */}
                    <div className="mt-20">
                        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden relative">
                            {/* Decorative glow */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#FFC436]" />
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D62828] blur-[80px] opacity-20" />

                            <div className="relative z-10 text-center sm:text-left">
                                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest mb-2" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                                    Partner With Us
                                </h4>
                                <p className="text-gray-400 text-sm">Start your journey with Derara Coffee today.</p>
                            </div>

                            <button className="relative z-10 px-8 py-4 bg-[#FFC436] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105">
                                GET STARTED
                            </button>
                        </div>
                    </div>

                </div>
            </article>

            {/* Bottom Navigation */}
            <div className="flex justify-center mt-20">
                <button
                    onClick={() => navigate('/services')}
                    className="group flex items-center gap-3 px-10 py-5 bg-black dark:bg-[#D62828] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#D62828]/30 transition-all duration-300"
                >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    View All Services
                </button>
            </div>

        </div>
    );
}
