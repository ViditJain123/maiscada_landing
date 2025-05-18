"use client";

import { motion } from 'framer-motion';
import { DollarSign, Percent, PieChart } from 'lucide-react';

const MarketStat = ({ 
  title, 
  value, 
  subtitle, 
  icon,
  delay = 0
}: { 
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  delay?: number;
}) => (
  <motion.div 
    className="bg-white/10 rounded-lg p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-electricBlue/20 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-coolGray mb-1">{title}</h3>
    <p className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</p>
    <p className="text-sm text-coolGray/80">{subtitle}</p>
  </motion.div>
);

export default function Market() {
  return (
    <div className="text-white">
      <p className="text-center mb-12 max-w-2xl mx-auto">
        The industrial energy optimization market presents a significant opportunity 
        for AI-powered solutions that can deliver immediate, actionable insights.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MarketStat 
          title="Total Addressable Market"
          value="$44.11B"
          subtitle="Global industrial energy optimization"
          icon={<DollarSign className="h-6 w-6 text-electricBlue" />}
          delay={0.1}
        />
        
        <MarketStat 
          title="Serviceable Available Market"
          value="$11.02B"
          subtitle="SCADA-equipped facilities"
          icon={<PieChart className="h-6 w-6 text-electricBlue" />}
          delay={0.2}
        />
        
        <MarketStat 
          title="Serviceable Obtainable Market"
          value="$165M"
          subtitle="1.5% in 2 years"
          icon={<Percent className="h-6 w-6 text-electricBlue" />}
          delay={0.3}
        />
      </div>
    </div>
  );
}