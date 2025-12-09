import React from "react";
import { Mountain, Droplets, Award, ArrowRight } from "lucide-react";
import yirgacheffeImage from "../../assets/yirgacheffe.jpg";
import sidamaImage from "../../assets/sidamma.jpg";
import limuImage from "../../assets/limu.jpg";
import gujiImage from "../../assets/guji.jpg";
import harrarImage from "../../assets/harrar.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const coffeeProducts = [
    {
      id: 1,
      region: "Yirgacheffe",
      type: "Washed Process",
      description:
        "Known as the crown jewel of Ethiopian coffee, Yirgacheffe beans are celebrated globally for their distinctive floral boquet and complex flavor profile. Grown in the high altitudes of the Gedeo Zone, these beans undergo a rigorous wet processing method that enhances their tea-like body and lemony brightness. Perfect for those who appreciate clarity and elegance in their cup.",
      profile: "Jasmine, Honeysuckle, Bergamot, Lemon Zest",
      elevation: "1,800 - 2,200m",
      score: "89+",
      image: yirgacheffeImage,
      tag: "Floral & Bright",
    },
    {
      id: 2,
      region: "Sidama",
      type: "Natural Process",
      description:
        "Sidama is the birthplace of coffee itself, offering a diverse range of flavors from arguably the most famous coffee-producing region. These natural process beans are sundried on African beds, allowing the fruit to impart a deep, wine-like sweetness and a rich, creamy body. A robust choice that balances acidity with a profound fruity complexity.",
      profile: "Apricot, Peach, Dark Chocolate, Red Wine",
      elevation: "1,500 - 2,200m",
      score: "87+",
      image: sidamaImage,
      tag: "Fruity & Sweet",
    },
    {
      id: 3,
      region: "Guji",
      type: "Natural Process",
      description:
        "Guji coffees have recently stormed the specialty scene with their unique terroir. Isolated in the southern highlands, Guji beans benefit from rich, volcanic soil that produces an explosively sweet profile. Expect a jammy mouthfeel and intense berry notes that are clean, distinct, and incredibly vibrant.",
      profile: "Strawberry Jam, Blueberry, Tropical Fruit, Honey",
      elevation: "1,800 - 2,300m",
      score: "90+",
      image: gujiImage,
      tag: "Exotic & Jammy",
    },
    {
      id: 4,
      region: "Harrar",
      type: "Dry Process",
      description:
        "Harrar is one of the oldest coffee varieties, grown in the eastern highlands. Famous for its intense, heavy body and distinct blueberry notes, it is often referred to as the 'mocha' of coffees. These beans are dry-processed, preserving the wild, gamey, and spicy characteristics that make Ethiopian coffee legendary.",
      profile: "Wild Blueberry, Cardamom, Cocoa, Dried Figs",
      elevation: "1,400 - 2,000m",
      score: "85+",
      image: harrarImage,
      tag: "Bold & Wild",
    },
    {
      id: 5,
      region: "Limu",
      type: "Washed Process",
      description:
        "Limu coffee is grown in the southwest of Ethiopia and is generally wet-processed. It is known for being a well-balanced cup with a distinctively spicy flavor and sweet wine-like acidity. It offers a sharper edge than Sidama but remains incredibly smooth, making it a favorite for lovers of a classic, rounded espresso.",
      profile: "Sweet Spice, Brown Sugar, Mild Citrus, Floral",
      elevation: "1,100 - 1,900m",
      score: "86+",
      image: limuImage,
      tag: "Spicy & Balanced",
    },
  ];

  return (
    <div className="Playfair Display min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white selection:bg-red-500/30">
      {/* 🌟 Hero Section */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase animate-fade-in-up">
            Our Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Ethiopia's Finest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Green Coffee
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Sourced exclusively from the renowned high-altitude regions of
            Ethiopia. Each bean tells a story of heritage, soil, and sunlight.
          </p>
        </div>
      </section>

      {/* ☕ Product Detail List (Alternating) */}
      <section className="py-10 px-6 md:px-20 max-w-8xl mx-auto space-y-32">
        {coffeeProducts.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Half */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] h-[400px] lg:h-[600px] border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img
                  src={product.image}
                  alt={product.region}
                  className="w-200 h-150 object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                  <Award className="text-red-500 w-8 h-8" />
                  <div>
                    <p className="text-xs text-gray-300 uppercase tracking-wider">
                      SCA Score
                    </p>
                    <p className="text-xl font-bold text-white">
                      {product.score}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div
                className={`absolute -z-10 w-full h-full top-6 ${
                  index % 2 === 0 ? "left-6" : "right-6"
                } bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
            </div>

            {/* Content Half */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1 rounded-full bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest border border-red-500/20">
                    {product.tag}
                  </span>
                  <span className="text-gray-400 text-sm font-medium tracking-wide">
                    {product.type}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {product.region}
                </h2>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />

              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Mountain className="text-orange-400 w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-200">
                      Elevation
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm">{product.elevation}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="text-blue-400 w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-200">
                      Key Notes
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm">{product.profile}</p>
                </div>
              </div>

              {/* <div className="pt-6">
                <button className="group flex items-center gap-2 text-white bg-transparent hover:text-red-500 transition-colors duration-300 font-semibold text-lg pb-1 border-b border-transparent hover:border-red-500">
                  Sourcing Details{" "}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </section>

      {/* 🚀 Final CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-red-900/5 -skew-y-3 transform origin-bottom-right" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Experience the Origin?
          </h2>
          <p className="text-xl text-gray-400">
            Contact our sourcing team for current harvest availability, sample
            requests, and shipping logistics.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
          >
            Request Latest Offer Sheet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
