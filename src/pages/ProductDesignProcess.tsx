import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  ChevronRight, 
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

interface TimelineStep {
  title: string;
  duration: string;
  icon: React.ElementType;
  tasks: string[];
  status: 'completed' | 'in-progress' | 'pending';
}

export function ProductDesignProcess() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const timeline: TimelineStep[] = [
    {
      title: 'Web Scraping Agent',
      duration: '1 week',
      icon: Code2,
      status: 'completed',
      tasks: [
        'Setting up scraping infrastructure',
        'Implementing visual analysis',
        'Testing and rate limiting',
        'Error handling and retry mechanisms',
        'Data validation and cleaning'
      ]
    },
    {
      title: 'Data Pipeline',
      duration: '1 week',
      icon: Database,
      status: 'in-progress',
      tasks: [
        'API development',
        'Data processing workflows',
        'Storage setup and optimization',
        'Real-time data streaming',
        'Backup and recovery systems'
      ]
    },
    {
      title: 'Frontend Dashboard',
      duration: '2 weeks',
      icon: Layout,
      status: 'pending',
      tasks: [
        'UI components development',
        'Data visualization implementation',
        'Integration testing',
        'Performance optimization',
        'User feedback integration'
      ]
    }
  ];

  const getStatusColor = (status: TimelineStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'in-progress':
        return 'text-blue-500';
      case 'pending':
        return 'text-zinc-400';
    }
  };

  const getStatusIcon = (status: TimelineStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-zinc-400" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-4">Product Design Process</h1>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          A comprehensive timeline of our development process, from data collection to user interface implementation.
        </p>
      </div>

      <div className="space-y-6">
        {timeline.map((step, index) => {
          const Icon = step.icon;
          const isExpanded = expandedStep === index;
          const isLast = index === timeline.length - 1;

          return (
            <div key={index} className="relative">
              {!isLast && (
                <div 
                  className="absolute left-6 top-16 bottom-0 w-px bg-zinc-200"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
              
              <div 
                className={`bg-white rounded-xl shadow-sm border border-zinc-200 transition-all ${
                  isExpanded ? 'scale-105' : 'hover:border-zinc-300'
                }`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedStep(isExpanded ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-zinc-100 ${getStatusColor(step.status)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                        <p className="text-sm text-zinc-500">Duration: {step.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusIcon(step.status)}
                      <ChevronRight 
                        className={`h-5 w-5 text-zinc-400 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-zinc-200">
                      <h4 className="text-sm font-medium text-black mb-3">Key Tasks:</h4>
                      <ul className="space-y-3">
                        {step.tasks.map((task, taskIndex) => (
                          <li 
                            key={taskIndex}
                            className="flex items-center gap-2 text-sm text-zinc-600"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-zinc-50 rounded-xl">
        <h2 className="text-lg font-semibold text-black mb-4">Project Overview</h2>
        <div className="space-y-4 text-zinc-600">
          <p>
            Total estimated timeline: <span className="font-medium text-black">4 weeks</span>
          </p>
          <p>
            Our development process is carefully planned to ensure efficient delivery while maintaining high quality standards. Each phase builds upon the previous one, with continuous testing and refinement throughout the project lifecycle.
          </p>
          <p>
            The timeline accounts for thorough testing and optimization at each stage, ensuring a robust and production-ready system.
          </p>
        </div>
      </div>
    </div>
  );
}
