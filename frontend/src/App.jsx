import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ServicesPage from "./pages/Services/Service";
import Blogs from "./pages/Blogs/Blog";
import AboutPage from "./pages/About/About";
import Products from "./pages/products/Products";
// import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    // <ThemeProvider>
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
    // </ThemeProvider>
  );
};

export default App;
