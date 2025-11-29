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
  ChevronUp,
  Zap,
  Shield,
  Globe,
  Briefcase,
  Heart
} from 'lucide-react';
import { useState, useEffect } from 'react';

const CourseDetailPage = ({ params }) => {
  const { slug } = use(params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openMonth, setOpenMonth] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundCourse = CourseData.find(c => c.slug === slug);
    setCourse(foundCourse);
    setLoading(false);
  }, [slug]);

  const toggleMonth = (index) => {
    setOpenMonth(openMonth === index ? -1 : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative lg:pt-36 lg:pb-10 pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    {course.level}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Globe className="w-4 h-4" />
                    {course.mode}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {course.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master {course.title} with hands-on projects, expert mentorship, and industry-relevant curriculum designed to launch your career.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{course.rating}</div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">Student Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{course.students}</div>
                    <div className="text-green-600 mb-1">
                      <Users className="w-5 h-5 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-500">Students Enrolled</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{course.project}+</div>
                    <div className="text-green-600 mb-1">
                      <Briefcase className="w-5 h-5 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-green-600 mb-1">
                      <Shield className="w-5 h-5 mx-auto" />
                    </div>
                    <div className="text-xs text-gray-500">Placement Support</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl sticky top-24 overflow-hidden">
                {/* Course Image */}
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6">
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      className="w-full cursor-pointer bg-green-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Enroll Now</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-[70px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {['overview', 'curriculum'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-6 py-4 font-semibold text-sm border-b-2 transition-all duration-200 ${
                  activeTab === tab
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* What You'll Learn */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-green-600" />
                    What You'll Achieve
                  </h2>
                  {course.achievementGoal && (
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {course.achievementGoal}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Build real-world projects",
                      "Master industry tools",
                      "Get job-ready skills",
                      "Build professional portfolio"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonus Materials */}
                {course.bonusAddOns && (
                  <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-2xl p-6 border border-green-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Award className="w-6 h-6 text-purple-600" />
                      Bonus Materials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.bonusAddOns.map((bonus, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white/80 rounded-lg border border-white">
                          <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Course Features</h3>
                  <div className="space-y-4">
                    {[
                      { icon: BookOpen, text: 'Hands-on Projects', color: 'green' },
                      { icon: Users, text: 'Expert Mentors', color: 'green' },
                      { icon: Award, text: 'Certificate', color: 'green' },
                      { icon: Briefcase, text: 'Career Support', color: 'green' },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                          <feature.icon className={`w-5 h-5 text-${feature.color}-600`} />
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Curriculum</h2>
                  <p className="text-gray-600">Complete step-by-step learning path</p>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {course.syllabus.map((month, monthIndex) => (
                    <div key={monthIndex} className="group">
                      <button
                        onClick={() => toggleMonth(monthIndex)}
                        className="w-full cursor-pointer p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                              {month.month.split(':')[0]}
                            </h3>
                          </div>
                        </div>
                        {openMonth === monthIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                        )}
                      </button>

                      {openMonth === monthIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-gray-50 border-t border-gray-200"
                        >
                          <div className="p-6 space-y-4">
                            {month.weeks.map((week, weekIndex) => (
                              <div key={weekIndex} className="bg-white rounded-xl p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                                    {weekIndex + 1}
                                  </div>
                                  {week.title}
                                </h4>
                                <ul className="space-y-2">
                                  {week.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-start gap-3 text-gray-600">
                                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="flex-1 leading-relaxed">{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Add Outcomes and Reviews tabs content similarly */}

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our industry-focused curriculum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-green-600 cursor-pointer px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Enroll Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;