// components/PlacementSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Award, 
  Star, 
  Rocket,
  TrendingUp,
  CheckCircle,
  Zap,
  ArrowRight,
  PlayCircle,
  Target,
  Crown
} from 'lucide-react';

const PlacementSection = () => {
  const [counters, setCounters] = useState({
    partners: 0,
    counselling: 0,
    placements: 0
  });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const increment = (target, key) => target / steps;

    const animateCounter = (key, target) => {
      let current = 0;
      const step = increment(target, key);
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
    animateCounter('counselling', 1500);
    animateCounter('placements', 10000);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Professional Resume Building",
      description: "Get your resume crafted by industry experts with ATS optimization",
      color: "from-blue-500 to-cyan-500",
      stat: "100% ATS Friendly"
    },
    {
      icon: Users,
      title: "Mock Interview Sessions",
      description: "Practice with real interview scenarios and get detailed feedback",
      color: "from-green-500 to-emerald-500",
      stat: "50+ Practice Rounds"
    },
    {
      icon: Briefcase,
      title: "Exclusive Job Offers",
      description: "Access to premium job opportunities not available elsewhere",
      color: "from-purple-500 to-pink-500",
      stat: "500+ Companies"
    }
  ];

  const stats = [
    {
      icon: Target,
      number: "98%",
      label: "Placement Rate",
      suffix: "Success",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      number: "4.9",
      label: "Student Satisfaction",
      suffix: "/5 Rating",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: TrendingUp,
      number: "2.5x",
      label: "Average Salary Hike",
      suffix: "Increase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Crown,
      number: "1000+",
      label: "Career Transitions",
      suffix: "Monthly",
      color: "from-purple-500 to-pink-500"
    }
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-500 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-bold mb-8 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Zap className="w-5 h-5" />
            <span>Guaranteed Career Success</span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            One Stop Destination For{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              All Placement Needs
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Resume Support, Mock Interview, Exclusive Job Offers! & more…
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Features */}
          <motion.div
            className="space-y-6"
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
                  variants={cardVariants}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 shadow-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <motion.span
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30"
                            whileHover={{ scale: 1.1 }}
                          >
                            {feature.stat}
                          </motion.span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Explore Courses Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Counter Cards */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 grid grid-cols-2 gap-6 mb-6"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {counters.partners}+
                  </motion.div>
                  <div className="text-blue-300 text-sm font-medium">Hiring Partners</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 text-center relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  >
                    {counters.counselling}+
                  </motion.div>
                  <div className="text-green-300 text-sm font-medium">Counselling Sessions</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Additional Stats */}
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center hover:border-green-400/50 transition-all duration-500 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl lg:text-3xl font-bold text-white mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-xs font-medium">{stat.label}</div>
                  <div className="text-green-400 text-xs font-bold">{stat.suffix}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: CheckCircle,
              title: "100% Placement Support",
              description: "Dedicated placement cell with personalized guidance",
              color: "text-green-400"
            },
            {
              icon: Star,
              title: "Premium Career Services",
              description: "Resume building, LinkedIn optimization, and portfolio development",
              color: "text-yellow-400"
            },
            {
              icon: Target,
              title: "Industry Partnerships",
              description: "Direct access to top companies and exclusive job openings",
              color: "text-blue-400"
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-500 group text-center"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <IconComponent className={`w-8 h-8 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Launch Your Career?
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of successful professionals who transformed their careers with our placement program.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Start Your Journey</span>
              </motion.button>
              <motion.button
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-bold text-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Success Stories</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementSection;