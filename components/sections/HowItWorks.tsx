"use client";

import { motion } from 'framer-motion';
import { Terminal, ArrowDown, AlertTriangle, CheckCircle } from 'lucide-react';

const TimelineItem = ({
  command,
  response,
  isAlert = false,
  delay = 0
}: {
  command: string;
  response: string;
  isAlert?: boolean;
  delay?: number;
}) => (
  <motion.div 
    className="relative pl-12 pb-10 border-l-2 border-gray-300 last:border-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="absolute left-[-11px] bg-white p-1 rounded-full">
      {isAlert ? (
        <AlertTriangle className="h-5 w-5 text-safetyOrange" />
      ) : (
        <Terminal className="h-5 w-5 text-electricBlue" />
      )}
    </div>
    
    <div className="mb-3 font-mono text-sm bg-darkNavy text-coolGray p-3 rounded-md overflow-x-auto">
      &gt; {command}
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
      <p>{response}</p>
      {!isAlert && (
        <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
          <CheckCircle className="h-4 w-4" />
          <span>Safety confirmation: All systems operating within parameters</span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Interact with Maiscada using natural language commands. The AI interprets your request, analyzes current data, and provides actionable insights or executes commands with built-in safety confirmations.
      </p>
      
      <div className="relative">
        <TimelineItem 
          command="Optimize pump P-101 RPM for current flow requirements"
          response="Analysis complete. Reducing pump RPM by 15% will maintain required flow rate while saving 22 kWh per day. I'll adjust parameters for you."
          delay={0.1}
        />
        
        <TimelineItem 
          command="Show reactor temperature trends for last shift"
          response="Reactor ran 3.2°C above optimal temperature range during night shift, consuming an extra 45 kWh. Consider adjusting setpoint to 142°C during low-load periods."
          delay={0.2}
        />
        
        <TimelineItem 
          command="Balance flow between parallel lines"
          response="Imbalance detected. Line 2 carrying 67% of flow while Line 1 at 33%. Adjusting control valves to 50/50 distribution will improve efficiency by 6% and extend equipment life."
          delay={0.3}
        />
        
        <TimelineItem 
          command="Scan for energy waste anomalies"
          response="ALERT: Unusual power consumption detected in compressor C-301. Pattern indicates possible seal degradation. Inspection recommended within next 48 hours to prevent further energy waste and potential failure."
          isAlert={true}
          delay={0.4}
        />
      </div>
    </div>
  );
}