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
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Only Certificate */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Certificate Image Container */}
            <div className="relative bg-white rounded-xl p-4 shadow-lg border border-gray-200/60 w-full">
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 w-full">
                <div className="overflow-hidden">
                  <img
                    src="/certificate.png"
                    alt="GogalEdu Course Certificate"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Floating Award Icon */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-600 text-white p-2 rounded-lg shadow-md"
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
          </motion.div>

          {/* Right Side - All Content (Natural Height) */}
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm font-medium border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-4 h-4" />
                <span>Get Certified</span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Earn Your{' '}
                <span className="text-green-600">Professional Certificate</span>
              </motion.h2>
              
              <motion.p
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Validate Your Skills with An Industry-Recognized Certificate that Enhances Your Resume and Opens Doors to Better Career Opportunities
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-3">
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
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats - Without Background Color */}
            <motion.div
              className="grid grid-cols-2 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-2xl font-bold text-gray-900">4300+</div>
                <div className="text-sm text-gray-600 mt-2">Students Certified</div>
              </div>
              <div className="text-center p-4">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-2xl font-bold text-gray-900">93%</div>
                <div className="text-sm text-gray-600 mt-2">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Questions Link - Above Main Button */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Still have questions? Contact our friendly team</span>
          </Link>
        </motion.div>

        {/* Full Width CTA Button - Separate Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link href="/verify" className="block w-full">
            <motion.div
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer border-2 border-transparent hover:border-green-300/30"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Verify Your Certificate</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;