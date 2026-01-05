// app/workshop/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Zap, 
  BarChart, 
  Briefcase, 
  Users, 
  Database, 
  Trophy, 
  Calendar, 
  UserCheck, 
  CheckCircle, 
  Award, 
  Video, 
  Brain, 
  Sparkles
} from 'lucide-react';

export default function WorkshopPage() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    

  function getTimeLeft() {
    const TARGET_DATE = new Date("2026-01-11T19:30:00+05:30");
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Countdown timer to Dec 31
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const workshopSchedule = [
    {
      time: "10:00 AM",
      title: "The Data Analyst Landscape",
      description: "Role responsibilities, salary expectations (₹6-15 LPA), and growing market demand.",
      duration: "30 min",
      icon: BarChart,
      highlight: true
    },
    {
      time: "11:30 AM",
      title: "Business Analysis Fundamentals",
      description: "Bridging IT & Business gaps, requirements gathering, and stakeholder management.",
      duration: "30 min",
      highlight: true,
      icon: Briefcase
    },
    {
      time: "02:00 PM",
      title: "Tool Stack Mastery",
      description: "Live demo: Excel automation, SQL queries, PowerBI dashboards, and real-world workflows.",
      duration: "30 min",
      icon: Database,
      highlight: true
    },
    {
      time: "03:30 PM",
      title: "Career Roadmap & Q&A",
      description: "Resume building, interview prep, and personalized guidance from veterans.",
      duration: "30 min",
      icon: Trophy
    },
    {
      time: "01:00 PM",
      title: "Networking Lunch",
      description: "Connect with fellow participants and industry experts.",
      icon: Users,
      type: "break"
    }
  ];

  const enrollNow = () => {
    window.open('https://forms.gle/xjuJiJ1wMwwuURzz7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20 md:pt-20 pb-24 md:pb-20">
      
      {/* Hero Section */}
      <section className="pt-8 pb-8 md:pt-20 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5 md:space-y-7 text-center lg:text-left"
            >
              {/* Premium Microsoft Education Partner Badge */}
<div className="group relative inline-flex items-center">
  {/* Outer glow effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
  
  {/* Main badge */}
  <div className="relative flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 backdrop-blur-sm">
    
    {/* Microsoft logo with premium styling */}
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-md blur-sm opacity-40" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative text-white"
      >
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    </div>
    
    {/* Badge text with premium typography */}
    <span className="
      bg-gradient-to-r from-green-300 via-green-300 to-emerald-300 
      bg-clip-text text-transparent
      text-xs md:text-sm
      font-bold tracking-wider
      whitespace-nowrap
    ">
      MICROSOFT EDUCATION PARTNER
    </span>
    
    {/* Elite indicator */}
    <div className="ml-1 hidden md:block">
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-900/50 to-amber-700/30 border border-amber-600/30">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
        </svg>
        <span className="text-[8px] font-black text-amber-300 tracking-wider">ELITE</span>
      </div>
    </div>
  </div>
  
  {/* Tooltip on hover */}
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
    <span className="text-xs text-slate-300">Official Certified Partner</span>
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-slate-700 rotate-45" />
  </div>
</div>
              
              {/* Main Heading - Responsive Text Size */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Launch Your Tech Career in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Data & Business Analysis
                </span>
              </h1>
              
              {/* Subtitle - Readable on mobile */}
              <p className="text-base md:text-lg text-gray-600">
                Master in-demand skills, connect with industry experts, and discover high-growth career paths 
                with salaries ranging from ₹5-15 LPA.
              </p>
              
              {/* Key Stats - Grid adjusts for mobile */}
              <div className="grid grid-cols-3 gap-2 md:gap-5 py-4 md:py-5 border-y border-green-100">
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">4,700+</div>
                  <div className="text-[10px] md:text-sm text-gray-500">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">4.8/5</div>
                  <div className="text-[10px] md:text-sm text-gray-500">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">73+</div>
                  <div className="text-[10px] md:text-sm text-gray-500">Hiring Partners</div>
                </div>
              </div>
              
              {/* Workshop Details Box */}
              <div className="bg-white rounded-xl p-4 md:p-5 border border-green-200 shadow-sm text-left">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Workshop Details</h3>
                    <div className="space-y-1.5 text-sm md:text-base text-gray-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span><strong>Date:</strong> Sunday, 11 Jan 2026</span>
                      </div>
                      <div><strong>Time:</strong> 7:30 - 9:30 PM IST</div>
                      <div><strong>Format:</strong> Live Interactive Session</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Content - Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 rounded-2xl shadow-2xl overflow-hidden mt-6 lg:mt-0">
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Secure Your Spot</h2>
                    <p className="text-green-200 text-sm md:text-base">Limited seats • Free Registration</p>
                  </div>
                  
                  {/* Pricing Highlight */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="text-gray-300 text-base md:text-lg line-through">₹499</div>
                      <div className="bg-yellow-500 text-green-900 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                        100% OFF
                      </div>
                    </div>
                    
                    <div className="text-center mb-3 md:mb-4">
  <div className="inline-flex flex-col items-center gap-1">
    
    <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-lg md:text-xl font-bold">
      <a href="https://forms.gle/xjuJiJ1wMwwuURzz7"
        target="_blank"
        rel="noopener noreferrer" className="text-xl md:text-2xl">FREE Workshop Access</a>
    </div>

    {/* NEW LINE */}
    <span className="text-emerald-300 text-xs md:text-sm font-semibold">
      Free for the first 100 participants
    </span>

  </div>

  <div className="text-green-300 text-xs md:text-sm mt-1">
    Complete career guidance included
  </div>
</div>

                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="mb-6 md:mb-8">
                    <div className="text-green-200 text-xs md:text-sm font-medium mb-2 md:mb-3 text-center">Registration closes in:</div>
                    <div className="grid grid-cols-4 gap-2 md:gap-3">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                          <div className="bg-green-900/60 py-2 md:py-3 rounded-lg backdrop-blur-sm border border-green-700">
                            <div className="text-lg md:text-2xl font-bold text-white">
                              {value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-[10px] md:text-xs text-green-300 uppercase mt-0.5 md:mt-1">
                              {unit}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <button
                      onClick={enrollNow}
                      className="w-full cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 md:py-4 rounded-xl text-base md:text-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      Register Now for FREE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-12 border border-green-200">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* Mentor Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/team/founder.jpg"
                      alt="Workshop Mentor"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                    <div className="flex items-center gap-1">
                      <Trophy size={12} />
                      <span>10+ Years Exp</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mentor Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2 text-center md:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-semibold mb-3 md:mb-4">
                  <UserCheck size={12} />
                  <span>YOUR WORKSHOP MENTOR</span>
                </div>
                
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Learn from an Industry Veteran
                </h2>
                
                <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6">
                  With over a decade of experience in Data Analytics and Business Intelligence, 
                  I've trained 4,700+ professionals who now work at top companies like Flipkart, Sony, Genpact.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">4,700+ Trained</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">93% Placement</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Ex-TCS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Workshop Schedule
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
              A 2Hr Session of learning and hands-on practice
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Timeline Header */}
            <div className="mb-6 md:mb-10 text-center md:text-left">
              <div className="inline-block md:block bg-green-50 px-4 py-2 rounded-lg md:bg-transparent md:p-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                    <span className="font-semibold text-gray-700 text-sm md:text-base">Full Day Intensive</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">Sunday, 11 Jan 2026 7:30 - 9:30 PM IST</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {workshopSchedule.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`
                    relative bg-white rounded-xl border shadow-sm overflow-hidden
                    ${session.highlight ? 'border-green-500 border-2' : 'border-green-200'}
                    ${session.type === 'break' ? 'bg-gradient-to-r from-green-50 to-emerald-50' : ''}
                  `}>
                    {session.highlight && (
                      <div className="md:absolute md:-right-10 md:top-6 md:bg-gradient-to-r md:from-green-600 md:to-emerald-600 md:text-white md:px-10 md:py-1 md:transform md:rotate-45 md:shadow-lg text-center bg-green-100 text-green-800 text-xs font-bold py-1">
                        <span className="text-xs font-bold">Key Session</span>
                      </div>
                    )}

                    <div className="p-4 md:p-6 md:pt-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                        {/* Icon */}
                        <div className={`
                          hidden md:flex flex-shrink-0 w-16 h-16 rounded-xl items-center justify-center
                          ${session.type === 'break' ? 'bg-gradient-to-r from-yellow-100 to-orange-100' : 'bg-gradient-to-r from-green-100 to-emerald-100'}
                        `}>
                          <session.icon className={`w-8 h-8 ${session.type === 'break' ? 'text-orange-600' : 'text-green-600'}`} />
                        </div>
                        
                        {/* Mobile Icon Row */}
                        <div className="flex md:hidden items-center gap-3 mb-1">
                           <div className={`
                            flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                            ${session.type === 'break' ? 'bg-orange-100' : 'bg-green-100'}
                          `}>
                            <session.icon className={`w-5 h-5 ${session.type === 'break' ? 'text-orange-600' : 'text-green-600'}`} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{session.title}</h3>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-3">
                            <div>
                              <h3 className="hidden md:block text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                              <p className="text-sm text-gray-600">{session.description}</p>
                            </div>
                            {session.duration && (
                            <div
                              className={`
                                px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2 self-start mt-2 md:mt-0
                                ${session.type === 'break'
                                  ? 'bg-orange-100 text-orange-700'
                                  : 'bg-green-100 text-green-700'}
                              `}
                            >
                              <Clock size={12} />
                              {session.duration}
                            </div>
                          )}
                          </div>
                          
                          {/* Tags - Hidden on small mobile to save space, visible on slightly larger */}
                          <div className="hidden sm:block">
                            {session.type !== 'break' && (
                                <div className="flex items-center gap-3 mt-3">
                                  <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded">
                                    <Video size={12} />
                                    <span className="text-xs">Live Demo</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded">
                                    <Brain size={12} />
                                    <span className="text-xs">Interactive</span>
                                  </div>
                                </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm">
                <Clock size={14} />
                <span className="font-semibold">Total Duration: 2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Ready to Transform Your Career?
          </h2>
          <p className="text-green-200 text-base md:text-xl max-w-2xl mx-auto">
            Join hundreds of professionals who've successfully transitioned into
            high-growth tech roles
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">
              93%
            </div>
            <div className="text-green-300 text-xs md:text-sm">
              Placement Rate
            </div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">
              4,700+
            </div>
            <div className="text-green-300 text-xs md:text-sm">Placement</div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">
              ₹5-15 LPA
            </div>
            <div className="text-green-300 text-xs md:text-sm">
              Salary Range
            </div>
          </div>
          <div className="text-center p-3 bg-white/5 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">
              73+
            </div>
            <div className="text-green-300 text-xs md:text-sm">Partners</div>
          </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={enrollNow}
            className="w-full cursor-pointer md:w-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold px-6 py-3 md:px-16 md:py-4 rounded-xl text-lg md:text-xl hover:shadow-2xl transition-all active:scale-95"
          >
            Enroll Now for FREE Workshop
          </button>

          {/* Timer Section */}
          <div className="bg-green-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-md mx-auto">
            <div className="text-green-200 mb-3 font-medium text-sm">
              Registration closes in:
            </div>
            <div className="flex justify-center gap-2 md:gap-3 mb-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-green-900 py-2 px-3 rounded-lg min-w-[60px]">
                    <div className="text-xl md:text-3xl font-bold text-white">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-[10px] md:text-xs text-green-300 uppercase">
                      {unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-green-300 text-xs md:text-sm">
              Workshop: Jan 11, 2026 • 7:30 - 9:30 PM IST
            </div>
          </div>

          {/* --- NEW ADDITION: Contact Section --- */}
          <div className="w-full max-w-5xl mx-auto mt-12 px-4">
      
      {/* Container Box */}
      <div className="bg-green-50/50 border border-green-200 rounded-3xl p-8 text-center shadow-lg backdrop-blur-sm relative overflow-hidden">
        
        {/* Decorative background blob (optional for "Best UI" feel) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-green-500 rounded-b-full opacity-20"></div>

        {/* Header Text */}
        <h3 className="text-green-900 font-bold text-2xl mb-3 tracking-tight">
          Let's Connect
        </h3>
        <p className="text-green-700 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
          Have queries? Our team is ready to assist you. click on any card below to reach us instantly.
        </p>

        {/* Contact Grid layout */}
        {/* Mobile: grid-cols-1 (3 rows vertically) */}
        {/* Desktop: grid-cols-3 (Side by side) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1. WhatsApp Card */}
          <a
            href="https://wa.me/+917011418073" 
            target="_blank" 
            rel="noreferrer"
            className="group relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Green Icon Circle */}
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.198-.199.347-.768.967-.94 1.165-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            
            <h4 className="text-gray-800 font-bold text-lg mb-1 group-hover:text-green-700">WhatsApp</h4>
            <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
              +91 70114 18073
            </span>
          </a>

          {/* 2. Call Card */}
          <a
            href="tel:+917042478224"
            className="group relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Green Icon Circle */}
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            
            <h4 className="text-gray-800 font-bold text-lg mb-1 group-hover:text-green-700">Call Us</h4>
            <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
              +91 70424 78224
            </span>
          </a>

          {/* 3. Email Card */}
          <a
            href="mailto:workshop@gogaledu.com"
            className="group relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Green Icon Circle */}
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            
            <h4 className="text-gray-800 font-bold text-lg mb-1 group-hover:text-green-700">Email</h4>
            <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors break-all text-sm md:text-sm">
              workshop@gogaledu.com
            </span>
          </a>

        </div>
      </div>
    </div>
          {/* End Contact Section */}

        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Fixed Bottom Bar - Premium Mobile CTA */}
<div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.35)]">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between gap-3 py-3 md:py-4">

      {/* LEFT: Offer Info */}
      <div className="flex items-center gap-3">
        
        {/* Price Badge */}
        <div className="relative">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-extrabold text-sm md:text-lg shadow-md">
            FREE
          </div>

          {/* Sub Badge */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-bold bg-black/70 text-yellow-300 px-2 py-0.5 rounded-full whitespace-nowrap">
            First 100 only
          </span>
        </div>

        {/* Date + Old Price */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <span className="text-green-300 line-through text-xs md:text-sm">₹499</span>
          <span className="hidden md:block text-white text-sm font-semibold">
            Sunday, 11 Jan 2026 • 7:30 PM IST
          </span>
        </div>
      </div>

      {/* RIGHT: CTA */}
      <a
        href="https://forms.gle/xjuJiJ1wMwwuURzz7"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white text-green-900 font-extrabold px-5 py-2.5 md:px-8 md:py-3 rounded-xl shadow-xl active:scale-95 transition-all flex items-center gap-2 text-sm md:text-base hover:bg-green-50"
      >
        <span>Register Now</span>
      </a>

    </div>
  </div>
</div>
    </div>
  );
}