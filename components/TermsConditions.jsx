// components/TermsConditions.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, BookOpen, CreditCard, Users, Shield, Mail, Phone, Globe } from 'lucide-react';

const TermsConditions = ({ isOpen, onClose }) => {
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
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Terms & Conditions</h2>
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
              {/* Introduction */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Welcome to GogalEdu Academy
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  By accessing or using our website gogaledu.com, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our website.
                </p>
              </div>

              {/* Sections */}
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By accessing this website, you confirm that:",
                  items: [
                    "You are at least 13 years old.",
                    "You agree to follow all rules, policies, and guidelines provided here.",
                    "You provide accurate information when using our services."
                  ]
                },
                {
                  icon: BookOpen,
                  title: "2. Services Provided",
                  content: "GogalEdu Academy provides:",
                  items: [
                    "Educational programs and training modules",
                    "Online/offline courses",
                    "Student guidance & counseling",
                    "Internship, placement, and career development support",
                    "Workshops, seminars, and awareness programs"
                  ],
                  note: "We reserve the right to modify, update, or discontinue any service at any time."
                },
                {
                  icon: Users,
                  title: "3. User Responsibilities",
                  content: "You agree that you will NOT:",
                  items: [
                    "Use the website for any illegal or unauthorized purpose",
                    "Copy, distribute, or share course content without permission",
                    "Attempt to hack, damage, or disrupt the website",
                    "Misuse our contact forms or communication channels"
                  ],
                  note: "You are responsible for maintaining the confidentiality of your account details."
                },
                {
                  title: "4. Intellectual Property Rights",
                  content: "All content on this website—including:",
                  items: [
                    "Text, videos, graphics, logos",
                    "Course materials",
                    "Training modules",
                    "Website design and layout"
                  ],
                  note: "is the exclusive property of GogalEdu Academy and is protected by copyright laws. You may NOT copy, reproduce, modify, or distribute our content without written permission."
                },
                {
                  icon: CreditCard,
                  title: "5. Payments & Refund Policy",
                  items: [
                    "All payments made for courses or services are final unless otherwise mentioned.",
                    "Refunds are provided only in special cases where GogalEdu Academy approves the request.",
                    "Payment amounts, options, and offers may change without prior notice."
                  ]
                },
                {
                  title: "6. Student Enrollment Policy",
                  content: "By enrolling in any course:",
                  items: [
                    "You agree to attend classes, complete assignments, and follow instructions.",
                    "Misbehavior, misconduct, or violation of policies may result in removal from the program without refund."
                  ]
                },
                {
                  title: "7. Placement & Internship Policy",
                  content: "GogalEdu Academy provides career guidance and placement support, but we do NOT guarantee job placement.",
                  note: "The student's performance, attendance, skill development, and attitude play a major role in hiring outcomes."
                },
                {
                  title: "8. Third-Party Links & Services",
                  content: "Our website may contain links to external websites. We are not responsible for:",
                  items: [
                    "Practices of third-party websites",
                    "Accuracy of their content",
                    "Any loss or damage caused from using them"
                  ],
                  note: "Use third-party sites at your own risk."
                },
                {
                  icon: Shield,
                  title: "9. Privacy Policy",
                  items: [
                    "Your personal information is handled as per our Privacy Policy.",
                    "By using our website, you consent to the collection and use of your data as described in that policy."
                  ]
                },
                {
                  title: "10. Limitation of Liability",
                  content: "GogalEdu Academy is not responsible for:",
                  items: [
                    "Any technical issues, interruptions, or website downtime",
                    "Loss of data, revenue, or business caused by using our website",
                    "Any inaccuracies or errors in content provided"
                  ],
                  note: "Your use of the website is at your own risk."
                },
                {
                  title: "11. Changes to Terms",
                  items: [
                    "We may update or revise these Terms & Conditions at any time.",
                    "Continued use of the website means you accept the updated terms."
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
                        <ul className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="text-green-600 mt-1.5 flex-shrink-0">•</span>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.note && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                          <p className="text-yellow-800 text-sm leading-relaxed">
                            {section.note}
                          </p>
                        </div>
                      )}
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
                  For any queries regarding these Terms & Conditions, contact:
                </p>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p className="font-semibold">GogalEdu Academy</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Email: info@gogaledu.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Phone: 7011408073</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Website: gogaledu.com</span>
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

export default TermsConditions;