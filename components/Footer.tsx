"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkNavy text-coolGray">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-electricBlue font-bold text-xl mb-2">
              Maiscada
            </div>
            <p className="text-sm text-coolGray/70">
              Industrial Intelligence. One Command Away.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="#" 
              className="p-2 bg-darkNavy border border-coolGray/20 rounded-full hover:bg-electricBlue/20 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 bg-darkNavy border border-coolGray/20 rounded-full hover:bg-electricBlue/20 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 bg-darkNavy border border-coolGray/20 rounded-full hover:bg-electricBlue/20 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-coolGray/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-coolGray/60">
          <p>© {currentYear} Maiscada. All rights reserved.</p>
          
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="hover:text-electricBlue mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-electricBlue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}