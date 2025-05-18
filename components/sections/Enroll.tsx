"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Enroll() {
  return (
    <motion.div 
      className="max-w-3xl mx-auto bg-gradient-to-r from-darkNavy to-darkNavy/90 rounded-xl p-8 md:p-12 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Enroll in the Summer 2025 Pilot
        </h2>
        
        <p className="text-coolGray text-lg max-w-xl mx-auto">
          Join select industrial facilities in our pilot program. Gain early access to Maiscada's AI-powered energy optimization platform.
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Pilot Program Benefits</h3>
          
          <ul className="space-y-3">
            {[
              "Free 3-month implementation and support",
              "Customized energy saving action plans",
              "Priority feature development input",
              "Dedicated technical support team"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-safetyOrange flex-shrink-0 mt-1" />
                <span className="text-coolGray">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          size="lg" 
          className="bg-safetyOrange text-white hover:bg-opacity-90 shadow-lg group"
          asChild
        >
          <a href="mailto:f20230526@goa.bits-pilani.ac.in?subject=Maiscada Pilot Enrollment&body=Hi Tiya, I'm interested in joining the pilot program.">
            Enroll for Pilot Program
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        
        <div className="flex items-center mt-4 text-coolGray/70 text-sm">
          <ShieldCheck className="h-4 w-4 mr-2" />
          <span>We'll reply with next steps. No spam.</span>
        </div>
      </div>
    </motion.div>
  );
}