// components/CertificateSection.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  Users,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';
import Link from 'next/link';

const CertificateSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Certificate Image with "Still have questions?" section */}
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Certificate Image Container */}
            <div className="relative bg-white rounded-2xl p-4 sm:p-4 shadow-xl border border-gray-200/60 w-full max-w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 w-full">
                <img
                  src="https://gogaledu.com/wp-content/uploads/2025/07/1-480x380.png"
                  alt="GogalEdu Course Certificate"
                  className="object-cover w-full h-full"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Floating Award Icon */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-600 text-white p-2 rounded-xl shadow-lg"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity 
                }}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </div>

            {/* Still Have Questions Section - Below Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 sm:p-6 border border-blue-200/60 w-full"
            >
              <div className="text-center mb-4">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Can't Find the Answer You're Looking For? Please Reach Out to Our Friendly Team.
                </p>
              </div>
              
              <Link href="/contact">
                <motion.button
                  className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group shadow-lg hover:shadow-xl text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Contact Us</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Get Certified</span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Earn Your{' '}
                <span className="text-green-600">Professional Certificate</span>
              </motion.h2>
              
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Validate Your Skills with An Industry-Recognized Certificate that Enhances Your Resume and Opens Doors to Better Career Opportunities
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Industry Recognized Certification",
                "Digital & Printable Format", 
                "Lifetime Validity",
                "Shareable on Professional Networks",
                "Verified by GogalEdu Academy",
                "Boosts Job Prospects"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
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
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">4300K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Students Certified</div>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Full Width CTA Button - Separate Section */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link href="/courses" className="block w-full">
            <motion.div
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group cursor-pointer border-2 border-transparent hover:border-green-300/30"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg sm:text-xl">Get Certified Today</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;