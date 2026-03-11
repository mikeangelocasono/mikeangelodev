"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Building2,
  ShoppingCart,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI-Assisted System Development",
    description:
      "Leverage the power of AI to build smarter, more efficient systems that automate workflows and enhance decision-making for your business.",
  },
  {
    icon: Building2,
    title: "Business Management Systems",
    description:
      "Custom management systems designed to streamline your operations, from inventory tracking to employee management and reporting.",
  },
  {
    icon: ShoppingCart,
    title: "POS System Development",
    description:
      "Modern point-of-sale solutions that handle transactions, inventory, and sales analytics with a user-friendly interface.",
  },
  {
    icon: Database,
    title: "Database Design & Integration",
    description:
      "Robust database architecture using Supabase, Firebase, MySQL, and more to ensure your data is secure, organized, and accessible.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Full-stack web applications built with modern technologies that are fast, scalable, and tailored to your specific requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Interfaces",
    description:
      "Responsive system interfaces that work seamlessly across all devices, ensuring your team can access tools anywhere, anytime.",
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

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white dark:bg-gray-900"
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
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I provide end-to-end system development services that help businesses 
            digitize their operations and achieve their goals through technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need something specific? I&apos;m flexible and can adapt to your requirements.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Let&apos;s discuss your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
