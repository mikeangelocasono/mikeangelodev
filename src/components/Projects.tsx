"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Plant Disease Detection System",
    description:
      "An intelligent system that uses machine learning to identify plant diseases from images, helping farmers diagnose and treat crops efficiently.",
    image: "/projects/plant-disease.svg",
    technologies: ["Python", "TensorFlow", "React", "Firebase"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "A comprehensive inventory solution with real-time stock tracking, automated reordering alerts, and detailed analytics dashboard.",
    image: "/projects/inventory.svg",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Chart.js"],
    category: "Management",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Modern POS System",
    description:
      "A point-of-sale system designed for retail businesses with barcode scanning, receipt printing, and daily sales reporting.",
    image: "/projects/pos.svg",
    technologies: ["React", "Node.js", "MySQL", "Electron"],
    category: "Business",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Complaint Management System",
    description:
      "A ticketing system for handling customer complaints with priority queues, assignment workflows, and resolution tracking.",
    image: "/projects/complaint.svg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    category: "Management",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Admin Dashboard with Analytics",
    description:
      "A powerful admin dashboard featuring user management, data visualization, and comprehensive analytics for business insights.",
    image: "/projects/dashboard.svg",
    technologies: ["React", "TypeScript", "Supabase", "Recharts"],
    category: "Business",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Custom Business Management Platform",
    description:
      "An all-in-one platform for small businesses covering HR, finance, project tracking, and customer relationship management.",
    image: "/projects/business.svg",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    category: "Management",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const categories = ["All", "AI/ML", "Management", "Business"];

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of systems and applications I&apos;ve built to solve real 
            business problems using modern technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gray-900 dark:bg-blue-600 text-white shadow-md shadow-gray-900/20 dark:shadow-blue-600/30"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-200 dark:bg-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-xs font-medium text-gray-700 dark:text-slate-300 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-slate-700 text-xs font-medium text-gray-600 dark:text-slate-300 border border-gray-200/50 dark:border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-medium border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-gray-300 dark:hover:border-slate-500 transition-all duration-200 hover:shadow-md"
            >
              {showAll ? "Show Less" : "View All Projects"}
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-90" : ""
                }`}
              />
            </button>
          </motion.div>
        )}

        {/* Note about projects */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8"
        >
          * Some projects are under NDA or in development. Contact me for more details.
        </motion.p>
      </div>
    </section>
  );
}
