// components/TestimonialSection.jsx
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCards } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause, Award, TrendingUp, Users } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

const TestimonialSection = () => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Kritika Malhotra",
      role: "Data Analyst at Google",
      content: "GogalEdu Academy completely transformed my career trajectory. The hands-on projects and industry mentorship helped me land my dream job at Google within 3 months of completing the course!",
      rating: 5,
      avatar: "KM",
      gradient: "from-purple-500 to-pink-500",
      achievement: "3x Salary Hike"
    },
    {
      id: 2,
      name: "Shyam Kumar",
      role: "Marketing Manager",
      content: "The practical approach to learning at GogalEdu helped me implement real marketing strategies that increased our company's revenue by 40% within the first quarter.",
      rating: 5,
      avatar: "SK",
      gradient: "from-blue-500 to-cyan-500",
      achievement: "40% Revenue Growth"
    },
    {
      id: 3,
      name: "Neha Sharma",
      role: "Operations Director",
      content: "From zero coding experience to leading a tech team, GogalEdu's comprehensive curriculum and 1:1 mentorship made this incredible career transition possible.",
      rating: 5,
      avatar: "NS",
      gradient: "from-green-500 to-emerald-500",
      achievement: "Career Switch Success"
    },
    {
      id: 4,
      name: "Tanuja Patel",
      role: "Product Manager",
      content: "The advanced analytics tools and real-world projects at GogalEdu helped me better understand customer behavior and improve our product's user experience significantly.",
      rating: 5,
      avatar: "TP",
      gradient: "from-orange-500 to-red-500",
      achievement: "Product Launch Success"
    },
    {
      id: 5,
      name: "Rahul Sharma",
      role: "Senior Software Developer",
      content: "GogalEdu's industry-focused curriculum and mock interviews prepared me perfectly for FAANG company interviews. Got 4 job offers within 2 weeks!",
      rating: 5,
      avatar: "RS",
      gradient: "from-indigo-500 to-purple-500",
      achievement: "4 Job Offers"
    },
    {
      id: 6,
      name: "Priya Singh",
      role: "Business Analyst",
      content: "The placement support team at GogalEdu is exceptional. They helped me negotiate a 50% higher package than my initial expectation. Truly life-changing!",
      rating: 5,
      avatar: "PS",
      gradient: "from-yellow-500 to-amber-500",
      achievement: "50% Higher Package"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Students", icon: Users },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "1000+", label: "Hiring Partners", icon: Award }
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
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
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
            delay: 2
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
            Voices of{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
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
            Discover how our students transformed their careers and achieved their dreams with GogalEdu's comprehensive learning ecosystem
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
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
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
                Student Testimonials
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
                spaceBetween: 20
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  variants={cardVariants}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group"
                  whileHover="hover"
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  {/* Quote Icon */}
                  <div className="mb-6 relative z-10">
                    <Quote className="w-8 h-8 text-green-500 opacity-20" />
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {testimonial.achievement}
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 text-base leading-relaxed mb-8 flex-1 relative z-10 font-medium">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-gray-200/60 relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Progress Bar */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                animate={{
                  width: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
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
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-lg">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Write Your{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
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
              Join 10,000+ successful students who have transformed their careers and achieved their dreams with GogalEdu
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey Today
              </motion.button>
              <motion.button
                className="border border-gray-300 text-gray-700 px-8 cursor-pointer py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Courses
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;