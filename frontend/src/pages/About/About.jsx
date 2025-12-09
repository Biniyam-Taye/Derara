import React from "react";
import {
  Award,
  Leaf,
  Search,
  Ship,
  MapPin,
  BadgeCheck,
  Handshake,
  Globe,
  ChevronRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="font-playfair min-h-screen bg-[#050505] text-white selection:bg-[#A37D5C] selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] z-10" />
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
            alt="Ethiopian Coffee Highlands"
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-60 group-hover:scale-110 transition-transform duration-[20s]"
          />
        </div>

        <div className="relative z-20 max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Delivering the World’s Finest <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#A37D5C] to-[#881337] animate-shine bg-[length:200%_auto]">
              Ethiopian Arabica
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            From the <span className="italic text-[#A37D5C]">birthplace of coffee</span> to global markets — rooted in <span className="italic">heritage</span>, created with <span className="italic">precision</span>.
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A37D5C] border border-[#A37D5C]/50 hover:border-[#A37D5C] hover:bg-[#A37D5C]/10 transition-all duration-500 rounded-sm overflow-hidden shadow-[0_0_15px_rgba(163,125,92,0.1)] hover:shadow-[0_0_30px_rgba(163,125,92,0.2)]"
          >
            <span className="relative z-10 transition-colors group-hover:text-[#FDE68A]">Request a Quote</span>
          </a>
        </div>
      </section>

      {/* Company Overview & Mission */}
      <section className="py-24 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A37D5C]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#881337]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <span className="text-[#A37D5C] text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#A37D5C]"></span> Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                  Guardians of <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Coffee Heritage</span>
                </h2>
              </div>
              <div className="prose prose-lg prose-invert text-gray-400 font-light leading-relaxed">
                <p>
                  We are a global Ethiopian coffee export company deeply
                  committed to preserving the <span className="text-white italic">integrity</span> of single-origin
                  Arabica. Our lineage connects us directly to the ancient
                  coffee forests of Ethiopia, the world's original source.
                </p>
                <p>
                  Our operations are founded on three pillars: complete
                  transparency from <span className="text-[#A37D5C] italic">farm to ship</span>, uncompromising quality
                  excellence validated by SCA standards, and sustainable,
                  ethical partnerships with smallholder farmers who are the
                  custodians of this heritage.
                </p>
              </div>
            </div>

            {/* Value Proposition Card */}
            <div className="relative p-10 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-[#A37D5C]/10 transition-shadow duration-500">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#A37D5C]/10 rounded-full blur-xl animate-pulse" />
              
              <h3 className="text-2xl font-bold text-white mb-8 border-l-2 border-[#A37D5C] pl-6 flex flex-col">
                Our Commitment
                <span className="text-sm font-normal text-gray-400 mt-1 italic">To Quality & People</span>
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Full provenance from specific washing stations",
                  "Above-market prices ensuring farmer livelihood",
                  "Minimal impact processing and natural farming practices",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#A37D5C]/10 text-[#A37D5C] flex items-center justify-center mr-4 mt-1 group-hover:bg-[#A37D5C] group-hover:text-[#050505] transition-all duration-300 border border-[#A37D5C]/20 group-hover:border-[#A37D5C]">
                      <BadgeCheck size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-20 bg-[#0A0A0A] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#A37D5C] text-sm font-bold uppercase tracking-[0.2em]">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Core Principles That <span className="italic text-[#881337]">Define Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Unmatched Quality",
                desc: "Rigorous SCA-standard grading and comprehensive cupping reports.",
                glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "True Sustainability",
                desc: "Supporting biodiversity and ensuring equitable returns for partners.",
                glow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Full Transparency",
                desc: "Complete lot separation and detailed provenance for buyers.",
                glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              },
              {
                icon: <Ship className="w-8 h-8" />,
                title: "Global Reliability",
                desc: "Consistent supply chain management and guaranteed on-time delivery.",
                glow: "group-hover:shadow-[0_0_20px_rgba(163,125,92,0.2)]"
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className={`group p-8 bg-[#0F0F0F] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${value.glow}`}
              >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center text-[#A37D5C] mb-6 group-hover:scale-110 group-hover:text-[#FDE68A] transition-all duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-[#A37D5C] transition-colors">
                  {value.title}
                </h3>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Regions */}
      <section className="py-24 px-6 md:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Signatures of <span className="italic text-[#A37D5C]">Ethiopian Coffee</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Distinctive flavor profiles from the country's most renowned
              growing regions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                region: "Yirgacheffe",
                process: "Washed / Natural",
                notes: "Intensely floral, jasmine, bright lemon acidity, delicate body.",
                color: "from-yellow-400/80 to-yellow-600/80",
                accent: "text-yellow-500"
              },
              {
                region: "Sidama",
                process: "Washed / Natural",
                notes: "Balanced stone fruit, herbal tea, smooth and rounded body.",
                color: "from-[#881337]/80 to-[#9F1239]/80", // Wine/Burgundy
                accent: "text-[#881337]"
              },
              {
                region: "Guji",
                process: "Natural",
                notes: "Tropical fruit explosion, ripe berry sweetness, chocolate finish.",
                color: "from-purple-500/80 to-indigo-600/80",
                accent: "text-purple-500"
              },
              {
                region: "Harrar",
                process: "Natural",
                notes: "Winey acidity, intense wild berry, classic sun-dried spice.",
                color: "from-orange-500/80 to-red-600/80",
                accent: "text-orange-500"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group hover:shadow-2xl`}
              >
                {/* Top Gradient Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                
                {/* Hover Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h4 className="text-2xl font-bold text-white group-hover:tracking-wide transition-all duration-300">
                    {item.region}
                  </h4>
                  <MapPin
                    size={20}
                    className={`text-gray-700 group-hover:text-white transition-colors duration-300`}
                  />
                </div>
                <p className={`text-xs font-bold ${item.accent} uppercase tracking-wider mb-4 border-b border-white/5 pb-4`}>
                  {item.process}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-t from-[#0A0A0A] to-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A37D5C]/5 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block p-1 px-4 rounded-full bg-[#A37D5C]/10 border border-[#A37D5C]/20 text-[#A37D5C] text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_10px_rgba(163,125,92,0.1)]">
            Partner with the Source
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-tight">
            Direct Connection to <br /> 
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] to-[#A37D5C]">Ethiopian Excellence</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-12 mb-20 px-4">
            {[
              {
                icon: <BadgeCheck className="w-8 h-8" />,
                title: "Q Grader Certified",
                text: "Verified by licensed Q-Graders.",
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Fair Pricing",
                text: "Ethical sourcing, fair distribution.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Logistics",
                text: "Seamless delivery worldwide.",
              },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-[#C6A87C] mb-6 border border-white/10 group-hover:border-[#C6A87C]/50 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[#C6A87C]/20 group-hover:-rotate-3">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-[200px] group-hover:text-gray-400 transition-colors">
                  {feat.text}
                </p>
              </div>
            ))}
          </div>

          <a
            id="contact"
            href="#"
            className="group relative inline-flex items-center px-12 py-5 bg-[#A37D5C] text-[#050505] text-lg font-bold tracking-wider rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(163,125,92,0.3)] hover:shadow-[0_4px_30px_rgba(163,125,92,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center">
              Contact Sales Team
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
