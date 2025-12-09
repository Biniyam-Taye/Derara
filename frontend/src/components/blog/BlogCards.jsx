import React from "react";
import { blogPosts } from "../../assets/assets";

const BlogCards = () => {
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
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">

            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-white">
                    This Week Hot Blogs
                </h1>
                <p className="mt-2 text-gray-400">
                    Stay updated with trending insights, fresh stories, and top Ethiopian coffee highlights.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                {blogPosts.map((post) => (
                    <a
                        key={post.id}
                        className="group block rounded-xl overflow-hidden"
                        href={post.href}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img
                                    className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
                                    src={post.imgSrc}
                                    alt={post.imgAlt}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="mt-3 text-gray-400">
                                    {post.description}
                                </p>

                                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-red-500 group-hover:underline font-medium">
                                    Read more {ReadMoreArrow}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BlogCards;
