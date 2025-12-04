"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const BlogCard = ({ blog, index }) => {
  return (
    <motion.article
      className="relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/blogs/${blog.slug}`} className="block h-full">
        {/* Main Card Container */}
        <div className="relative h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full">
          
          {/* Content Container */}
          <div className="relative z-10 p-6 md:p-7 flex flex-col flex-1 h-full">
            
            {/* Meta Info - Responsive Layout */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-green-700 mb-4">
              <div className="flex items-center gap-1.5 bg-green-100 px-2.5 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="font-medium">{blog.date}</span>
              </div>
{/*               
              <div className="flex items-center gap-1.5 bg-green-100 px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="font-medium">{blog.read_time} read</span>
              </div> */}
              
              <div className="flex items-center gap-1.5 bg-green-100 px-2.5 py-1 rounded-full">
                <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="font-medium">{blog.author}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-5 line-clamp-2 group-hover:text-green-700 transition-all duration-300 transform group-hover:translate-x-1">
              {blog.title}
            </h3>

            {/* Description */}
            <div className="relative mb-5 md:mb-6 flex-1">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                {blog.seo_description || blog.introduction}
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-auto pt-5 md:pt-6 border-t border-green-100 group-hover:border-green-200 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="text-green-700 font-semibold text-sm md:text-base group-hover:text-green-600 transition-colors duration-300 flex items-center gap-2">
                  Read Full Story
                  <motion.div
                    className="relative"
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </span>
                
                {/* Animated Arrow Container */}
                <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Corner Decoration */}
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;