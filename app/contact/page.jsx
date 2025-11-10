// components/ContactPage.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Sector 16B-Near SKS World School, Greater Noida, West 201318",
      link: null
    },
    {
      icon: Mail,
      title: "Email",
      content: "admin@dataempower.in",
      link: "mailto:admin@dataempower.in"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7532032388",
      link: "tel:+917532032388"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      link: null
    }
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
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Get In Touch
          </motion.div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          
          <p className="text-sm sm:text-base lg:text-md text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-4"
            >
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-green-600 mt-1">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors"
                  >
                    <span className="sr-only">Close</span>
                    <span className="text-lg">×</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h2>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = item.link ? (
                  <a 
                    href={item.link} 
                    className="text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    {item.content}
                  </a>
                ) : (
                  <span className="text-gray-600">{item.content}</span>
                );

                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {content}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Easily accessible location in Greater Noida
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Map View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm"
              whileHover={{ shadow: "lg" }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;