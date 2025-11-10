// components/PlacementSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const PlacementSection = () => {
  const [counters, setCounters] = useState({
    partners: 0,
    placements: 0,
    success: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;

    const animateCounter = (key, target) => {
      let current = 0;
      const step = target / steps;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    };

    animateCounter('partners', 500);
    animateCounter('placements', 10000);
    animateCounter('success', 98);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Professional Resume Building",
      description: "Get your resume crafted by industry experts with ATS optimization",
      stat: "100% ATS Friendly"
    },
    {
      icon: Users,
      title: "Mock Interview Sessions",
      description: "Practice with real interview scenarios and get detailed feedback",
      stat: "50+ Practice Rounds"
    },
    {
      icon: Briefcase,
      title: "Exclusive Job Offers",
      description: "Access to premium job opportunities not available elsewhere",
      stat: "500+ Companies"
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "98%",
      label: "Placement Success Rate"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Students Placed"
    },
    {
      icon: Briefcase,
      number: "500+",
      label: "Hiring Partners"
    },
    {
      icon: CheckCircle,
      number: "4.9/5",
      label: "Student Satisfaction"
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Placement Support</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            One Stop For{' '}
            <span className="text-green-600">Placement Needs</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Resume Support, Mock Interviews, Exclusive Job Offers & more...
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-16">
          
          {/* Left Side - Features */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon - Top on mobile, Left on desktop */}
                    <div className="flex items-center gap-4 sm:block sm:w-auto">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      
                      {/* Stat badge - Show on mobile only */}
                      <span className="sm:hidden px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        {feature.stat}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                          {feature.title}
                        </h3>
                        {/* Stat badge - Hide on mobile, show on desktop */}
                        <span className="hidden sm:inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold whitespace-nowrap">
                          {feature.stat}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.button
              className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Courses Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>

          {/* Right Side - Counters */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-green-50 rounded-xl p-4 sm:p-6 text-center border border-green-200"
            >
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {counters.partners}+
              </div>
              <div className="text-green-700 text-xs sm:text-sm font-medium">Hiring Partners</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-green-50 rounded-xl p-4 sm:p-6 text-center border border-green-200"
            >
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {counters.placements}+
              </div>
              <div className="text-green-700 text-xs sm:text-sm font-medium">Students Placed</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-green-50 rounded-xl p-4 sm:p-6 text-center border border-green-200 sm:col-span-2"
            >
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {counters.success}%
              </div>
              <div className="text-green-700 text-xs sm:text-sm font-medium">Placement Success Rate</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: CheckCircle,
              title: "100% Placement Support",
              description: "Dedicated placement cell with personalized guidance"
            },
            {
              icon: FileText,
              title: "Career Services",
              description: "Resume building, LinkedIn optimization, and portfolio development"
            },
            {
              icon: Briefcase,
              title: "Industry Partnerships",
              description: "Direct access to top companies and exclusive job openings"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 group text-center"
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-100 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-12 border border-gray-200">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Launch Your Career?
            </motion.h3>
            <motion.p 
              className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of successful professionals who transformed their careers with our placement program.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full sm:w-auto bg-green-600 cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-700 transition-colors duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="w-full sm:w-auto border cursor-pointer border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Success Stories
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementSection;