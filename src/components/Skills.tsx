"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Wrench,
  Layers,
  Globe,
  Smartphone,
  Server,
} from "lucide-react";

// Skill categories with tags
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

// Progress bar skills with percentages
const progressSkills = [
  { name: "System Development", percentage: 95, color: "blue" },
  { name: "React / Next.js", percentage: 90, color: "cyan" },
  { name: "Database Design", percentage: 88, color: "green" },
  { name: "AI Integration", percentage: 85, color: "purple" },
  { name: "UI/UX Design", percentage: 82, color: "pink" },
  { name: "Mobile Development", percentage: 75, color: "orange" },
];

// Tech stack icons
const techStack = [
  { name: "React", icon: Globe, color: "text-cyan-500" },
  { name: "Next.js", icon: Layers, color: "text-gray-900 dark:text-white" },
  { name: "TypeScript", icon: Code, color: "text-blue-600" },
  { name: "Tailwind", icon: Smartphone, color: "text-teal-500" },
  { name: "Node.js", icon: Server, color: "text-green-600" },
  { name: "Supabase", icon: Database, color: "text-emerald-500" },
  { name: "Firebase", icon: Database, color: "text-orange-500" },
  { name: "Python", icon: Code, color: "text-yellow-500" },
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

const progressColorVariants: Record<string, string> = {
  blue: "bg-gradient-to-r from-blue-500 to-blue-600",
  cyan: "bg-gradient-to-r from-cyan-500 to-blue-500",
  green: "bg-gradient-to-r from-green-500 to-emerald-500",
  purple: "bg-gradient-to-r from-purple-500 to-violet-500",
  pink: "bg-gradient-to-r from-pink-500 to-rose-500",
  orange: "bg-gradient-to-r from-orange-500 to-amber-500",
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

        {/* Tech Stack Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Tech Stack I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-300 cursor-default"
              >
                <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bars Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {progressSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full ${progressColorVariants[skill.color]} shadow-sm`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-gray-100 dark:bg-slate-700 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon
                    className={`w-6 h-6 ${iconColorVariants[category.color as keyof typeof iconColorVariants]}`}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-default transition-all duration-200 hover:shadow-md ${
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
