// components/HeroSection.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import {
  PlayCircle,
  FileText,
  Users,
  Briefcase,
  ArrowRight,
  Star,
  Clock,
  Monitor,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { CourseData } from "@/db/CourseData";

// Import your course data

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: PlayCircle,
      title: "Live Classes",
      description: "Interactive live sessions with industry experts",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Mentorship sessions, and Mock Interviews",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Job Opportunity Program",
      description: "Dedicated Placement Cell and career support",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description: "1000+ hiring partners and guaranteed interviews",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Students Placed" },
    { number: "50+", label: "Hiring Partners" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9", label: "Rating", icon: Star },
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const getCourseIcon = (courseTitle) => {
    if (courseTitle.includes("MIS")) return "📊";
    if (courseTitle.includes("Business")) return "📈";
    if (courseTitle.includes("Data")) return "🔍";
    return "🎓";
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-28">
        {/* Top Section: Left Content + Right Swiper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 1000+ Students</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Launch Your{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Tech Career
                </span>{" "}
                With{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GogalEdu
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your future with industry-focused courses, live
                mentorship, and guaranteed placement opportunities. Start your
                journey today!
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center justify-center space-x-1">
                    <span>{stat.number}</span>
                    {stat.icon && (
                      <stat.icon className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-transparent rounded-3xl p-6"
              variants={itemVariants}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Featured Courses
                  </span>
                </motion.h2>
              </div>

              {/* Swiper Container */}
              <div className="relative">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                  }}
                  speed={1200}
                  loop={true}
                  loopAdditionalSlides={CourseData.length * 2}
                  cardsEffect={{
                    slideShadows: false,
                    rotate: false,
                    perSlideOffset: 12,
                    perSlideRotate: 0,
                  }}
                  className="w-full max-w-md mx-auto h-96 cursor-grab active:cursor-grabbing"
                >
                  {[...CourseData, ...CourseData, ...CourseData].map(
                    (course, index) => (
                      <SwiperSlide key={`${course.id}-${index}`}>
                        <motion.div
                          className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group border-2 border-gray-100"
                          variants={cardVariants}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={false}
                          />

                          {/* Floating Particles */}
                          <div className="absolute inset-0 overflow-hidden">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-green-400/30 rounded-full"
                                animate={{
                                  y: [0, -20, 0],
                                  x: [0, 10, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 1,
                                }}
                                style={{
                                  left: `${20 + i * 30}%`,
                                  top: `${10 + i * 25}%`,
                                }}
                              />
                            ))}
                          </div>

                          {/* Course Header */}
                          <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between">
                              <motion.div
                                className="relative"
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="text-4xl">
                                  {getCourseIcon(course.title)}
                                </div>
                                <motion.div
                                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                                  animate={{ scale: [1, 1.5, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              </motion.div>

                              <motion.div
                                className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg"
                                whileHover={{ scale: 1.08 }}
                              >
                                {course.level}
                              </motion.div>
                            </div>

                            <motion.h3
                              className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors duration-300"
                              whileHover={{ x: 2 }}
                            >
                              {course.title}
                            </motion.h3>

                            <motion.p
                              className="text-gray-600 text-sm leading-relaxed line-clamp-2"
                              whileHover={{ x: 1 }}
                            >
                              {course.achievementGoal ||
                                "Master industry skills with hands-on projects"}
                            </motion.p>
                          </div>

                          {/* Course Details */}
                          <div className="space-y-4 mt-4 relative z-10">
                            <div className="flex items-center justify-between text-sm">
                              <motion.div
                                className="flex items-center space-x-2 text-gray-600 bg-white/80 rounded-lg px-3 py-2 shadow-sm"
                                whileHover={{ scale: 1.03, y: -1 }}
                              >
                                <Clock className="w-4 h-4 text-green-500" />
                                <span className="font-semibold">
                                  {course.duration}
                                </span>
                              </motion.div>
                              <motion.div
                                className="flex items-center space-x-2 text-gray-600 bg-white/80 rounded-lg px-3 py-2 shadow-sm"
                                whileHover={{ scale: 1.03, y: -1 }}
                              >
                                <Monitor className="w-4 h-4 text-blue-500" />
                                <span className="font-semibold">
                                  {course.mode}
                                </span>
                              </motion.div>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>Course Progress</span>
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  {65 + (index % CourseData.length) * 15}%
                                </motion.span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                                <motion.div
                                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full relative"
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${
                                      65 + (index % CourseData.length) * 15
                                    }%`,
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    delay: (index % CourseData.length) * 0.2,
                                    type: "spring",
                                  }}
                                >
                                  <motion.div
                                    className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                    }}
                                  />
                                </motion.div>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <Link href={`/courses/${course.slug}`}>
                              <motion.div
                                className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-xl text-center font-bold text-sm shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                {/* Button Shine Effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                                  animate={{ x: ["-100%", "200%"] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                  }}
                                />

                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                  <span>Explore Course</span>
                                  <motion.div
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <ArrowRight className="w-4 h-4" />
                                  </motion.div>
                                </span>
                              </motion.div>
                            </Link>
                          </div>

                          {/* Corner Accents */}
                          <motion.div
                            className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-3xl"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-3xl"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {CourseData.map((_, index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.5, backgroundColor: "#10B981" }}
                      animate={{
                        scale: [1, 1.2, 1],
                        backgroundColor: ["#D1D5DB", "#10B981", "#D1D5DB"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Section: Features Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 bg-gradient-to-r ${feature.color} rounded-lg text-white shadow-md`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section: CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Learning Today</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold text-base border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PlayCircle className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
