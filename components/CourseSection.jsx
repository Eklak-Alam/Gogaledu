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
  PlayCircle,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { CourseData } from '@/db/CourseData';

const CourseSection = () => {
  const [visibleCourses, setVisibleCourses] = useState(6);

  const showLoadMore = visibleCourses < CourseData.length;

  const loadMore = () => {
    setVisibleCourses(prev => prev + 6);
  };

  const getLevelStyle = (level) => {
    if (level.includes('Beginner')) return {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      dot: 'bg-blue-500'
    };
    if (level.includes('Intermediate')) return {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      dot: 'bg-green-500'
    };
    if (level.includes('Advanced')) return {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      dot: 'bg-purple-500'
    };
    return {
      bg: 'bg-gray-50',
      text: 'text-gray-700',
      border: 'border-gray-200',
      dot: 'bg-gray-500'
    };
  };

  const CourseCard = ({ course, index }) => {
    const levelStyle = getLevelStyle(course.level);

    return (
      <div className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
        
        {/* Header with Level Badge */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${levelStyle.border} ${levelStyle.bg} ${levelStyle.text}`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${levelStyle.dot}`} />
              {course.level.split(' ')[0]}
            </div>
            
            {/* Popular Badge */}
            {index < 2 && (
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Popular
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-gray-800 transition-colors">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {course.achievementGoal || 'Master industry skills with hands-on projects and real-world applications'}
          </p>
        </div>

        {/* Features */}
        <div className="px-6 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium">Job-focused</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="p-1.5 bg-green-50 rounded-lg">
                <Award className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-medium">Certificate</span>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="px-6 pb-6 mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Monitor className="w-4 h-4 text-green-500" />
              <span className="font-semibold">{course.mode.split(' / ')[0]}</span>
            </div>
          </div>

          {/* Rating and Students */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-bold text-gray-900">4.8</span>
                <span className="text-gray-500">(2.4k)</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="font-semibold">1.2k+</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/courses/${course.slug}`}>
            <button className="w-full cursor-pointer bg-gradient-to-r from-green-800 to-green-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg mt-2">
              <PlayCircle className="w-4 h-4" />
              <span>Start Learning Now</span>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2.5 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Industry-Ready Professional Courses
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Master In-Demand{' '}
            <span className="text-gray-800">Career Skills</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your career with comprehensive courses designed by industry experts. 
            From beginner to advanced level, we've got your learning journey covered.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {CourseData.slice(0, visibleCourses).map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {showLoadMore && (
          <div className="text-center mb-16">
            <button
              onClick={loadMore}
              className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-all duration-200 flex items-center space-x-3 mx-auto hover:shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              <span>Load More Courses</span>
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="text-white">Career?</span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful students who've accelerated their careers with our industry-proven courses. 
            Start your journey today with flexible learning options and expert mentorship.
          </p>
          <Link href="/courses">
            <button className="bg-white cursor-pointer  text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl">
              <BookOpen className="w-5 h-5" />
              <span>Explore All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;