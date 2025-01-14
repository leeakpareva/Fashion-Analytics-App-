import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, LineChart, Zap, Target } from 'lucide-react';

interface Section {
  title: string;
  icon: React.ElementType;
  content: {
    points: string[];
    stats?: Array<{
      value: string;
      label: string;
      trend?: string;
    }>;
  };
}

export function Overview() {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: 'WHY',
      icon: Target,
      content: {
        points: [
          'Fashion brands waste £2M+ yearly on poor content',
          '78% lack real-time analytics',
          'Manual trend analysis is slow & costly'
        ],
        stats: [
          { value: '£2M+', label: 'Annual Waste', trend: 'negative' },
          { value: '78%', label: 'Lack Analytics' },
          { value: '40%', label: 'Time on Manual Analysis' }
        ]
      }
    },
    {
      title: 'WHAT',
      icon: LineChart,
      content: {
        points: [
          'Analyzes visual content performance',
          'Detects real-time trends',
          'Generates automated reports',
          'Predicts market trends'
        ],
        stats: [
          { value: '98%', label: 'Analysis Accuracy' },
          { value: '24/7', label: 'Real-time Monitoring' },
          { value: '500K+', label: 'Daily Insights' }
        ]
      }
    },
    {
      title: 'HOW',
      icon: Zap,
      content: {
        points: [
          'AI-powered visual analysis',
          'Real-time data processing',
          'Interactive dashboards',
          'Subscription model: £1.5K-4K/month',
          'ROI: 3-5x investment return'
        ],
        stats: [
          { value: '↑25%', label: 'Engagement', trend: 'positive' },
          { value: '↓40%', label: 'Analysis Time', trend: 'positive' },
          { value: '↑35%', label: 'Trend Accuracy', trend: 'positive' }
        ]
      }
    }
  ];

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-4">Fashion Analytics Platform</h1>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          Transform your fashion brand's performance with AI-powered analytics and real-time insights
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.title;

          return (
            <div
              key={section.title}
              className={`bg-white rounded-xl shadow-sm border border-zinc-200 transition-all duration-200 ${
                isExpanded ? 'scale-[1.02]' : 'hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.title)}
                className="w-full px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    isExpanded ? 'bg-black text-white' : 'bg-zinc-100 text-black'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold text-black text-lg">{section.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>

              {isExpanded && (
                <div className="px-6 py-4 border-t border-zinc-200">
                  {/* Stats Grid */}
                  {section.content.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {section.content.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-zinc-50 rounded-lg p-4 text-center"
                        >
                          <p className={`text-2xl font-bold ${
                            stat.trend === 'positive' ? 'text-green-600' :
                            stat.trend === 'negative' ? 'text-red-600' :
                            'text-black'
                          }`}>
                            {stat.value}
                          </p>
                          <p className="text-sm text-zinc-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Points */}
                  <ul className="space-y-3">
                    {section.content.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black flex-shrink-0" />
                        <span className="text-zinc-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button 
          onClick={handleGetStarted}
          className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
