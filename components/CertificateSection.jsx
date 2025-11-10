// components/CertificateSection.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  Star, 
  Users,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const CertificateSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Certificate Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Certificate Frame */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl border border-gray-200 mx-2">
              {/* Certificate Design */}
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-yellow-400 p-4 sm:p-6 lg:p-8 shadow-inner">
                
                {/* Certificate Header */}
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Course Completion Certificate</h3>
                  <p className="text-gray-600 text-sm sm:text-base">GogalEdu Academy</p>
                </div>

                {/* Decorative Line */}
                <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-4 sm:mb-6"></div>

                {/* Certificate Body */}
                <div className="text-center">
                  <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base lg:text-lg font-semibold">
                    This is to certify that
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    [Student Name]
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    has successfully completed the course requirements and demonstrated proficiency in the subject matter.
                  </p>
                  
                  {/* Signature Area */}
                  <div className="flex justify-between items-end mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 border-t border-gray-300">
                    <div className="text-center flex-1">
                      <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-gray-400 mx-auto mb-1"></div>
                      <p className="text-xs sm:text-sm text-gray-600">Instructor Signature</p>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">GogalEdu</p>
                      <p className="text-xs sm:text-sm text-gray-600">Academy Seal</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">2024</div>
                      <p className="text-xs sm:text-sm text-gray-600">Date of Issue</p>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border border-yellow-400 rounded-full"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border border-yellow-400 rounded-full"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border border-yellow-400 rounded-full"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border border-yellow-400 rounded-full"></div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg sm:shadow-xl lg:shadow-2xl"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity 
              }}
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div>
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-green-200"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Get Certified</span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Earn Your{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Course Certificate
                </span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Showcase your skills with an industry-recognized certificate that validates your expertise 
                and boosts your career prospects.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Industry recognized certification",
                "Digital & printable format", 
                "Lifetime validity",
                "Shareable on LinkedIn & resumes",
                "Verified by GogalEdu Academy",
                "Enhances job opportunities"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 py-4 sm:py-6 border-y border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Users, number: "10K+", label: "Students Certified" },
                { icon: Star, number: "4.9/5", label: "Satisfaction Rate" },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500 mx-auto mb-1 sm:mb-2" />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/courses">
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Try Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              
              <p className="text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
                Start your learning journey and earn your certificate today
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;