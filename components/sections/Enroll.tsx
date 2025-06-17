"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Enroll() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-lightCream rounded-2xl p-8 md:p-12 shadow-xl border border-brandAccent/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkText mb-8">
          Become a Partner
        </h2>
        
        {/* Checklist */}
        <div className="max-w-2xl mx-auto mb-8">
          <ul className="space-y-4 text-left">
            {[
              "Are you a sustainability-focused founder?",
              "Do you provide IoT devices for industry?", 
              "Do you offer compliance tools or solutions?",
              "Are you already partnered with a chain of industries?"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-brandAccent flex-shrink-0 mt-1" />
                <span className="text-mediumText text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-mediumText text-lg leading-relaxed italic bg-darkAccent/5 p-6 rounded-xl border-l-4 border-brandAccent">
            &ldquo;Sell our service as an add-on. Maiscada can boost your efficiency offering and help you deliver more value to your customers.&rdquo;
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <Button 
          size="lg" 
          className="bg-darkAccent text-lightCream hover:bg-brandAccent transition-all duration-300 shadow-lg group px-10 py-6 text-lg"
          asChild
        >
          <a href="https://cal.com/maiscada/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
            Book a Demo
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        
        <div className="flex items-center mt-6 text-mediumText/70 text-sm">
          <Check className="h-4 w-4 mr-2 text-brandAccent" />
          <span>30-minute consultation • No commitment required</span>
        </div>
      </div>
    </motion.div>
  );
}