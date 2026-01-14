import React, { useState, useEffect } from "react";
import LatestBlog from "../../components/blog/LatestBlogCard";
import BlogCards from "../../components/blog/BlogCards";

export default function Blog() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/blogs`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    // Sort by newest first
                    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setBlogs(sortedData);
                }
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            }
        };
        fetchBlogs();
    }, []);
    
    const latestBlogs = blogs ? blogs.slice(0, 3) : null;
    const otherBlogs = blogs ? blogs.slice(3) : null;

    return (
        <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-black bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 dark:text-white">
            <LatestBlog blogs={latestBlogs} />
            <BlogCards blogs={otherBlogs} />
        </div>
    );
}
