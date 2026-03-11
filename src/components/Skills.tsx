"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: Code,
    color: "blue",
    skills: [
      "System Development",
      "Web Development",
      "Full Stack Development",
      "Responsive Design",
      "API Development",
      "UI/UX Implementation",
    ],
  },
  {
    title: "AI / Automation",
    icon: Cpu,
    color: "purple",
    skills: [
      "AI-Assisted Development",
      "Process Automation",
      "Machine Learning Integration",
      "Intelligent System Design",
      "Workflow Optimization",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "green",
    skills: [
      "Supabase",
      "Firebase",
      "MySQL",
      "XAMPP",
      "PostgreSQL",
      "Database Design",
    ],
  },
  {
    title: "Tools / Platforms",
    icon: Wrench,
    color: "orange",
    skills: [
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Flutter",
    ],
  },
];

const colorVariants = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
};

const iconColorVariants = {
  blue: "text-blue-600 dark:text-blue-400",
  purple: "text-purple-600 dark:text-purple-400",
  green: "text-green-600 dark:text-green-400",
  orange: "text-orange-600 dark:text-orange-400",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to 
            build modern, efficient, and scalable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gray-100 dark:bg-slate-700`}>
                  <category.icon
                    className={`w-6 h-6 ${iconColorVariants[category.color as keyof typeof iconColorVariants]}`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                      colorVariants[category.color as keyof typeof colorVariants]
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Continuously learning and adapting to new technologies to deliver the best solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
