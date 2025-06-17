"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-12',
    md: 'w-14 h-16',
    lg: 'w-18 h-22',
    xl: 'w-28 h-32'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 110 120" 
        className={`${sizeClasses[size]} fill-darkText`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path 
          d="M55 5 
             C38 5, 20 10, 20 20
             C20 40, 20 60, 20 80
             C20 95, 38 110, 55 115
             C72 110, 90 95, 90 80
             C90 60, 90 40, 90 20
             C90 10, 72 5, 55 5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        
        {/* Letter M */}
        <text 
          x="55" 
          y="75" 
          fontSize="48" 
          fontFamily="serif" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="currentColor"
        >
          M
        </text>
      </svg>
      
      <span className="ml-3 text-2xl font-bold text-darkText tracking-wide">
        Maiscada
      </span>
    </div>
  );
}
