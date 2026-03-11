"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, Code, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "4th Year BSIT Student",
  },
  {
    icon: Target,
    title: "Focus",
    description: "AI-Assisted Development",
  },
  {
    icon: Code,
    title: "Specialty",
    description: "Custom System Solutions",
  },
  {
    icon: Sparkles,
    title: "Approach",
    description: "Practical & User-Focused",
  },
];

export default function About() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" 
              />
              
              {/* Main Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-xl shadow-gray-900/10 dark:shadow-black/30"
              >
                {/* Gradient background for fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
                
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Mike Angelo R. Casono"
                    fill
                    className="object-cover object-top relative z-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 z-10">
                    <span className="text-8xl font-bold text-white/90">M</span>
                  </div>
                )}
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-100 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                    Systems<br />Developed
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Turning Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Working Systems
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-slate-400 mb-8">
              <p>
                I&apos;m <strong className="text-gray-900 dark:text-white">Mike Angelo R. Casono</strong>, 
                a 4th year Bachelor of Science in Information Technology student with a passion for 
                building systems that make a real difference for businesses.
              </p>
              <p>
                My expertise lies in AI-assisted system development—combining the efficiency of modern 
                AI tools with solid programming fundamentals to create custom solutions. I don&apos;t just 
                rely on AI; I use it as a powerful tool to accelerate development while ensuring 
                quality and functionality.
              </p>
              <p>
                I specialize in building management systems, POS solutions, and web applications 
                that help businesses streamline their operations. With experience in multiple 
                database technologies including Supabase, Firebase, and MySQL, I can design 
                robust data architectures that scale with your needs.
              </p>
              <p>
                My goal is simple: to create efficient, practical, and user-friendly systems 
                that solve real problems. Whether you&apos;re a small business looking to digitize 
                your operations or an enterprise needing a custom solution, I&apos;m here to help 
                turn your ideas into reality.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.title}
                    </div>
                    <div className="text-gray-600 dark:text-slate-400 text-sm">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="/Mike_Angelo_Casono_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
