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
  Brain 
} from 'lucide-react';

export default function WorkshopPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 15,
    minutes: 30,
    seconds: 45
  });

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
      duration: "90 min",
      icon: BarChart,
      highlight: true
    },
    {
      time: "11:30 AM",
      title: "Business Analysis Fundamentals",
      description: "Bridging IT & Business gaps, requirements gathering, and stakeholder management.",
      duration: "90 min",
      icon: Briefcase
    },
    {
      time: "01:00 PM",
      title: "Networking Lunch",
      description: "Connect with fellow participants and industry experts.",
      duration: "60 min",
      icon: Users,
      type: "break"
    },
    {
      time: "02:00 PM",
      title: "Tool Stack Mastery",
      description: "Live demo: Excel automation, SQL queries, PowerBI dashboards, and real-world workflows.",
      duration: "90 min",
      icon: Database,
      highlight: true
    },
    {
      time: "03:30 PM",
      title: "Career Roadmap & Q&A",
      description: "Resume building, interview prep, and personalized guidance from veterans.",
      duration: "90 min",
      icon: Trophy
    }
  ];

  const enrollNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf...', '_blank');
  };

  const viewDocs = () => {
    window.open('https://docs.google.com/document/d/...', '_blank');
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
              {/* Workshop Tag - Smaller on Mobile */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs md:text-sm font-semibold">
                <Zap size={12} className="md:w-3.5 md:h-3.5" />
                <span>ONE-DAY CAREER ACCELERATOR</span>
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
                with salaries ranging from ₹5-20 LPA.
              </p>
              
              {/* Key Stats - Grid adjusts for mobile */}
              <div className="grid grid-cols-3 gap-2 md:gap-5 py-4 md:py-5 border-y border-green-100">
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">2K+</div>
                  <div className="text-[10px] md:text-sm text-gray-500">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">4.9/5</div>
                  <div className="text-[10px] md:text-sm text-gray-500">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-green-600">300+</div>
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
                        <span><strong>Date:</strong> January 1, 2026</span>
                      </div>
                      <div><strong>Time:</strong> 10:00 AM - 5:00 PM IST</div>
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
                      <div className="text-gray-300 text-base md:text-lg line-through">₹199</div>
                      <div className="bg-yellow-500 text-green-900 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                        100% OFF
                      </div>
                    </div>
                    
                    <div className="text-center mb-3 md:mb-4">
                      <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-lg md:text-xl font-bold mb-1 md:mb-2">
                        <span className="text-2xl md:text-3xl">FREE</span>
                        <span className="text-sm md:text-base">Workshop Access</span>
                      </div>
                      <div className="text-green-300 text-xs md:text-sm">Complete career guidance included</div>
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
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 md:py-4 rounded-xl text-base md:text-lg hover:shadow-xl transition-all active:scale-95"
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
                  I've trained 2,000+ professionals who now work at top companies like Google, 
                  Amazon, and McKinsey.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">2,000+ Trained</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">95% Placement</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/50 p-2 rounded-lg">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Ex-Fortune 500</span>
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
              A packed day of learning and hands-on practice
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
                  <div className="text-xs md:text-sm text-gray-500">Jan 1, 2026 • 10:00 AM - 5:00 PM</div>
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
                            <div className={`
                              px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2 self-start mt-2 md:mt-0
                              ${session.type === 'break' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}
                            `}>
                              <Clock size={12} />
                              {session.duration}
                            </div>
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
                <span className="font-semibold">Total Duration: 7 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                  Join hundreds of professionals who've successfully transitioned into high-growth tech roles
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-green-300 text-xs md:text-sm">Placement Rate</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">2K+</div>
                  <div className="text-green-300 text-xs md:text-sm">Alumni</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">₹5-20L</div>
                  <div className="text-green-300 text-xs md:text-sm">Salary Range</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">300+</div>
                  <div className="text-green-300 text-xs md:text-sm">Partners</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <button
                  onClick={enrollNow}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold px-6 py-3 md:px-16 md:py-4 rounded-xl text-lg md:text-xl hover:shadow-2xl transition-all active:scale-95"
                >
                  Enroll Now for FREE Workshop
                </button>
                
                <div className="bg-green-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-md mx-auto">
                  <div className="text-green-200 mb-3 font-medium text-sm">Registration closes in:</div>
                  <div className="flex justify-center gap-2 md:gap-3 mb-3">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-green-900 py-2 px-3 rounded-lg min-w-[60px]">
                          <div className="text-xl md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                          <div className="text-[10px] md:text-xs text-green-300 uppercase">{unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-green-300 text-xs md:text-sm">
                    Last date: Dec 31, 2024 • Workshop: Jan 1, 2026
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom Bar - Mobile Optimized */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-900 to-emerald-900 shadow-[0_-5px_20px_rgba(0,0,0,0.2)] border-t border-green-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Left: Offer Details */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2.5 rounded-lg font-bold text-sm md:text-lg">
                FREE
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-3">
                <div className="text-green-200 line-through text-xs md:text-base">₹199</div>
                <div className="hidden md:block text-white text-sm font-semibold">Jan 1, 2026</div>
              </div>
            </div>
            
            {/* Right: Action Buttons */}
            <button
              onClick={enrollNow}
              className="bg-white text-green-900 font-bold px-5 py-2 md:px-8 md:py-2.5 rounded-lg shadow-lg active:scale-95 flex items-center gap-2 text-sm md:text-base"
            >
              <Calendar size={16} className="text-green-700" />
              <span>Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}