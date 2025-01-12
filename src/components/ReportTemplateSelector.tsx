import { useState } from 'react';
import { FileText, Settings, Calendar, Users } from 'lucide-react';
import type { ReportTemplate } from '../types/report';

const defaultTemplates: ReportTemplate[] = [
  {
    id: 'executive-summary',
    name: 'Executive Summary',
    sections: ['overview', 'keyMetrics', 'trends'],
    format: 'pdf',
    customization: {
      branding: { logo: true, colors: ['#18181b'], fonts: ['system-ui'] },
      timeRange: { start: new Date(), end: new Date() },
      metrics: { included: [], highlighted: [], custom: [] },
      visualization: { charts: true, tables: true, annotations: true }
    }
  },
  {
    id: 'brand-performance',
    name: 'Brand Performance',
    sections: ['brandMetrics', 'contentAnalysis', 'comparison'],
    format: 'both',
    customization: {
      branding: { logo: true, colors: ['#18181b'], fonts: ['system-ui'] },
      timeRange: { start: new Date(), end: new Date() },
      metrics: { included: [], highlighted: [], custom: [] },
      visualization: { charts: true, tables: true, annotations: true }
    }
  },
  {
    id: 'content-analytics',
    name: 'Content Analytics',
    sections: ['contentTypes', 'engagement', 'recommendations'],
    format: 'both',
    customization: {
      branding: { logo: true, colors: ['#18181b'], fonts: ['system-ui'] },
      timeRange: { start: new Date(), end: new Date() },
      metrics: { included: [], highlighted: [], custom: [] },
      visualization: { charts: true, tables: true, annotations: true }
    }
  }
];

interface ReportTemplateSelectorProps {
  onSelect: (template: ReportTemplate) => void;
}

export function ReportTemplateSelector({ onSelect }: ReportTemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-black">Select Report Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {defaultTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => {
              setSelectedTemplate(template.id);
              onSelect(template);
            }}
            className={`p-4 rounded-lg border text-left transition-all ${
              selectedTemplate === template.id
                ? 'border-black bg-zinc-50'
                : 'border-zinc-200 hover:border-zinc-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              {template.id === 'executive-summary' ? (
                <FileText className="h-5 w-5 text-black" />
              ) : template.id === 'brand-performance' ? (
                <Settings className="h-5 w-5 text-black" />
              ) : (
                <Calendar className="h-5 w-5 text-black" />
              )}
              <span className="font-medium text-black">{template.name}</span>
            </div>
            <p className="text-sm text-zinc-600">
              {template.id === 'executive-summary'
                ? 'High-level overview for stakeholders'
                : template.id === 'brand-performance'
                ? 'Detailed brand metrics and analysis'
                : 'In-depth content performance data'}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}