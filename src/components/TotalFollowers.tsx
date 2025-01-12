import { useState, useEffect } from 'react';
import { Users, TrendingUp, TrendingDown } from 'lucide-react';

interface PlatformData {
  name: string;
  followers: number;
  growth: number;
}

export function TotalFollowers() {
  const [platforms, setPlatforms] = useState<PlatformData[]>([
    { name: 'Instagram', followers: 125000, growth: 2.8 },
    { name: 'Facebook', followers: 89000, growth: 1.5 },
    { name: 'Twitter', followers: 65000, growth: -0.5 },
    { name: 'TikTok', followers: 45000, growth: 4.2 },
    { name: 'LinkedIn', followers: 32000, growth: 1.8 }
  ]);

  const totalFollowers = platforms.reduce((sum, platform) => sum + platform.followers, 0);
  const averageGrowth = platforms.reduce((sum, platform) => sum + platform.growth, 0) / platforms.length;

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPlatforms(currentPlatforms => 
        currentPlatforms.map(platform => ({
          ...platform,
          followers: platform.followers + Math.floor(Math.random() * 10),
          growth: platform.growth + (Math.random() - 0.5) * 0.1
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white p-6 rounded-xl mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-zinc-800 rounded-lg">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{formatNumber(totalFollowers)}</h2>
            <p className="text-zinc-400">Total Followers</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {averageGrowth > 0 ? (
            <TrendingUp className="h-5 w-5 text-green-400" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-400" />
          )}
          <span className={`font-medium ${
            averageGrowth > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {averageGrowth > 0 ? '+' : ''}{averageGrowth.toFixed(1)}%
          </span>
          <span className="text-zinc-400">Avg. Growth</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-zinc-900 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-zinc-400">{platform.name}</span>
                <span className={`text-xs ${
                  platform.growth > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {platform.growth > 0 ? '+' : ''}{platform.growth.toFixed(1)}%
                </span>
              </div>
              <p className="font-medium">{formatNumber(platform.followers)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}