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
  Heart,
  Linkedin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Specialised Programmes in Data Analytics, Business Analytics, MIS, and AML and More Analytics Tools."
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
    { number: "4700+", label: "Students Trained" },
    { number: "73+", label: "Hiring Partners" },
    { number: "93%", label: "Success Rate" }
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
      <section className="relative pt-28 lg:pt-36 bg-gradient-to-br from-green-50 to-white">
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
              Trusted by Students and Professionals across India for Hands-On Data Learning and Job-Oriented Courses that Prepare You for Success in the Tech-Driven Future.
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
      <section className="pt-8 bg-white">
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
                  At GogalEdu Academy, we are committed to empowering individuals through Data Science and AI Training, equipping them with the essential Skills and Knowledge to excel in the ever-evolving world of Data and Technology.
                </p>
                <p>
                  Established two years ago, our academy has quickly emerged as a trusted name in Data Education in India, celebrated for its Hands-On Data Learning and Job-Oriented Data Courses designed to prepare students for a Successful Career in Data and Technology.
                </p>
                <p>
                  Our mission extends beyond Teaching Cutting-Edge Tools and Techniques, we ensure our Students Master Industry-Ready Data curriculum that meets real-world demands.
                </p>
                
                {/* Founder Section */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        Deepak Gogal - Founder & CEO
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        (Ex – TCS, SONY)
                      </p>
                      <Link 
                        href="https://www.linkedin.com/in/deepak-kumar-036b26b0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                      >
                        <Linkedin className="w-4 h-4 mr-1" />
                        LinkedIn Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
<motion.div
  className="relative"
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div className="rounded-xl sm:rounded-2xl overflow-hidden">
    {/* IMAGE: BIGGER HEIGHT ON ALL DEVICES */}
    <div className="relative w-full 
      h-64         /* mobile: bigger */
      sm:h-80      /* small screens */
      md:h-[28rem] /* medium */
      lg:h-[34rem] /* large */
      xl:h-[40rem] /* extra large */
    ">
      <Image
        src="/companycertificate.png"
        alt="GogalEdu Certificate"
        fill
        className="object-contain"
        sizes="100vw"
      />
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
              Bridging the Gap between Academic Learning and Industry Expectations
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
              Comprehensive Education Solutions, Designed for Your Success
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
              Your Success is Our Mission
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
              Join Hundreds of Successful Students who have Transformed their Careers with GogalEdu Academy.
            </p>
            <Link href="/courses">
              <motion.button
                className="bg-white cursor-pointer text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;