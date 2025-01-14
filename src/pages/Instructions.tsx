import { useState } from 'react';
import { 
  BarChart2, 
  TrendingUp,
  Share2,
  Users,
  Heart,
  Clock,
  ArrowRight,
  AlertCircle,
  Database,
  Settings,
  Lock,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// No chart registration needed - removed unused Chart.js code

// Social Media Analytics Data
const dataMetrics = [
  {
    title: 'Engagement Metrics',
    icon: Heart,
    metrics: [
      { label: 'Likes & Reactions', description: 'Track user interactions across platforms' },
      { label: 'Comments & Replies', description: 'Monitor conversation engagement' },
      { label: 'Shares & Retweets', description: 'Measure content virality' },
      { label: 'Saves & Bookmarks', description: 'Track content value to users' }
    ]
  },
  {
    title: 'Audience Insights',
    icon: Users,
    metrics: [
      { label: 'Follower Growth', description: 'Daily/weekly/monthly growth tracking' },
      { label: 'Audience Demographics', description: 'Age, location, interests analysis' },
      { label: 'Peak Activity Times', description: 'Best times to post content' },
      { label: 'Audience Sentiment', description: 'Positive/negative reaction analysis' }
    ]
  },
  {
    title: 'Content Performance',
    icon: BarChart2,
    metrics: [
      { label: 'Post Performance', description: 'Success metrics by content type' },
      { label: 'Hashtag Analysis', description: 'Track hashtag effectiveness' },
      { label: 'Media Impact', description: 'Image/video performance metrics' },
      { label: 'Story Analytics', description: 'Temporary content performance' }
    ]
  }
];

// Platform Infrastructure Data
const infrastructureMetrics = {
  dataPoints: '500K+ daily',
  accuracy: '98.5%',
  processingTime: '< 100ms',
  storageCapacity: '50TB',
  backupFrequency: 'Every 6 hours',
  retentionPeriod: '12 months'
};

const platforms = [
  { name: 'Instagram', dataPoints: ['Posts', 'Stories', 'Reels', 'IGTV'] },
  { name: 'Facebook', dataPoints: ['Posts', 'Stories', 'Live Videos', 'Groups'] },
  { name: 'Twitter', dataPoints: ['Tweets', 'Retweets', 'Spaces', 'Threads'] },
  { name: 'TikTok', dataPoints: ['Videos', 'Lives', 'Sounds', 'Hashtags'] },
  { name: 'LinkedIn', dataPoints: ['Posts', 'Articles', 'Documents', 'Events'] }
];

const integrations = [
  { name: 'Instagram Analytics', status: 'Active', dataPoints: '250K/day' },
  { name: 'Facebook Insights', status: 'Active', dataPoints: '180K/day' },
  { name: 'Twitter Analytics', status: 'Active', dataPoints: '120K/day' },
  { name: 'Pinterest Analytics', status: 'Active', dataPoints: '90K/day' }
];

const uploadSteps = [
  {
    title: 'Data Collection',
    description: 'Our bot automatically collects data from your connected social media accounts',
    icon: Share2
  },
  {
    title: 'Processing & Analysis',
    description: 'Data is processed and analyzed for patterns and insights',
    icon: TrendingUp
  },
  {
    title: 'Real-time Monitoring',
    description: 'Continuous tracking of performance metrics across platforms',
    icon: Clock
  },
  {
    title: 'Actionable Insights',
    description: 'Get recommendations based on analyzed data',
    icon: AlertCircle
  }
];

// FAQ Data
const faqSections = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I connect my social media accounts?',
        a: 'Go to Settings > Integrations and follow the step-by-step guide to connect each platform. We support Instagram, Facebook, Twitter, TikTok, and LinkedIn.'
      },
      {
        q: 'What data is collected from my accounts?',
        a: 'We collect engagement metrics, follower growth, content performance, and audience demographics. All data collection complies with platform APIs and privacy policies.'
      },
      {
        q: 'How often is the data updated?',
        a: 'Data is updated in real-time for most metrics, with comprehensive reports generated every 24 hours. Historical data is archived and accessible anytime.'
      }
    ]
  },
  {
    title: 'Analytics & Reporting',
    questions: [
      {
        q: 'How do I create custom reports?',
        a: 'Use the Report Builder in the dashboard to select metrics, date ranges, and visualization types. Reports can be saved as templates for future use.'
      },
      {
        q: 'Can I export my analytics data?',
        a: 'Yes, you can export data in CSV, PDF, or Excel formats. Look for the export button in each dashboard section or use the bulk export feature in Settings.'
      },
      {
        q: 'What metrics are tracked?',
        a: 'We track engagement rates, follower growth, content performance, audience demographics, peak activity times, and custom metrics based on your needs.'
      }
    ]
  },
  {
    title: 'Technical Support',
    questions: [
      {
        q: 'What browsers are supported?',
        a: 'We support the latest versions of Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend keeping your browser updated.'
      },
      {
        q: 'Is there a mobile app available?',
        a: 'Our platform is fully responsive and works on mobile browsers. A dedicated mobile app is currently in development.'
      },
      {
        q: 'How secure is my data?',
        a: 'We use industry-standard encryption and security measures. Data is encrypted in transit and at rest, with regular security audits.'
      }
    ]
  },
  {
    title: 'Account Management',
    questions: [
      {
        q: 'How do I add team members?',
        a: 'Navigate to Settings > Team Management to invite team members. You can set different permission levels for each user.'
      },
      {
        q: 'Can I change my subscription plan?',
        a: 'Yes, you can upgrade or downgrade your plan at any time from the Billing section. Changes take effect at the start of the next billing cycle.'
      },
      {
        q: 'What happens to my data if I cancel?',
        a: 'You have 30 days to download your data after cancellation. After this period, data is permanently deleted from our servers.'
      }
    ]
  }
];

export function Instructions() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [showSettings, setShowSettings] = useState(false);
  const [expandedFaqSection, setExpandedFaqSection] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-3xl font-bold text-black mb-4">Platform Instructions</h1>
          <p className="text-zinc-600 max-w-3xl">
            Comprehensive guide to our social media analytics platform and infrastructure
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab(activeTab === 'analytics' ? 'infrastructure' : 'analytics')}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            {activeTab === 'analytics' ? 'View Infrastructure' : 'View Analytics'}
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <Settings className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>

      {activeTab === 'analytics' ? (
        // Social Media Analytics Content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Data Upload Process */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-black mb-6">Automated Data Collection</h2>
              <div className="grid gap-6">
                {uploadSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-zinc-50 rounded-lg">
                      <div className="p-2 bg-black rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black mb-1">{step.title}</h3>
                        <p className="text-sm text-zinc-600">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Tracked Metrics */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-black mb-6">Tracked Metrics</h2>
              <div className="space-y-6">
                {dataMetrics.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <div key={index} className="p-4 bg-zinc-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-black rounded-lg">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-black">{section.title}</h3>
                      </div>
                      <div className="grid gap-4">
                        {section.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="flex items-start gap-3">
                            <ArrowRight className="h-5 w-5 text-black mt-0.5" />
                            <div>
                              <p className="font-medium text-black">{metric.label}</p>
                              <p className="text-sm text-zinc-600">{metric.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Platform Coverage */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-black mb-4">Platform Coverage</h2>
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="p-4 bg-zinc-50 rounded-lg">
                      <h3 className="font-medium text-black mb-2">{platform.name}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {platform.dataPoints.map((point, pIndex) => (
                          <div key={pIndex} className="flex items-center gap-2 text-sm text-zinc-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Platform Infrastructure Content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Data Infrastructure */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-black mb-6">Data Infrastructure</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(infrastructureMetrics).map(([key, value]) => (
                  <div key={key} className="p-4 bg-zinc-50 rounded-lg">
                    <p className="text-sm text-zinc-600 mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="font-semibold text-black">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Active Integrations */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-black mb-6">Active Integrations</h2>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg">
                    <div>
                      <p className="font-medium text-black">{integration.name}</p>
                      <p className="text-sm text-zinc-600">Status: {integration.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-600">Data Points</p>
                      <p className="font-medium text-black">{integration.dataPoints}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Tips */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-black mb-4">System Tips</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                    <Database className="h-5 w-5 text-black mt-0.5" />
                    <p className="text-sm text-zinc-600">Regular backups every 6 hours</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                    <Lock className="h-5 w-5 text-black mt-0.5" />
                    <p className="text-sm text-zinc-600">End-to-end data encryption</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                    <Clock className="h-5 w-5 text-black mt-0.5" />
                    <p className="text-sm text-zinc-600">Real-time data processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-zinc-100 rounded-lg">
            <HelpCircle className="h-6 w-6 text-black" />
          </div>
          <h2 className="text-2xl font-semibold text-black">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqSections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm">
              <button
                onClick={() => setExpandedFaqSection(
                  expandedFaqSection === section.title ? null : section.title
                )}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-black">{section.title}</span>
                {expandedFaqSection === section.title ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>

              {expandedFaqSection === section.title && (
                <div className="px-6 py-4 border-t border-zinc-200">
                  <div className="space-y-4">
                    {section.questions.map((qa) => (
                      <div key={qa.q} className="border border-zinc-200 rounded-lg">
                        <button
                          onClick={() => setExpandedQuestion(
                            expandedQuestion === qa.q ? null : qa.q
                          )}
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                        >
                          <span className="text-left font-medium text-black">{qa.q}</span>
                          {expandedQuestion === qa.q ? (
                            <ChevronUp className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                          )}
                        </button>
                        {expandedQuestion === qa.q && (
                          <div className="px-4 py-3 border-t border-zinc-200 bg-zinc-50">
                            <p className="text-zinc-600">{qa.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
