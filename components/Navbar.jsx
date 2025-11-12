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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  // Don't render anything during SSR to avoid hydration mismatch
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse" />
            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse lg:hidden" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100" 
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Clean without background/shadow */}
          <Link 
            href="/" 
            className="flex items-center z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.jpg"
                alt="GogalEdu Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium text-sm uppercase tracking-wide relative group transition-colors duration-200"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons - Right Side */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <Link
              href="/signup"
              className="px-5 py-2.5 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-sm flex items-center"
            >
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Link>

            <Link
              href="/login"
              className="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 text-sm flex items-center"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="lg:hidden fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel - Fixed height to not exceed screen */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white z-50 flex flex-col"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white shrink-0">
                  <Link 
                    href="/" 
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/logo.jpg"
                        alt="GogalEdu Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="ml-3 text-lg font-semibold text-gray-900">GogalEdu</span>
                  </Link>
                  
                  <button
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items - Scrollable area */}
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-1 p-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium rounded-lg transition-all duration-200 group"
                          onClick={handleLinkClick}
                        >
                          <span className="flex items-center">
                            {item.name}
                            <span className="ml-auto h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-6" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Buttons - Fixed at bottom */}
                <div className="p-6 border-t border-gray-100 bg-white space-y-3 shrink-0">
                  <Link
                    href="/signup"
                    className="w-full py-3 px-4 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all duration-200 flex items-center justify-center"
                    onClick={handleLinkClick}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign Up
                  </Link>

                  <Link
                    href="/login"
                    className="w-full py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center"
                    onClick={handleLinkClick}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Link>
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