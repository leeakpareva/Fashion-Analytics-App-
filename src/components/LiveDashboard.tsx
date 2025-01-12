import { useState, useEffect } from 'react';
import { Activity, Users, Eye, TrendingUp } from 'lucide-react';

interface Metric {
  icon: any;
  label: string;
  value: string;
  trend: number;
}

export function LiveDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { icon: Activity, label: 'Live Users', value: '245', trend: 5.2 },
    { icon: Users, label: 'New Followers', value: '1.2K', trend: 2.8 },
    { icon: Eye, label: 'Views', value: '3.4K', trend: -1.5 },
    { icon: TrendingUp, label: 'Engagement', value: '8.7%', trend: 3.2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(currentMetrics => 
        currentMetrics.map(metric => {
          const variation = (Math.random() - 0.5) * 10;
          const currentValue = parseFloat(metric.value.replace(/[^0-9.-]/g, ''));
          let newValue: string;
          
          if (metric.label === 'Live Users') {
            newValue = Math.round(currentValue + variation).toString();
          } else if (metric.label === 'New Followers') {
            newValue = (Math.round((currentValue + variation / 10) * 10) / 10).toFixed(1) + 'K';
          } else if (metric.label === 'Views') {
            newValue = (Math.round((currentValue + variation / 5) * 10) / 10).toFixed(1) + 'K';
          } else {
            newValue = (Math.round((currentValue + variation / 20) * 10) / 10).toFixed(1) + '%';
          }

          return {
            ...metric,
            value: newValue,
            trend: Math.round((Math.random() - 0.5) * 10 * 10) / 10
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-6 px-6 py-2 bg-zinc-900 text-white">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="flex items-center gap-3">
            <div className="p-1.5 bg-zinc-800 rounded">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">{metric.label}</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">{metric.value}</span>
                <span className={`text-xs ${metric.trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend >= 0 ? '+' : ''}{metric.trend}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}