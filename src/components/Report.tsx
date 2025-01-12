import { useState, useCallback } from 'react';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  Users, 
  Camera, 
  Hash,
  ArrowRight,
  Image,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { ReportTemplateSelector } from './ReportTemplateSelector';
import { ReportCustomizer } from './ReportCustomizer';
import type { ReportTemplate, CustomizationOptions } from '../types/report';

interface ReportProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    stats: Array<{
      label: string;
      value: string;
      trend: string;
      icon: any;
    }>;
    performanceData: {
      labels: string[];
      engagement: number[];
      followers: number[];
    };
    topContent: Array<{
      title: string;
      engagement: number;
      imageUrl: string;
    }>;
    competitors: Array<{
      name: string;
      engagement: string;
      followers: string;
    }>;
  };
}

const contentIcons = [Image, ShoppingBag, Sparkles];

export function Report({ isOpen, onClose, data }: ReportProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<ReportTemplate | null>(null);
  const [customization, setCustomization] = useState<CustomizationOptions>({
    branding: { logo: true, colors: ['#18181b'], fonts: ['system-ui'] },
    timeRange: { start: new Date(), end: new Date() },
    metrics: { included: [], highlighted: [], custom: [] },
    visualization: { charts: true, tables: true, annotations: true }
  });

  const handleDownload = useCallback(() => {
    const csvContent = [
      ['Metric', 'Value', 'Trend'],
      ...data.stats.map(stat => [stat.label, stat.value, stat.trend]),
      [],
      ['Date', 'Engagement', 'Followers'],
      ...data.performanceData.labels.map((label, index) => [
        label,
        data.performanceData.engagement[index],
        data.performanceData.followers[index]
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-report-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, [data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-zinc-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-black" />
            <h2 className="text-lg font-semibold text-black">Analytics Report</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-zinc-600 hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <ReportTemplateSelector onSelect={setSelectedTemplate} />

          {selectedTemplate && (
            <ReportCustomizer
              options={customization}
              onChange={setCustomization}
            />
          )}

          {selectedTemplate && (
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold text-black mb-4">Performance Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-zinc-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="h-5 w-5 text-black" />
                        <span className="text-sm font-medium text-green-500">{stat.trend}</span>
                      </div>
                      <p className="text-sm text-zinc-600">{stat.label}</p>
                      <p className="text-xl font-semibold text-black">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-4">Top Performing Content</h3>
                <div className="space-y-4">
                  {data.topContent.map((content, index) => {
                    const IconComponent = contentIcons[index % contentIcons.length];
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-lg">
                        <div className="h-12 w-12 bg-zinc-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-black">{content.title}</p>
                          <p className="text-sm text-zinc-600">
                            Engagement Rate: {content.engagement}%
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-4">Competitor Analysis</h3>
                <div className="space-y-4">
                  {data.competitors.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg">
                      <div>
                        <p className="font-medium text-black">{competitor.name}</p>
                        <p className="text-sm text-zinc-600">
                          Engagement: {competitor.engagement}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-zinc-600">Followers</p>
                        <p className="font-medium text-black">{competitor.followers}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}