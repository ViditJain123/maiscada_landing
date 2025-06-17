import { Zap, TrendingUp, Bell } from 'lucide-react';

const SolutionCard = ({ 
  icon, 
  title, 
  description,
  number,
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}) => (
  <div className="bg-lightCream rounded-2xl shadow-lg p-8 border border-brandAccent/20 hover:shadow-xl transition-all duration-300">
    <div className="mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-brandAccent to-darkAccent rounded-2xl flex items-center justify-center mb-4 text-lightCream font-bold text-2xl">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold text-darkText mb-4">{title}</h3>
    <p className="text-mediumText leading-relaxed">{description}</p>
  </div>
);

export default function Solution() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SolutionCard
        icon={<Zap className="h-6 w-6" />}
        number="1"
        title="Energy-saving action plans"
        description="AI-generated, precise action plans that operators can implement immediately to reduce energy waste."
      />
      
      <SolutionCard
        icon={<TrendingUp className="h-6 w-6" />}
        number="2"
        title="Predictive cost and efficiency impact analysis"
        description="Forecast energy costs and efficiency metrics to drive proactive optimization decisions."
      />
      
      <SolutionCard
        icon={<Bell className="h-6 w-6" />}
        number="3"
        title="Smart alerts for anomalies"
        description="Detect unusual energy consumption patterns before they become expensive problems."
      />
    </div>
  );
}