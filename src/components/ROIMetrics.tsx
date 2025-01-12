import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';

interface ROIMetric {
  category: string;
  investment: number;
  revenue: number;
  roi: number;
  trend: number;
  dailyRevenue: number;
}

// More reliable seeded random number generator
function seededRandom(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs((Math.sin(hash) + 1) / 2); // Returns 0-1
}

// Generate consistent data based on date and category
function generateDataForDate(date: string): ROIMetric[] {
  const categories = [
    'Content Marketing',
    'Social Media',
    'Brand Campaigns',
    'Influencer Partnerships'
  ];

  return categories.map(category => {
    // Create unique seeds for each metric
    const investmentSeed = `${date}-${category}-investment`;
    const revenueSeed = `${date}-${category}-revenue`;
    const trendSeed = `${date}-${category}-trend`;
    const dailySeed = `${date}-${category}-daily`;

    // Generate base investment (3000-8000)
    const investment = Math.floor(seededRandom(investmentSeed) * 5000) + 3000;
    
    // Generate revenue multiplier (3-6x)
    const revenueMultiplier = seededRandom(revenueSeed) * 3 + 3;
    const revenue = Math.floor(investment * revenueMultiplier);
    
    // Calculate ROI
    const roi = ((revenue - investment) / investment) * 100;
    
    // Generate trend (-10 to +10)
    const trend = (seededRandom(trendSeed) * 20) - 10;
    
    // Generate daily revenue (500-2500)
    const dailyRevenue = Math.floor(seededRandom(dailySeed) * 2000) + 500;

    return {
      category,
      investment,
      revenue,
      roi,
      trend,
      dailyRevenue
    };
  });
}

export function ROIMetrics() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [metrics, setMetrics] = useState<ROIMetric[]>([]);

  useEffect(() => {
    const newData = generateDataForDate(selectedDate);
    setMetrics(newData);
  }, [selectedDate]);

  const totalROI = metrics.reduce((acc, curr) => acc + curr.roi, 0) / metrics.length;
  const totalInvestment = metrics.reduce((acc, curr) => acc + curr.investment, 0);
  const totalRevenue = metrics.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalDailyRevenue = metrics.reduce((acc, curr) => acc + curr.dailyRevenue, 0);

  const handleExport = () => {
    const csvContent = [
      ['Category', 'Investment', 'Revenue', 'ROI', 'Trend', 'Daily Revenue'],
      ...metrics.map(metric => [
        metric.category,
        metric.investment,
        metric.revenue,
        `${metric.roi.toFixed(1)}%`,
        `${metric.trend.toFixed(1)}%`,
        metric.dailyRevenue
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roi-metrics-${selectedDate}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-100 rounded-lg">
            <DollarSign className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">ROI Analysis</h3>
            <p className="text-sm text-zinc-500">Daily performance metrics</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-zinc-500" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="border border-zinc-200 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <button
            onClick={handleExport}
            className="p-2 text-zinc-600 hover:text-black transition-colors"
            title="Export data"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-zinc-50 p-4 rounded-lg">
          <p className="text-sm text-zinc-600 mb-1">Average ROI</p>
          <p className="text-2xl font-bold text-black">{totalROI.toFixed(1)}%</p>
        </div>
        <div className="bg-zinc-50 p-4 rounded-lg">
          <p className="text-sm text-zinc-600 mb-1">Total Investment</p>
          <p className="text-2xl font-bold text-black">£{totalInvestment.toLocaleString()}</p>
        </div>
        <div className="bg-zinc-50 p-4 rounded-lg">
          <p className="text-sm text-zinc-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-black">£{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-zinc-50 p-4 rounded-lg">
          <p className="text-sm text-zinc-600 mb-1">Daily Revenue</p>
          <p className="text-2xl font-bold text-black">£{totalDailyRevenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg">
            <div>
              <p className="font-medium text-black">{metric.category}</p>
              <div className="flex items-center gap-4 mt-1">
                <p className="text-sm text-zinc-600">
                  Investment: <span className="font-medium">£{metric.investment.toLocaleString()}</span>
                </p>
                <p className="text-sm text-zinc-600">
                  Revenue: <span className="font-medium">£{metric.revenue.toLocaleString()}</span>
                </p>
                <p className="text-sm text-zinc-600">
                  Daily: <span className="font-medium">£{metric.dailyRevenue.toLocaleString()}</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-black">{metric.roi.toFixed(1)}%</span>
                <TrendingUp className={`h-4 w-4 ${metric.trend > 0 ? 'text-green-500' : 'text-red-500'}`} />
              </div>
              <p className="text-sm text-zinc-600">
                {metric.trend > 0 ? '+' : ''}{metric.trend.toFixed(1)}% trend
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded-lg">
        <h4 className="font-medium text-black mb-2">Key Insights</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Content marketing shows highest ROI growth
          </li>
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Brand campaigns generate most revenue
          </li>
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Social media has consistent performance
          </li>
        </ul>
      </div>
    </div>
  );
}