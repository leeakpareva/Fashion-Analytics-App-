import { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  TooltipItem
} from 'chart.js';
import { Line, getElementAtEvent } from 'react-chartjs-2';
import { Settings, TrendingUp, TrendingDown, AlertCircle, ArrowRight, Download } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DataPoint {
  value: number;
  recommendation: string;
  impact: 'positive' | 'negative' | 'neutral';
  details: string[];
}

const initialEngagementData: DataPoint[] = [
  { 
    value: 4.3,
    recommendation: "Content engagement needs attention",
    impact: 'negative',
    details: [
      "Posts during off-peak hours",
      "Limited hashtag reach",
      "Consider scheduling optimization"
    ]
  },
  { 
    value: 5.2,
    recommendation: "Slight improvement detected",
    impact: 'neutral',
    details: [
      "Increased comment activity",
      "Better post timing",
      "Room for hashtag optimization"
    ]
  },
  { 
    value: 5.7,
    recommendation: "Positive trend emerging",
    impact: 'positive',
    details: [
      "Strong video content performance",
      "Growing comment threads",
      "Effective hashtag strategy"
    ]
  },
  { 
    value: 6.1,
    recommendation: "Steady growth pattern",
    impact: 'positive',
    details: [
      "Consistent posting schedule",
      "High-quality visuals",
      "Active community engagement"
    ]
  },
  { 
    value: 7.2,
    recommendation: "Significant engagement spike",
    impact: 'positive',
    details: [
      "Viral post potential",
      "Strong audience resonance",
      "Peak posting time hit"
    ]
  },
  { 
    value: 8.5,
    recommendation: "Peak performance achieved",
    impact: 'positive',
    details: [
      "Optimal content mix",
      "Strong audience interaction",
      "Effective call-to-actions"
    ]
  },
  { 
    value: 8.2,
    recommendation: "Minor engagement fluctuation",
    impact: 'neutral',
    details: [
      "Content variety needed",
      "Maintain posting consistency",
      "Review hashtag strategy"
    ]
  }
];

const initialFollowerData: DataPoint[] = [
  { 
    value: 2.1,
    recommendation: "Growth rate needs boost",
    impact: 'negative',
    details: [
      "Increase post frequency",
      "Enhance profile optimization",
      "Expand content reach"
    ]
  },
  { 
    value: 2.8,
    recommendation: "Growth momentum building",
    impact: 'neutral',
    details: [
      "Improved profile visits",
      "Better content discovery",
      "Growing save rate"
    ]
  },
  { 
    value: 3.2,
    recommendation: "Steady growth trajectory",
    impact: 'positive',
    details: [
      "Consistent new followers",
      "Strong retention rate",
      "Effective content strategy"
    ]
  },
  { 
    value: 3.9,
    recommendation: "Accelerated growth phase",
    impact: 'positive',
    details: [
      "Viral content impact",
      "High profile visibility",
      "Strong audience retention"
    ]
  },
  { 
    value: 4.5,
    recommendation: "Strong growth momentum",
    impact: 'positive',
    details: [
      "Peak audience growth",
      "High engagement conversion",
      "Effective reach expansion"
    ]
  },
  { 
    value: 5.2,
    recommendation: "Exceptional growth rate",
    impact: 'positive',
    details: [
      "Maximum growth velocity",
      "Strong brand momentum",
      "High audience quality"
    ]
  },
  { 
    value: 5.8,
    recommendation: "Peak growth achievement",
    impact: 'positive',
    details: [
      "Optimize for retention",
      "Focus on engagement",
      "Maintain growth momentum"
    ]
  }
];

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  animation: {
    duration: 750,
    easing: 'easeInOutQuart'
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#18181b',
        font: {
          family: 'system-ui',
          weight: 500,
          size: 12
        },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    tooltip: {
      backgroundColor: 'white',
      titleColor: '#18181b',
      bodyColor: '#18181b',
      borderColor: '#e4e4e7',
      borderWidth: 1,
      padding: 16,
      displayColors: false,
      titleFont: {
        size: 14,
        weight: 600
      },
      bodyFont: {
        size: 13
      },
      callbacks: {
        label: function(tooltipItem: TooltipItem<'line'>) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.parsed.y.toFixed(2)}%`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#f4f4f5',
        display: false
      },
      ticks: {
        color: '#71717a',
        padding: 10,
        font: {
          size: 11
        },
        callback: function(value: number | string) {
          return typeof value === 'number' ? value.toFixed(1) + '%' : value;
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#71717a',
        padding: 5,
        font: {
          size: 11
        }
      }
    }
  }
};

export function PerformanceChart() {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [liveData, setLiveData] = useState({
    engagement: [...initialEngagementData],
    followers: [...initialFollowerData]
  });
  const [notifications, setNotifications] = useState<string[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prevData => {
        const newEngagement = [...prevData.engagement];
        const newFollowers = [...prevData.followers];
        
        const lastEngagementValue = newEngagement[newEngagement.length - 1].value;
        const lastFollowerValue = newFollowers[newFollowers.length - 1].value;
        
        const engagementVariation = (Math.random() - 0.5) * 0.5;
        const followerVariation = (Math.random() - 0.5) * 0.3;
        
        const newEngagementValue = Math.max(0, Math.min(10, lastEngagementValue + engagementVariation));
        const newFollowerValue = Math.max(0, Math.min(10, lastFollowerValue + followerVariation));
        
        if (Math.abs(newEngagementValue - lastEngagementValue) > 0.3) {
          const trend = newEngagementValue > lastEngagementValue ? 'increased' : 'decreased';
          setNotifications(prev => [`Engagement rate ${trend} significantly!`, ...prev].slice(0, 5));
        }
        
        if (Math.abs(newFollowerValue - lastFollowerValue) > 0.2) {
          const trend = newFollowerValue > lastFollowerValue ? 'increased' : 'decreased';
          setNotifications(prev => [`Follower growth ${trend} significantly!`, ...prev].slice(0, 5));
        }

        newEngagement[newEngagement.length - 1] = {
          ...newEngagement[newEngagement.length - 1],
          value: newEngagementValue
        };
        
        newFollowers[newFollowers.length - 1] = {
          ...newFollowers[newFollowers.length - 1],
          value: newFollowerValue
        };
        
        return {
          engagement: newEngagement,
          followers: newFollowers
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getRecommendation = useCallback((index: number | null) => {
    if (index === null) return null;
    
    const engagementRec = liveData.engagement[index];
    const followerRec = liveData.followers[index];
    
    return {
      engagement: engagementRec,
      followers: followerRec,
      day: labels[index]
    };
  }, [liveData]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Engagement Rate',
        data: liveData.engagement.map(d => d.value),
        borderColor: '#18181b',
        backgroundColor: 'rgba(24, 24, 27, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#18181b',
        pointHoverBackgroundColor: '#18181b',
        pointBorderColor: '#ffffff',
        pointHoverBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2
      },
      {
        label: 'Follower Growth',
        data: liveData.followers.map(d => d.value),
        borderColor: '#71717a',
        backgroundColor: 'rgba(113, 113, 122, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#71717a',
        pointHoverBackgroundColor: '#71717a',
        pointBorderColor: '#ffffff',
        pointHoverBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2
      }
    ]
  };

  const handleExport = () => {
    const csvContent = [
      ['Day', 'Engagement Rate', 'Follower Growth'],
      ...labels.map((day, i) => [
        day,
        liveData.engagement[i].value.toFixed(2),
        liveData.followers[i].value.toFixed(2)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'performance-data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleChartClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const chart = event.currentTarget;
    const ctx = chart.getContext('2d');
    if (!ctx) return;
    
    const chartInstance = ChartJS.getChart(chart);
    if (!chartInstance) return;
    
    const elements = getElementAtEvent(chartInstance, event);
    if (elements && elements.length > 0) {
      const index = elements[0].index;
      setActivePoint(index);
      setIsExpanded(true);
    }
  };

  const recommendation = useMemo(() => getRecommendation(activePoint), [activePoint, getRecommendation]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-black">Performance Analytics</h3>
          <p className="text-sm text-zinc-500 mt-1">Live updates every 2 seconds</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-zinc-500 hover:text-black transition-colors"
          >
            <AlertCircle className="h-5 w-5" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          <button 
            onClick={handleExport}
            className="text-zinc-500 hover:text-black transition-colors"
            title="Export data as CSV"
          >
            <Download className="h-5 w-5" />
          </button>
          <button className="text-zinc-500 hover:text-black transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {showNotifications && notifications.length > 0 && (
        <div className="mb-4 p-4 bg-zinc-50 rounded-lg">
          <h4 className="font-medium text-black mb-2">Recent Updates</h4>
          <ul className="space-y-2">
            {notifications.map((notification, index) => (
              <li key={index} className="text-sm text-zinc-600 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-red-500 rounded-full"></span>
                {notification}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="h-[400px]">
        <Line 
          options={options} 
          data={data}
          onClick={handleChartClick}
        />
      </div>
      
      {recommendation && (
        <div className={`mt-6 bg-zinc-50 rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-black">{recommendation.day}'s Insights</h4>
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-sm text-zinc-500 hover:text-black transition-colors"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Engagement Insights */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {recommendation.engagement.impact === 'positive' ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : recommendation.engagement.impact === 'negative' ? (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                      <h5 className="font-medium text-black">Engagement Analysis</h5>
                    </div>
                    <p className="text-sm text-zinc-600 mb-2">{recommendation.engagement.recommendation}</p>
                    <ul className="space-y-2">
                      {recommendation.engagement.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-zinc-600">
                          <ArrowRight className="h-4 w-4 text-black" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Follower Insights */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {recommendation.followers.impact === 'positive' ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : recommendation.followers.impact === 'negative' ? (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                      <h5 className="font-medium text-black">Follower Growth Analysis</h5>
                    </div>
                    <p className="text-sm text-zinc-600 mb-2">{recommendation.followers.recommendation}</p>
                    <ul className="space-y-2">
                      {recommendation.followers.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-zinc-600">
                          <ArrowRight className="h-4 w-4 text-black" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
