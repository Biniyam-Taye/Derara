const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Models
const About = require('./models/About');
const Product = require('./models/Product');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Certificate = require('./models/Certificate');
const Blog = require('./models/Blog');
const ContactInfo = require('./models/ContactInfo');
const Hero = require('./models/Hero');
const Gallery = require('./models/Gallery');

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await About.deleteMany({});
        await Product.deleteMany({});
        await Service.deleteMany({});
        await Testimonial.deleteMany({});
        await Certificate.deleteMany({});
        await Blog.deleteMany({});
        await ContactInfo.deleteMany({});
        await Hero.deleteMany({});
        await Gallery.deleteMany({});

        console.log('Old data cleared...');

        // NOTE: Seeding logic commented out to start with an empty database.
        /*
        // 1. About Us (Founder Focused)
        await About.create({
            title: "Rooted in Heritage",
            tagline: "Authentic Visionary",
            name: "Mr. Beri M",
            role: "Founder & CEO",
            quote: "Coffee isn't just a commodity to us; it's the lifeblood of our culture and the standard of our excellence.",
            description: "With over a decade of dedication to the Ethiopian coffee landscape, Mr. Beri M founded Derara with a single mission: to provide a direct, ethical bridge between the high-altitude forests of his homeland and the global specialty market. His deep-rooted respect for the soil and the people who toil upon it ensures that every bean we export carries the true spirit of Ethiopia.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&q=80", // Placeholder for founder
            mission: "To elevate Ethiopian coffee by connecting small-scale producers with global roasters through transparency and excellence.",
            vision: "To be the most trusted global partner in specialty Ethiopian coffee export.",
            isVisible: true
        });

        // 2. Services (The 4 Cards)
        const services = [
            { 
                title: "Ethical Sourcing & Quality", 
                features: "#01, Direct Farm Trade, Full Traceability", 
                description: "Direct partnerships with smallholder farmers across legendary regions like Yirgacheffe, Sidamo, and Guji. This guarantees premium, traceable, single-origin beans.", 
                image: "https://images.unsplash.com/photo-1501339819358-ee5f8a17f390?q=80&w=1470" 
            },
            { 
                title: "Precision Processing", 
                features: "#02, Advanced Processing, Custom Profiles", 
                description: "We employ state-of-the-art processing methods and custom-designed profiles for each single-origin lot, guided by moisture content and density.", 
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470" 
            },
            { 
                title: "Global Logistics", 
                features: "#03, Customs Clearance, International Freight", 
                description: "Seamless handling of customs, freight forwarding, and container shipping worldwide, ensuring timely delivery from Addis Ababa to your door.", 
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470" 
            },
            { 
                title: "Wholesale Partnership", 
                features: "#04, Volume Contracts, Custom Blending", 
                description: "Flexible volume contracts for roasters and distributors globally. Personalized consultation to match specific flavor profiles and shipping needs.", 
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1470" 
            }
        ];
        await Service.insertMany(services);

        // 3. Products
        const products = [
            {
                name: "Yirgacheffe Washed",
                region: "Yirgacheffe",
                type: "Washed Process",
                short_desc: "Renowned for its tea-like delicacy and pristine cup profile. Expect jasmine aromas leading into vibrant lemony acidity.",
                long_desc: "Sourced from the high peaks of Gedeo, this Yirgacheffe represents the pinnacle of washed Ethiopian coffee.",
                profile: "Jasmine, Lemon, Bergamot, Tea-like",
                elevation: "1,800 - 2,200m",
                score: "89+",
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1470",
                tag: "Floral & Bright",
                isFeatured: true,
                isVisible: true
            },
            {
                name: "Sidama Natural",
                region: "Sidama",
                type: "Natural Process",
                short_desc: "Offers profound sweetness and earthy complexity from diverse landscapes. Ripe stone fruit tones are supported by a velvety mouthfeel.",
                long_desc: "Sidama is the birthplace of coffee, and this Natural bean honors that heritage with deep, complex flavors.",
                profile: "Strawberry, Blueberry, Floral, Honey",
                elevation: "1,500 - 2,200m",
                score: "87+",
                image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1361",
                tag: "Fruity & Sweet",
                isFeatured: true,
                isVisible: true
            },
             {
                name: "Guji Natural",
                region: "Guji",
                type: "Natural Process",
                short_desc: "Explosively sweet and jammy from rich volcanic soils. Delivers tropical fruit flavors from mango to passion fruit.",
                long_desc: "Guji Natural is a testament to the region's rich volcanic soil and dense forests.",
                profile: "Peach, Orange, Honey, Floral",
                elevation: "1,800 - 2,300m",
                score: "90+",
                image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1374",
                tag: "Exotic & Jammy",
                isFeatured: true,
                isVisible: true
            }
        ];
        await Product.insertMany(products);

        // 4. Testimonials
        const testimonials = [
            { name: "Sarah Johnson", role: "Procurement Manager", company: "Global Coffee Co.", feedback: "Derara's commitment to quality is unmatched. Their beans are consistently the highlight of our seasonal blends.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
            { name: "Michael Chen", role: "Head Roaster", company: "Artisan Roasts", feedback: "The transparency in their supply chain gives us total confidence. A partner that truly cares about the farmers.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" }
        ];
        await Testimonial.insertMany(testimonials);

        // 5. Contact Info
        await ContactInfo.create({
            email: "marketing@derarabusiness.com",
            phone: "+251 984 00 87 75",
            address: "Akaki-Kality Sub-City, Woreda 13, Tullu Dimtu, Hamer Building, 3rd Floor, Office T0011, Addis Ababa, Ethiopia",
            city: "Addis Ababa",
            country: "Ethiopia",
            socials: [
                { platform: "Facebook", url: "https://facebook.com" },
                { platform: "Instagram", url: "https://instagram.com" },
                { platform: "LinkedIn", url: "https://linkedin.com" }
            ],
            isVisible: true
        });

        // 6. Blogs
        const blogs = [
            {
                title: "The Highland Harvest: A Journey",
                category: "Sourcing",
                description: "Exploring the misty mountains of Yirgacheffe where the magic begins. Join us as we meet the farmers behind your daily cup.",
                image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
                author: "Derara Team"
            },
            {
                title: "Processing Methods Deconstructed",
                category: "Education",
                description: "Washed vs. Natural: Understanding how processing affects flavor profiles and why we choose specific methods for specific beans.",
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
                author: "Head of Quality"
            }
        ];
        await Blog.insertMany(blogs);
        
        // 7. Certificates
        const certificates = [
            { title: "Certificate of Competence", description: "Issued by Ethiopian Coffee and Tea Authority", image: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?q=80&w=1470" },
             { title: "Organic Certification", description: "Certified for handling and export of high-quality organic coffee.", image: "https://images.unsplash.com/photo-1621243804631-016f4c94fd65?q=80&w=1374" }
        ];
        await Certificate.insertMany(certificates);
        */

        console.log('Database cleared (Seeding skipped)...');
        process.exit();
    } catch (error) {
        console.error('Error in seed script:', error);
        process.exit(1);
    }
};

seedData();
