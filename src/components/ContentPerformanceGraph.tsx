import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Clock, Download } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface ContentPerformanceData {
  created_at: string;
  likes: number;
  comments: number;
  shares: number;
  impressions: number;
}

interface TimeSlot {
  hour: string;
  engagement: number;
  posts: number;
  day: string;
}

export function ContentPerformanceGraph() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'weekday' | 'weekend'>('all');
  const [data, setData] = useState<TimeSlot[]>([]);

  useEffect(() => {
    async function fetchContentPerformance() {
      const { data: performanceData, error } = await supabase
        .from('content_performance')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching content performance:', error);
        return;
      }

      if (!performanceData?.length) return;

      // Transform data into hourly slots
      const transformedData = performanceData.map((item: ContentPerformanceData) => {
        const date = new Date(item.created_at);
        const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
        const hour = date.getHours().toString().padStart(2, '0') + ':00';

        return {
          hour: `${day} ${hour}`,
          engagement: ((item.likes + item.comments + item.shares) / item.impressions) * 100,
          posts: 1, // Each record represents one post
          day: ['Sat', 'Sun'].includes(day) ? 'weekend' : 'weekday'
        };
      });

      // Group by hour and aggregate
      const hourlyData = transformedData.reduce((acc: TimeSlot[], curr: TimeSlot) => {
        const existing = acc.find(item => item.hour === curr.hour);
        if (existing) {
          existing.engagement = (existing.engagement * existing.posts + curr.engagement) / (existing.posts + 1);
          existing.posts += curr.posts;
        } else {
          acc.push({
            hour: curr.hour,
            engagement: curr.engagement,
            posts: curr.posts,
            day: curr.day
          });
        }
        return acc;
      }, []);

      setData(hourlyData);
    }

    fetchContentPerformance();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel('content_performance')
      .on('postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'content_performance'
        },
        () => {
          fetchContentPerformance(); // Refetch all data when new content is added
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const filteredData = data.filter(slot => {
    if (selectedFilter === 'all') return true;
    return slot.day === selectedFilter;
  });

  const chartData = {
    labels: filteredData.map(slot => slot.hour),
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: filteredData.map(slot => slot.engagement),
        borderColor: '#18181b',
        backgroundColor: 'rgba(24, 24, 27, 0.1)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Number of Posts',
        data: filteredData.map(slot => slot.posts),
        borderColor: '#71717a',
        backgroundColor: 'rgba(113, 113, 122, 0.1)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
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
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: { dataset: { label: string }, parsed: { y: number } }) {
            const label = context.dataset.label;
            const value = context.parsed.y.toFixed(1);
            return `${label}: ${value}${label.includes('%') ? '%' : ''}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          autoSkip: true,
          maxTicksLimit: 24, // Show fewer ticks for better readability
          callback: function(value: string | number, index: number) {
            const label = filteredData[index]?.hour;
            // Only show the day name when it changes
            if (index === 0 || (index > 0 && label?.split(' ')[0] !== filteredData[index - 1]?.hour?.split(' ')[0])) {
              return label;
            }
            return label?.split(' ')[1]; // Only show time for other labels
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Engagement Rate (%)'
        },
        grid: {
          color: '#f4f4f5'
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Number of Posts'
        },
        grid: {
          drawOnChartArea: false
        }
      }
    }
  };

  const handleExport = () => {
    const csvContent = [
      ['Day', 'Hour', 'Engagement Rate (%)', 'Number of Posts', 'Day Type'],
      ...data.map(slot => [
        slot.hour.split(' ')[0],
        slot.hour.split(' ')[1],
        slot.engagement.toFixed(2),
        slot.posts,
        slot.day
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content-performance-${new Date().toISOString().split('T')[0]}.csv`;
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
            <Clock className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Content Performance Analysis</h3>
            <p className="text-sm text-zinc-500">Engagement rates by day and time</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-zinc-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-black text-white'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('weekday')}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedFilter === 'weekday'
                  ? 'bg-black text-white'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              Weekdays
            </button>
            <button
              onClick={() => setSelectedFilter('weekend')}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedFilter === 'weekend'
                  ? 'bg-black text-white'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              Weekends
            </button>
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

      <div className="h-[400px]">
        <Line options={options} data={chartData} />
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded-lg">
        <h4 className="font-medium text-black mb-2">Key Insights</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Peak engagement occurs during weekday business hours (9 AM - 5 PM)
          </li>
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Weekend posts show different engagement patterns with later peak times
          </li>
          <li className="flex items-center gap-2 text-sm text-zinc-600">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            Higher post frequency doesn't always correlate with better engagement
          </li>
        </ul>
      </div>
    </div>
  );
}
