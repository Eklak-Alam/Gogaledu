// components/TestimonialSection.jsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const TestimonialSection = () => {
  const swiperRef = useRef(null);

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
    },
    {
      id: 5,
      name: "Rahul Sharma",
      role: "Software Developer",
      content: "The courses at GogalEdu are well-structured and the instructors are industry experts. Highly recommended!",
      rating: 5
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Business Analyst",
      content: "Excellent learning platform with practical examples and real-world projects that helped me in my career.",
      rating: 5
    }
  ];

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
            <Quote className="w-4 h-4 mr-2" />
            Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-green-600">Students Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with GogalEdu Academy.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-3 mb-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  variants={cardVariants}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-green-500 opacity-20" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs truncate">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-600 rounded-full"
                animate={{
                  width: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Join thousands of successful students who have achieved their career goals with GogalEdu.
            </p>
            <button className="bg-green-600 cursor-pointer text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;