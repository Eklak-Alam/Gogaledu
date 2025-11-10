// components/TestimonialSection.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Kritika Malhotra",
      role: "Data Analyst",
      content: "GogalEdu Academy has completely transformed how I approach data analytics. With their intuitive tools and seamless integration, I'm able to extract meaningful insights faster than ever before.",
      rating: 5
    },
    {
      id: 2,
      name: "Shyam",
      role: "Marketing Manager",
      content: "Using GogalEdu Academy has helped us refine our marketing strategies by allowing us to easily visualise customer behaviour and trends.",
      rating: 5
    },
    {
      id: 3,
      name: "Neha",
      role: "Operations Director",
      content: "The ability to harness the full potential of our company's data was always a challenge until we implemented GogalEdu.",
      rating: 5
    },
    {
      id: 4,
      name: "Tanuja",
      role: "Product Manager",
      content: "GogalEdu advanced analytics tools have helped me better understand customer feedback and product performance.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-200"
            whileHover={{ scale: 1.05 }}
          >
            <Quote className="w-4 h-4" />
            <span>Success Stories</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            At GogalEdu Academy, we are committed to empowering individuals with the skills and knowledge 
            required to excel in the ever-evolving world of data and technology.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl sm:shadow-2xl border border-gray-100 mx-2">
            {/* Quote Icon */}
            <motion.div
              className="absolute -top-4 sm:-top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>

            <div className="relative min-h-[200px] sm:min-h-[250px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      {/* Stars */}
                      <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <motion.blockquote
                        className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        "{testimonials[currentTestimonial].content}"
                      </motion.blockquote>

                      {/* Author Info */}
                      <motion.div
                        className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="font-bold text-gray-900 text-base sm:text-lg">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Avatar Placeholder */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg border border-gray-200"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto shadow-lg">
                            {testimonials[currentTestimonial].name.charAt(0)}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-3">
                {/* Auto-play Toggle */}
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isAutoPlaying ? 
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  }
                </motion.button>

                {/* Navigation Arrows */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={prevTestimonial}
                    className="p-2 sm:p-3 bg-gray-100 text-gray-600 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonial}
                    className="p-2 sm:p-3 bg-gray-100 text-gray-600 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Mini Testimonials */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => goToTestimonial(index)}
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content Excerpt */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm sm:text-base mb-4">Join thousands of successful students</p>
          <motion.button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;