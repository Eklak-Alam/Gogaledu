"use client";

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { getAllBlogs } from '@/db/BlogsData';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Target, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Star,
  Heart,
  Share2,
  MessageCircle,
  Filter,
  Search,
  Zap,
  Award,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const blogs = getAllBlogs();
  
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];
  
  const filteredBlogs = activeFilter === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeFilter);
  
  const featuredBlogs = filteredBlogs.slice(0, 1);
  const latestBlogs = filteredBlogs.slice(1, 4);
  const allBlogs = filteredBlogs.slice(4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-14 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center py-16 lg:py-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-green-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Welcome to GogalEdu Stories</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
              Real Stories,{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                  Real Impact
                </span>
                <motion.div 
                  className="absolute bottom-2 left-0 right-0 h-3 bg-green-200/40 -z-10 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring career transformations from our students. Real journeys, real results.
            </p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
              {[
                { 
                  icon: GraduationCap, 
                  value: '4700+', 
                  label: 'Students Inspired',
                  color: 'from-green-500 to-green-500'
                },
                { 
                  icon: TrendingUp, 
                  value: '93%', 
                  label: 'Career Growth',
                  color: 'from-blue-500 to-indigo-500'
                },
                { 
                  icon: Award, 
                  value: '50+', 
                  label: 'Stories Shared',
                  color: 'from-amber-500 to-orange-500'
                },
                { 
                  icon: Target, 
                  value: '100%', 
                  label: 'Real Experiences',
                  color: 'from-purple-500 to-pink-500'
                },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-sm`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-500 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div> */}

            {/* Search & Filter Bar */}
            {/* <div className="max-w-2xl mx-auto bg-white rounded-xl border border-gray-200 p-2 shadow-sm mb-12">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search inspiring stories..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-300">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-600 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    Search
                  </button>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg shadow-green-500/20'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:text-green-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section> */}

      {/* Featured Blog */}
      {featuredBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Story</h2>
              <p className="text-gray-500 mt-2">Most inspiring journey this month</p>
            </div>
            {/* <div className="flex items-center gap-2 text-green-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">Editor's Pick</span>
            </div> */}
          </div>
          
          <motion.div 
            className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden group cursor-pointer"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-green-700 border border-green-200">
                <Zap className="w-4 h-4" />
                Featured
              </div>
            </div> */}
            
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-2/3">
                  <span className="inline-block bg-gradient-to-r from-green-100 to-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {featuredBlogs[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    {featuredBlogs[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredBlogs[0].seo_description}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredBlogs[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredBlogs[0].read_time} read
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {featuredBlogs[0].author}
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="flex flex-col gap-4">
                    <a
                      href={`/blogs/${featuredBlogs[0].slug}`}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    {/* <div className="flex items-center gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        <Heart className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Latest Blogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Stories</h2>
            <p className="text-gray-500 mt-2">Fresh from our community</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <BlogCard blog={blog} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Blogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">More Stories</h2>
            <p className="text-gray-500 mt-2">Discover more inspiring journeys</p>
          </div>
          <div className="text-sm text-gray-500">
            Showing {allBlogs.length} of {blogs.length} stories
          </div>
        </div>
        {allBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
              >
                <BlogCard blog={blog} index={index} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No stories found</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-green-800" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Content */}
          <div className="relative z-10 p-10 md:p-14 text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Join Our Community</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Share Your Journey, Inspire Others
            </h3>
            
            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Your story could be the motivation someone needs to take the next step in their career. 
              Join hundreds of students sharing their transformative experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917011418073"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Share Your Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogsPage;