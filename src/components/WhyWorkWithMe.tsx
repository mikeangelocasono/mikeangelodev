"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Zap,
  Shield,
  HeartHandshake,
  Layout,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "I focus on building systems that solve real business problems, not just impressive technology demos.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Using AI-assisted workflows, I can turn your ideas into working prototypes faster without compromising quality.",
  },
  {
    icon: Shield,
    title: "Reliable Systems",
    description:
      "I prioritize stable, well-tested code that runs smoothly in production and handles edge cases gracefully.",
  },
  {
    icon: Layout,
    title: "Clean Interfaces",
    description:
      "Every system I build comes with intuitive, professional UI that your team and customers will love using.",
  },
  {
    icon: HeartHandshake,
    title: "Clear Communication",
    description:
      "I keep you informed at every stage, explain technical decisions clearly, and value your feedback.",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    description:
      "I don't disappear after delivery. I provide ongoing support and help you adapt the system as needs evolve.",
  },
];

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

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
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
            Why Choose Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Sets Me Apart
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            When you work with me, you get more than code—you get a partner 
            committed to your success.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100 dark:text-gray-800 select-none">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/50">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
