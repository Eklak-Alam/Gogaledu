"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getBlogBySlug } from '@/db/BlogsData';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  BookOpen,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  Target,
  Award,
  ChevronRight,
  Phone,
  MessageCircle
} from 'lucide-react';

const BlogDetailPage = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const { slug } = React.use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    const foundBlog = getBlogBySlug(slug);
    setBlog(foundBlog);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading story...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <Link href="/blogs" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleShare = (platform) => {
    const text = `Read this inspiring story: ${blog.title}`;
    let url = '';
    
    switch(platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Stories
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.read_time} read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Blog */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

              {/* Introduction */}
              <div className="mb-10">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {blog.introduction}
                </p>
              </div>

              {/* Story Sections */}
              <div className="space-y-6 mb-12">
                {blog.story.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Role Description Card */}
              <div className="bg-gradient-to-r from-green-50 to-indigo-50 rounded-2xl p-6 mb-10 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {blog.role_title}
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg font-medium">
                  {blog.role_description}
                </p>
                
                {/* Tasks */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Responsibilities:
                  </h3>
                  <ul className="space-y-3">
                    {blog.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                {blog.industries && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Industries:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.industries.map((industry, index) => (
                        <span 
                          key={index}
                          className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Why Chosen */}
              {blog.why_chosen && (
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Why This Career Was Chosen
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {blog.why_chosen.map((reason, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {reason}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="space-y-4">
                  {blog.conclusion.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Share Buttons - Mobile View */}
              {/* <div className="lg:hidden mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this Story
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex flex-col items-center justify-center gap-1"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-xs">Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors flex flex-col items-center justify-center gap-1"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="text-xs">Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors flex flex-col items-center justify-center gap-1"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-xs">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div> */}
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Share Card - Desktop */}
              {/* <div className="hidden lg:block bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share this Story
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Facebook className="w-5 h-5" />
                    Share on Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Twitter className="w-5 h-5" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    Share on LinkedIn
                  </button>
                </div>
              </div>

              {blog.links && blog.links.length > 0 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-sm mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Related Courses
                  </h3>
                  <div className="space-y-3">
                    {blog.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border border-gray-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-green-700 font-medium text-sm">{link.text}</span>
                          <ChevronRight className="w-4 h-4 text-green-600" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 sticky top-24 rounded-xl p-6 text-white text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3">Need Career Guidance?</h3>
                <p className="text-green-100 text-sm mb-4">
                  Talk to our counselor for personalized advice
                </p>
                <a
                  href="tel:+917011418073"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call: 7011418073
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;