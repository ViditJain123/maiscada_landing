import { Zap, TrendingUp, Bell } from 'lucide-react';

const SolutionCard = ({ 
  icon, 
  title, 
  description,
  color,
  accentColor,
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  accentColor: string;
}) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${accentColor}`}>
    <div className="p-6">
      <div className={`p-3 rounded-full mb-4 inline-block ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function Solution() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SolutionCard
        icon={<Zap className="h-6 w-6 text-white" />}
        title="Energy-Saving Action Plans"
        description="AI-generated, precise action plans that operators can implement immediately to reduce energy waste."
        color="bg-electricBlue"
        accentColor="border-electricBlue"
      />
      
      <SolutionCard
        icon={<TrendingUp className="h-6 w-6 text-white" />}
        title="Predictive Analysis"
        description="Forecast energy costs and efficiency metrics to drive proactive optimization decisions."
        color="bg-safetyOrange"
        accentColor="border-safetyOrange"
      />
      
      <SolutionCard
        icon={<Bell className="h-6 w-6 text-white" />}
        title="Smart Anomaly Alerts"
        description="Detect unusual energy consumption patterns before they become expensive problems."
        color="bg-darkNavy"
        accentColor="border-darkNavy"
      />
    </div>
  );
}