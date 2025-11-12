// components/CertificateSection.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CertificateSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Certificate Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Certificate Image Container */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://gogaledu.com/wp-content/uploads/2025/07/1-480x380.png"
                  alt="GogalEdu Course Certificate"
                  className="object-cover"
                />
                
                {/* Fallback Certificate Design */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 border-4 border-yellow-400 rounded-lg flex items-center justify-center p-8">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Course Certificate</h3>
                    <p className="text-gray-600">GogalEdu Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity 
              }}
            >
              <Award className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                <Award className="w-4 h-4" />
                <span>Get Certified</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Earn Your{' '}
                <span className="text-green-600">Professional Certificate</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Validate Your Skills with An Industry-Recognized Certificate that Enhances Your Resume and Opens Doors to Better Career Opportunities
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200">
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4300K+</div>
                <div className="text-sm text-gray-600">Students Certified</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link href="/courses">
                <motion.button
                  className="w-full cursor-pointer bg-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-800 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Certified Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>

              {/* Still Have Questions Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 mt-2 rounded-2xl p-6 border border-blue-200 text-center"
              >
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can't Find the Answer You're Looking For? Please Reach Out to Our Friendly Team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact" className="flex-1">
                    <motion.button
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contact Us</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;