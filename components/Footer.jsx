// components/EnhancedFooter.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen,
  Users,
  Award,
  Building,
  FileText
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      icon: Users, 
      text: 'Supportive Environment - Personalized Guidance',
      description: 'Personalized guidance'
    },
    { 
      icon: BookOpen, 
      text: 'Flexible Learning - Learn at Your Pace',
      description: 'Learn at your pace'
    },
    { 
      icon: Award, 
      text: 'Updated Curriculum - Industry-Relevant',
      description: 'Industry-relevant'
    },
    { 
      icon: Building, 
      text: 'Industry Connections -Strong Network',
      description: 'Strong network'
    }
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* About Section */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gray-900">
                GogalEdu Academy
              </span>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Providing Supportive Learning Environment with Flexible Course Options, Updated Curriculum, and Strong Industry Connections for Successful Career Outcomes.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-start space-x-2 p-2 sm:p-3 bg-gray-50 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="p-1 bg-green-100 rounded text-green-600 flex-shrink-0">
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                        {feature.text}
                      </h4>
                      <p className="text-gray-600 text-xs mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact & Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-green-600" />
              Contact Info
            </h3>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                  Unit B-7 Crystaa Tower, C-30, C Block, Sector 63,<br />
                  Noida 201309
                </p>
              </div>

              <a
                href="tel:+917011418073"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-xs sm:text-sm">+917011418073</span>
              </a>

              <a
                href="mailto:info@gogaledu.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-xs sm:text-sm">info@gogaledu.com</span>
              </a>
            </div>

            {/* Company Info */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-green-600" />
                Company Info
              </h4>
              <div className="space-y-1 text-xs text-gray-600">
                <p className="font-medium text-xs">GOGALEDU ACADEMY (OPC) PRIVATE LIMITED</p>
                <p className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-xs">
                  GST: 09AALCG9754H1ZY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-200 bg-gray-50"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="text-gray-600 text-xs sm:text-sm">
              © 2025 GogalEdu Academy. All Rights Reserved.
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              {['Privacy', 'Terms'].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="text-gray-600 hover:text-green-600 text-xs sm:text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;