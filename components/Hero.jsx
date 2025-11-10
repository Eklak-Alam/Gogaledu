// components/HeroSection.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { CourseData } from "@/db/CourseData";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Live Classes",
      description: "Interactive live sessions with industry experts"
    },
    {
      title: "Resume Building",
      description: "Mentorship sessions and Mock Interviews"
    },
    {
      title: "Job Opportunity Program",
      description: "Dedicated Placement Cell and career support"
    },
    {
      title: "Placement Assistance",
      description: "1000+ hiring partners and guaranteed interviews"
    }
  ];

  const stats = [
    { number: "1000+", label: "Students Placed" },
    { number: "50+", label: "Hiring Partners" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9", label: "Rating" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-11 lg:pb-10 lg:pt-36">
        {/* Top Section: Left Content + Right Swiper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Launch Your{" "}
                <span className="text-gray-800">Tech Career</span>{" "}
                With{" "}
                <span className="text-green-700">GogalEdu</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your future with industry-focused courses, live
                mentorship, and guaranteed placement opportunities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Swiper */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-transparent rounded-2xl p-4"
              variants={itemVariants}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Featured Courses
                </h2>
              </div>

              {/* Swiper Container */}
              <div className="relative">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  loop={true}
                  cardsEffect={{
                    slideShadows: false,
                    rotate: false,
                    perSlideOffset: 8,
                  }}
                  className="w-full max-w-sm mx-auto h-80"
                >
                  {CourseData.map((course, index) => (
                    <SwiperSlide key={`${course.id}-${index}`}>
                      <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col justify-between border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        {/* Course Header */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500">
                              {course.level}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {course.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {course.achievementGoal || "Master industry skills with hands-on projects"}
                          </p>
                        </div>

                        {/* Course Details */}
                        <div className="space-y-4 mt-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="text-gray-600">
                              {course.duration}
                            </div>
                            <div className="text-gray-600">
                              {course.mode}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Course Progress</span>
                              <span>{65 + (index % CourseData.length) * 15}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-gray-600 h-1.5 rounded-full transition-all duration-1000"
                                style={{ width: `${65 + (index % CourseData.length) * 15}%` }}
                              />
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link href={`/courses/${course.slug}`}>
                            <div className="w-full bg-green-700 text-white py-2.5 rounded-lg text-center font-medium text-sm hover:bg-green-800 transition-colors duration-300">
                              Explore Course
                            </div>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Section: Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-base">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section: CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="w-full cursor-pointer sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Learning Today
          </motion.button>

          <motion.button
            className="w-full sm:w-auto bg-white cursor-pointer hover:bg-green-600 hover:text-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-base border border-gray-300 hover:border-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;