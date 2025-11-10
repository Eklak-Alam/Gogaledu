// app/courses/[slug]/page.jsx
'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CourseData } from '@/db/CourseData';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  BookOpen,
  CheckCircle,
  PlayCircle,
  Target,
  Award,
  FileText,
  Users,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const CourseDetailPage = ({ params }) => {
  const { slug } = use(params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openMonth, setOpenMonth] = useState(0);

  useEffect(() => {
    // Find the course data
    const foundCourse = CourseData.find(c => c.slug === slug);
    setCourse(foundCourse);
    setLoading(false);
  }, [slug]);

  const toggleMonth = (index) => {
    setOpenMonth(openMonth === index ? -1 : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-20">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/courses" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Courses</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="hidden sm:inline">GogalEdu</span>
              <span>&gt;</span>
              <span>Courses</span>
              <span>&gt;</span>
              <span className="text-gray-900 font-medium truncate max-w-[100px] sm:max-w-none">
                {course.title}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of your component remains the same */}
      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Left Column - Course Image & Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Course Stats - Compact Design */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                    {course.duration.split(' ')[0]}
                  </div>
                  <div className="text-[10px] sm:text-xs text-green-700 truncate">Duration</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                    {course.level.split(' ')[0]}
                  </div>
                  <div className="text-[10px] sm:text-xs text-blue-700 truncate">Level</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                    {course.mode.split('/')[0]}
                  </div>
                  <div className="text-[10px] sm:text-xs text-purple-700 truncate">Mode</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Course Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Course Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {course.level.split(' to ')[0]}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span className="text-xs sm:text-sm font-medium">4.8</span>
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h1>

                {course.achievementGoal && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                    <h3 className="font-semibold text-green-800 mb-1 flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4" />
                      What You'll Achieve
                    </h3>
                    <p className="text-green-700 text-xs sm:text-sm">
                      {course.achievementGoal}
                    </p>
                  </div>
                )}
              </div>

              {/* Key Features - Compact Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <BookOpen className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Projects</div>
                    <div className="text-gray-600 text-[10px] sm:text-xs">Hands-on</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <Users className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Mentors</div>
                    <div className="text-gray-600 text-[10px] sm:text-xs">Experts</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Certificate</div>
                    <div className="text-gray-600 text-[10px] sm:text-xs">Industry</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <FileText className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Placement</div>
                    <div className="text-gray-600 text-[10px] sm:text-xs">Support</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <motion.button
                  className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Enroll Now</span>
                </motion.button>
                <motion.button
                  className="w-full border cursor-pointer border-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-base hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Free Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Course Curriculum
            </h2>
            
            <div className="space-y-3 max-w-4xl mx-auto">
              {course.syllabus.map((month, monthIndex) => (
                <motion.div
                  key={monthIndex}
                  className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleMonth(monthIndex)}
                    className="w-full cursor-pointer p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        {monthIndex + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                          {month.month.split(':')[0]}
                        </h3>
                        <p className="text-gray-600 text-xs mt-0.5">
                          {month.weeks.length} week{month.weeks.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    {openMonth === monthIndex ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {openMonth === monthIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-3 sm:p-4 space-y-3">
                        {month.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="bg-white rounded-lg p-3 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm">
                              {week.title}
                            </h4>
                            <ul className="space-y-1">
                              {week.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="flex-1">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bonus Section */}
      {course.bonusAddOns && (
        <section className="py-8 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Bonus Materials
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
                Extra resources to accelerate your learning journey
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
                {course.bonusAddOns.map((bonus, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-3 text-left border border-green-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -1 }}
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-xs sm:text-sm font-medium">{bonus}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Ready to Master {course.title}?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
              Join thousands of students who have transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-4 h-4" />
                <span>Enroll Now</span>
              </motion.button>
              <motion.button
                className="border border-gray-300 cursor-pointer text-gray-700 px-6 py-3 rounded-lg font-semibold text-base hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-4 h-4" />
                <span>Free Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;