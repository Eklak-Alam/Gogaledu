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
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

const PlacementSection = () => {
  const [counters, setCounters] = useState({
    partners: 0,
    placements: 0,
    success: 0,
    satisfaction: 0
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

    animateCounter('partners', 1000);
    animateCounter('placements', 10000);
    animateCounter('success', 98);
    animateCounter('satisfaction', 4.9);
  }, []);

  // Fixed particle positions that won't cause hydration mismatch
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "60%" },
    { left: "30%", top: "40%" },
    { left: "40%", top: "80%" },
    { left: "60%", top: "30%" },
    { left: "70%", top: "70%" },
    { left: "80%", top: "50%" },
    { left: "90%", top: "25%" }
  ];

  const features = [
    {
      icon: FileText,
      title: "Professional Resume Building",
      description: "Get your resume crafted by industry experts with ATS optimization and personalized feedback",
      stat: "100% ATS Friendly",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Mock Interview Sessions",
      description: "Practice with real interview scenarios and get detailed feedback from industry experts",
      stat: "50+ Practice Rounds",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 0.2
    },
    {
      icon: Briefcase,
      title: "Exclusive Job Offers",
      description: "Access to premium job opportunities not available elsewhere with direct company referrals",
      stat: "1000+ Companies",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      delay: 0.3
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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  // Only render particles after component is mounted on client
  if (!isMounted) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Fixed Floating Particles - Only render on client */}
        {isMounted && particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-60"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 5, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-700 px-4 py-3 rounded-2xl text-sm font-medium mb-6 border border-green-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4" />
            <span>Career Success Platform</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your Path to{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Dream Career
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive placement support with resume building, mock interviews, and exclusive job opportunities from top companies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          
          {/* Left Side - Enhanced Features */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  custom={feature.delay}
                  className="group relative"
                  whileHover="hover"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 relative z-10">
                      {/* Icon */}
                      <div className="flex items-center gap-4 sm:block sm:w-auto">
                        <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        {/* Stat badge - Mobile */}
                        <span className="sm:hidden px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200">
                          {feature.stat}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {feature.title}
                          </h3>
                          {/* Stat badge - Desktop */}
                          <span className="hidden sm:inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold whitespace-nowrap border border-green-200">
                            {feature.stat}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              );
            })}

            {/* Enhanced CTA Button */}
            <motion.button
              className="w-full bg-gradient-to-r from-green-600 to-green-600 cursor-pointer text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:scale-105 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Career Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Right Side - Animated Counters */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Target,
                value: counters.partners,
                suffix: "+",
                label: "Hiring Partners",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.1
              },
              {
                icon: Users,
                value: counters.placements,
                suffix: "+",
                label: "Students Placed",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.2
              },
              {
                icon: TrendingUp,
                value: counters.success,
                suffix: "%",
                label: "Success Rate",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.3
              },
              {
                icon: Star,
                value: counters.satisfaction,
                suffix: "/5",
                label: "Satisfaction Rate",
                gradient: "from-orange-500 to-red-500",
                delay: 0.4
              }
            ].map((counter, index) => {
              const IconComponent = counter.icon;
              return (
                <motion.div
                  key={counter.label}
                  variants={itemVariants}
                  custom={counter.delay}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  whileHover="hover"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${counter.gradient} opacity-5 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${counter.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {counter.value}{counter.suffix}
                    </div>
                    <div className="text-green-700 text-sm font-medium">
                      {counter.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Features - Enhanced */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              icon: CheckCircle,
              title: "100% Placement Support",
              description: "Dedicated placement cell with personalized career guidance and mentorship",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: FileText,
              title: "Career Services",
              description: "Resume building, LinkedIn optimization, and professional portfolio development",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Briefcase,
              title: "Industry Partnerships",
              description: "Direct access to top companies and exclusive job openings with referrals",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-300 group text-center relative overflow-hidden"
                whileHover="hover"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-lg">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Launch Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Dream Career?
              </span>
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join 10,000+ successful professionals who transformed their careers with our comprehensive placement program
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-600 to-green-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey Today
              </motion.button>
              <motion.button
                className="border border-gray-300 text-gray-700 px-8 cursor-pointer py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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