// components/AboutPage.jsx
'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Briefcase,
  Clock,
  Zap,
  Globe,
  Heart,
  Linkedin,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Specialised Programmes in Data Analytics, Business Analytics, MIS, and AML and More Analytics Tools."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Seasoned industry professionals bringing real-world expertise into the classroom."
    },
    {
      icon: Zap,
      title: "Practical Learning",
      description: "Hands-on approach through live projects, case studies, and interactive workshops."
    },
    {
      icon: TrendingUp,
      title: "Proven Placement Success",
      description: "Hundreds of students placed in top companies with strong job placement partnerships."
    }
  ];

const teamMembers = [
  {
    name: "Deepak Gogal",
    role: "Founder & CEO",
    experience: "Ex – TCS, SONY",
    specialization: "Data Science & AI",
    image: "/team/founder.jpg",
    linkedin: "https://www.linkedin.com/in/deepak-kumar-036b26b0/"
  }
];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Industry-Centric Training",
      description: "Practical, job-ready skills that match real-world demands"
    },
    {
      icon: Award,
      title: "Globally Recognized Certifications",
      description: "Enhance your professional credibility worldwide"
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Small class sizes and dedicated mentors for unique learning styles"
    },
    {
      icon: Briefcase,
      title: "Guaranteed Career Assistance",
      description: "Job placement support and interview coaching"
    },
    {
      icon: Clock,
      title: "Lifelong Learning",
      description: "Continuous access to resources and updates after course completion"
    },
    {
      icon: Globe,
      title: "Cutting-Edge Resources",
      description: "Access to advanced tools and expert faculty"
    }
  ];

  const stats = [
    { number: "2+", label: "Years of Excellence" },
    { number: "4700+", label: "Students Trained" },
    { number: "73+", label: "Hiring Partners" },
    { number: "93%", label: "Success Rate" }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              About GogalEdu
            </motion.div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Empowering Futures Through{' '}
              <span className="text-green-600">Data Education</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed px-2">
              Trusted by Students and Professionals across India for Hands-On Data Learning and Job-Oriented Courses that Prepare You for Success in the Tech-Driven Future.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
<section className="pt-8 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Microsoft Partner Badge */}
        {/* Microsoft Partner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 via-white to-green-50 backdrop-blur-sm px-5 py-3 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group hover:border-green-300 hover:bg-green-50/80">
            {/* Microsoft Logo Image - REPLACED THE "MS" BOX */}
            {/* <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/microsoft.png" // Path to your image in the public folder
                alt="Microsoft Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-10">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-70"></div>
              </div>
            </div> */}
            
            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-sm font-bold text-green-700 tracking-tight">
                Microsoft Education Partner
              </span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          About GogalEdu Academy
        </h2>
        
        {/* Content */}
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            At GogalEdu Academy, we are committed to empowering individuals through Data Science and AI Training, equipping them with the essential Skills and Knowledge to excel in the ever-evolving world of Data and Technology.
          </p>
          <p>
            Established two years ago, our academy has quickly emerged as a trusted name in Data Education in India, celebrated for its Hands-On Data Learning and Job-Oriented Data Courses designed to prepare students for a Successful Career in Data and Technology.
          </p>
          <p>
            Our mission extends beyond Teaching Cutting-Edge Tools and Techniques, we ensure our Students Master Industry-Ready Data curriculum that meets real-world demands.
          </p>
        </div>
      </motion.div>

      {/* Image Section - UNCHANGED */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[34rem] xl:h-[40rem]">
            <Image
              src="/companycertificate.png"
              alt="GogalEdu Certificate"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

     {/* Team Section - FIXED RESPONSIVE LAYOUT */}
<section className="py-12 sm:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <Users className="w-4 h-4 mr-2" />
        Our Expert Team
      </motion.div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Meet Our Team
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
        Industry Professionals Driving Your Success
      </p>
    </motion.div>

    <motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={member.name}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300 w-full max-w-[280px]"
      variants={itemVariants}
      whileHover={{ y: -2 }}
    >
      {/* Team Member Image or Avatar Fallback */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
        {member.image ? (
          <div className="w-full h-64 overflow-hidden">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
  />
</div>

        ) : (
          // Fallback Avatar with Initials
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <p className="text-green-600 text-sm font-medium">Profile Image</p>
          </div>
        )}
        
        {/* LinkedIn Icon */}
        <div className="absolute top-3 right-3">
          <Link 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaLinkedin className="w-6 h-6 text-green-600" />
          </Link>
        </div>
      </div>

      {/* Team Member Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-bold text-gray-900 leading-tight">
            {member.name}
          </h3>
          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-medium ml-2 flex-shrink-0">
            {member.role}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-start">
            <span className="text-xs text-gray-500 font-medium min-w-14">Exp:</span>
            <span className="text-xs text-gray-700 ml-1">{member.experience}</span>
          </div>
          
          <div className="flex items-start">
            <span className="text-xs text-gray-500 font-medium min-w-14">Expert:</span>
            <span className="text-xs text-gray-700 ml-1">{member.specialization}</span>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>
  </div>
</section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-3xl mx-auto">
              Bridging the Gap between Academic Learning and Industry Expectations
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Our mission is to bridge the gap between academic learning and industry expectations 
                  by equipping our students with future-ready skills through an industry-ready curriculum. 
                  We are dedicated to ensuring they achieve career success from day one and are fully 
                  prepared to make meaningful contributions to the professional world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* What We Offer */}
<section className="py-12 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
        What We Offer
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
        Comprehensive Education Solutions, Designed for Your Success
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <motion.div
            key={feature.title}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-green-300 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -3 }}
          >
            <div className="flex justify-between items-start gap-4">
              {/* Text Content - Left Side */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Icon - Right Side */}
              <div className="flex-shrink-0">
                <div className="p-2 sm:p-3 bg-green-100 rounded-lg text-green-600">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

{/* Why Choose Us */}
<section className="py-12 sm:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
        Why Choose GogalEdu Academy?
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
        Your Success is Our Mission
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {whyChooseUs.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={item.title}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-sm transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -3 }}
          >
            <div className="flex justify-between items-start gap-4">
              {/* Text Content - Left Side */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Icon - Right Side */}
              <div className="flex-shrink-0">
                <div className="p-2 bg-green-100 rounded text-green-600">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-green-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Join Hundreds of Successful Students who have Transformed their Careers with GogalEdu Academy.
            </p>
            <Link href="/courses">
              <motion.button
                className="bg-white cursor-pointer text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;