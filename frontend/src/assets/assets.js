// assets.js
import communityTrainingImg from './community-training.jpg';
import sidamaFarmersImg from './sidama-farmers.jpg';
import hararMarketImg from './harar-market.jpg';
import onsiteCoffeeImg from './onsite-coffee.jpg';
import okrGuideImg from './okr-guide.jpg';

// -------------------------------------------------------------
// 1. STATIC ASSETS (Icons / Images)
// -------------------------------------------------------------

export const assets = {
    // Generic right arrow SVG path
    right_arrow: "M5 12h14M12 5l7 7-7 7",

    // Add real icons if needed:
    // web_icon: "/icons/web.svg",
    // stripe_icon: "/icons/stripe.svg",
    // consulting_icon: "/icons/consult.svg",
    // db_icon: "/icons/db.svg",
};

// -------------------------------------------------------------
// 2. SERVICE CARDS DATA (Used in MainServices.jsx)
// -------------------------------------------------------------

export const serviceData = [
    {
        icon: "Icon1",
        title: "Ethical Sourcing & Quality",
        description: "Direct partnerships with high-altitude farms in Yirgacheffe and Sidamo, ensuring traceable, single-origin beans and sustainable practices.",
        link: "#sourcing",
    },
    {
        icon: "Icon2",
        title: "Precision Processing",
        description: "Expert natural and washed processing methods. We handle milling, grading, and testing to meet rigorous international specialty coffee standards.",
        link: "#processing",
    },
    {
        icon: "Icon3",
        title: "Global Logistics & Export",
        description: "Seamless handling of customs, freight forwarding, and container shipping worldwide, ensuring timely delivery from Addis Ababa to your door.",
        link: "#logistics",
    },
    {
        icon: "Icon4",
        title: "Wholesale Partnership",
        description: "Flexible volume contracts for roasters and distributors globally. Personalized consultation to match specific flavor profiles and pricing needs.",
        link: "#partnerships",
    },
];
// -------------------------------------------------------------
// 3. BLOG POSTS DATA (Used in Blog.jsx or Similar Components)
// -------------------------------------------------------------

export const blogPosts = [
    // ------------------ Coffee Posts ------------------
    {
        id: 1,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/736x/b4/b7/0c/b4b70c60ad33e944b08285f299e6e814.jpg",
        smallImgSrc: communityTrainingImg,
        imgAlt: "Coffee beans related to Yirgacheffe",
        title: "Exploring Yirgacheffe: The Floral King",
        description:
            "Known for its complex floral notes and bright acidity—Ethiopia’s washed coffee classic.",
        smallTitle: "Yirgacheffe Seminar: National & Export Market",
        smallDescription:
            "A seminar on empowering Yirgacheffe farmers with insights into national regulations and global export opportunities.",
        date: "Dec 05, 2025",
        category: { title: "Origin Focus", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Coffee Grader / Q-Grader",
            imageUrl:
                "https://i.pinimg.com/736x/b4/b7/0c/b4b70c60ad33e944b08285f299e6e814.jpg",
            href: "#",
        },
        readMoreLink: "#",
    },
    {
        id: 2,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/1200x/8b/4b/ce/8b4bced6cb4a1c1b28a237c63ce85c87.jpg",
        smallImgSrc: sidamaFarmersImg,
        imgAlt: "Roasted coffee beans related to Sidama",
        title: "Sidama: Chocolate & Citrus Balance",
        description:
            "A balanced cup with citrus brightness and chocolate undertones—perfect for espresso.",
        date: "Nov 28, 2025",
        category: { title: "Tasting Notes", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Coffee Grader / Q-Grader",
            imageUrl:
                "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=256&h=256&q=80",
            href: "#",
        },
        readMoreLink: "#",
    },
    {
        id: 3,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/originals/a6/ac/3e/a6ac3e8d58658376a202e6bbf6571e61.png",
        smallImgSrc: hararMarketImg,
        imgAlt: "Coffee cup related to Harar",
        title: "Harar: The Natural, Winey Wildness",
        description:
            "Naturally processed with fruity, winey notes—Harar delivers Ethiopia’s boldest flavors.",
        date: "Nov 20, 2025",
        category: { title: "Processing Methods", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Coffee Grader / Q-Grader",
            imageUrl:
                "https://images.unsplash.com/photo-1463453091185-6156999333ce?w=256&h=256&q=80",
            href: "#",
        },
        readMoreLink: "#",
    },

    // ------------------ General Posts ------------------
    {
        id: 4,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/1200x/f7/27/f5/f727f57d88bd40fb0458f038975102c2.jpg",
        imgAlt: "Studio by Preline",
        title: "Studio by Preline",
        description:
            "Produce professional livestreams with Preline’s advanced studio tools.",
        readMoreLink: "#",
    },
    {
        id: 5,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/736x/6a/7b/9a/6a7b9a09d97a0e0a5a6496ae7ee378a3.jpg",
        smallImgSrc: onsiteCoffeeImg,
        imgAlt: "Onsite",
        title: "Onsite",
        description:
            "Optimize in-person experiences with modern event features like digital badge printing.",
        readMoreLink: "#",
    },
    {
        id: 6,
        href: "#",
        imgSrc:
            "https://i.pinimg.com/1200x/42/e5/50/42e550517036057a9c3d173682932001.jpg",
        smallImgSrc: okrGuideImg,
        imgAlt: "Guide to OKRs",
        title: "The Complete Guide to OKRs",
        description:
            "Learn how to implement effective OKR systems to level up your team performance.",
        readMoreLink: "#",
    },

    {
        id: 7,
        href: "#",
        imgSrc: "https://i.pinimg.com/736x/b4/b7/0c/b4b70c60ad33e944b08285f299e6e814.jpg",
        smallImgSrc: communityTrainingImg,
        imgAlt: "Coffee beans related to Yirgacheffe",
        title: "Sustainable Farming Practices",
        description: "How Ethiopia is leading the way in organic and sustainable coffee farming methods.",
        readMoreLink: "#",
    },
    {
        id: 8,
        href: "#",
        imgSrc: "https://i.pinimg.com/1200x/8b/4b/ce/8b4bced6cb4a1c1b28a237c63ce85c87.jpg",
        smallImgSrc: sidamaFarmersImg,
        imgAlt: "Roasted coffee beans related to Sidama",
        title: "The Art of Coffee Roasting",
        description: "Understanding the delicate balance of heat and time in crafting the perfect roast.",
        readMoreLink: "#",
    },
    {
        id: 9,
        href: "#",
        imgSrc: "https://i.pinimg.com/originals/a6/ac/3e/a6ac3e8d58658376a202e6bbf6571e61.png",
        smallImgSrc: hararMarketImg,
        imgAlt: "Coffee cup related to Harar",
        title: "Coffee Ceremony Traditions",
        description: "A deep dive into the cultural significance of the Ethiopian coffee ceremony.",
        readMoreLink: "#",
    },
    {
        id: 10,
        href: "#",
        imgSrc: "https://i.pinimg.com/1200x/f7/27/f5/f727f57d88bd40fb0458f038975102c2.jpg",
        imgAlt: "Studio by Preline",
        title: "Modern Coffee Shop Design",
        description: "Exploring the intersection of traditional coffee culture and modern aesthetics.",
        readMoreLink: "#",
    },
    {
        id: 11,
        href: "#",
        imgSrc: "https://i.pinimg.com/736x/6a/7b/9a/6a7b9a09d97a0e0a5a6496ae7ee378a3.jpg",
        smallImgSrc: onsiteCoffeeImg,
        imgAlt: "Onsite",
        title: "Tech in Coffee Production",
        description: "How technology is improving yield and quality for Ethiopian coffee farmers.",
        readMoreLink: "#",
    },
    {
        id: 12,
        href: "#",
        imgSrc: "https://i.pinimg.com/1200x/42/e5/50/42e550517036057a9c3d173682932001.jpg",
        smallImgSrc: okrGuideImg,
        imgAlt: "Guide to OKRs",
        title: "Exporting to Global Markets",
        description: "Navigating the logistics of bringing Ethiopian coffee to the world stage.",
        readMoreLink: "#",
    },
    {
        id: 13,
        href: "#",
        imgSrc: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        smallImgSrc: onsiteCoffeeImg,
        imgAlt: "Barista pouring coffee",
        title: "The Rise of Anaerobic Fermentation",
        description: "Discover how this experimental processing method is creating unique, fruit-forward flavor profiles in Ethiopian specialty coffee.",
        readMoreLink: "#",
    },
];
