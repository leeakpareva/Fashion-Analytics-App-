import { Image, ShoppingBag, Sparkles } from 'lucide-react';

interface TopContentProps {
  items: Array<{
    id: number;
    title: string;
    engagement: number;
    imageUrl?: string;
  }>;
}

const contentIcons = [Image, ShoppingBag, Sparkles];

export function TopContent({ items }: TopContentProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <h3 className="text-lg font-semibold text-black mb-6">Top Performing Content</h3>
      <div className="space-y-4">
        {items.map((item, index) => {
          const IconComponent = contentIcons[index % contentIcons.length];
          return (
            <div key={item.id} className="flex items-center gap-4 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
              <div className="h-12 w-12 bg-zinc-100 rounded-lg flex items-center justify-center">
                <IconComponent className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="font-medium text-black">{item.title}</p>
                <p className="text-sm text-zinc-500">Engagement: {item.engagement}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}