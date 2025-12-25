'use client';

import { motion } from 'framer-motion';
import { FileText, BookOpen, CreditCard, Users, Shield, Mail, Phone, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const TermsConditions = () => {
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
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sections = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="hidden sm:flex items-center space-x-2">
                <FileText className="w-6 h-6 text-green-600" />
                <span className="text-lg font-bold text-gray-900">GogalEdu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="bg-gradient-to-r from-green-600 to-cyan-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6">
              Understand the rules and guidelines for using GogalEdu Academy services.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Welcome to GogalEdu Academy
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                By accessing or using our website gogaledu.com, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our website.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      {/* {section.icon && (
                        <div className="p-3 bg-green-100 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <section.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                        </div>
                      )} */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                          {section.title}
                        </h3>
                        
                        {section.content && (
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {section.content}
                          </p>
                        )}
                        
                        {section.items && (
                          <ul className="space-y-3 mb-4">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <span className="text-green-500 mt-1.5 mr-3 flex-shrink-0">•</span>
                                <span className="text-gray-700 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {section.note && (
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                            <p className="text-yellow-800 leading-relaxed">
                              {section.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                    <p className="text-green-100 mb-6 text-lg">
                      For any queries regarding these Terms & Conditions, contact:
                    </p>
                    <div className="space-y-4 text-white">
                      <div>
                        <p className="font-bold text-xl">GogalEdu Academy</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-3">
                        <Mail className="w-5 h-5" />
                        <span className="text-lg">Email: info@gogaledu.com</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-3">
                        <Phone className="w-5 h-5" />
                        <span className="text-lg">Phone: 7011408073</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-3">
                        <Globe className="w-5 h-5" />
                        <span className="text-lg">Website: gogaledu.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
                >
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>Go to Homepage</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default TermsConditions;