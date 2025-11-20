// components/PlacementCompanies.jsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Building2 } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Company logos data - replace with your actual company images
const companies = [
  { id: 1, logo: "/companies/casio.png" },
  { id: 2, logo: "/companies/croma.png" },
  { id: 3, logo: "/companies/embrite.png" },
  { id: 4, logo: "/companies/flipkart.png" },
  { id: 5, logo: "/companies/Genpact.png" },
  { id: 6, logo: "/companies/LAVA.png" },
  { id: 7, logo: "/companies/Panasonic.png" },
  { id: 8, logo: "/companies/PharmEasy.png" },
  { id: 9, logo: "/companies/Philips.png" },
  { id: 10, logo: "/companies/PocketFMlogo.jpg" },
  { id: 11, logo: "/companies/Skyroot.png" },
];

const PlacementCompanies = () => {
  const swiperRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative inline-block mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl shadow-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Placement{" "}
                <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  Partners
                </span>
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* Companies Swiper - Clean Version */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* First Row */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={5000}
            loop={true}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={false}
            freeMode={true}
            className="!overflow-visible"
            breakpoints={{
              320: {
                spaceBetween: 20,
              },
              640: {
                spaceBetween: 25,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
              1280: {
                spaceBetween: 50,
              },
            }}
          >
            {companies.map((company) => (
              <SwiperSlide key={company.id} className="!w-auto">
                <motion.div
                  className="group relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >               
                  <img
                    src={company.logo}
                    alt="Company Logo"
                    className="h-8 w-auto object-contain transition-all duration-500 group-hover:grayscale-0
                      sm:h-8npm
                      lg:h-10 
                      xl:h-12"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second Row - Reverse Direction */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            loop={true}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={false}
            freeMode={true}
            className="!overflow-visible mt-6 lg:mt-8"
            breakpoints={{
              320: {
                spaceBetween: 20,
              },
              640: {
                spaceBetween: 25,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
              1280: {
                spaceBetween: 50,
              },
            }}
          >
            {companies.slice().reverse().map((company) => (
              <SwiperSlide key={company.id} className="!w-auto">
                <motion.div
                  className="group relative flex items-center justify-center px-4 sm:px-6 lg:px-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={company.logo}
                    alt="Company Logo"
                    className="h-8 w-auto object-contain transition-all duration-500 group-hover:grayscale-0
                      sm:h-8 
                      lg:h-10 
                      xl:h-12"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementCompanies;