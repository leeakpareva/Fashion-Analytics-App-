import { useState } from 'react';
import { Calendar, Palette, BarChart } from 'lucide-react';
import type { CustomizationOptions } from '../types/report';

interface ReportCustomizerProps {
  options: CustomizationOptions;
  onChange: (options: CustomizationOptions) => void;
}

export function ReportCustomizer({ options, onChange }: ReportCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'branding' | 'time' | 'metrics'>('branding');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-black">Customize Report</h3>
      
      <div className="flex border-b border-zinc-200">
        <button
          onClick={() => setActiveTab('branding')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'branding'
              ? 'border-black text-black'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Branding
          </div>
        </button>
        <button
          onClick={() => setActiveTab('time')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'time'
              ? 'border-black text-black'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Time Range
          </div>
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'metrics'
              ? 'border-black text-black'
              : 'border-transparent text-zinc-500 hover:text-black'
          }`}
        >
          <div className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Metrics
          </div>
        </button>
      </div>

      <div className="p-4 bg-zinc-50 rounded-lg">
        {activeTab === 'branding' && (
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={options.branding.logo}
                  onChange={(e) =>
                    onChange({
                      ...options,
                      branding: { ...options.branding, logo: e.target.checked }
                    })
                  }
                  className="rounded border-zinc-300 text-black focus:ring-black"
                />
                <span className="text-sm text-zinc-600">Include Logo</span>
              </label>
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                Brand Colors
              </label>
              <div className="flex gap-2">
                {options.branding.colors.map((color, index) => (
                  <input
                    key={index}
                    type="color"
                    value={color}
                    onChange={(e) => {
                      const newColors = [...options.branding.colors];
                      newColors[index] = e.target.value;
                      onChange({
                        ...options,
                        branding: { ...options.branding, colors: newColors }
                      });
                    }}
                    className="h-8 w-8 rounded cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'time' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={options.timeRange.start.toISOString().split('T')[0]}
                onChange={(e) =>
                  onChange({
                    ...options,
                    timeRange: {
                      ...options.timeRange,
                      start: new Date(e.target.value)
                    }
                  })
                }
                className="w-full rounded-lg border-zinc-300 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={options.timeRange.end.toISOString().split('T')[0]}
                onChange={(e) =>
                  onChange({
                    ...options,
                    timeRange: {
                      ...options.timeRange,
                      end: new Date(e.target.value)
                    }
                  })
                }
                className="w-full rounded-lg border-zinc-300 focus:ring-black focus:border-black"
              />
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-600 mb-2">
                Visualization Options
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={options.visualization.charts}
                    onChange={(e) =>
                      onChange({
                        ...options,
                        visualization: {
                          ...options.visualization,
                          charts: e.target.checked
                        }
                      })
                    }
                    className="rounded border-zinc-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-zinc-600">Include Charts</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={options.visualization.tables}
                    onChange={(e) =>
                      onChange({
                        ...options,
                        visualization: {
                          ...options.visualization,
                          tables: e.target.checked
                        }
                      })
                    }
                    className="rounded border-zinc-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-zinc-600">Include Tables</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={options.visualization.annotations}
                    onChange={(e) =>
                      onChange({
                        ...options,
                        visualization: {
                          ...options.visualization,
                          annotations: e.target.checked
                        }
                      })
                    }
                    className="rounded border-zinc-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-zinc-600">Include Annotations</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}