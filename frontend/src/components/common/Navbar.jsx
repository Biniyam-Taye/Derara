import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Latest Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex space-x-1 xl:space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-inner">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-full group ${isActive
                  ? "text-white bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
            >
              {link.name}
              {/* Optional: subtle glow effect for non-active links on hover if desired, 
                  but the bg-white/10 handles it elegantly. */}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navbar Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex justify-end transition-opacity duration-300 ${mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop (Click to close) */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Menu */}
        <div
          className={`relative w-[80%] max-w-sm h-full bg-gray-900 border-l border-white/10 shadow-2xl flex flex-col pt-24 pb-10 px-8 transition-transform duration-500 ease-out transform ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`group flex items-center justify-between text-lg font-bold uppercase tracking-wider border-b border-white/5 pb-3 transition-all duration-300 ${mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                    } ${isActive
                      ? "text-red-500 border-red-500/50"
                      : "text-white/70 hover:text-white hover:border-white/30"
                    }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${isActive
                      ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                      : "bg-transparent group-hover:bg-red-500"
                      }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto">
            <p className="text-white/40 text-xs text-center uppercase tracking-widest">
              Derara &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
