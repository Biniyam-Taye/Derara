import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Maximize2, X } from "lucide-react";

const GalleryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/gallery`);
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const categories = ["All", ...new Set(items.map((i) => i.category))];
  const filteredItems = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-32 pb-20 px-6 transition-colors duration-500">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Visual Journey
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Derara</span> Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Explore our heritage, our farms, and the premium craftsmanship behind every single bean we export globally.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                filter === cat
                  ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-500/25"
                  : "bg-transparent border-gray-200 dark:border-white/10 text-gray-500 hover:border-red-600/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Loading Visuals...</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/10 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">{item.category}</span>
                    <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-xs line-clamp-2">{item.description}</p>
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <div className="text-center py-40 bg-gray-50 dark:bg-white/5 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-white/10">
            <ImageIcon className="mx-auto text-gray-300 mb-6" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">The gallery is currently empty</h3>
            <p className="text-gray-500 dark:text-gray-400">Our team is busy capturing special moments. Check back soon!</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto rounded-2xl shadow-2xl border border-white/10 mb-8"
              />
              <div className="text-center">
                <span className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-3 block">{selectedImage.category}</span>
                <h2 className="text-white text-3xl font-bold mb-4">{selectedImage.title}</h2>
                <p className="text-gray-400 text-lg max-w-2xl">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
