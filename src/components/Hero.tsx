"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Download, Code2, Database, Cpu, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Typing animation texts
const typingTexts = [
  "AI-Assisted Full Stack Developer",
  "System Development Specialist",
  "Building Intelligent Solutions",
  "Turning Ideas Into Reality",
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing animation effect
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Code2, value: "10+", label: "Systems Built" },
    { icon: Cpu, value: "8+", label: "Technologies" },
    { icon: Database, value: "4+", label: "Databases" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 dark:from-cyan-400/3 dark:to-blue-500/3 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-violet-400/5 to-purple-500/5 dark:from-violet-400/3 dark:to-purple-500/3 rounded-full blur-2xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-1/4 w-16 h-16 border border-blue-200/20 dark:border-blue-400/10 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-1/4 w-12 h-12 border border-purple-200/20 dark:border-purple-400/10 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-400/5 dark:to-cyan-400/5 rounded-md rotate-45"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-16 w-6 h-6 bg-gradient-to-br from-violet-400/10 to-purple-400/10 dark:from-violet-400/5 dark:to-purple-400/5 rounded-full"
        />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 relative z-50 isolate"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800/50"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
              />
              Available for Projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500">
                  Mike Angelo
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 min-h-[2.5rem]"
            >
              <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <p className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-slate-300">
                <span>{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-6 sm:h-7 bg-blue-500 ml-1 align-middle"
                />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build intelligent, custom systems that solve real business problems. 
              From management systems to POS solutions, I create software that helps 
              businesses operate more efficiently and effectively.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-slate-500 transition-all duration-300 shadow-lg shadow-gray-200/50 dark:shadow-slate-900/50"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="/Mike_Angelo_Casono_CV.pdf"
                download
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-slate-600 relative z-50"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-700 dark:to-slate-600 mb-2 group-hover:from-blue-100 group-hover:to-blue-50 dark:group-hover:from-blue-900/50 dark:group-hover:to-blue-800/50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center relative z-0 overflow-hidden"
          >
            {/* Outer container with padding for floating elements */}
            <div className="relative p-8 sm:p-12 lg:p-16 pointer-events-none -z-10">
              {/* Animated decorative rings - positioned relative to center */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-88 sm:h-88 lg:w-[420px] lg:h-[420px] border-2 border-dashed border-blue-200/50 dark:border-blue-500/20 rounded-full pointer-events-none z-0"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] border border-purple-200/30 dark:border-purple-500/10 rounded-full pointer-events-none z-0"
              />
              
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl scale-110 pointer-events-none z-0" />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 z-0 pointer-events-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background for when image has white bg or fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
                
                {!imageError ? (
                  <Image
                    src="/profile.png"
                    alt="Mike Angelo R. Casono - AI-Assisted Full Stack System Developer"
                    fill
                    priority
                    className="object-cover object-top relative z-10"
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback Avatar */
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90">M</span>
                  </div>
                )}
              </motion.div>

              {/* Floating Badge - Open to Work */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute right-0 sm:right-2 top-12 sm:top-16 bg-white dark:bg-slate-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border border-gray-100 dark:border-slate-700 backdrop-blur-sm z-30"
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-200 whitespace-nowrap">
                    Open to Work
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge - AI Powered */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute left-0 sm:left-2 bottom-16 sm:bottom-20 bg-white dark:bg-slate-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border border-gray-100 dark:border-slate-700 backdrop-blur-sm z-30"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-200 whitespace-nowrap">
                    AI-Powered
                  </span>
                </div>
              </motion.div>

              {/* Tech stack floating icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-4 sm:top-6 left-12 sm:left-16 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border border-gray-100 dark:border-slate-700 z-30"
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute bottom-8 sm:bottom-10 right-12 sm:right-16 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border border-gray-100 dark:border-slate-700 z-30"
              >
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.a
          href="#services"
          onClick={(e) => handleNavClick(e, "#services")}
          whileHover={{ y: -3 }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
            animate={{ borderColor: ["currentColor", "rgb(59, 130, 246)", "currentColor"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
