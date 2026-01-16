import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useUser();
  
  const userRole = user?.publicMetadata?.role || 'customer';

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

  const isBlogPage = location.pathname === '/blog';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isBlogPage
        ? "bg-white/95 dark:bg-black/80 backdrop-blur-md shadow-lg py-3 border-b border-gray-100 dark:border-white/10"
        : "bg-transparent py-5 border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center group relative z-[60] flex-shrink-0">
          <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
            <Logo />
          </div>
        </Link>

        {/* CENTER: Navbar */}
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* CTA BUTTON - Desktop & Mobile */}
          {user ? (
            <Link
              to={userRole === 'admin' ? '/admin-dashboard' : userRole === 'manager' ? '/manager-dashboard' : userRole === 'employee' ? '/employee-dashboard' : '/dashboard'}
              className="flex items-center px-2 py-1 md:px-5 md:py-2 text-[10px] md:text-sm lg:text-base font-bold uppercase tracking-wider text-white bg-red-600 dark:bg-transparent dark:text-white border-2 border-red-600 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:bg-red-700 dark:hover:bg-red-600 hover:border-red-700 dark:hover:border-red-600 hover:-translate-y-0.5 transform font-outfit"
            >
              Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Link
                to="/login"
                className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 font-outfit whitespace-nowrap"
              >
                Log In
              </Link>
              <Link
                to="/sign-up"
                className="px-2 py-1 md:px-5 md:py-2 text-[10px] md:text-sm font-bold uppercase tracking-wider text-white bg-red-600 border-2 border-red-600 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:bg-red-700 hover:border-red-700 hover:-translate-y-0.5 transform font-outfit whitespace-nowrap"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-lg bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 border border-gray-300 dark:border-white/20 transition-all duration-300 text-gray-900 dark:text-white hover:scale-110 flex-shrink-0"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden relative z-[60] p-1 md:p-2 rounded-md transition duration-200 flex-shrink-0 ${
              mobileOpen
                 ? "text-white hover:bg-white/10"
                 : scrolled || isBlogPage
                 ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                 : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
