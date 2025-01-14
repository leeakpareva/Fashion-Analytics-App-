
import { X, ExternalLink, AlertCircle } from 'lucide-react';

interface DemoSitePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoSitePopup({ isOpen, onClose }: DemoSitePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full animate-scale-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-black">Welcome to NAVADA!</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-zinc-600" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Please note: This is a demo instance for demonstration purposes only. All data and features are simulated.
              </p>
            </div>
            
            <p className="text-zinc-600">
              The dashboard is pre-populated with sample data to help you understand the platform's capabilities and features.
            </p>
            
            <div className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg">
              <ExternalLink className="h-5 w-5 text-black" />
              <p className="text-sm text-zinc-600">
                Explore sample analytics and guided tutorials
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Continue to Demo
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-black text-black px-4 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
            >
              Skip Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
