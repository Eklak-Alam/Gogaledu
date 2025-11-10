// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking on link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 relative">
              <img
                src="/logo.jpg"
                alt="GogaleDu Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              {/* Fallback if image doesn't load */}
              <div className="hidden w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GD</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 font-medium text-sm uppercase tracking-wide relative group pb-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full mt-1" />
              </a>
            ))}
          </div>

          {/* Desktop Buttons - Right Side */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <Link
              href="/signup"
              className="px-6 py-2 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors duration-200 text-sm flex items-center"
            >
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Link>

            <Link
              href="/login"
              className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm flex items-center"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header with Close Button */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/logo.jpg"
                          alt="GogaleDu Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        {/* Fallback if image doesn't load */}
                        <div className="hidden w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">GD</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-4 px-4 text-gray-700 hover:text-green-600 font-medium border-b border-gray-100 transition-colors duration-200 group"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                        <span className="block h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full mt-1" />
                      </a>
                    ))}
                  </div>

                  {/* Mobile Buttons */}
                  <div className="pt-6 border-t border-gray-200 space-y-4 lg:hidden">
                    <Link
                      href="/signup"
                      className="w-full py-3 px-4 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors duration-200 flex items-center justify-center"
                      onClick={handleLinkClick}
                    >
                      <User className="w-5 h-5 mr-2" />
                      Sign Up
                    </Link>

                    <Link
                      href="/login"
                      className="w-full py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                      onClick={handleLinkClick}
                    >
                      <LogIn className="w-5 h-5 mr-2" />
                      Login
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;