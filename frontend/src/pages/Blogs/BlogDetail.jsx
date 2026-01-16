
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { blogPosts } from "../../assets/assets";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                // 1. Try to find in static assets first (for demo purposes, or prioritize API if preferred)
                let foundBlog = blogPosts.find((p) => String(p.id) === id);

                // 2. If not found, try fetching from API (assuming API exists and supports get-by-id)
                // Since the list endpoint is /ops/blogs, we might assume a detail endpoint /ops/blogs/:id exists.
                // Or we fetch all and find it. fetching all is safer based on current Blog.jsx
                if (!foundBlog) {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/blogs`);
                    const data = await res.json();
                    if (Array.isArray(data)) {
                        foundBlog = data.find(item => String(item._id) === id || String(item.id) === id);
                    }
                }

                setBlog(foundBlog);
            } catch (error) {
                console.error("Failed to fetch blog details", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D62828]"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center px-4">
                <h2 className="text-3xl font-black text-[#D62828] mb-4">Blog Post Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">The article you are looking for does not exist or has been removed.</p>
                <button
                    onClick={() => navigate('/blog')}
                    className="px-6 py-3 bg-[#D62828] text-white rounded-full font-bold hover:bg-black transition-colors"
                >
                    Back to Blogs
                </button>
            </div>
        );
    }

    // Normalize data with safety checks to prevent crashes
    const isDynamic = !!blog._id;
    const title = isDynamic ? blog.title : (blog.smallTitle || blog.title);
    const description = isDynamic ? blog.description : (blog.smallDescription || blog.description);

    // Image handling
    const imgSrc = isDynamic ? blog.image : (blog.imgSrc || blog.smallImgSrc);

    // Content handling - Ensure we have a string
    let contentVal = blog.content || blog.body;

    const defaultContent = "";

    if (typeof contentVal !== 'string') {
        contentVal = defaultContent;
    }

    const content = contentVal;

    // Date handling
    const date = isDynamic ? new Date(blog.createdAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : blog.date;

    // Author handling - Safely handle Object or String
    let authorName = 'Mentesnot D.';
    let authorRole = 'Author';
    let authorImg = null;

    if (isDynamic) {
        if (blog.author) {
            if (typeof blog.author === 'string') {
                authorName = blog.author;
            } else if (typeof blog.author === 'object') {
                authorName = blog.author.name || blog.author.username || 'Mentesnot D.';
                if (blog.author.role) authorRole = blog.author.role;
                if (blog.author.image) authorImg = blog.author.image;
            }
        }
    } else {
        authorName = blog.author?.name || 'Mentesnot D.';
        authorRole = blog.author?.role || 'Author';
        authorImg = blog.author?.imageUrl;
    }

    // Category handling - Safely handle Object or String
    let category = 'General';
    if (isDynamic) {
        if (blog.category) {
            if (typeof blog.category === 'string') {
                category = blog.category;
            } else if (typeof blog.category === 'object') {
                category = blog.category.title || blog.category.name || 'General';
            }
        }
    } else {
        category = blog.category?.title || 'General';
    }

    // Helper to format body text
    const formatParagraphs = (text) => {
        if (!text) return [];
        return text.split('\n').filter(p => p.trim() !== '');
    };

    let paragraphs = formatParagraphs(content);

    // Helper to split long text block into smaller paragraphs (essay style)
    const splitBySentences = (text) => {
        // Regex to capture sentences ending with punctuation
        const sentences = text.match(/[^\.!\?]+[\.!\?]+["']?|.+$/g) || [text];
        const chunks = [];
        let buffer = "";
        sentences.forEach((s, i) => {
            buffer += s.trim() + " ";
            // Create a new paragraph every 4 sentences
            if ((i + 1) % 4 === 0) {
                chunks.push(buffer.trim());
                buffer = "";
            }
        });
        if (buffer.trim()) chunks.push(buffer.trim());
        return chunks;
    };

    // Add description as the first set of paragraphs (splitted for readability)
    if (description && typeof description === 'string' && description.trim() !== '') {
        const cleanDesc = description.trim();
        // Avoid partial duplication if content accidentally starts with description
        if (!paragraphs.length || !paragraphs[0].includes(cleanDesc.substring(0, 20))) {
            const descChunks = splitBySentences(cleanDesc);
            paragraphs = [...descChunks, ...paragraphs];
        }
    }

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
                        {/* Back Button - Redirects to /blog */}
                        <button
                            onClick={() => navigate('/blog')}
                            className="group flex items-center gap-3 mb-8 text-white/80 hover:text-[#FFC436] transition-colors duration-300"
                        >
                            <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-[#FFC436] group-hover:text-black transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <span className="font-bold uppercase tracking-widest text-xs hidden sm:block">Back to Blogs</span>
                        </button>

                        {category && (
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-black bg-[#FFC436] rounded-full uppercase shadow-lg shadow-black/20">
                                {category}
                            </span>
                        )}
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight max-w-5xl drop-shadow-lg break-words" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
                            <div className="flex items-center gap-3">
                                {authorImg ? (
                                    <img src={authorImg} alt={authorName} className="w-12 h-12 rounded-full border-2 border-[#FFC436] object-cover" />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-[#FFC436] flex items-center justify-center text-black font-bold text-lg">
                                        {authorName?.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <p className="font-bold text-base">{authorName}</p>
                                    <p className="text-xs uppercase tracking-wider opacity-80">{authorRole}</p>
                                </div>
                            </div>
                            <div className="hidden sm:block h-8 w-px bg-white/30" />
                            <div className="flex gap-6">
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider text-[#FFC436]">Published</p>
                                    <p className="text-sm font-medium">{date}</p>
                                </div>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wider text-[#FFC436]">Read Time</p>
                                    <p className="text-sm font-medium">5 min read</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-30">
                <div className="bg-white dark:bg-[#0a0a0a] rounded-t-3xl p-6 sm:p-10 lg:p-14 shadow-2xl dark:shadow-2xl dark:border dark:border-white/10 border-t border-gray-100 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(255,196,54,0.15)]">



                    {/* Main Body - Magazine Style */}
                    <div className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none mt-16 font-serif md:columns-2 gap-16 text-justify leading-relaxed">
                        {paragraphs.map((paragraph, idx) => {
                            // Check if paragraph is a quote (starts with ")
                            const isQuote = paragraph.trim().startsWith('"');

                            if (isQuote) {
                                return (
                                    <motion.blockquote
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="my-10 p-8 border-l-[6px] border-[#FFC436] bg-[#1a1a1a] rounded-r-xl not-italic shadow-lg"
                                    >
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">
                                            {paragraph.replace(/"/g, '')}
                                        </p>
                                    </motion.blockquote>
                                );
                            }

                            // First paragraph gets Drop Cap + Small Caps Opening
                            if (idx === 0) {
                                const firstLetter = paragraph.charAt(0);
                                const rest = paragraph.slice(1);
                                const words = rest.split(' ');
                                const firstPhrase = words.slice(0, 5).join(' ');
                                const remaining = words.slice(5).join(' ');

                                return (
                                    <p key={idx} className="break-inside-avoid mb-8 text-gray-800 dark:text-gray-200 leading-9 text-lg sm:text-xl relative">
                                        <span className="float-left text-[5.5rem] font-bold text-[#D62828] mr-4 mt-[-8px] leading-[0.75] font-serif">
                                            {firstLetter}
                                        </span>
                                        <span className="uppercase tracking-widest text-sm font-bold mr-2">
                                            {firstPhrase}
                                        </span>
                                        {remaining}
                                    </p>
                                );
                            }



                            return (
                                <p key={idx} className="break-inside-avoid mb-8 text-gray-800 dark:text-gray-200 leading-9 text-lg sm:text-xl">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>

                    {/* Share Card */}
                    <div className="mt-20">
                        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden relative">
                            {/* Decorative glow */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#FFC436]" />
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#D62828] blur-[80px] opacity-20" />

                            <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest relative z-10" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                                Share This Blog Article
                            </h4>

                            <div className="flex gap-4 relative z-10">
                                {/* Twitter / X */}
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#D62828] text-white transition-all duration-300 transform hover:scale-110 group"
                                    title="Share on Twitter"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#1877F2] text-white transition-all duration-300 transform hover:scale-110 group"
                                    title="Share on Facebook"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#0A66C2] text-white transition-all duration-300 transform hover:scale-110 group"
                                    title="Share on LinkedIn"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.92v1.632h.049c.496-.94 1.71-1.932 3.521-1.932 3.766 0 4.46 2.48 4.46 5.705v5.047zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Back Button */}
            <div className="flex justify-center mt-20">
                <button
                    onClick={() => navigate('/blog')}
                    className="group flex items-center gap-3 px-10 py-5 bg-black dark:bg-[#D62828] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#D62828]/30 transition-all duration-300"
                >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to All Blogs
                </button>
            </div>

        </div>
    );
};

export default BlogDetail;
