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
  FileText,
  Heart,
  Clock,
  Monitor,
  TrendingUp,
  BarChart3,
  Database
} from 'lucide-react';
import { CourseData } from '@/db/CourseData';

// Import your course data

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get first 3 courses for footer
  const featuredCourses = CourseData.slice(0, 3);

  const features = [
    { 
      icon: Users, 
      text: 'Supportive Environment',
      description: 'Personalized guidance and mentorship'
    },
    { 
      icon: BookOpen, 
      text: 'Flexible Learning',
      description: 'Learn at your own pace online/offline'
    },
    { 
      icon: Award, 
      text: 'Up-to-date Curriculum',
      description: 'Industry-relevant course content'
    },
    { 
      icon: Building, 
      text: 'Industry Connections',
      description: 'Strong network with top companies'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  // Course icons mapping
  const getCourseIcon = (courseTitle) => {
    if (courseTitle.includes('MIS')) return <BarChart3 className="w-6 h-6" />;
    if (courseTitle.includes('Business')) return <TrendingUp className="w-6 h-6" />;
    if (courseTitle.includes('Data')) return <Database className="w-6 h-6" />;
    return <BookOpen className="w-6 h-6" />;
  };

  if (!isVisible) return null;

  return (
    <motion.footer
      className="bg-linear-0-to-br from-gray-50 to-white border-t border-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">
                GogalEdu Academy
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-8"
              variants={itemVariants}
            >
              At GogalEdu Academy, we provide a supportive learning environment with 
              flexible course options, up-to-date curriculum, strong industry connections, 
              and a proven track record of successful outcomes.
            </motion.p>

            {/* Features Grid with Better Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        className="p-2 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-200 transition-colors duration-200"
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                          {feature.text}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Popular Courses Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold text-gray-900 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
              Featured Courses
            </motion.h3>
            
            <div className="space-y-4">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#10B981'
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-3">
                    <motion.div
                      className="p-2 bg-green-50 rounded-lg text-green-600 group-hover:bg-green-100 transition-colors duration-200"
                      whileHover={{ rotate: 5 }}
                    >
                      {getCourseIcon(course.title)}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                        {course.title}
                      </h4>
                      
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-600">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Monitor className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-600">{course.mode}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold text-gray-900 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-5 h-5 mr-2 text-green-500" />
              Contact & Links
            </motion.h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <motion.div
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-green-200"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600">
                  Sector 16B-Near SKS World School,<br />
                  Greater Noida, West 201318
                </p>
              </motion.div>

              <motion.a
                href="tel:+917532032388"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group border border-transparent hover:border-green-200"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-green-600">
                  +917532032388
                </span>
              </motion.a>

              <motion.a
                href="mailto:admin@dataempower.in"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group border border-transparent hover:border-green-200"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-green-600">
                  admin@dataempower.in
                </span>
              </motion.a>
            </div>

            {/* Useful Links */}
            <motion.div
              className="bg-green-50 rounded-xl p-4 border border-green-200 hover:border-green-300 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-green-600" />
                Company Info
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium">GOGALEDU ACADEMY (OPC) PRIVATE LIMITED</p>
                <p className="font-mono text-xs bg-white px-3 py-2 rounded-lg border border-green-200">
                  GST: 09AALCG9754H1ZY
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-200 bg-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <span>© GogalEdu 2025</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6"
              variants={containerVariants}
            >
              {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;