import { Clock } from 'lucide-react';

interface ScheduledItem {
  id: number;
  title: string;
  time: string;
}

interface ScheduledContentProps {
  items: ScheduledItem[];
}

export function ScheduledContent({ items }: ScheduledContentProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Scheduled Content</h3>
        <button className="text-sm text-black hover:text-zinc-700">View All</button>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
            <Clock className="h-5 w-5 text-zinc-400" />
            <div className="flex-1">
              <p className="font-medium text-black">{item.title}</p>
              <p className="text-sm text-zinc-500">{item.time}</p>
            </div>
            <button className="px-3 py-1 text-sm text-black border border-black rounded-lg hover:bg-zinc-50">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}