import { type Competitor } from '../types';

interface CompetitorAnalysisProps {
  competitors: Competitor[];
}

export function CompetitorAnalysis({ competitors }: CompetitorAnalysisProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Competitor Analysis</h3>
        <button className="text-sm text-black hover:text-zinc-700">View Details</button>
      </div>
      <div className="space-y-4">
        {competitors.map((competitor, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100">
            <div>
              <p className="font-medium text-black">{competitor.name}</p>
              <p className="text-sm text-zinc-500">Engagement: {competitor.engagement}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-500">Followers</p>
              <p className="font-medium text-black">{competitor.followers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}