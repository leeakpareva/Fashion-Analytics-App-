export type ReportFormat = 'pdf' | 'excel' | 'both';

export interface CustomMetric {
  name: string;
  calculation: string;
  format: string;
}

export interface CustomizationOptions {
  branding: {
    logo: boolean;
    colors: string[];
    fonts: string[];
  };
  timeRange: {
    start: Date;
    end: Date;
    comparison?: boolean;
  };
  metrics: {
    included: string[];
    highlighted: string[];
    custom: CustomMetric[];
  };
  visualization: {
    charts: boolean;
    tables: boolean;
    annotations: boolean;
  };
}

export interface ReportTemplate {
  id: string;
  name: string;
  sections: string[];
  format: ReportFormat;
  customization: CustomizationOptions;
}

export interface ReportSchedule {
  frequency: 'daily' | 'weekly' | 'monthly' | 'custom';
  recipients: string[];
  format: ReportFormat;
  delivery: {
    email: boolean;
    download: boolean;
    storage: boolean;
  };
}