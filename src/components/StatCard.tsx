import { LucideIcon } from 'lucide-react';

/**
 * Props for the StatCard component
 * @interface StatCardProps
 * @property {LucideIcon} icon - The Lucide icon to display in the card header
 * @property {string} label - The label text describing the statistic
 * @property {string} value - The main statistical value to display
 * @property {string} trend - The trend indicator text (e.g., "↑ 12%" or "↓ 5%")
 */
interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
}

export function StatCard({ icon: Icon, label, value, trend }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-zinc-100 rounded-lg border border-zinc-100">
          <Icon className="h-6 w-6 text-black" />
        </div>
        <span className="text-black text-sm font-medium">{trend}</span>
      </div>
      <h3 className="text-zinc-500 text-sm mb-1">{label}</h3>
      <p className="text-2xl font-semibold text-black">{value}</p>
    </div>
  );
}
