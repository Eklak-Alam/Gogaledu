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
  Zap,
  GraduationCap,
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
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
  };

  const getCourseIcon = (courseTitle) => {
    if (courseTitle.includes('MIS') || courseTitle.includes('Management')) return '📊';
    if (courseTitle.includes('Business') || courseTitle.includes('Marketing')) return '📈';
    if (courseTitle.includes('Data') || courseTitle.includes('Analytics')) return '🔍';
    if (courseTitle.includes('Design') || courseTitle.includes('UI/UX')) return '🎨';
    if (courseTitle.includes('Development') || courseTitle.includes('Programming')) return '💻';
    return '🎓';
  };

  const getLevelColor = (level) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-700';
    if (level.includes('Intermediate')) return 'bg-blue-100 text-blue-700';
    if (level.includes('Advanced')) return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  // Perfect sized course card - not too big, not too small
  const CourseCard = ({ course, index }) => (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <motion.div
        className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden"
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-blue-50/0 group-hover:from-green-50/50 group-hover:to-blue-50/50 transition-all duration-300" />
        
        {/* Popular Badge */}
        {index < 3 && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </div>
          </div>
        )}

        {/* Course Header */}
        <div className="relative z-10 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-3 shadow-inner">
              {getCourseIcon(course.title)}
            </div>
            <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${getLevelColor(course.level)}`}>
              {course.level.split(' ')[0]}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {course.achievementGoal || 'Master industry skills with hands-on projects and real-world applications'}
          </p>
        </div>

        {/* Course Features */}
        <div className="relative z-10 mb-5 space-y-2">
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <Target className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="font-medium">Job-ready curriculum</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="font-medium">Industry certification</span>
          </div>
        </div>

        {/* Course Details */}
        <div className="relative z-10 mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="font-semibold">{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <Monitor className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">{course.mode.split(' / ')[0]}</span>
            </div>
          </div>

          {/* Rating and Students */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-1.5 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-900">4.8</span>
              <span className="text-gray-600">(2.4k)</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-lg">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-semibold text-gray-900">1.2k+</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/courses/${course.slug}`} className="block">
            <motion.button
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            <span>Industry-Ready Courses</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Featured Courses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your career with comprehensive courses designed by industry experts. 
            Master in-demand skills through hands-on projects and real-world applications.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={loadMore}
              className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:shadow-lg transition-all duration-300 flex items-center space-x-3 mx-auto shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Load More Courses ({CourseData.length - visibleCourses} remaining)</span>
            </motion.button>
          </motion.div>
        )}

        {/* View All Courses CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 border border-green-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <GraduationCap className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore our complete course catalog with detailed curriculum, student success stories, 
                and flexible learning options tailored to your career goals.
              </p>
              <Link href="/courses">
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Browse All Courses</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;