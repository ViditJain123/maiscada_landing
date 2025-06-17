"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-creamBackground overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-brandAccent opacity-5"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -left-32 bottom-1/4 w-80 h-80 rounded-full bg-darkAccent opacity-5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                {/* Shield Logo */}
                <svg 
                  viewBox="0 0 130 140" 
                  className="w-28 h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 fill-darkText mb-6"
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
                
                {/* Company Name */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkText tracking-wide mb-4">
                  Maiscada
                </h2>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-darkText leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Industrial Intelligence. One Command Away.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-mediumText mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Cut industrial energy waste through AI-powered, real-time insights—no dashboards, just action.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg" 
              className="bg-darkAccent text-lightCream hover:bg-brandAccent transition-all duration-300 shadow-lg group px-8 py-6 text-lg"
              asChild
            >
              <a href="https://cal.com/maiscada/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                Book a Demo
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}