import { useState } from 'react';
import { 
  Search, 
  Copy,
  Check,
  Palette,
  Type,
  Box,
  Grid,
  Menu
} from 'lucide-react';

interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export function DesignSystem() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'components' | 'colors' | 'typography' | 'layout'>('components');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const colors = [
    { name: 'Primary', value: '#000000', class: 'bg-black' },
    { name: 'Secondary', value: '#18181B', class: 'bg-zinc-900' },
    { name: 'Accent', value: '#71717A', class: 'bg-zinc-500' },
    { name: 'Background', value: '#FAFAFA', class: 'bg-zinc-50' },
    { name: 'Success', value: '#22C55E', class: 'bg-green-500' },
    { name: 'Error', value: '#EF4444', class: 'bg-red-500' },
  ];

  const components: ComponentExample[] = [
    {
      title: 'Button',
      description: 'Primary action button with hover state',
      code: `<button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors">
  Click me
</button>`,
      preview: (
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors">
          Click me
        </button>
      )
    },
    {
      title: 'Input Field',
      description: 'Text input with icon and focus state',
      code: `<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
  <input
    type="text"
    placeholder="Search..."
    className="pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black w-full"
  />
</div>`,
      preview: (
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black w-full"
          />
        </div>
      )
    },
    {
      title: 'Card',
      description: 'Content container with shadow and hover effect',
      code: `<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200 hover:border-zinc-300 transition-colors">
  <h3 className="text-lg font-semibold text-black mb-2">Card Title</h3>
  <p className="text-zinc-600">Card content goes here</p>
</div>`,
      preview: (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200 hover:border-zinc-300 transition-colors">
          <h3 className="text-lg font-semibold text-black mb-2">Card Title</h3>
          <p className="text-zinc-600">Card content goes here</p>
        </div>
      )
    },
    {
      title: 'Badge',
      description: 'Status indicator with different variants',
      code: `<div className="flex gap-2">
  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
    Success
  </span>
  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
    Error
  </span>
</div>`,
      preview: (
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Success
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Error
          </span>
        </div>
      )
    }
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setShowMobileMenu(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Design System</h1>
          <p className="text-zinc-600">A collection of reusable components and styles</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="sm:hidden p-2 text-zinc-600 hover:text-black transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        <div className={`
          sm:hidden fixed inset-x-0 top-[4.5rem] bg-white border-b border-zinc-200 transition-all duration-200
          ${showMobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="px-4 py-2 space-y-2">
            {['components', 'colors', 'typography', 'layout'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as typeof activeTab)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => setActiveTab('components')}
            className={`p-2 rounded-lg transition-colors ${
              activeTab === 'components'
                ? 'bg-black text-white'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            <Box className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`p-2 rounded-lg transition-colors ${
              activeTab === 'colors'
                ? 'bg-black text-white'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            <Palette className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`p-2 rounded-lg transition-colors ${
              activeTab === 'typography'
                ? 'bg-black text-white'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            <Type className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab('layout')}
            className={`p-2 rounded-lg transition-colors ${
              activeTab === 'layout'
                ? 'bg-black text-white'
                : 'text-zinc-600 hover:text-black'
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
        </div>
      </div>

      {activeTab === 'components' && (
        <div className="space-y-8 sm:space-y-12">
          {components.map((component, index) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-black mb-1">{component.title}</h2>
                  <p className="text-zinc-600">{component.description}</p>
                </div>
                <button
                  onClick={() => handleCopyCode(component.code)}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors w-full sm:w-auto"
                >
                  {copiedCode === component.code ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="mb-6 flex items-center justify-center">{component.preview}</div>
                <pre className="bg-zinc-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{component.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'colors' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-black mb-6">Color Palette</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className={`h-24 rounded-lg ${color.class}`} />
                  <div>
                    <p className="font-medium text-black">{color.name}</p>
                    <p className="text-sm text-zinc-600">{color.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'typography' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-black mb-6">Typography Scale</h2>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-black">Heading 1</h1>
                <p className="text-sm text-zinc-600 mt-1">4xl / Bold</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-black">Heading 2</h2>
                <p className="text-sm text-zinc-600 mt-1">3xl / Semibold</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-black">Heading 3</h3>
                <p className="text-sm text-zinc-600 mt-1">2xl / Medium</p>
              </div>
              <div>
                <p className="text-base text-zinc-900">Body Text</p>
                <p className="text-sm text-zinc-600 mt-1">base / Regular</p>
              </div>
              <div>
                <p className="text-sm text-zinc-600">Small Text</p>
                <p className="text-sm text-zinc-600 mt-1">sm / Regular</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'layout' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-black mb-6">Grid System</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-24 bg-zinc-100 rounded-lg flex items-center justify-center">
                  <span className="text-zinc-600">Column {n}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black mb-6">Spacing Scale</h2>
            <div className="space-y-4">
              {[4, 6, 8, 12].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div className={`h-${size} w-${size} bg-black rounded`} />
                  <span className="text-sm text-zinc-600">{size * 4}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
