import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center group">
          <div className="h-12 lg:h-10 flex items-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Company Logo"
              className="h-32 w-auto object-contain drop-shadow-md"
            />
          </div>
        </Link>

        {/* CENTER: Navbar */}
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* RIGHT SECTION */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          {/* CTA BUTTON - Desktop */}
          <Link
            to="/contact"
            className="hidden md:flex items-center px-5 py-2 text-sm lg:text-base font-bold uppercase tracking-wider text-white border-2 border-red-600 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:bg-red-600 hover:border-red-600 hover:-translate-y-0.5 transform"
          >
            Get Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden text-white/90 p-2 rounded-md transition duration-200 hover:text-white hover:bg-white/10"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
