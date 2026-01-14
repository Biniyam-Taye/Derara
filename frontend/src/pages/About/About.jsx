import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Leaf, 
  Link as LinkIcon, 
  Ship, 
  CheckCircle, 
  Target, 
  Globe, 
  Award,
  ChevronRight
} from "lucide-react";
import DeraraImage from "../../assets/10001.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react"; 

const About = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/about`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setAboutData(data[0]); // Use the first about item as the main profile
      }
    } catch (error) {
      console.error("Failed to fetch about data", error);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Default Fallback Data (Static)
  const defaultDesc = "With over a decade of dedication to the Ethiopian coffee landscape, Mr. Beri M founded Derara with a single mission: to provide a direct, ethical bridge between the high-altitude forests of his homeland and the global specialty market.\n\nHis deep-rooted respect for the soil and the people who toil upon it ensures that every bean we export carries the true spirit of Ethiopia.";
  const defaultQuote = "Coffee isn't just a commodity to us; it's the lifeblood of our culture and the standard of our excellence.";
  
  const displayData = aboutData || {
    name: "Mr. Beri M",
    role: "Founder & CEO",
    title: "General Manager", 
    image: DeraraImage,
    quote: defaultQuote,
    description: defaultDesc,
    tagline: "Authentic Visionary" 
  };

  return (
    <div className="Playfair Display relative min-h-screen bg-[#FDFCF8] dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-red-500/30 overflow-hidden">
      {/* 🌟 Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-red-200/30 dark:bg-red-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[10%] w-[600px] h-[600px] bg-green-200/30 dark:bg-green-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* ☕ Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with a rich overlay */}
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
          alt="Ethiopian Coffee Highlands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-snug">
            Delivering the World’s Finest{" "}
            <span className="text-[#A37D5C]">Ethiopian Arabica</span> Coffee
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 max-w-2xl mx-auto shadow-black/20 text-shadow-sm">
            From the birthplace of coffee to global markets — rooted in
            heritage, crafted with precision.
          </p>

          <button
            onClick={() => {
                if (isSignedIn) {
                    navigate('/dashboard');
                } else {
                    openSignIn({
                        afterSignInUrl: '/dashboard',
                        redirectUrl: '/dashboard'
                    });
                }
            }}
            className="inline-block mt-4 bg-[#2D543F]  text-white text-lg font-semibold px-12 py-4 rounded-full shadow-2xl transition duration-300 ease-in-out hover:bg-[#A37D5C] transform hover:scale-105"
          >
            Request a Quote
          </button>
        </div>
      </section>
      
      {/* 🎯 Founder & Visionary Section - Elevated Style */}
      <section className="relative z-10 bg-[#FDFCF8] dark:bg-black/20 py-32 px-6 md:px-20 border-b border-gray-100 dark:border-white/5 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/30 dark:bg-amber-900/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/20 dark:bg-orange-900/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          {/* Meet the Founder Block */}
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column with Gallery Style */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group perspective-1000">
                {/* Main Image Container */}
                <motion.div 
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  className="relative aspect-[4/5] max-w-sm mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(59,46,36,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-10 border-8 border-white dark:border-white/10"
                >
                  <img 
                    src={displayData.image} 
                    alt={displayData.name}
                    className="w-full h-full object-cover object-top transition-all duration-700"
                  />
                  {/* Smooth Golden Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E24]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating ID Badge Style at bottom of image */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{displayData.tagline || "Authentic Visionary"}</p>
                    <p className="text-white text-lg font-bold">Rooted in Heritage</p>
                  </div>
                </motion.div>

                {/* Decorative Frames & Blobs */}
                {/* <div className="absolute -inset-4 border-2 border-[#A37D5C]/20 rounded-[3rem] -z-10 animate-pulse" /> */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl -z-20" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#3B2E24]/5 rounded-full blur-3xl -z-20" />
              </div>

              {/* Title & Name directly under the gallery image */}
              <div className="mt-10 pl-6 border-l-4 border-amber-500">
                <div className="inline-block px-4 py-1.5 bg-[#3B2E24] text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-sm mb-4">
                  {displayData.role}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#3B2E24] dark:text-white leading-none font-serif tracking-tight">
                  {displayData.name}
                </h2>
              </div>
            </motion.div>

            {/* Content Column with Refined Typography */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative space-y-10 lg:pl-10"
            >
              {/* Quote Block with Aesthetic Background */}
              <div className="relative p-10 bg-white dark:bg-white/5 rounded-[2rem] shadow-sm border border-amber-100 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="absolute top-4 left-6 text-7xl font-serif text-amber-500/20">"</span>
                
                <p className="relative z-10 text-2xl md:text-3xl text-[#3B2E24] dark:text-gray-100 font-medium leading-relaxed italic font-serif">
                  {displayData.quote}
                </p>
              </div>

              {/* Main Text Content */}
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p className="font-semibold leading-relaxed whitespace-pre-line">
                  {displayData.description}
                </p>
              </div>

              {/* Signature / Official Stamp Look */}
              <div className="flex items-center gap-6 pt-6">
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl text-[#3B2E24] dark:text-amber-500 font-serif italic opacity-90 tracking-tighter hover:scale-105 transition-transform cursor-default">
                    {displayData.name.split(' ').pop()} 
                  </span>
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#A37D5C] to-transparent mt-1" />
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.5em] mt-3">
                    {displayData.role}
                  </p>
                </div>
                
                {/* Visual Seal/Stamp */}
                <div className="hidden sm:flex w-24 h-24 rounded-full border-2 border-dashed border-amber-500/30 items-center justify-center rotate-12">
                  <span className="text-[8px] font-black text-amber-600/40 text-center uppercase tracking-tighter">
                    Official<br/>Founder<br/>Seal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📜 Company Overview & Mission - Redesigned for Premium Impact */}
      <section className="relative py-32 bg-[#FDFCF8] dark:bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-red-50/50 dark:bg-red-900/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#A37D5C] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Heritage</span>
                <h2 className="text-5xl md:text-6xl font-black text-[#3B2E24] dark:text-white leading-none font-serif">
                  Who We Are
                </h2>
              </div>
              
              <div className="space-y-6 text-xl text-[#3B2E24] dark:text-gray-300 leading-relaxed font-medium">
                <p className="border-l-4 border-amber-500 pl-8 py-2">
                  We are a global Ethiopian coffee export company deeply committed
                  to preserving the integrity of single-origin Arabica. Our
                  lineage connects us directly to the ancient coffee forests of
                  Ethiopia, the world's original source.
                </p>
                <p className="opacity-80">
                  Our operations are founded on three pillars: complete
                  transparency from farm to ship, uncompromising quality
                  excellence validated by SCA standards, and sustainable, ethical
                  partnerships with smallholder farmers who are the custodians of
                  this heritage.
                </p>
              </div>
            </motion.div>

            {/* Floating Mission Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white dark:bg-[#3B2E24] rounded-[3rem] shadow-2xl text-[#3B2E24] dark:text-white border border-gray-100 dark:border-none overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-125 transition-transform duration-700" />
              
              <h3 className="text-3xl font-serif italic mb-10 text-amber-600 dark:text-amber-400">Our Sacred Commitment</h3>
              <ul className="space-y-8">
                {[
                  { title: "Provenance", desc: "Full traceability from specific washing stations." },
                  { title: "Price Integrity", desc: "Above-market returns ensuring farmer prosperity." },
                  { title: "Eco-Harvest", desc: "Minimal impact natural farming practices." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 group/item">
                    <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center shrink-0 group-hover/item:bg-amber-500/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 Values Section - Premium Cards */}
      <section className="relative z-10 bg-white dark:bg-[#050505] py-32 px-6 md:px-20 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-24"
          >
            <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Foundational Values</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#3B2E24] dark:text-white font-serif">
              Built on Principles of Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Unmatched Quality", desc: "Rigorous SCA-grading and moisture control for flavor preservation.", color: "amber" },
              { icon: Leaf, title: "True Sustainability", desc: "Supporting bio-diverse farms and equitable returns for all partners.", color: "green" },
              { icon: LinkIcon, title: "Seed-to-Ship", desc: "Complete lot separation and detailed provenance for every buyer.", color: "blue" },
              { icon: Ship, title: "Global Reliability", desc: "Proven logistics and guaranteed on-time delivery worldwide.", color: "red" }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 bg-[#FDFCF8] dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-${value.color}-500/5 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 flex items-center justify-center bg-white dark:bg-white/10 rounded-2xl shadow-sm mb-8 group-hover:rotate-12 transition-transform`}>
                    <value.icon className={`w-8 h-8 text-${value.color}-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3B2E24] dark:text-white mb-4 font-serif">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* 🗺️ Coffee Regions - Legacy of Flavor */}
    
      <section className="relative py-32 px-6 md:px-20 bg-[#FDFCF8] dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px] block">Regional Significance</span>
              <h2 className="text-5xl md:text-6xl font-black text-[#3B2E24] dark:text-white font-serif leading-none">
                Regional <br/><span className="text-[#A37D5C]">Flavor Signatures</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Ethiopia's vast landscape offers a kaleidoscope of profiles. Each region we source from carries its own unique flavor profile—ranging from bright, wild floral notes to deep, complex winey undertones.
              </p>
            </motion.div>
            
            {/* Traditional Ethiopian Coffee Ceremony Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80" 
                alt="Traditional Ethiopian Coffee Ceremony with Jebena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E24]/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif italic text-2xl">"The Soul of Ethiopian Heritage"</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Yirgacheffe", process: "Washed/Natural", desc: "Highly aromatic, intensely floral (jasmine), bright lemon acidity, delicate body.", color: "amber" },
              { region: "Sidama", process: "Washed/Natural", desc: "Balanced, complex notes of stone fruit, herbal tea, smoothly rounded body.", color: "orange" },
              { region: "Guji", process: "Natural", desc: "Pronounced tropical fruit, ripe red berry sweetness, chocolate undertones.", color: "red" },
              { region: "Harrar", process: "Natural (Dry)", desc: "Distinctive winey acidity, intense wild berry, classic sun-dried spice.", color: "brown" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-serif text-[#3B2E24] dark:text-white group-hover:text-amber-600 transition-colors">
                    {item.region}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-4">
                  {item.process}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
