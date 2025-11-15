// components/PrivacyPolicy.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye, FileText, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const closeButtonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 90, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.9 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
      >
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-0"
          variants={containerVariants}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Privacy Policy</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Last Updated: 01/11/2025</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-1.5 cursor-pointer sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex-shrink-0"
                variants={closeButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(95vh-65px)] sm:max-h-[calc(90vh-80px)] px-3 sm:px-6 py-4 sm:py-6">
            <motion.div variants={itemVariants} className="max-w-none">
              {/* Welcome Section */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Welcome to GogalEdu Academy OPC Private Limited
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile application, or any other services provided by GogalEdu Academy.
                </p>
              </div>

              {/* Sections */}
              {[
                {
                  icon: FileText,
                  title: "1. Information We Collect",
                  content: `We may collect the following types of information from you:`,
                  subsections: [
                    {
                      title: "A. Personal Information",
                      items: [
                        "Full Name",
                        "Email Address",
                        "Mobile Number",
                        "Address / Location",
                        "Educational Details",
                        "Login Credentials (if applicable)"
                      ]
                    },
                    {
                      title: "B. Non-Personal Information",
                      items: [
                        "Device Information (browser type, IP address, OS, etc.)",
                        "Usage Data (pages visited, time spent, etc.)",
                        "Cookies and analytics data"
                      ]
                    },
                    {
                      title: "C. Payment Information",
                      items: [
                        "If you enroll in any course, we may collect payment-related details through secure payment gateways.",
                        "We do not store your card or bank information on our servers."
                      ]
                    }
                  ]
                },
                {
                  icon: Eye,
                  title: "2. How We Use Your Information",
                  content: "We use the collected information for:",
                  items: [
                    "Course registration and communication",
                    "Sending updates, offers, and announcements",
                    "Improving our training programs and user experience",
                    "Providing customer support",
                    "Meeting legal and regulatory requirements"
                  ]
                },
                {
                  icon: Lock,
                  title: "3. Data Protection and Security",
                  items: [
                    "We take all reasonable steps to protect your personal data from unauthorized access, alteration, or disclosure.",
                    "Data is stored on secure servers with SSL encryption and access control."
                  ]
                },
                {
                  icon: Shield,
                  title: "4. Sharing of Information",
                  content: "We do not sell or rent your personal information to any third party. However, information may be shared with:",
                  items: [
                    "Government or Legal Authorities (only when required by law)",
                    "Payment Processors (for course fee payments)",
                    "Trusted Partners for Communication and Learning Management"
                  ]
                },
                {
                  title: "5. Cookies Policy",
                  items: [
                    "Our website may use cookies to improve user experience and analyze web traffic.",
                    "You can disable cookies through your browser settings, but certain website features may not work properly without them."
                  ]
                },
                {
                  title: "6. Data Retention",
                  items: [
                    "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law."
                  ]
                },
                {
                  title: "7. Your Rights",
                  content: "You have the right to:",
                  items: [
                    "Access, Update, or Delete Your Personal Information",
                    "Withdraw Consent for Promotional Messages",
                    "Request data portability or correction",
                    "To exercise your rights, please contact us via the email provided below."
                  ]
                },
                {
                  title: "8. Third-Party Links",
                  items: [
                    "Our platform may contain links to other websites or platforms. Gogaledu Academy is not responsible for their privacy practices or content."
                  ]
                },
                {
                  title: "9. Children's Privacy",
                  items: [
                    "Our services are intended for individuals above 16 years of age. We do not knowingly collect information from minors."
                  ]
                },
                {
                  title: "10. Updates to This Policy",
                  items: [
                    "We may update this Privacy Policy from time to time. Updates will be posted on our website with a new effective date."
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    {/* {section.icon && (
                      <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg flex-shrink-0 mt-0.5">
                        <section.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                    )} */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        {section.title}
                      </h4>
                      {section.content && (
                        <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed">
                          {section.content}
                        </p>
                      )}
                      {section.items && (
                        <ul className="space-y-1.5 sm:space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="text-green-600 mt-1.5 flex-shrink-0">•</span>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="mt-3 sm:mt-4">
                          <h5 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                            {subsection.title}
                          </h5>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <span className="text-green-600 mt-1.5 flex-shrink-0">•</span>
                                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                variants={itemVariants}
                className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Contact Us</h4>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  If you have any questions, complaints, or requests related to this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p className="font-semibold">GogalEdu Academy OPC Private Limited</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Email: info@gogaledu.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Website: www.gogaledu.com</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyPolicy;