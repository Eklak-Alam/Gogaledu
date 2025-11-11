// components/ServiceSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Crown,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Zap
} from 'lucide-react';

const ServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description: "Learn with the latest tools and technologies updated monthly to match industry demands.",
      features: ["Latest Tools", "Real Projects", "Best Practices"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 0.1
    },
    {
      icon: Target,
      title: "360° Knowledge Building",
      description: "Develop practical skills through comprehensive projects and structured learning paths.",
      features: ["Hands-on Projects", "Case Studies", "Practical Assignments"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.2
    },
    {
      icon: Users,
      title: "1:1 Dedicated Mentorship",
      description: "Personalized guidance from industry experts with regular feedback and career support.",
      features: ["Personal Mentors", "Career Guidance", "24/7 Support"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.3
    },
    {
      icon: Briefcase,
      title: "Dedicated Placement Cell",
      description: "Access to 1000+ hiring partners with interview preparation and resume building support.",
      features: ["1000+ Companies", "Interview Prep", "Resume Building"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Multiple Career Opportunities",
      description: "Explore diverse roles across 50+ domains with strong industry networking opportunities.",
      features: ["Diverse Roles", "Industry Networking", "Career Growth"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      delay: 0.5
    },
    {
      icon: Crown,
      title: "Hall Of Fame",
      description: "Join our elite community of 100K+ successful graduates with proven career transitions.",
      features: ["Success Stories", "Alumni Network", "100K+ Transitions"],
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      delay: 0.6
    }
  ];

  const stats = [
    { number: "100K+", label: "Career Transitions", icon: Zap },
    { number: "1000+", label: "Hiring Partners", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "4.9/5", label: "Student Rating", icon: Star }
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

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  if (!isVisible) return null;

  return (
    <section className="pt-16 pb-10 lg:pb-10 lg:pt-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"
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
            <CheckCircle className="w-4 h-4" />
            <span>Why Choose GogalEdu</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Program{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              Highlights
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform your career with our comprehensive learning ecosystem designed for success in the digital age
          </motion.p>
        </motion.div>

        {/* Stats Section - Improved for Mobile */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-gray-200/60 hover:border-green-300 shadow-sm hover:shadow-lg transition-all duration-300 group"
                whileHover="hover"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid - Responsive Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={service.delay}
                className="group relative"
                whileHover="hover"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/60 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon with Gradient */}
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow relative z-10 text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6 relative z-10">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center space-x-3 text-sm text-gray-600"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors duration-300 relative z-10 mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section - Responsive */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-sm">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Career?
              </span>
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of successful students who have transformed their careers with GogalEdu
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 cursor-pointer sm:px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-105 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-4 cursor-pointer rounded-xl font-semibold text-base hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Courses
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;