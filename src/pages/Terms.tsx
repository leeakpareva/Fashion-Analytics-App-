import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Lock, Scale, AlertCircle } from 'lucide-react';

interface Section {
  title: string;
  content: string[];
  icon: any;
}

export function Terms() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: 'Terms of Service',
      icon: Scale,
      content: [
        'By accessing and using NAVADA ("the Service"), you agree to comply with and be bound by these Terms and Conditions.',
        'You must be at least 18 years old and have the legal authority to enter into this agreement.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'We reserve the right to modify or terminate the Service for any reason, without notice at any time.'
      ]
    },
    {
      title: 'Data Privacy & Security',
      icon: Lock,
      content: [
        'We collect and process data in accordance with our Privacy Policy and applicable data protection laws.',
        'You retain all rights to your data. We obtain only the right to use the data to provide the Service.',
        'We implement reasonable security measures to protect your data.',
        'We do not sell your personal data to third parties.',
        'You can request data export or deletion in accordance with applicable laws.'
      ]
    },
    {
      title: 'Subscription & Billing',
      icon: Shield,
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis.',
        'All fees are non-refundable unless required by law.',
        'We may change subscription fees upon 30 days notice.',
        'You can cancel your subscription at any time. Access continues until the end of the billing period.',
        'Failed payments may result in service interruption.'
      ]
    },
    {
      title: 'Usage Restrictions',
      icon: AlertCircle,
      content: [
        'You may not use the Service for any illegal or unauthorized purpose.',
        'You may not copy, modify, distribute, sell, or lease any part of the Service.',
        'You may not reverse engineer or attempt to extract the source code.',
        'You may not exceed any rate limits or API quotas set by the Service.',
        'We may suspend or terminate accounts that violate these terms.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-4">Terms & Conditions</h1>
        <p className="text-zinc-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.title;

          return (
            <div
              key={section.title}
              className="border border-zinc-200 rounded-lg bg-white"
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
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-zinc-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-zinc-50 rounded-lg">
        <h2 className="font-medium text-black mb-4">Contact Us</h2>
        <p className="text-zinc-600">
          If you have any questions about these Terms & Conditions, please contact us at{' '}
          <a href="mailto:legal@navada.com" className="text-black hover:underline">
            legal@navada.com
          </a>
        </p>
      </div>
    </div>
  );
}