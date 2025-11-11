// components/FaqSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What qualifications should the Director have to take a New Center?",
      answer: "The Director of the Computer Center must have a minimum qualification of graduation and should hold any degree or diploma in computers."
    },
    {
      question: "What documents are required to take a New Center?",
      answer: "To open a Computer Center and take a New Center, the following documents will be required: Director's Name, Director's Email, Director's Contact Number, Director's Photo, Institute Name, Institute Address, Director's Aadhar Card, Institute Logo, Photo of the Institute's Exterior."
    },
    {
      question: "How much space is required in the Computer Center to take a New Center?",
      answer: "To take a New Center, the Computer Center must have a seating capacity of at least 30 to 50 students and a minimum of 5 meters of space for the teacher's seating and standing area."
    },
    {
      question: "How many computers are required to take a New Center?",
      answer: "To take a New Center, you need to have at least one computer. The remaining computers for students will be provided by the head office. The cost of these computers will initially be covered by the students, but after the course completion, 75% of the amount will be refunded after deducting 25% of the cost. The refund will depend on the condition of the laptop, and any damage will be the student's responsibility."
    },
    {
      question: "What type of diploma is provided after taking the New Center?",
      answer: "After taking the New Center, ISO-certified diplomas are provided to the students. Additionally, proper job preparation and interview sessions are conducted for the students."
    },
    {
      question: "Will study materials for all courses be provided after taking the New Center?",
      answer: "If you take our New Center, you will be provided with PDF files of course notes. Additionally, you will need to register your students on our website and activate their courses. This will enable students to access their online data, including admit cards, ID cards, results, etc. Practical sessions will also be conducted for the students."
    },
    {
      question: "How will students receive their certificates or diplomas after taking the New Center?",
      answer: "After taking the New Center, you need to register the students on the institution's portal for the course for which a certificate or diploma is required. Once the registration and payment are completed, the certificate will be sent to you via email and later dispatched through speed post or courier."
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm lg:text-md text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about opening a new computer center with GogalEdu.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-green-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <motion.button
              className="bg-green-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;