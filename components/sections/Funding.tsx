import { Check } from 'lucide-react';

const FundingItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-3">
    <div className="bg-safetyOrange p-1 rounded-full flex-shrink-0 mt-1">
      <Check className="h-3 w-3 text-white" />
    </div>
    <p className="text-coolGray">{text}</p>
  </div>
);

export default function Funding() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-darkNavy border border-electricBlue/30 rounded-lg p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Funding ask: <span className="text-safetyOrange">₹ 5 Lakhs</span> for next 2 months
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-electricBlue">Infrastructure</h4>
            <FundingItem text="Cloud computing resources for AI model training and deployment" />
            <FundingItem text="Development environments and testing infrastructure" />
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-electricBlue">Operations</h4>
            <FundingItem text="Pilot program implementation and customer onboarding" />
            <FundingItem text="Technical documentation and training materials" />
            <FundingItem text="Legal and compliance requirements" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-coolGray/80">
            Seed funding will enable us to build our MVP and launch with our first three pilot customers,
            validating both our technology and market fit.
          </p>
        </div>
      </div>
    </div>
  );
}