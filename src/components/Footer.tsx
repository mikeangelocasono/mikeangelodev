"use client";

import React from "react";
import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/mikeangelocasono", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/mikeangelocasono", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/mikeangelocasono", label: "Facebook" },
  { icon: Mail, href: "mailto:mikeangelocasono@gmail.com", label: "Email" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="inline-block mb-4 group">
              <span className="text-2xl font-bold">
                MIKE<span className="text-blue-400 group-hover:text-blue-300 transition-colors"> DEV</span>
              </span>
            </a>
            <p className="text-gray-400 dark:text-slate-400 mb-6 max-w-md">
              AI-Assisted Full Stack System Developer specializing in building custom 
              business systems, management platforms, and intelligent solutions that 
              help businesses grow and operate efficiently.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-800 dark:bg-slate-800 text-gray-400 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 dark:text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400 dark:text-slate-400">
              <li>
                <a 
                  href="mailto:mikeangelocasono@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  mikeangelocasono@gmail.com
                </a>
              </li>
              <li>Philippines</li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  Available for projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 dark:text-slate-400 text-sm text-center sm:text-left">
              © {currentYear} Mike Angelo R. Casono. All rights reserved.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-400 dark:text-slate-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="text-sm">Back to top</span>
              <div className="p-1.5 rounded-lg bg-gray-800 dark:bg-slate-800 group-hover:bg-blue-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-blue-600/30">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
