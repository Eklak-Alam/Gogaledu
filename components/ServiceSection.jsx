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
  ArrowRight
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
      features: ["Latest Tools", "Real Projects", "Best Practices"]
    },
    {
      icon: Target,
      title: "360° Knowledge Building",
      description: "Develop practical skills through comprehensive projects and structured learning paths.",
      features: ["Hands-on Projects", "Case Studies", "Practical Assignments"]
    },
    {
      icon: Users,
      title: "1:1 Dedicated Mentorship",
      description: "Personalized guidance from industry experts with regular feedback and career support.",
      features: ["Personal Mentors", "Career Guidance", "24/7 Support"]
    },
    {
      icon: Briefcase,
      title: "Dedicated Placement Cell",
      description: "Access to 1000+ hiring partners with interview preparation and resume building support.",
      features: ["1000+ Companies", "Interview Prep", "Resume Building"]
    },
    {
      icon: TrendingUp,
      title: "Multiple Career Opportunities",
      description: "Explore diverse roles across 50+ domains with strong industry networking opportunities.",
      features: ["Diverse Roles", "Industry Networking", "Career Growth"]
    },
    {
      icon: Crown,
      title: "Hall Of Fame",
      description: "Join our elite community of 100K+ successful graduates with proven career transitions.",
      features: ["Success Stories", "Alumni Network", "100K+ Transitions"]
    }
  ];

  const stats = [
    { number: "100K+", label: "Career Transition" },
    { number: "1000+", label: "Hiring Partners" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9/5", label: "Student Rating" }
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

  if (!isVisible) return null;

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
            <span>Why Choose GogalEdu</span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Program{' '}
            <span className="text-green-600">Highlights</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform your career with our comprehensive learning ecosystem designed for success
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
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid - 2 rows, 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
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
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
                className="bg-green-600 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-3 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border cursor-pointer border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Courses
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;