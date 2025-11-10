// components/ServiceSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Users, 
  Target, 
  BookOpen, 
  Briefcase, 
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  PlayCircle,
  Heart,
  Zap,
  Rocket,
  Crown,
  GraduationCap
} from 'lucide-react';

const ServiceSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Industry-Relevant & Updated Syllabus",
      description: "Learn the industry's latest tools, techniques & trends. Gain hands-on experience with cutting-edge technologies and real-world projects.",
      stats: "Updated Monthly",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: ["Latest Tools & Technologies", "Real-world Projects", "Industry Best Practices"]
    },
    {
      icon: Target,
      title: "360° Knowledge Building",
      description: "Develop practical skills through comprehensive projects and assignments. Build a strong foundation with our structured learning path.",
      stats: "50+ Projects",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: ["Hands-on Projects", "Case Studies", "Practical Assignments"]
    },
    {
      icon: Users,
      title: "1:1 Dedicated Mentorship",
      description: "Personalized learning experience from experienced industry professionals. Get individual attention and career guidance.",
      stats: "24/7 Support",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: ["Personal Mentors", "Career Guidance", "Regular Feedback"]
    },
    {
      icon: Briefcase,
      title: "Dedicated Placement Cell",
      description: "Our student placements and 100K+ career transitions speak volumes. We ensure you get the best opportunities in the market.",
      stats: "1000+ Hirings",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: ["1000+ Companies", "Interview Preparation", "Resume Building"]
    },
    {
      icon: TrendingUp,
      title: "Multiple Career Opportunities",
      description: "We don't just educate; we guide you towards your career goals with our dedicated placement pool and industry connections.",
      stats: "50+ Domains",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: ["Diverse Roles", "Industry Networking", "Career Growth"]
    },
    {
      icon: Crown,
      title: "Hall Of Fame",
      description: "Join our elite community of successful graduates. Our student placements and 100K+ career transitions speak volumes about our quality.",
      stats: "100K+ Transitions",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      features: ["Success Stories", "Alumni Network", "Achievement Gallery"]
    }
  ];

  const stats = [
    { icon: Users, number: "100K+", label: "Career Transitions", color: "text-blue-600" },
    { icon: Briefcase, number: "1000+", label: "Hiring Partners", color: "text-green-600" },
    { icon: Award, number: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: Star, number: "4.9/5", label: "Student Rating", color: "text-yellow-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const featureVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  if (!isVisible) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold mb-8 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Zap className="w-5 h-5" />
            <span>Why Choose GogalEdu?</span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Program{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Highlights
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A one-stop destination for all your learning to placement needs. 
            <span className="font-semibold text-green-600"> Transform your career</span> with our comprehensive ecosystem.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
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
                className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-green-300 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Feature Cards */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer group overflow-hidden ${
                    isActive 
                      ? 'border-green-300 shadow-2xl scale-105' 
                      : 'border-gray-100 shadow-lg hover:border-green-200'
                  }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-blue-500"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  {/* Background Pattern */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl bg-gradient-to-r ${feature.color}`} />

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-3 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                        animate={isActive ? { rotate: [0, -5, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${
                            isActive ? 'text-green-600' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h3>
                          <motion.span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}
                            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            {feature.stats}
                          </motion.span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {feature.description}
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-wrap gap-2">
                          {feature.features.map((item, idx) => (
                            <motion.span
                              key={item}
                              className="inline-flex items-center space-x-1 bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{item}</span>
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Side - Active Feature Showcase */}
          <motion.div
            className="sticky top-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className={`bg-white rounded-3xl p-8 border-2 ${features[activeFeature].borderColor} shadow-2xl relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5`}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-green-400/20 rounded-full"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.8,
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 15}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${features[activeFeature].color} text-white rounded-2xl shadow-2xl mb-6`}
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent className="w-10 h-10" />;
                    })()}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {features[activeFeature].title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {features[activeFeature].description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    className="space-y-3 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {features[activeFeature].features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${features[activeFeature].color} rounded-full`} />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${features[activeFeature].color} text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Rocket className="w-5 h-5" />
                    <span>Get Started</span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h3>
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of successful students who have transformed their careers with GogalEdu Academy.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Start Learning Today</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;