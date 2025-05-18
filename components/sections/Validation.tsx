"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We don't even look at SCADA for energy savings because it's just too complex to interpret for our operators.",
    role: "Plant Manager, Chemical Processing"
  },
  {
    id: 2,
    quote: "Our operators find SCADA interfaces confusing. They know there's valuable data there, but can't translate it to actions.",
    role: "Operations Director, Food & Beverage"
  },
  {
    id: 3,
    quote: "Energy reporting is all post-facto and manual. By the time we know there's waste, we've already paid for it.",
    role: "Sustainability Lead, Pharmaceutical"
  }
];

export default function Validation() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-safetyOrange p-3 rounded-full">
            <Quote className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <div className="mb-8" style={{ height: '180px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <blockquote className="text-xl md:text-2xl text-center italic mb-6">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="text-center text-gray-600">
                — {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => {
              prev();
              setAutoplay(false);
            }}
            className="p-2 rounded-full bg-coolGray hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`h-2 w-2 rounded-full ${
                  index === current ? 'bg-electricBlue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => {
              next();
              setAutoplay(false);
            }}
            className="p-2 rounded-full bg-coolGray hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}