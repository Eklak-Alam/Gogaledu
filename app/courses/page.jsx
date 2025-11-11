// app/courses/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Clock, 
  ArrowRight, 
  BookOpen,
  PlayCircle,
  Calendar,
  Star,
  Users,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import { CourseData } from '@/db/CourseData';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
            course.level === 'Beginner' ? 'bg-green-500' :
            course.level === 'Intermediate' ? 'bg-yellow-500' :
            'bg-red-500'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>4.8</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-green-600 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Course Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-green-600" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{course.mode}</span>
          </div>
        </div>

        {/* Achievement Goal */}
        {course.achievementGoal && (
          <div className="mb-4 flex-1">
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {course.achievementGoal}
            </p>
          </div>
        )}

        {/* Syllabus Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {course.syllabus.slice(0, 3).map((month, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-2 py-1 rounded-lg text-xs font-medium border border-green-200/50"
            >
              {month.month.split(':')[0].replace('Month', 'M')}
            </span>
          ))}
          {course.syllabus.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs border border-gray-300">
              +{course.syllabus.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <Link href={`/courses/${course.slug}`}>
            <motion.button
              className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-green-600 group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Course</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: "5+", label: "Courses", icon: BookOpen },
    { number: "10K+", label: "Students", icon: Users },
    { number: "98%", label: "Success Rate", icon: CheckCircle },
    { number: "4.9/5", label: "Rating", icon: Star }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 text-green-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium mb-4 border border-green-200">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>GogalEdu › Courses</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Popular{' '}
              <span className="text-green-600">Courses</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header Section */}
      <section className="pt-36 lg:pt-36 pb-12 lg:pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-green-700 px-4 py-2 rounded-xl text-sm font-medium mb-6 border border-green-200 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <BookOpen className="w-4 h-4" />
              <span>GogalEdu › Courses</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover Our{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Courses
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Master in-demand skills with industry-relevant curriculum, hands-on projects, and expert mentorship
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-lg text-center"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-3">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              All Available{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated courses designed to launch your tech career
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {CourseData.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Learn With{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                GogalEdu?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in your tech career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: "Industry-Relevant Curriculum",
                description: "Learn the latest tools and technologies used by top companies with regularly updated content"
              },
              {
                icon: Users,
                title: "Expert Mentors",
                description: "Learn from industry professionals with 5+ years of real-world experience and proven track records"
              },
              {
                icon: Zap,
                title: "Career Support",
                description: "Get dedicated placement assistance, resume building, and interview preparation support"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-200/60 hover:border-green-300 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                Learning Journey?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Join thousands of students who have transformed their careers with our industry-focused courses and expert mentorship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Book Free Demo Class</span>
              </motion.button>
              <motion.button
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-white transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Counselor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;