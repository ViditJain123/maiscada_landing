import { Activity, TrendingDown } from 'lucide-react';

export default function Problem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-darkNavy p-3 rounded-full">
              <TrendingDown className="h-6 w-6 text-safetyOrange" />
            </div>
            <h3 className="font-bold text-2xl">Energy Waste</h3>
          </div>
          <p className="text-lg">Manufacturing contributes to more than <span className="font-semibold text-safetyOrange">30%</span> of global emissions, with much of it stemming from inefficient energy usage and resource management.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-darkNavy p-3 rounded-full">
              <Activity className="h-6 w-6 text-electricBlue" />
            </div>
            <h3 className="font-bold text-2xl">Underutilized SCADA</h3>
          </div>
          <p className="text-lg">Modern industrial facilities have SCADA systems in place, but they remain <span className="font-semibold text-electricBlue">severely underutilized</span> for energy optimization due to complex interfaces and lack of actionable insights.</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Energy Usage Graph Representation */}
            <div className="w-full h-4/5 bg-coolGray rounded-lg p-6 flex flex-col">
              <div className="text-sm text-darkNavy mb-2">Energy Consumption Patterns</div>
              
              <div className="flex-1 flex items-end space-x-2">
                <div className="w-1/6 bg-safetyOrange rounded-t-sm" style={{height: '65%'}}></div>
                <div className="w-1/6 bg-safetyOrange rounded-t-sm" style={{height: '85%'}}></div>
                <div className="w-1/6 bg-safetyOrange rounded-t-sm" style={{height: '75%'}}></div>
                <div className="w-1/6 bg-electricBlue rounded-t-sm" style={{height: '35%'}}></div>
                <div className="w-1/6 bg-safetyOrange rounded-t-sm" style={{height: '90%'}}></div>
                <div className="w-1/6 bg-safetyOrange rounded-t-sm" style={{height: '80%'}}></div>
              </div>
              
              <div className="border-t border-darkNavy mt-2 pt-2 flex justify-between text-xs text-darkNavy">
                <span>Wasteful</span>
                <span>Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}