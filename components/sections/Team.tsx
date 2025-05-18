"use client";

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Team() {
  return (
    <div className="max-w-md mx-auto">
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-video relative bg-gradient-to-r from-darkNavy to-electricBlue">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-coolGray">
              <Image
                src="https://framerusercontent.com/images/8cwScfKRy8QaycBjJSWPz5ZMfPg.jpg?scale-down-to=1024"
                alt="Tiya Jain"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-6 px-6 text-center">
          <h3 className="text-2xl font-bold mb-1">Tiya Jain</h3>
          <p className="text-gray-600 mb-4">Founder</p>
          
          <p className="text-sm text-gray-500 mb-6">
            Industrial engineering graduate with a passion for sustainability and AI.
            Experienced in SCADA systems and industrial optimization.
          </p>
          
          <Button 
            variant="outline" 
            className="gap-2"
            asChild
          >
            <a href="mailto:f20230526@goa.bits-pilani.ac.in">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}