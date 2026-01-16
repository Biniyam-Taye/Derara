import React, { useState, useEffect } from "react";

const TornPaperDivider = ({ flip = false }) => (
  <div className={`w-full ${flip ? 'rotate-180' : ''} -mb-1`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z"
              fill="currentColor"
              className="text-white dark:text-black">
              <animate attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z;
                       M0,5 C120,25 240,30 360,35 C480,30 600,20 720,15 C840,20 960,35 1080,40 C1200,35 1320,15 1440,5 L1440,120 L0,120 Z;
                       M0,0 C120,20 240,35 360,30 C480,25 600,15 720,20 C840,25 960,40 1080,35 C1200,30 1320,10 1440,0 L1440,120 L0,120 Z"/>
          </path>
      </svg>
  </div>
);

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [certRes, testRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/ops/certificates`),
          fetch(`${import.meta.env.VITE_API_URL}/ops/testimonials`)
        ]);
        const certData = await certRes.json();
        const testData = await testRes.json();
        setCertificates(Array.isArray(certData) ? certData.filter(c => c.isVisible !== false) : []);
        setTestimonials(Array.isArray(testData) ? testData.filter(t => t.isVisible !== false) : []);
      } catch (err) {
        console.error("Failed to fetch certifications/testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const certScrollRef = React.useRef(null);
  const testScrollRef = React.useRef(null);
  const [certPaused, setCertPaused] = useState(false);
  const [testPaused, setTestPaused] = useState(false);

  useEffect(() => {
      const scrollContainer = certScrollRef.current;
      if (!scrollContainer) return;
      let animationFrameId;
      const scroll = () => {
        if (!certPaused) {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
             scrollContainer.scrollLeft = 0; 
          } else {
             scrollContainer.scrollLeft += 0.8; 
          }
        }
        animationFrameId = requestAnimationFrame(scroll);
      };
      animationFrameId = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationFrameId);
  }, [certPaused, certificates]);

  useEffect(() => {
    const scrollContainer = testScrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId;
    const scroll = () => {
      if (!testPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
           scrollContainer.scrollLeft = 0; 
        } else {
           scrollContainer.scrollLeft += 0.8; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
}, [testPaused, testimonials]);

  if (loading || (certificates.length === 0 && testimonials.length === 0)) return null;

  return (
    <section className="py-20 bg-white dark:bg-black border-y border-gray-200 dark:border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/3 dark:bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Certificates Section */}
      {certificates.length > 0 && (
        <div className="container mx-auto px-6 mb-24 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our <span className="text-red-500">Certificates</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are committed to maintaining the highest standards of quality and excellence.
            </p>
          </div>

          <div 
            className="flex w-full overflow-x-auto mask-linear-gradient scrollbar-hide"
            ref={certScrollRef}
            onMouseEnter={() => setCertPaused(true)}
            onMouseLeave={() => setCertPaused(false)}
            onTouchStart={() => setCertPaused(true)}
            onTouchEnd={() => setCertPaused(false)}
          >
            <div className="flex py-4 space-x-10 px-5 w-max">
                  {/* Original */}
                  {certificates.map((cert) => (
                    <div key={`${cert._id}-1`} className="group relative bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30 w-[400px] md:w-[500px] flex-shrink-0">
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors whitespace-normal">{cert.title}</h3>
                        <p className="text-gray-700 dark:text-gray-400 text-sm whitespace-normal">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                  {/* Dup 1 */}
                  {certificates.map((cert) => (
                    <div key={`${cert._id}-2`} className="group relative bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30 w-[400px] md:w-[500px] flex-shrink-0">
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors whitespace-normal">{cert.title}</h3>
                        <p className="text-gray-700 dark:text-gray-400 text-sm whitespace-normal">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                   {/* Dup 2 */}
                   {certificates.map((cert) => (
                    <div key={`${cert._id}-3`} className="group relative bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30 w-[400px] md:w-[500px] flex-shrink-0">
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors whitespace-normal">{cert.title}</h3>
                        <p className="text-gray-700 dark:text-gray-400 text-sm whitespace-normal">{cert.description}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-12">
            <h3 className="text-center text-red-500 uppercase tracking-[0.2em] text-sm font-semibold mb-2">
              Testimonials
            </h3>
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
              What Our Partners Say
            </h2>
          </div>

          <style>
            {`
            @keyframes scroll-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-scroll-rtl {
              animation: scroll-rtl 50s linear infinite;
            }
            `}
          </style>

          <div 
             className="flex w-full overflow-x-auto mask-linear-gradient scrollbar-hide"
             ref={testScrollRef}
             onMouseEnter={() => setTestPaused(true)}
             onMouseLeave={() => setTestPaused(false)}
             onTouchStart={() => setTestPaused(true)}
             onTouchEnd={() => setTestPaused(false)}
            >
            <div className="flex py-4 space-x-8 px-5 w-max">
                  {testimonials.map((testimonial) => (
                     <div
                      key={`${testimonial._id}-1`}
                      className="w-[350px] bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-6 rounded-2xl flex flex-col space-y-4 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors whitespace-normal shadow-sm flex-shrink-0"
                    >
                      <p className="text-gray-700 dark:text-gray-300 italic font-medium">"{testimonial.feedback}"</p>
                      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-red-500/50"
                        />
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-500 text-xs">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {testimonials.map((testimonial) => (
                     <div
                      key={`${testimonial._id}-2`}
                      className="w-[350px] bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-6 rounded-2xl flex flex-col space-y-4 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors whitespace-normal shadow-sm flex-shrink-0"
                    >
                      <p className="text-gray-700 dark:text-gray-300 italic font-medium">"{testimonial.feedback}"</p>
                      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-red-500/50"
                        />
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-500 text-xs">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {testimonials.map((testimonial) => (
                     <div
                      key={`${testimonial._id}-3`}
                      className="w-[350px] bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 p-6 rounded-2xl flex flex-col space-y-4 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors whitespace-normal shadow-sm flex-shrink-0"
                    >
                      <p className="text-gray-700 dark:text-gray-300 italic font-medium">"{testimonial.feedback}"</p>
                      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-red-500/50"
                        />
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-bold text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-500 text-xs">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
