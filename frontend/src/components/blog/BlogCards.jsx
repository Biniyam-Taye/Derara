import React, { useState } from "react";
import { blogPosts } from "../../assets/assets";

const BlogCards = ({ blogs }) => {
    // Use API data if available, otherwise use static fallback.
    const finalPosts = (blogs && blogs.length > 0) ? blogs : blogPosts.slice(3);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Logic for displaying current posts
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = finalPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(finalPosts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const element = document.getElementById('blog-cards-container');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ReadMoreArrow = (
        <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );

    return (
        <div id="blog-cards-container" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">

            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-black text-[#D62828] uppercase tracking-widest" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                    This Week <span className="text-black dark:text-white underline decoration-[#D62828] decoration-4 underline-offset-4">Hot</span> Blogs
                </h1>
                <p className="mt-4 text-gray-800 dark:text-gray-300 font-medium max-w-2xl mx-auto">
                    Stay updated with trending insights, fresh stories, and top Ethiopian coffee highlights.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                {currentPosts.map((post) => {
                    // Normalize
                    const isDynamic = !!post._id;
                    const title = isDynamic ? post.title : (post.smallTitle || post.title);
                    const description = isDynamic ? post.description : (post.smallDescription || post.description);
                    const imgSrc = isDynamic ? post.image : (post.smallImgSrc || post.imgSrc);
                    const id = post.id || post._id;
                    const href = `/blog/${id}`;

                    return (
                        <a
                            key={post.id || post._id}
                            className="group block rounded-2xl overflow-hidden bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,196,54,0.1)]"
                            href={href}
                        >
                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-48">
                                    <img
                                        className="group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full"
                                        src={imgSrc}
                                        alt={title}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <div className="grow pt-2">
                                    <h3 className="text-xl font-bold text-[#2D1B13] dark:text-white group-hover:text-[#D62828] transition-colors line-clamp-2 leading-tight font-serif">
                                        {title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-3">
                                        {description}
                                    </p>

                                    <p className="mt-4 inline-flex items-center gap-x-2 text-xs font-black text-[#D62828] uppercase tracking-widest group-hover:underline underline-offset-4">
                                        Read More {ReadMoreArrow}
                                    </p>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>

            {/* Pagination Controls */}
            <div className="mt-16 flex justify-center items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`p-3 rounded-full border transition-all duration-300 ${currentPage === 1
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed dark:border-gray-700 dark:text-gray-600'
                        : 'border-gray-300 text-gray-700 hover:bg-[#D62828] hover:text-white hover:border-[#D62828] dark:border-gray-600 dark:text-white'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 border ${currentPage === number
                            ? 'bg-[#D62828] text-white border-[#D62828] shadow-lg shadow-red-500/30'
                            : 'bg-transparent text-gray-700 border-gray-300 hover:border-[#D62828] hover:text-[#D62828] dark:text-white dark:border-gray-600'
                            }`}
                    >
                        {number}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className={`p-3 rounded-full border transition-all duration-300 ${currentPage === totalPages || totalPages === 0
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed dark:border-gray-700 dark:text-gray-600'
                        : 'border-gray-300 text-gray-700 hover:bg-[#D62828] hover:text-white hover:border-[#D62828] dark:border-gray-600 dark:text-white'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogCards;
