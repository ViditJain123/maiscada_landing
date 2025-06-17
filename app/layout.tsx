import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Maiscada - Industrial Intelligence',
  description: 'Cut industrial energy waste through AI-powered, real-time insights—no dashboards, just action.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.className,
        spaceMono.variable,
        inter.variable,
        "bg-creamBackground"
      )}>
        {children}
      </body>
    </html>
  );
}