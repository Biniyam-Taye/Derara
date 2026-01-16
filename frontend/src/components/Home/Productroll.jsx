import React, { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="w-[300px] md:w-[320px] bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-red-500/50 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-500 flex-shrink-0 relative">
    {/* Image Container */}
    <div className="h-64 overflow-hidden relative">
      {product.tag && (
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {product.tag}
        </span>
      )}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-all duration-300 z-0" />
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors line-clamp-1">
          {product.name}
        </h3>
      </div>

      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < Math.floor(product.rating || 5)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-gray-600 dark:text-gray-400 text-xs ml-2">({product.rating || 5})</span>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <Link
          to="/products"
          className="text-gray-900 dark:text-white text-sm font-semibold hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center group/btn"
        >
          Details{" "}
          <ArrowRight
            size={16}
            className="ml-1 transform group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  </div>
);

const Productroll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/products`);
        const data = await res.json();
        const featured = Array.isArray(data) ? data.filter(p => p.isFeatured && p.isVisible !== false) : [];
        setProducts(featured);
      } catch (err) {
        console.error("Failed to fetch featured products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const scrollRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
           scrollContainer.scrollLeft = 0; // Reset for seamless loop
        } else {
           scrollContainer.scrollLeft += 1; // Speed of scroll
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, products]); // Re-run if products change size or paused state changes

  if (loading || (products.length === 0)) return null;

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200 dark:border-white/5 relative overflow-hidden">
      <style>
        {`
          @keyframes scroll-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-slow {
            animation: scroll-slow 60s linear infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between">
        <div className="text-left">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 animate-fade-in-up">
            Our Products
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Collections
            </span>
          </h1>
        </div>
        <Link
          to="/products"
          className="hidden md:flex items-center space-x-2 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 px-6 py-3 rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
        >
          <span>View All Products</span>
          <ArrowRight
            size={18}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <div 
        className="w-full overflow-x-auto mask-linear-gradient-wide scrollbar-hide"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex space-x-8 px-4 w-max">
          {/* Original list */}
          {products.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
          {/* Duplicate list for infinite scroll seamlessness */}
          {products.map((product) => (
            <ProductCard key={`${(product._id || product.id)}-dup1`} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={`${(product._id || product.id)}-dup2`} product={product} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex justify-center mt-8">
        <Link
          to="/products"
          className="flex items-center space-x-2 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 px-6 py-3 rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
        >
          <span>View All Products</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Productroll;
