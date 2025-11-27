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
  CheckCircle,
  Building,
  Users,
  Star,
  Navigation
} from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
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
    setFormData({ name: '', contactNo: '', email: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Unit B-7 Crystaa Tower, C-30, C Block, Sector 63, Noida 201309",
      link: null
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@gogaledu.com",
      link: "mailto:info@gogaledu.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7011418073",
      link: "tel:+917011418073"
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
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
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

        {/* SECTION 1: Contact Information & Form */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = item.link ? (
                    <a 
                      href={item.link} 
                      className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-gray-600">{item.content}</span>
                  );

                  return (
                    <motion.div
                      key={item.title}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                          {item.title}
                        </h3>
                        <div className="text-sm">
                          {content}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Response Info */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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
          </div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  {/* Contact No Field */}
                  <div>
                    <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Contact No *
                    </label>
                    <input
                      type="tel"
                      id="contactNo"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                      placeholder="Enter your contact number"
                    />
                  </div>
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-sm sm:text-base hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2"
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
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 2: Location & Centers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          {/* Location Card */}
          <motion.div
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Our Location</h3>
              <p className="text-gray-600 text-sm mb-4">
                Easily accessible location in Noida
              </p>
              <a 
                href="https://maps.app.goo.gl/7RseTLigbDAwUuyo9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors duration-300"
              >
                <Navigation className="w-4 h-4 mr-2" />
                View on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Offline Center Card */}
          <motion.div
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">Our Offline Center</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900 text-sm">Muzaffarnagar</span>
                  <a 
                    href="https://maps.app.goo.gl/wQJPf2o5j6M8pRju8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-xs font-medium"
                  >
                    View Map →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Centers Card */}
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 hover:shadow-md transition-all duration-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">Upcoming Centers</h3>
              <div className="grid grid-cols-1 gap-2">
                {["Meerut", "Agra", "Lucknow"].map((city, index) => (
                  <div key={index} className="text-center p-3 bg-white rounded-lg border border-orange-200">
                    <span className="font-medium text-gray-900 text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 3: Opportunities */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          {/* Franchise Opportunity */}
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-md transition-all duration-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Unlock a High-Value Franchise Opportunity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Join our network as a franchise partner
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/">
                  <motion.button
                    className="w-full bg-green-600 cursor-pointer text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Our Expansion Team →
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Admission Partner */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 hover:shadow-md transition-all duration-200"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Become an Official GogalEdu Admission Partner
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Partner with us for student admissions
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/">
                  <motion.button
                    className="w-full bg-blue-600 cursor-pointer text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect With Our Team →
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;