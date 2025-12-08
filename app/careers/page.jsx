'use client';

import { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Award,
  Mail,
  MessageCircle,
  ChevronRight,
  CheckCircle,
  Heart,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CareerData } from '@/db/CareerData';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(CareerData.openPositions[0]);

  const openWhatsApp = () => {
    const message = `Hello Gogaledu Careers Team! I'm interested in the ${selectedJob.title} position.`;
    window.open(`https://wa.me/${CareerData.contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendEmail = () => {
    const subject = `Application for ${selectedJob.title} Position`;
    const body = `Dear Gogaledu Hiring Team,\n\nI am writing to express my interest in the ${selectedJob.title} position.\n\nPlease find my details below:\n\nBest regards,\n[Your Name]`;
    window.location.href = `mailto:${CareerData.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const applyWithGoogleSheet = () => {
    // Replace with your actual Google Sheets form link
    const googleSheetsFormLink = "https://forms.gle/nfTPrh2j79wtRVxc6"; // Your Google Form link here
    window.open(googleSheetsFormLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Career Opportunities at <span className="text-green-600">Gogaledu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {CareerData.tagline}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {CareerData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <Briefcase className="w-5 h-5" />
                Explore Open Positions
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="bg-white cursor-pointer hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Quick Chat
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Join our team of innovators and educators
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Job List */}
            <div className="lg:w-2/5">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Available Positions
                </h3>
                <p className="text-gray-600">
                  {CareerData.openPositions.length} roles open for applications
                </p>
              </div>
              
              <div className="space-y-4">
                {CareerData.openPositions.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedJob.id === job.id 
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 shadow-lg' 
                        : 'bg-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <Briefcase className="w-3 h-3" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      {selectedJob.id === job.id && (
                        <ChevronRight className="w-5 h-5 text-green-500 animate-pulse" />
                      )}
                    </div>
                    <p className="text-gray-600 line-clamp-2">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Job Details */}
            <div className="lg:w-3/5">
              <motion.div
                key={selectedJob.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 h-full"
              >
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                          {selectedJob.department}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                          {selectedJob.type}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                          {selectedJob.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Job Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Key Requirements
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Application CTA Section */}
                  <div className="pt-8 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Apply?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Click the button below to submit your application through our Google Form. 
                        We'll review your submission and get back to you within 3-5 business days.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={applyWithGoogleSheet}
                          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] group"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Apply via Google Form
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button
                          onClick={openWhatsApp}
                          className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Questions? Chat Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Process */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gogaledu?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us an exceptional place to grow your career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Culture */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  Our Culture & Values
                </h2>
                <div className="space-y-4">
                  {CareerData.culture.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 hover:bg-green-50 rounded-lg transition-colors">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Heart className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Hiring Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  Our Hiring Journey
                </h2>
                <div className="space-y-6">
                  {CareerData.hiringProcess.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 group">
                      <div className="relative flex-shrink-0">
                        <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all group-hover:scale-110">
                          {step.step}
                        </div>
                        {step.step < 6 && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-0.5 h-6 bg-green-300"></div>
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-green-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Journey With Us Today
              </h2>
              <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
                Join a team that's passionate about transforming education. 
                Apply now and be part of something meaningful.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <button
                  onClick={applyWithGoogleSheet}
                  className="bg-white text-green-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <ExternalLink className="w-6 h-6" />
                  Apply Now via Google Form
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={openWhatsApp}
                  className="bg-transparent border-2 border-white hover:bg-white/20 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quick Questions? Chat Now
                </button>
              </div>
              
              <div className="pt-8 border-t border-white/30">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
                  <span className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    {CareerData.contactInfo.email}
                  </span>
                  <span className="hidden md:block text-white/50">•</span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp: {CareerData.contactInfo.whatsapp}
                  </span>
                  <span className="hidden md:block text-white/50">•</span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {CareerData.contactInfo.location}
                  </span>
                </div>
                <p className="mt-4 text-white/80">
                  ⏰ {CareerData.contactInfo.workingHours} | 📧 Response within 24-48 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}