"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkText text-lightCream">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <svg 
                viewBox="0 0 130 140" 
                className="w-12 h-14 fill-lightCream mr-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M65 10 
                     C45 10, 25 16, 25 28
                     C25 50, 25 72, 25 94
                     C25 112, 45 128, 65 134
                     C85 128, 105 112, 105 94
                     C105 72, 105 50, 105 28
                     C105 16, 85 10, 65 10 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <text 
                  x="65" 
                  y="85" 
                  fontSize="52" 
                  fontFamily="serif" 
                  fontWeight="bold" 
                  textAnchor="middle" 
                  fill="currentColor"
                >
                  M
                </text>
              </svg>
              <div className="text-lightCream font-bold text-xl">
                Maiscada
              </div>
            </div>
            <p className="text-sm text-lightCream/70">
              Industrial Intelligence. One Command Away.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://x.com/tiyajain_" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-darkAccent border border-lightCream/20 rounded-full hover:bg-brandAccent/30 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/tiyajain24" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-darkAccent border border-lightCream/20 rounded-full hover:bg-brandAccent/30 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/TiyaaaJain" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-darkAccent border border-lightCream/20 rounded-full hover:bg-brandAccent/30 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-lightCream/10 mt-8 pt-8 text-center text-sm text-lightCream/60">
          <p>© {currentYear} Maiscada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}