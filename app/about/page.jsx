// components/AboutPage.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Briefcase,
  Clock,
  Zap,
  Globe,
  Heart
} from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Specialised programmes in data analytics, business intelligence, machine learning, and cloud computing."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Seasoned industry professionals bringing real-world expertise into the classroom."
    },
    {
      icon: Zap,
      title: "Practical Learning",
      description: "Hands-on approach through live projects, case studies, and interactive workshops."
    },
    {
      icon: TrendingUp,
      title: "Proven Placement Success",
      description: "Hundreds of students placed in top companies with strong job placement partnerships."
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Industry-Centric Training",
      description: "Practical, job-ready skills that match real-world demands"
    },
    {
      icon: Award,
      title: "Globally Recognized Certifications",
      description: "Enhance your professional credibility worldwide"
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Small class sizes and dedicated mentors for unique learning styles"
    },
    {
      icon: Briefcase,
      title: "Guaranteed Career Assistance",
      description: "Job placement support and interview coaching"
    },
    {
      icon: Clock,
      title: "Lifelong Learning",
      description: "Continuous access to resources and updates after course completion"
    },
    {
      icon: Globe,
      title: "Cutting-Edge Resources",
      description: "Access to advanced tools and expert faculty"
    }
  ];

  const stats = [
    { number: "2+", label: "Years of Excellence" },
    { number: "100+", label: "Students Trained" },
    { number: "50+", label: "Hiring Partners" },
    { number: "98%", label: "Success Rate" }
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
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-10 lg:pb-16 lg:pt-36 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              About GogalEdu
            </motion.div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Empowering Futures Through{' '}
              <span className="text-green-600">Data Education</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed px-2">
              Trusted by students and professionals across India for hands-on data learning 
              and job-oriented courses that prepare you for success in the tech-driven future.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                About GogalEdu Academy
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At GogalEdu Academy, we are committed to empowering individuals through data science 
                  training and data analytics courses, equipping them with the essential skills and 
                  knowledge to excel in the ever-evolving world of data and technology.
                </p>
                <p>
                  Established two years ago, our academy has quickly emerged as a trusted name in data 
                  education in India, celebrated for its hands-on data learning and job-oriented data 
                  courses designed to prepare students for a successful career in data and technology.
                </p>
                <p>
                  Our mission extends beyond teaching cutting-edge tools and techniques; we ensure our 
                  students master industry-ready data curriculum that meets real-world demands.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-green-600 mx-auto mb-2 sm:mb-4" />
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 px-2">
                    Transforming Careers Through Quality Education
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-3xl mx-auto">
              Bridging the gap between academic learning and industry expectations
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Our mission is to bridge the gap between academic learning and industry expectations 
                  by equipping our students with future-ready skills through an industry-ready curriculum. 
                  We are dedicated to ensuring they achieve career success from day one and are fully 
                  prepared to make meaningful contributions to the professional world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              What We Offer
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Comprehensive education solutions designed for your success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
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
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose GogalEdu Academy?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Your success is our mission
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-sm transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded text-green-600 flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-green-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their careers with GogalEdu Academy.
            </p>
            <motion.button
              className="bg-white text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;