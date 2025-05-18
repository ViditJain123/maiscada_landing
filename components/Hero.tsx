"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-darkNavy overflow-hidden">
      {/* Background circle elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-electricBlue opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -left-24 bottom-1/3 w-72 h-72 rounded-full bg-safetyOrange opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1] 
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Industrial Intelligence.
            <span className="text-electricBlue"> One Command Away.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-coolGray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cut industrial energy waste through AI-powered, real-time insights—no dashboards, just action.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-safetyOrange text-white hover:bg-opacity-90 group"
              asChild
            >
              <a href="mailto:f20230526@goa.bits-pilani.ac.in?subject=Maiscada Pilot Enrollment&body=Hi Tiya, I'm interested in joining the pilot program.">
                Enroll for Pilot Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}