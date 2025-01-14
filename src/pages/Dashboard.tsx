import { useState } from 'react';
import { TrendingUp, Users, Camera, Hash, Upload, Download } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { PerformanceChart } from '../components/PerformanceChart';
import { TopContent } from '../components/TopContent';
import { CompetitorAnalysis } from '../components/CompetitorAnalysis';
import { ContentPerformanceGraph } from '../components/ContentPerformanceGraph';
import { TodayActivities } from '../components/TodayActivities';
import { ROIMetrics } from '../components/ROIMetrics';
import { DataUploadModal } from '../components/DataUploadModal';
import { UserSegments } from '../components/UserSegments';
import { TotalFollowers } from '../components/TotalFollowers';

// Simulated data generator based on date range
const generateSimulatedData = (period: string) => {
  // Seed for consistent random numbers based on period
  let seedValue = period.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = () => {
    seedValue = (seedValue * 9301 + 49297) % 233280;
    return seedValue / 233280;
  };

  // Generate stats based on period
  const baseEngagement = 8.2;
  const baseFollowers = 12500;
  const basePosts = 128;
  const baseReach = 45200;

  let multiplier = 1;
  switch (period) {
    case 'Last 30 days':
      multiplier = 1.5;
      break;
    case 'Last 3 months':
      multiplier = 2.5;
      break;
    case 'Last year':
      multiplier = 4;
      break;
    default: // Last 7 days
      multiplier = 1;
  }

  const stats = [
    {
      icon: TrendingUp,
      label: 'Engagement Rate',
      value: `${(baseEngagement + random() * 2 * multiplier).toFixed(1)}%`,
      trend: `+${(2.1 + random() * 1).toFixed(1)}%`
    },
    {
      icon: Users,
      label: 'Followers',
      value: `${Math.floor(baseFollowers * (1 + random() * 0.2) * multiplier).toLocaleString()}`,
      trend: `+${(5.3 + random() * 2).toFixed(1)}%`
    },
    {
      icon: Camera,
      label: 'Posts',
      value: Math.floor(basePosts * (1 + random() * 0.3) * multiplier).toString(),
      trend: `+${Math.floor(12 * multiplier)}`
    },
    {
      icon: Hash,
      label: 'Reach',
      value: `${Math.floor(baseReach * (1 + random() * 0.25) * multiplier).toLocaleString()}`,
      trend: `+${(15.8 + random() * 3).toFixed(1)}%`
    }
  ];

  // Generate content data
  const topContent = [
    {
      id: 1,
      title: 'Summer Collection Preview',
      engagement: Math.floor(85 * (1 + random() * 0.1))
    },
    {
      id: 2,
      title: 'New Product Launch',
      engagement: Math.floor(80 * (1 + random() * 0.1))
    },
    {
      id: 3,
      title: 'Brand Story',
      engagement: Math.floor(75 * (1 + random() * 0.1))
    }
  ];

  // Generate competitor data
  const competitors = [
    {
      name: 'Brand A',
      engagement: `${(7.8 + random() * 1).toFixed(1)}%`,
      followers: `${Math.floor(1.2e6 * (1 + random() * 0.2)).toLocaleString()}`
    },
    {
      name: 'Brand B',
      engagement: `${(6.5 + random() * 1).toFixed(1)}%`,
      followers: `${Math.floor(890000 * (1 + random() * 0.2)).toLocaleString()}`
    },
    {
      name: 'Brand C',
      engagement: `${(5.9 + random() * 1).toFixed(1)}%`,
      followers: `${Math.floor(650000 * (1 + random() * 0.2)).toLocaleString()}`
    }
  ];

  return { stats, topContent, competitors };
};

export function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 7 days');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(generateSimulatedData('Last 7 days'));

  // Simulate data loading when period changes
  const handlePeriodChange = (period: string) => {
    setIsLoading(true);
    setSelectedPeriod(period);
    
    // Simulate API call delay
    setTimeout(() => {
      setData(generateSimulatedData(period));
      setIsLoading(false);
    }, 1000);
  };

  const handleExport = () => {
    const csvContent = [
      ['Metric', 'Value', 'Trend'],
      ...data.stats.map(stat => [stat.label, stat.value, stat.trend]),
      [],
      ['Content', 'Engagement'],
      ...data.topContent.map(content => [content.title, `${content.engagement}%`]),
      [],
      ['Competitor', 'Engagement', 'Followers'],
      ...data.competitors.map(comp => [comp.name, comp.engagement, comp.followers])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-dashboard-${selectedPeriod.toLowerCase().replace(/\s+/g, '-')}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Total Followers Overview */}
      <TotalFollowers />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-black">Analytics Overview</h1>
          <p className="text-zinc-500 mt-1">Track your social media performance</p>
        </div>
        <select
          value={selectedPeriod}
          onChange={(e) => handlePeriodChange(e.target.value)}
          disabled={isLoading}
          className="border border-zinc-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-black focus:border-black disabled:bg-zinc-100"
        >
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-zinc-300 border-t-black mx-auto" />
            <p className="text-sm text-zinc-600 mt-2">Loading data...</p>
          </div>
        </div>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Today's Activities */}
      <div className="mb-8">
        <TodayActivities />
      </div>

      {/* ROI Analysis */}
      <div className="mb-8">
        <ROIMetrics />
      </div>

      {/* Content Performance Analysis */}
      <div className="mb-8">
        <ContentPerformanceGraph />
      </div>

      {/* User Segments */}
      <div className="mb-8">
        <UserSegments />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div className="space-y-6">
          <TopContent items={data.topContent} />
          <CompetitorAnalysis competitors={data.competitors} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <Upload className="h-4 w-4" />
          Upload Data
        </button>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>

      {/* Upload Modal */}
      <DataUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onComplete={() => {
          setShowUploadModal(false);
          // Here you would typically refresh the dashboard data
        }}
      />
    </div>
  );
}
