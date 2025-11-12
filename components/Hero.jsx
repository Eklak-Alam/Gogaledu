// components/HeroSection.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { CourseData } from "@/db/CourseData";
import { ArrowBigRightDash, Rocket, Video } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Advanced floating animations
  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      title: "Live Classes",
      description: "Interactive Live Sessions with Industry Experts",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Resume Building",
      description: "Mentorship Sessions and Mock Interviews",
      icon: "📝",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Job Opportunity Program",
      description: "Dedicated Placement Cell and Career Support",
      icon: "💼",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      title: "Placement Assistance",
      description: "73+  Hiring Partners and Guaranteed Interviews",
      icon: "🚀",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
  ];

  const stats = [
    { number: "4700+", label: "Students Placed", suffix: "+" },
    { number: "73", label: "Hiring Partners", suffix: "+" },
    { number: "93", label: "Success Rate", suffix: "%" },
    { number: "4.8/5", label: "Rating", suffix: "/5.0" },
  ];

  // Enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-green-200 to-cyan-300 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4 lg:pb-6 lg:pt-32">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
          {/* Left Content - Enhanced */}
          <motion.div
            className="space-y-5 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 shadow-sm"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Most Trusted Tech Education Platform
              </span>
            </motion.div>

            {/* Main Heading with Enhanced Typography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Launch Your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                    Tech Career
                  </span>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-3 bg-green-200/60 -z-10 rounded-full"
                    animate={{ scaleX: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>{" "}
                With{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                    GogalEdu
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Transform Your Future with Industry-Focused Courses, Live
                Mentorship, and{" "}
                <span className="font-semibold text-green-700">
                  Guaranteed Placement
                </span>{" "}
                Opportunities.
              </p>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {stat.suffix}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mt-2 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              {/* 🔗 Start Learning Today Button with Link */}
              <Link href="/courses" passHref>
                <motion.button
                  className="group cursor-pointer relative w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Learning Today
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Rocket />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              {/* 🎥 Watch Demo Button */}
              <motion.button
                className="group w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-300 hover:border-green-300 hover:bg-green-50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Video /> Watch Demo
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Swiper - Enhanced Horizontal Layout */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-transparent rounded-3xl p-4 relative z-20"
              variants={itemVariants}
            >
              {/* Enhanced Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                  Featured Courses
                </h2>
              </motion.div>

              {/* Enhanced Horizontal Swiper */}
              <div className="relative">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  loop={true}
                  modules={[EffectCoverflow, Autoplay]}
                  className="w-full h-96"
                >
                  {CourseData.map((course, index) => (
                    <SwiperSlide
                      key={`${course.id}-${index}`}
                      className="w-80 max-w-sm"
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 flex flex-col justify-between border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                        whileHover={{
                          scale: 1.03,
                          y: -5,
                        }}
                      >
                        {/* Background Gradient */}
                        {/* Light Green Gradient Background (same for all levels) */}
                        {/* Soft Green Gradient Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/15 to-emerald-400/15 rounded-full -translate-y-16 translate-x-16" />

                        {/* Course Level Badge (same color for all) */}
                        <div className="flex items-center justify-between mb-4 relative z-10">
                          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700 border border-green-200">
                            {course.level}
                          </div>
                        </div>

                        {/* Course Content */}
                        <div className="space-y-4 mb-4 relative z-10">
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {course.title}
                          </h3>

                          <motion.p
                            className="text-gray-600 text-sm leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {course.achievementGoal ||
                              "Master industry skills with hands-on projects"}
                          </motion.p>
                        </div>

                        {/* Course Details */}
                        <div className="space-y-4 relative z-10">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                              <span className="text-green-600">⏱️</span>
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                              <span className="text-blue-600">📚</span>
                              {course.mode}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-semibold text-gray-800">
                                {65 + (index % CourseData.length) * 15}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-2 rounded-full bg-gradient-to-r ${
                                  course.level === "Beginner"
                                    ? "from-green-500 to-emerald-500"
                                    : course.level === "Intermediate"
                                    ? "from-yellow-500 to-amber-500"
                                    : "from-red-500 to-pink-500"
                                }`}
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${
                                    65 + (index % CourseData.length) * 15
                                  }%`,
                                }}
                                transition={{
                                  delay: 0.8 + index * 0.2,
                                  duration: 1.5,
                                  ease: "easeOut",
                                }}
                              />
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link href={`/courses/${course.slug}`}>
                            <motion.div
                              className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white py-3 rounded-xl text-center font-semibold text-sm hover:shadow-lg transition-all duration-300 group"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span className="flex items-center justify-center gap-2">
                                Explore Course
                                <motion.span
                                  animate={{ x: [0, 3, 0] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <ArrowBigRightDash />
                                </motion.span>
                              </span>
                            </motion.div>
                          </Link>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Features Grid with Gradients */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-100 group-hover:opacity-0 transition-opacity duration-500`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Border Gradient */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} p-0.5`}
              >
                <div className="w-full h-full bg-white rounded-xl" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* Icon with Gradient */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
