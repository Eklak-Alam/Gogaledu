// app/courses/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Clock, 
  Users, 
  ArrowRight, 
  BookOpen,
  CheckCircle,
  PlayCircle,
  Calendar,
  Target
} from 'lucide-react';
import { CourseData } from '@/db/CourseData';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Section - Fixed Height */}
      <div className="relative overflow-hidden h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content Section - Flexible but with min-height */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title - Fixed height with line clamp */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-green-600 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Course Info - Fixed height */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 min-h-[1.5rem]">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{course.mode.split('/')[0]}</span>
          </div>
        </div>

        {/* Achievement Goal - Flexible but with max height */}
        {course.achievementGoal && (
          <div className="mb-3 flex-1 min-h-[3rem] max-h-[3.5rem]">
            <p className="text-sm text-gray-600 line-clamp-2">
              {course.achievementGoal}
            </p>
          </div>
        )}

        {/* Syllabus Preview - Fixed height */}
        <div className="flex flex-wrap gap-1 mb-4 min-h-[2rem]">
          {course.syllabus.slice(0, 2).map((month, index) => (
            <span
              key={index}
              className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200"
            >
              {month.month.split(':')[0].replace('Month', 'M')}
            </span>
          ))}
          {course.syllabus.length > 2 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs border border-gray-300">
              +{course.syllabus.length - 2} more
            </span>
          )}
        </div>

        {/* CTA Button - Fixed at bottom */}
        <div className="mt-auto pt-3">
          <Link href={`/courses/${course.slug}`}>
            <motion.button
              className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm border border-green-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Course</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCourses = CourseData.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'short') return course.duration.includes('3 Months');
    if (filter === 'long') return course.duration.includes('6 Months');
    return true;
  });

  // Don't render animations until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium mb-4 border border-green-200">
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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white pt-36 lg:pt-36 pb-10 lg:pb-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <motion.div
              className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium mb-4 border border-green-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>GogalEdu › Courses</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Popular{' '}
              <span className="text-green-600">Courses</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Master in-demand skills with industry-relevant curriculum and hands-on projects
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { key: 'all', label: 'All Courses' },
                { key: 'short', label: '3 Months' },
                { key: 'long', label: '6 Months' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setFilter(item.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm border ${
                    filter === item.key
                      ? 'bg-green-600 text-white border-green-600 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-600 text-sm">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {filter !== 'all' && ` (${filter === 'short' ? '3 Months' : '6 Months'})`}
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 text-sm">
                Try selecting a different filter to see more courses.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose GogalEdu Courses?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Industry-Relevant Curriculum",
                description: "Learn the latest tools and technologies used in industry"
              },
              {
                icon: Users,
                title: "Expert Mentors",
                description: "Learn from industry professionals with real-world experience"
              },
              {
                icon: CheckCircle,
                title: "Career Support",
                description: "Get placement assistance and career guidance"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Join thousands of students who have transformed their careers with our industry-focused courses
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base border border-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Free Demo Class</span>
              </motion.button>
              <motion.button
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-white transition-colors duration-300 text-sm sm:text-base"
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