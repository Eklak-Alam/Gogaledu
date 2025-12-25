// components/EnhancedFooter.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen,
  UserPlus,
  Store,
  Building2,
  Briefcase,
  FileText,
  Link2,
  Award
} from 'lucide-react';
import { BsInstagram, BsThreads, BsTwitter } from 'react-icons/bs';
import { LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: 'Admission Partner', href: '/admission-partner', icon: UserPlus },
    { name: 'Franchise Partner', href: '/franchise-partner', icon: Store },
    { name: 'New Center Application', href: '/new-center', icon: Building2 },
    { name: 'Career', href: '/careers', icon: Briefcase },
    { name: 'Certificate Verification', href: '/verify', icon: Award },
  ];

  const socialLinks = [
    { icon: BsThreads, href: 'https://www.threads.com/@gogaledu_academy', color: 'hover:text-blue-600' },
    { icon: BsTwitter, href: 'https://x.com/gogaledu57079', color: 'hover:text-blue-400' },
    { icon: BsInstagram, href: 'https://www.instagram.com/gogaledu_academy', color: 'hover:text-pink-600' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/gogaledu-academy/', color: 'hover:text-blue-700' },
    { icon: YoutubeIcon, href: 'https://youtube.com/@gogaleduacademy', color: 'hover:text-red-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.footer
      className="bg-white border-t border-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* About Section - Left */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                GogalEdu Academy
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Providing Supportive Learning Environment with Flexible Course Options, Updated Curriculum, and Strong Industry Connections for Successful Career Outcomes.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-green-100 ${social.color} hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links - Center - Single Column */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <Link2 className="w-5 h-5 mr-2 text-green-600" />
              Quick Links
            </h3>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center space-x-3 p-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="w-5 h-5 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                    <span className="text-sm font-medium">
                      {link.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info - Right */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              Contact Info
            </h3>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-start space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-green-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-600 text-sm leading-tight group-hover:text-green-700 transition-colors">
                  Unit B-7 Crystaa Tower, C-30, C Block, Sector 63,<br />
                  Noida 201309
                </p>
              </motion.div>

              <motion.a
                href="tel:+917011418073"
                className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-all duration-200 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-green-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+917011418073</span>
              </motion.a>

              <motion.a
                href="mailto:info@gogaledu.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-all duration-200 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-green-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@gogaledu.com</span>
              </motion.a>
            </div>

            {/* Company Info */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <h4 className="font-medium text-gray-900 text-sm mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-green-600" />
                Company Info
              </h4>
              <div className="space-y-2 text-xs text-gray-600">
                <p className="font-medium">GOGALEDU ACADEMY (OPC) PRIVATE LIMITED</p>
                <p className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-xs hover:border-green-300 transition-colors">
                  GST: 09AALCG9754H1ZY
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-200 bg-gray-50"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-gray-600 text-sm text-center sm:text-left">
              © 2025 GogalEdu Academy. All Rights Reserved.
            </div>

            {/* Legal Links - Updated to use Next.js Link */}
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" passHref>
                <motion.div
                  className="text-gray-600 hover:text-green-600 text-sm transition-colors duration-200 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy
                </motion.div>
              </Link>
              
              <Link href="/terms-conditions" passHref>
                <motion.div
                  className="text-gray-600 hover:text-green-600 text-sm transition-colors duration-200 font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Terms & Conditions
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;