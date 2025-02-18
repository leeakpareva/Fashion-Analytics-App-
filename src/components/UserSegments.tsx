import { useState } from 'react';
import { Users, User, ChevronDown, ChevronUp } from 'lucide-react';

interface AgeGroup {
  range: string;
  percentage: number;
  engagement: string;
  growth: string;
}

interface GenderMetrics {
  gender: 'men' | 'women';
  metrics: {
    engagement: string;
    followers: string;
    posts: string;
    growth: string;
  };
  preferences: string[];
  topCategories: string[];
  ageGroups: AgeGroup[];
}

const genderData: GenderMetrics[] = [
  {
    gender: 'men',
    metrics: {
      engagement: '7.8%',
      followers: '5.2K',
      posts: '64',
      growth: '+12%'
    },
    preferences: [
      'Streetwear',
      'Formal Wear',
      'Accessories',
      'Sneakers'
    ],
    topCategories: [
      'Urban Style',
      'Business Casual',
      'Sports & Fitness',
      'Luxury Watches'
    ],
    ageGroups: [
      { range: '18-24', percentage: 25, engagement: '8.2%', growth: '+15%' },
      { range: '25-34', percentage: 35, engagement: '7.9%', growth: '+12%' },
      { range: '35-44', percentage: 25, engagement: '7.5%', growth: '+10%' },
      { range: '45+', percentage: 15, engagement: '7.1%', growth: '+8%' }
    ]
  },
  {
    gender: 'women',
    metrics: {
      engagement: '8.5%',
      followers: '7.3K',
      posts: '84',
      growth: '+15%'
    },
    preferences: [
      'Contemporary Fashion',
      'Sustainable Brands',
      'Accessories',
      'Designer Wear'
    ],
    topCategories: [
      'Seasonal Collections',
      'Sustainable Fashion',
      'Luxury Bags',
      'Beauty & Style'
    ],
    ageGroups: [
      { range: '18-24', percentage: 30, engagement: '8.8%', growth: '+18%' },
      { range: '25-34', percentage: 40, engagement: '8.5%', growth: '+15%' },
      { range: '35-44', percentage: 20, engagement: '8.2%', growth: '+12%' },
      { range: '45+', percentage: 10, engagement: '7.8%', growth: '+9%' }
    ]
  }
];

export function UserSegments() {
  const [expandedSegment, setExpandedSegment] = useState<'men' | 'women' | null>(null);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-zinc-100 rounded-lg">
          <Users className="h-5 w-5 text-black" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">User Segments</h3>
          <p className="text-sm text-zinc-500">Demographic analytics and insights</p>
        </div>
      </div>

      <div className="space-y-4">
        {genderData.map((segment) => (
          <div key={segment.gender} className="border border-zinc-200 rounded-lg">
            <button
              onClick={() => setExpandedSegment(expandedSegment === segment.gender ? null : segment.gender)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-black" />
                <span className="font-medium text-black capitalize">{segment.gender}</span>
              </div>
              {expandedSegment === segment.gender ? (
                <ChevronUp className="h-5 w-5 text-zinc-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400" />
              )}
            </button>

            {expandedSegment === segment.gender && (
              <div className="px-4 py-3 border-t border-zinc-200 bg-zinc-50">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Engagement</p>
                    <p className="font-medium text-black">{segment.metrics.engagement}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Followers</p>
                    <p className="font-medium text-black">{segment.metrics.followers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Posts</p>
                    <p className="font-medium text-black">{segment.metrics.posts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Growth</p>
                    <p className="font-medium text-green-600">{segment.metrics.growth}</p>
                  </div>
                </div>

                {/* Age Groups */}
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Age Distribution</h4>
                  <div className="space-y-3">
                    {segment.ageGroups.map((age) => (
                      <div key={age.range} className="bg-white p-3 rounded-lg border border-zinc-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-black">{age.range}</span>
                            <span className="text-sm text-zinc-500">({age.percentage}%)</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div>
                              <span className="text-sm text-zinc-500">Engagement:</span>
                              <span className="ml-1 font-medium text-black">{age.engagement}</span>
                            </div>
                            <div>
                              <span className="text-sm text-zinc-500">Growth:</span>
                              <span className="ml-1 font-medium text-green-600">{age.growth}</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-zinc-100 rounded-full h-2">
                          <div 
                            className="bg-black rounded-full h-2 transition-all duration-500"
                            style={{ width: `${age.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferences */}
                <div className="mb-4">
                  <h4 className="font-medium text-black mb-2">Style Preferences</h4>
                  <div className="flex flex-wrap gap-2">
                    {segment.preferences.map((pref, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white rounded-full text-sm text-zinc-600 border border-zinc-200"
                      >
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Categories */}
                <div>
                  <h4 className="font-medium text-black mb-2">Top Categories</h4>
                  <div className="space-y-2">
                    {segment.topCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-zinc-600"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}