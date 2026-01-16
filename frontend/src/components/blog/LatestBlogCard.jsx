import React from "react";
import { blogPosts } from "../../assets/assets";
import { motion } from "framer-motion";

export default function LatestBlog({ blogs }) {
    // Check if blogs prop is provided and has items. 
    // If null/undefined OR empty array, fallback to static.
    const finalPosts = (blogs && blogs.length > 0) ? blogs : blogPosts.slice(0, 3);

    return (
        <div className="bg-white dark:bg-[#0a0a0a] py-24 sm:py-32 relative overflow-hidden transition-colors duration-300">
            {/* Background Decorative Blob - Yellow to Light Gray/Black */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#D62828] rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>

            {/* Coffee Theme Icons Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Coffee Cup Top Right */}
                <svg className="absolute top-20 right-20 w-32 h-32 text-[#D62828] opacity-5 dark:opacity-10 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
                </svg>

                {/* Large Leaf Bottom Right */}
                <svg className="absolute bottom-10 right-10 w-28 h-28 text-black dark:text-white opacity-5 dark:opacity-10 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34 5.67 22.88 12.25 24 17 21c4.75-3 5.34-12.75 0-13zM6 14c.83-.83 2-2 4-4 .83 2.17 2.17 3.17 3 4 .83-2.17 3.17-2.17 4-2-2 4-5 6-11 2zm6-9c-2 2-3 4-8 4 6-5 9-9 8-4z" />
                </svg>

                {/* SCATTERED SMALL BEANS (Correct Path) */}
                {/* 1 */}
                <svg className="absolute top-12 left-12 w-8 h-8 text-[#D62828] opacity-10 dark:opacity-20 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.07 13.88L13.88 19.07C10.12 22.83 4.02 22.83 0.26 19.07C-3.5 15.31 -3.5 9.21 0.26 5.45L5.45 0.26C9.21 -3.5 15.31 -3.5 19.07 0.26C22.83 4.02 22.83 10.12 19.07 13.88ZM11.66 9.54L7.54 5.42C6.88 4.76 5.81 4.76 5.15 5.42C4.49 6.08 4.49 7.15 5.15 7.81L9.27 11.93C9.93 12.59 11 12.59 11.66 11.93C12.32 11.27 12.32 10.2 11.66 9.54Z" />
                </svg>
                {/* 2 */}
                <svg className="absolute top-32 left-1/4 w-6 h-6 text-black dark:text-white opacity-5 dark:opacity-10 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.07 13.88L13.88 19.07C10.12 22.83 4.02 22.83 0.26 19.07C-3.5 15.31 -3.5 9.21 0.26 5.45L5.45 0.26C9.21 -3.5 15.31 -3.5 19.07 0.26C22.83 4.02 22.83 10.12 19.07 13.88ZM11.66 9.54L7.54 5.42C6.88 4.76 5.81 4.76 5.15 5.42C4.49 6.08 4.49 7.15 5.15 7.81L9.27 11.93C9.93 12.59 11 12.59 11.66 11.93C12.32 11.27 12.32 10.2 11.66 9.54Z" />
                </svg>
                {/* 3 */}
                <svg className="absolute top-10 right-1/3 w-5 h-5 text-[#D62828] opacity-10 dark:opacity-20 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.07 13.88L13.88 19.07C10.12 22.83 4.02 22.83 0.26 19.07C-3.5 15.31 -3.5 9.21 0.26 5.45L5.45 0.26C9.21 -3.5 15.31 -3.5 19.07 0.26C22.83 4.02 22.83 10.12 19.07 13.88ZM11.66 9.54L7.54 5.42C6.88 4.76 5.81 4.76 5.15 5.42C4.49 6.08 4.49 7.15 5.15 7.81L9.27 11.93C9.93 12.59 11 12.59 11.66 11.93C12.32 11.27 12.32 10.2 11.66 9.54Z" />
                </svg>
                {/* 4 */}
                <svg className="absolute bottom-20 left-10 w-9 h-9 text-black dark:text-white opacity-5 dark:opacity-10 transform rotate-90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.07 13.88L13.88 19.07C10.12 22.83 4.02 22.83 0.26 19.07C-3.5 15.31 -3.5 9.21 0.26 5.45L5.45 0.26C9.21 -3.5 15.31 -3.5 19.07 0.26C22.83 4.02 22.83 10.12 19.07 13.88ZM11.66 9.54L7.54 5.42C6.88 4.76 5.81 4.76 5.15 5.42C4.49 6.08 4.49 7.15 5.15 7.81L9.27 11.93C9.93 12.59 11 12.59 11.66 11.93C12.32 11.27 12.32 10.2 11.66 9.54Z" />
                </svg>
                {/* 5 */}
                <svg className="absolute bottom-1/3 right-1/2 w-7 h-7 text-[#D62828] opacity-5 dark:opacity-20 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.07 13.88L13.88 19.07C10.12 22.83 4.02 22.83 0.26 19.07C-3.5 15.31 -3.5 9.21 0.26 5.45L5.45 0.26C9.21 -3.5 15.31 -3.5 19.07 0.26C22.83 4.02 22.83 10.12 19.07 13.88ZM11.66 9.54L7.54 5.42C6.88 4.76 5.81 4.76 5.15 5.42C4.49 6.08 4.49 7.15 5.15 7.81L9.27 11.93C9.93 12.59 11 12.59 11.66 11.93C12.32 11.27 12.32 10.2 11.66 9.54Z" />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2 className="text-3xl font-black tracking-widest sm:text-5xl uppercase" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                        <span className="text-[#D62828]">Latest</span> <span className="text-black dark:text-white inline-block transform hover:scale-105 transition-transform duration-300 drop-shadow-sm">Ethiopian Coffee</span> <span className="text-[#D62828]">Blog</span>
                    </h2>
                    <p className="mt-6 text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-medium font-serif">
                        Discover Ethiopia’s rich coffee heritage, from unique regional flavors
                        to traditional processing methods.
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                        <div className="h-2 w-16 bg-[#D62828] rounded-full"></div>
                        <div className="h-2 w-8 bg-black dark:bg-white rounded-full"></div>
                    </div>
                </motion.div>

                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 
                        sm:mt-20 lg:max-w-none lg:grid-cols-3">

                    {finalPosts.map((post, index) => {
                        // Normalize Data (Handle Backend vs Static)
                        const isDynamic = !!post._id;
                        const title = post.title;
                        const description = post.description;
                        const imgSrc = isDynamic ? post.image : post.imgSrc;
                        const date = isDynamic ? new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : post.date;
                        const categoryTitle = isDynamic ? (post.category || 'General') : post.category?.title;
                        const categoryHref = isDynamic ? '#' : post.category?.href;
                        const authorName = isDynamic ? (post.author || 'Mentesnot D.') : post.author?.name;
                        const authorRole = isDynamic ? '' : post.author?.role;
                        const authorImg = isDynamic ? null : post.author?.imageUrl; // Backend doesn't have author image yet, or maybe user not entering it? Dashboard has 'image' for Post, but not Author avatar. Author is text input.

                        return (
                            <motion.article
                                key={post.id || post._id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative isolate flex flex-col justify-end rounded-2xl 
                         overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group border-2 border-transparent hover:border-[#FFC436] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC436]/20"
                            >
                                <img
                                    src={imgSrc}
                                    alt={title}
                                    className="absolute inset-0 -z-10 h-full w-full object-cover 
                           transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 -z-10 bg-gradient-to-t 
                              from-[#2D1B13] via-[#2D1B13]/80 to-transparent opacity-90 transition-all duration-500" />

                                <div className="flex flex-wrap items-center text-sm text-white/90 font-medium">
                                    <time dateTime={date} className="mr-8 border-b-2 border-white pb-0.5">
                                        {date}
                                    </time>

                                    {categoryTitle && (
                                        <a
                                            href={categoryHref}
                                            className="rounded-full bg-[#FFC436] px-3 py-1.5 text-black 
                               font-bold hover:bg-white hover:text-black transition-colors"
                                        >
                                            {categoryTitle}
                                        </a>
                                    )}
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#FFC436] transition-colors">
                                    <a href={`/blog/${post.id || post._id}`}>
                                        <span className="absolute inset-0" />
                                        {title}
                                    </a>
                                </h3>

                                <p className="mt-2 text-base font-medium text-white shadow-black drop-shadow-md border-l-4 border-white pl-3 line-clamp-3">
                                    {description}
                                </p>

                                <div className="flex items-center gap-x-4 border-t border-gray-300 dark:border-gray-100/10 pt-4 mt-6">
                                    {authorImg ? (
                                        <img
                                            src={authorImg}
                                            alt=""
                                            className="h-10 w-10 rounded-full bg-gray-200 dark:bg-white/10"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 rounded-full bg-[#FFC436] flex items-center justify-center text-black font-bold">
                                            {authorName?.charAt(0)}
                                        </div>
                                    )}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                {authorName}
                                            </a>
                                        </p>
                                        {authorRole && <p className="text-gray-700 dark:text-gray-300 font-medium dark:font-normal">{authorRole}</p>}
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Fade Gradient to smooth transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>
    );
}
