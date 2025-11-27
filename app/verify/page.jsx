// components/CertificateVerificationPage.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  Download,
  Shield,
  FileText,
  User,
  Calendar,
  Award,
  BookOpen,
  Mail
} from 'lucide-react';

const CertificateVerificationPage = () => {
  const [certificateId, setCertificateId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Mock certificate data - in real app, this would come from API
  const mockCertificateData = {
    id: 'GOGAL2024001',
    studentName: 'Rahul Sharma',
    courseName: 'Advanced Data Analytics & Business Intelligence',
    completionDate: '15 December 2024',
    issueDate: '20 December 2024',
    skills: [
      'Data Analysis',
      'Python Programming',
      'SQL Database',
      'Power BI',
      'Machine Learning',
      'Statistical Analysis',
      'Data Visualization'
    ],
    status: 'Verified',
    grade: 'A+',
    instructor: 'Deepak Gogal',
    isValid: true
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      return;
    }

    setIsVerifying(true);
    setSearchPerformed(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock verification logic
    if (certificateId.toUpperCase() === 'GOGAL2024001') {
      setVerificationResult({
        success: true,
        data: mockCertificateData,
        message: 'Certificate verified successfully!'
      });
    } else {
      setVerificationResult({
        success: false,
        data: null,
        message: 'Certificate not found. Please check the Certificate ID and try again.'
      });
    }
    
    setIsVerifying(false);
  };

  const handleReset = () => {
    setCertificateId('');
    setVerificationResult(null);
    setSearchPerformed(false);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Certificate Verification
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Verify Your <span className="text-green-600">Certificate</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your Certificate ID to verify the authenticity of your GogalEdu certificate
          </p>
        </motion.div>

        {/* Verification Form */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verify Certificate
            </h2>
            <p className="text-gray-600">
              Enter your Certificate ID to validate your credentials
            </p>
          </div>

          <form onSubmit={handleVerify} className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-3">
                Certificate ID *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter your Certificate ID (e.g., GA-XXX-XXX-XXX)"
                  className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-lg"
                  disabled={isVerifying}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Find your Certificate ID on your issued certificate document
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={isVerifying || !certificateId.trim()}
              className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-3"
              whileHover={{ scale: isVerifying ? 1 : 1.02 }}
              whileTap={{ scale: isVerifying ? 1 : 0.98 }}
            >
              {isVerifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>Verify Certificate</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Verification Result */}
        <AnimatePresence>
          {searchPerformed && verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
            >
              {verificationResult.success ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Success Header */}
                  <motion.div
                    className="text-center mb-8"
                    variants={itemVariants}
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Certificate Verified!
                    </h3>
                    <p className="text-green-600 font-semibold">
                      {verificationResult.message}
                    </p>
                  </motion.div>

                  {/* Certificate Details */}
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                    variants={containerVariants}
                  >
                    {/* Left Column - Basic Info */}
                    <motion.div
                      className="space-y-6"
                      variants={itemVariants}
                    >
                      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                          <User className="w-5 h-5 mr-2 text-green-600" />
                          Student Information
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Full Name:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.studentName}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Certificate ID:</span>
                            <p className="font-semibold text-green-600">{verificationResult.data.id}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                          <Award className="w-5 h-5 mr-2 text-blue-600" />
                          Course Details
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Course:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.courseName}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Grade:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.grade}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Instructor:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.instructor}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column - Dates & Skills */}
                    <motion.div
                      className="space-y-6"
                      variants={itemVariants}
                    >
                      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                          Timeline
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Completion Date:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.completionDate}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Issue Date:</span>
                            <p className="font-semibold text-gray-900">{verificationResult.data.issueDate}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Status:</span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              {verificationResult.data.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {verificationResult.data.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-700 border border-purple-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Certificate</span>
                    </motion.button>
                    <motion.button
                      onClick={handleReset}
                      className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Verify Another</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                /* Error State */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Certificate Not Found
                  </h3>
                  <p className="text-red-600 font-semibold mb-6">
                    {verificationResult.message}
                  </p>
                  <div className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                    <p>Please check that you've entered the correct Certificate ID.</p>
                    <p>If the problem persists, contact our support team.</p>
                  </div>
                  <motion.button
                    onClick={handleReset}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Again
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Section */}
        {!searchPerformed && (
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Need Help Finding Your Certificate ID?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Check Your Certificate</h4>
                <p className="text-sm text-gray-600">
                  Look for the Certificate ID on your digital or physical certificate
                </p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Check Your Email</h4>
                <p className="text-sm text-gray-600">
                  Find the certificate issuance email in your inbox
                </p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Support</h4>
                <p className="text-sm text-gray-600">
                  Reach out to our support team for assistance
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CertificateVerificationPage;