// components/CourseSection.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Monitor, 
  Users, 
  Star, 
  ArrowRight,
  BookOpen,
  Target,
  Award,
  PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import { CourseData } from '@/db/CourseData';

const CourseSection = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);

  const showLoadMore = visibleCourses < CourseData.length;

  const loadMore = () => {
    setVisibleCourses(prev => prev + 6);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
  };

  const getLevelColor = (level) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-700';
    if (level.includes('Intermediate')) return 'bg-blue-100 text-blue-700';
    if (level.includes('Advanced')) return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  // Fixed CourseCard component with proper responsive design
  const CourseCard = ({ course, index }) => (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        
        {/* Popular Badge - Fixed positioning */}
        {index === 0 && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            Popular
          </div>
        )}

        {/* Course Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className={`px-3 py-1 rounded-lg text-sm font-medium ${getLevelColor(course.level)}`}>
              {course.level.split(' ')[0]}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {course.achievementGoal || 'Master industry skills with hands-on projects'}
          </p>
        </div>

        {/* Course Features - Single row */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <Target className="w-3 h-3 text-gray-500" />
              <span>Job-ready</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3 h-3 text-gray-500" />
              <span>Certification</span>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="w-3 h-3" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Monitor className="w-3 h-3" />
              <span className="font-medium">{course.mode.split(' / ')[0]}</span>
            </div>
          </div>

          {/* Rating and Students */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1 text-gray-600">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span>4.8</span>
              <span>(2.4k)</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Users className="w-3 h-3" />
              <span>1.2k+ students</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/courses/${course.slug}`} className="block mt-3">
            <button className="w-full cursor-pointer bg-green-700 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-green-800 transition-colors duration-300 flex items-center justify-center space-x-2">
              <PlayCircle className="w-4 h-4" />
              <span>Start Learning</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Industry-Ready Courses
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our{' '}
            <span className="text-green-600">Featured Courses</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your career with comprehensive courses designed by industry experts.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CourseData.slice(0, visibleCourses).map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        {showLoadMore && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={loadMore}
              className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <BookOpen className="w-4 h-4" />
              <span>Load More Courses</span>
            </button>
          </motion.div>
        )}

        {/* View All Courses CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Explore our complete course catalog with detailed curriculum and flexible learning options.
            </p>
            <Link href="/courses">
              <button className="bg-green-600 text-white cursor-pointer px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 inline-flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Browse All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;