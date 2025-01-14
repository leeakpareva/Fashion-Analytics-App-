import { useState, useEffect } from 'react';
import { Clock, TrendingUp, TrendingDown, RefreshCcw } from 'lucide-react';

interface Activity {
  time: string;
  type: string;
  value: string;
  trend: number;
  description: string;
}

export function TodayActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const generateActivities = () => {
      const now = new Date();
      const activities: Activity[] = [];
      
      // Generate activities for the past few hours
      for (let i = 0; i < 8; i++) {
        const time = new Date(now);
        time.setHours(time.getHours() - i);
        
        const types = ['engagement', 'followers', 'views', 'posts'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        let value = '';
        let description = '';
        const trend = (Math.random() * 10 - 5).toFixed(1);
        
        switch (type) {
          case 'engagement':
            value = `${(Math.random() * 10 + 5).toFixed(1)}%`;
            description = 'Engagement rate in the last hour';
            break;
          case 'followers':
            value = `+${Math.floor(Math.random() * 50 + 10)}`;
            description = 'New followers gained';
            break;
          case 'views':
            value = `${Math.floor(Math.random() * 1000 + 500)}`;
            description = 'Content views in the last hour';
            break;
          case 'posts':
            value = `${Math.floor(Math.random() * 5 + 1)}`;
            description = 'New posts published';
            break;
        }
        
        activities.push({
          time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type,
          value,
          trend: parseFloat(trend),
          description
        });
      }
      
      setActivities(activities);
      setLastUpdate(new Date());
    };

    generateActivities();
    const interval = setInterval(generateActivities, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call delay
    setTimeout(() => {
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-100 rounded-lg">
            <Clock className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Today's Activities</h3>
            <p className="text-sm text-zinc-500">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </p>
          </div>
        </div>
        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`p-2 text-zinc-600 hover:text-black transition-colors rounded-lg
            ${isRefreshing ? 'bg-zinc-50' : 'hover:bg-zinc-50'}`}
          title="Refresh data"
        >
          <RefreshCcw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100"
          >
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-zinc-500">
                {activity.time}
              </div>
              <div>
                <p className="font-medium text-black">{activity.value}</p>
                <p className="text-sm text-zinc-600">{activity.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {activity.trend > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ${
                activity.trend > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {activity.trend > 0 ? '+' : ''}{activity.trend}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded-lg">
        <h4 className="font-medium text-black mb-2">Today's Summary</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Engagement', 'New Followers', 'Total Views', 'Posts'].map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-zinc-600 mb-1">{metric}</p>
              <p className="font-medium text-black">
                {metric === 'Engagement' ? '7.2%' :
                 metric === 'New Followers' ? '+245' :
                 metric === 'Total Views' ? '3.4K' :
                 '12'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
