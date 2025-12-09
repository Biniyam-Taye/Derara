import React from "react";
import { blogPosts } from "../../assets/assets";

export default function LatestBlog() {
    return (
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Latest Ethiopian Coffee Blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Discover Ethiopia’s rich coffee heritage, from unique regional flavors
                        to traditional processing methods that shape its world-renowned taste
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 
                        sm:mt-20 lg:max-w-none lg:grid-cols-3">

                    {blogPosts.slice(0, 3).map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end rounded-2xl 
                         overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
                        >
                            <img
                                src={post.imgSrc}
                                alt={post.imgAlt}
                                className="absolute inset-0 -z-10 h-full w-full object-cover 
                           transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t 
                              from-gray-900 via-gray-900/40" />

                            <div className="flex flex-wrap items-center text-sm text-gray-300">
                                <time dateTime={post.date} className="mr-8">
                                    {post.date}
                                </time>

                                {post.category && (
                                    <a
                                        href={post.category.href}
                                        className="rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 
                               font-medium hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                )}
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>

                            <p className="mt-2 text-sm text-gray-300">{post.description}</p>

                            {post.author && (
                                <div className="flex items-center gap-x-4 border-t border-gray-100/10 pt-4 mt-6">
                                    <img
                                        src={post.author.imageUrl}
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-white">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-300">{post.author.role}</p>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
