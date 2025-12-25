'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-green-200">
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
                href="/terms-conditions"
                className="px-4 py-2 text-sm font-medium text-green-700 hover:text-green-600 transition-colors"
              >
                Terms & Conditions
              </Link>
              <div className="hidden sm:flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-lg font-bold text-green-900">GogalEdu</span>
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
        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Shield className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-6">
              Your privacy is our priority. Learn how we protect and handle your information.
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
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-green-100">
              <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-4">
                Welcome to GogalEdu Academy OPC Private Limited
              </h2>
              <p className="text-green-700 leading-relaxed text-base sm:text-lg">
                Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile application, or any other services provided by GogalEdu Academy.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-green-100">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      {/* {section.icon && (
                        <div className="p-3 bg-green-100 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <section.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                        </div>
                      )} */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3">
                          {section.title}
                        </h3>
                        
                        {section.content && (
                          <p className="text-green-700 mb-4 leading-relaxed">
                            {section.content}
                          </p>
                        )}
                        
                        {section.items && (
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <span className="text-green-500 mt-1.5 mr-3 flex-shrink-0">•</span>
                                <span className="text-green-700 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="mt-6">
                            <h4 className="font-semibold text-green-900 mb-3">
                              {subsection.title}
                            </h4>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <span className="text-green-500 mt-1.5 mr-3 flex-shrink-0">•</span>
                                  <span className="text-green-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <Mail className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                    <p className="text-green-100 mb-6 text-lg">
                      If you have any questions, complaints, or requests related to this Privacy Policy, please contact us at:
                    </p>
                    <div className="space-y-4 text-white">
                      <div>
                        <p className="font-bold text-xl">GogalEdu Academy OPC Private Limited</p>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-3">
                        <Mail className="w-5 h-5" />
                        <span className="text-lg">Email: info@gogaledu.com</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-3">
                        <Globe className="w-5 h-5" />
                        <span className="text-lg">Website: www.gogaledu.com</span>
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
            className="mt-12 pt-8 border-t border-green-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <Link
                href="/terms-conditions"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>Read Terms & Conditions</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default PrivacyPolicy;