import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Target, Workflow, Users, Brain, Rocket, Code } from 'lucide-react';

interface Section {
  title: string;
  content: string[] | { [key: string]: string[] };
  icon: React.ElementType;
}

export function AboutUs() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: 'Introduction',
      icon: Briefcase,
      content: [
        'Seasoned Product Leader with 17 years of experience transforming complex business challenges into successful digital solutions.',
        'Expert Python developer and blockchain specialist with a focus on scalable solutions.',
        'Track record of launching innovative products across FMCG, banking, and technology sectors.',
        'Combines technical expertise with strategic business acumen to deliver impactful digital products that drive growth and user engagement.',
        'Passionate about leveraging blockchain technology to create innovative solutions.',
        'Accomplished fashion designer and bespoke shoemaker with a unique blend of creative and technical expertise.'
      ]
    },
    {
      title: 'Technical Expertise',
      icon: Code,
      content: [
        'Advanced Python development and architecture',
        'Smart contract development and auditing',
        'Blockchain protocol implementation',
        'Distributed systems design',
        'Cryptographic security implementation'
      ]
    },
    {
      title: 'Technical Implementation',
      icon: Workflow,
      content: [
        'Lead multiple agile product teams',
        'Manage product backlogs',
        'Remove development blockers',
        'Coordinate release planning',
        'Monitor product metrics'
      ]
    },
    {
      title: 'Team Leadership',
      icon: Users,
      content: [
        'Guide cross-functional teams',
        'Stakeholder management',
        'Clear communication channels',
        'Resource optimization',
        'Knowledge sharing'
      ]
    },
    {
      title: 'Recent Success',
      icon: Rocket,
      content: [
        'Developed blockchain-based supply chain solution',
        'Built high-performance Python microservices',
        'Led DeFi protocol implementation',
        'Created distributed ledger systems',
        'Implemented smart contract platforms'
      ]
    },
    {
      title: 'Product Leadership & Delivery',
      icon: Brain,
      content: {
        'Strategic Approach': [
          'Blockchain-first architecture',
          'Data-driven decision making',
          'Python best practices',
          'Agile development methodology',
          'Continuous iteration and improvement'
        ],
        'Core Services': [
          'Blockchain solution architecture',
          'Python application development',
          'Smart contract development',
          'Cryptographic systems',
          'Distributed systems',
          'Performance optimization'
        ]
      }
    },
    {
      title: 'Ideal For Organizations Seeking',
      icon: Target,
      content: [
        'Blockchain innovation',
        'Python expertise',
        'Technical product development',
        'Cross-functional leadership',
        'Scalable solutions'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-2">About</h1>
        <div className="flex items-center justify-center gap-2 text-zinc-600">
          <Briefcase className="h-5 w-5" />
          <p className="font-medium">PRODUCT LEAD & TECHNICAL ARCHITECT - LESLIE AKPAREVA</p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.title;
          const Icon = section.icon;

          return (
            <div
              key={section.title}
              className="border border-zinc-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.title)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-100 rounded-lg">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <span className="font-medium text-black">{section.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>

              {isExpanded && (
                <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50">
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-zinc-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-black" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-6">
                      {Object.entries(section.content).map(([title, items]) => (
                        <div key={title}>
                          <h3 className="font-medium text-black mb-3">{title}</h3>
                          <ul className="space-y-2">
                            {items.map((item, index) => (
                              <li key={index} className="flex items-center gap-2 text-zinc-600">
                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
