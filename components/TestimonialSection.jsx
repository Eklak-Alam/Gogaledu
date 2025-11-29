// components/TestimonialSection.jsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

const TestimonialSection = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Updated testimonials based on your actual data
  const testimonials = [
    {
      id: 1,
      name: "Rohan Mehta",
      role: "Data Analyst Student",
      content: "The Data Analyst program at GogalEdu Academy gave me clarity and confidence. The trainers taught SQL, Power BI, Tableau, Excel, and Python with real datasets. Today, I can clean data, build dashboards, and present insights like a pro. I even used my course project in my job interviews!",
      rating: 5,
      avatar: "RM",
      gradient: "from-green-500 to-cyan-500",
      status: "Student",
      course: "Data Analyst Program",
    },
    {
      id: 2,
      name: "Meenakshi Prasad",
      role: "Business Analyst Student",
      content: "I joined GogalEdu with zero knowledge about Business Analysis. Within weeks, I learned documentation, flow charts, BRD/SRS, and stakeholder communication. The case studies they provide are exactly what companies expect. I feel fully prepared for BA interviews now!",
      rating: 5,
      avatar: "MP",
      gradient: "from-purple-500 to-pink-500",
      status: "Student",
      course: "Business Analyst Program",
    },
    {
      id: 3,
      name: "Aditya Varma",
      role: "MIS Analyst Program",
      content: "The MIS training was extremely practical. We worked on advanced Excel, automation, dashboards, and reporting tasks that companies use daily. I now create weekly and monthly MIS reports confidently. This course truly upgraded my corporate skills.",
      rating: 5,
      avatar: "AV",
      gradient: "from-green-500 to-emerald-500",
      status: "Student",
      course: "MIS Analyst Program",
    },
    {
      id: 4,
      name: "Sana Sheikh",
      role: "AML (Anti-Money Laundering) Student",
      content: "The AML course exceeded my expectations. I learned KYC, transaction monitoring, red flags, risk assessment, and compliance frameworks in a very simple way. The mentor shared real banking examples, which helped me understand how AML works in the industry.",
      rating: 5,
      avatar: "SS",
      gradient: "from-orange-500 to-red-500",
      status: "Student",
      course: "AML Program",
    },
    {
      id: 5,
      name: "Riya Singh",
      role: "Placed as Data Analyst",
      content: "The placement team at GogalEdu Academy guided me at every step — from building my resume to preparing for technical rounds. The mock interviews boosted my confidence, and within weeks, I secured a Data Analyst job. Truly grateful!",
      rating: 5,
      avatar: "RS",
      gradient: "from-indigo-500 to-purple-500",
      status: "Placed",
      course: "Data Analyst Program",
    },
    {
      id: 6,
      name: "Deepak Kumar",
      role: "Placed as MIS Executive",
      content: "I never imagined I would switch my career so smoothly. The mentors taught exactly what companies look for, and the placement support team constantly shared openings. I cracked my interview in the very first attempt!",
      rating: 5,
      avatar: "DK",
      gradient: "from-teal-500 to-green-500",
      status: "Placed",
      course: "MIS Analyst Program",
    },
    {
      id: 7,
      name: "Anamika Verma",
      role: "Placed as Business Analyst",
      content: "The practice projects and interview preparation sessions were game-changers. My interviewer appreciated the BRDs and dashboards I built during the course. GogalEdu Academy didn't just train me, they prepared me for the real corporate world.",
      rating: 5,
      avatar: "AV",
      gradient: "from-pink-500 to-rose-500",
      status: "Placed",
      course: "Business Analyst Program",
    },
    {
      id: 8,
      name: "Harshit Raj",
      role: "Placed as AML Analyst (Banking Client)",
      content: "The AML training was excellent, but the placement support was even better. They helped me understand real banking scenarios and prepared me for compliance interview questions. Today, I'm working with a reputed BFSI client thanks to GogalEdu.",
      rating: 5,
      avatar: "HR",
      gradient: "from-amber-500 to-yellow-500",
      status: "Placed",
      course: "AML Program",
    },
  ];

  const stats = [
    { number: "4300+", label: "Happy Students", icon: Users },
    { number: "93%", label: "Placement Rate", icon: TrendingUp },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "73+", label: "Hiring Partners", icon: Award },
  ];

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-700 px-4 py-3 rounded-2xl text-sm font-medium mb-6 border border-green-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Quote className="w-4 h-4" />
            <span>Transformative Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Voices of{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Success
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover how our Students Transformed their Careers and Achieved their Dreams with GogalEdu's Comprehensive Learning Ecosystem
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-gray-200/60 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Swiper Carousel */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Enhanced Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 hidden sm:block">
                Student & Placement Stories
              </h3>
            </motion.div>

            <div className="flex items-center space-x-3">
              {/* Autoplay Toggle */}
              <motion.button
                onClick={toggleAutoplay}
                className="p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-gray-600" />
                ) : (
                  <Play className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  variants={cardVariants}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  {/* Top Section with Quote Icon and Status */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-6 h-6 text-green-500 opacity-60" />
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      testimonial.status === "Placed" 
                        ? "bg-green-100 text-green-700 border border-green-200" 
                        : "bg-green-100 text-green-700 border border-green-200"
                    }`}>
                      {testimonial.status === "Placed" ? (
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {testimonial.status}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          {testimonial.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Tag */}
                  <div className="mb-4">
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full border">
                      {testimonial.course}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-2xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-500 rounded-full"
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg">
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Write Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                Success Story?
              </span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              join 4300+ Successful Students who have Transformed their Careers and Achieved their Dreams with GogalEdu
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/courses" className="w-full sm:w-auto">
                <motion.button
                  className="bg-gradient-to-r from-green-600 to-green-600 text-white cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Courses
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;