import React from "react";
import LatestBlog from "../../components/blog/LatestBlogCard";
import BlogCards from "../../components/blog/BlogCards";

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
            <LatestBlog />
            <BlogCards />
        </div>
    );
}
