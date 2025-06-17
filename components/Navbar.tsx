"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn, scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <li>
    <Link 
      href={href} 
      className="text-mediumText hover:text-darkText transition-colors duration-200 font-medium"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href.substring(1));
        onClick && onClick();
      }}
    >
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-lightCream/95 backdrop-blur-md shadow-lg py-2" : "bg-lightCream/80 backdrop-blur-sm py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size="sm" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <NavItem href="#problem" label="Problem" />
            <NavItem href="#solution" label="Solution" />
            <NavItem href="#enroll" label="Contact" />
            <li>
              <a 
                href="mailto:f20230526@goa.bits-pilani.ac.in?subject=Maiscada Pilot Enrollment&body=Hi Tiya, I'm interested in joining the pilot program."
                className="text-mediumText hover:text-darkText transition-colors duration-200 font-medium"
              >
                Become a Partner
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mediumText hover:text-darkText"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-lightCream/95 backdrop-blur-md border-t border-brandAccent/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              <NavItem href="#problem" label="Problem" onClick={closeMenu} />
              <NavItem href="#solution" label="Solution" onClick={closeMenu} />
              <NavItem href="#market" label="Market" onClick={closeMenu} />
              <NavItem href="#team" label="Team" onClick={closeMenu} />
              <NavItem href="#enroll" label="Contact" onClick={closeMenu} />
              <li>
                <Button
                  className="w-full bg-darkAccent text-lightCream hover:bg-brandAccent transition-all duration-300"
                  asChild
                >
                  <a href="mailto:f20230526@goa.bits-pilani.ac.in?subject=Maiscada Pilot Enrollment&body=Hi Tiya, I'm interested in joining the pilot program.">
                    Become a Partner
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}