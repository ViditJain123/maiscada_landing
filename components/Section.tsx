"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  bgColor?: string;
}

export default function Section({ id, title, children, bgColor = "bg-white" }: SectionProps) {
  const textColor = bgColor.includes('darkNavy') ? 'text-white' : 'text-darkNavy';
  
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24", 
        bgColor
      )}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-12 text-center",
              textColor
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}