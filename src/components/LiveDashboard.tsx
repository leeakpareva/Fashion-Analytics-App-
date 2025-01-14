import { useState, useEffect } from 'react';
import { Activity, Users, Eye, TrendingUp } from 'lucide-react';
import React from 'react';
import { supabase } from '../lib/supabaseClient';

interface Metric {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: number;
}

function formatValue(value: number, label: string): string {
  if (label === 'Live Users') {
    return Math.round(value).toString();
  } else if (label === 'New Followers' || label === 'Views') {
    return (Math.round(value * 10) / 10).toFixed(1) + 'K';
  } else {
    return value.toFixed(1) + '%';
  }
}

export function LiveDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { icon: Activity, label: 'Live Users', value: '245', trend: 5.2 },
    { icon: Users, label: 'New Followers', value: '1.2K', trend: 2.8 },
    { icon: Eye, label: 'Views', value: '3.4K', trend: -1.5 },
    { icon: TrendingUp, label: 'Engagement', value: '8.7%', trend: 3.2 },
  ]);

  useEffect(() => {
    async function fetchAnalytics() {
      const { data: events, error } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) {
        console.error('Error fetching analytics:', error);
        return;
      }

      if (!events?.length) return;

      const newMetrics = metrics.map(metric => {
        const event = events.find(e => e.event_name.toLowerCase() === metric.label.toLowerCase().replace(' ', '_'));
        if (!event) return metric;

        const value = event.event_data.value;
        const previousValue = event.event_data.previous_value || value;
        const trend = previousValue ? ((value - previousValue) / previousValue) * 100 : 0;

        return {
          ...metric,
          value: formatValue(value, metric.label),
          trend: Math.round(trend * 10) / 10
        };
      });

      setMetrics(newMetrics);
    }

    fetchAnalytics();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel('analytics_events')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'analytics_events' 
        }, 
        payload => {
          const event = payload.new;
          setMetrics(currentMetrics => 
            currentMetrics.map(metric => {
              if (metric.label.toLowerCase().replace(' ', '_') === event.event_name.toLowerCase()) {
                const value = event.event_data.value;
                const previousValue = event.event_data.previous_value || value;
                const trend = previousValue ? ((value - previousValue) / previousValue) * 100 : 0;

                return {
                  ...metric,
                  value: formatValue(value, metric.label),
                  trend: Math.round(trend * 10) / 10
                };
              }
              return metric;
            })
          );
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [metrics]);

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
