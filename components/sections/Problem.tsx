import { Activity, TrendingDown, AlertTriangle } from 'lucide-react';

export default function Problem() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-lightCream p-8 rounded-2xl shadow-lg border border-brandAccent/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-darkAccent p-4 rounded-full">
              <TrendingDown className="h-7 w-7 text-lightCream" />
            </div>
            <h3 className="font-bold text-2xl text-darkText">Energy Waste</h3>
          </div>
          <p className="text-lg text-mediumText leading-relaxed">
            Manufacturing contributes to more than <span className="font-semibold text-brandAccent">30%</span> of global emissions, with much of it stemming from inefficient energy usage and resource management.
          </p>
        </div>

        <div className="bg-lightCream p-8 rounded-2xl shadow-lg border border-brandAccent/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-darkAccent p-4 rounded-full">
              <Activity className="h-7 w-7 text-lightCream" />
            </div>
            <h3 className="font-bold text-2xl text-darkText">Underutilized SCADA</h3>
          </div>
          <p className="text-lg text-mediumText leading-relaxed">
            Modern industrial facilities have SCADA systems in place, but they remain <span className="font-semibold text-brandAccent">severely underutilized</span> for energy optimization due to complex interfaces and lack of actionable insights.
          </p>
        </div>
      </div>
      
      {/* Additional problem statement */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-darkAccent/10 px-8 py-4 rounded-full">
          <AlertTriangle className="h-6 w-6 text-brandAccent" />
          <p className="text-lg font-medium text-darkText">
            Result: <span className="text-brandAccent font-semibold">Billions in wasted energy costs</span> and missed sustainability targets
          </p>
        </div>
      </div>
    </div>
  );
}