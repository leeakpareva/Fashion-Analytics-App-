import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How often is the data updated?',
    answer: 'Our analytics data is updated in real-time, with comprehensive reports generated daily.'
  },
  {
    question: 'Can I export my analytics data?',
    answer: 'Yes, you can export your data in multiple formats including CSV and PDF. Look for the export button in the dashboard.'
  },
  {
    question: 'What metrics are tracked?',
    answer: 'We track engagement rates, follower growth, post performance, reach, and custom metrics based on your needs.'
  },
  {
    question: 'How do I integrate my social media accounts?',
    answer: 'Simply go to Settings > Integrations and follow the step-by-step guide to connect your accounts.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption and security measures to protect your data. Your information is never shared without consent.'
  }
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-black mb-2">Frequently Asked Questions</h2>
        <p className="text-zinc-600">Find answers to common questions about our analytics platform</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div key={index} className="border border-zinc-200 rounded-lg bg-white">
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-black" />
                  <span className="font-medium text-black text-left">{faq.question}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>

              {isExpanded && (
                <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50">
                  <p className="text-zinc-600">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}