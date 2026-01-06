import React from "react";
import { motion } from "framer-motion";
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

    return (
        <div className="bg-white min-h-screen">


            {/* Hero Section - Two Column Layout */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Category Badge */}
                        <div className="mb-6">
                            <span className="text-sm font-bold text-black uppercase tracking-wider">
                                Premium Service
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-none">
                            {service.title.split(' ').map((word, idx) => (
                                <React.Fragment key={idx}>
                                    {word}
                                    {idx < service.title.split(' ').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            {service.description}
                        </p>

                        {/* Email Input & CTA */}
                        <div className="mb-10">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Get Started Today
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-5 py-3 border-b-2 border-gray-300 focus:border-black outline-none text-base transition-colors"
                                />
                                <button className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-[#FFC436] hover:text-black transition-all">
                                    TRY IT OUT
                                </button>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Stay Informed Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                                <div className="relative border-2 border-black rounded-2xl p-6 bg-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 h-full">
                                    <h3 className="text-xl font-black text-black mb-2 leading-tight">
                                        Stay<br />informed
                                    </h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Updates on new tech, projects and initiatives shaping the future of the World.
                                    </p>
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                                <div className="relative border-2 border-black rounded-2xl p-6 bg-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 h-full">
                                    <div className="text-xs font-bold text-black mb-1 uppercase tracking-wider">Join</div>
                                    <div className="text-3xl font-black text-black mb-1">
                                        {service.detailedContent.stats.readers}
                                    </div>
                                    <div className="text-sm text-gray-700 font-medium">
                                        {service.detailedContent.stats.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={service.bentoImage || service.image}
                                alt={service.title}
                                className="w-full h-[600px] object-cover"
                            />
                            {/* Decorative Circle Badge */}
                            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <div className="text-center">
                                    <div className="text-xs font-bold text-black uppercase mb-1">Join Us</div>
                                    <svg className="w-12 h-12 mx-auto text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    <div className="text-xs text-gray-600 mt-1">Begin Now</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover what makes our {service.tagline.toLowerCase()} approach unique
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {service.detailedContent.benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FFC436] transition-all hover:shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-black text-[#FFC436] rounded-full flex items-center justify-center font-black text-xl">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-black mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A streamlined approach to excellence
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {service.detailedContent.process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative group h-full"
                            >
                                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                                <div className="relative border-2 border-black rounded-2xl p-8 bg-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 h-full min-h-[180px] flex flex-col justify-center">
                                    <div className="text-5xl font-black text-[#FFC436] mb-3 select-none">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <p className="text-xl font-black text-black leading-tight tracking-tight">
                                        {step}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-black text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Let's discuss how we can elevate your coffee business together.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-10 py-5 bg-[#FFC436] text-black font-black rounded-full hover:bg-white transition-all duration-300 shadow-2xl text-lg">
                                GET IN TOUCH
                            </button>
                            <button
                                onClick={() => navigate('/services')}
                                className="px-10 py-5 bg-transparent border-2 border-white text-white font-black rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg"
                            >
                                VIEW ALL SERVICES
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
