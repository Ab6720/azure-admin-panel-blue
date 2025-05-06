import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  icon: ReactNode;
  value: string | number;
  className?: string;
}

const StatCard = ({ title, icon, value, className }: StatCardProps) => {
  return (
<<<<<<< Updated upstream
    <div className={cn("admin-stats-card", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-[#4979a0] font-medium">{title}</h3>
        <div className="p-2 rounded-md bg-primary/10 text-[#4979a0]">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-[#4979a0]">{value}</div>
        {trend && (
          <div className={`flex items-center text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            <span>{trend.isPositive ? '↑' : '↓'}</span>
            <span>{trend.value}%</span>
          </div>
        )}
=======
    <div className={cn("rounded-lg shadow bg-white", className)}>
      {/* Header */}
      <div className="p-4 border-b bg-blue-100 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-blue-900">{title}</div>
          <div className="text-blue-800">{icon}</div>
        </div>
      </div>

      {/* Footer with total count */}
      <div className="p-3 bg-blue-50 rounded-b-lg">
        <div className="text-2xl font-bold text-blue-900">{value}</div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default StatCard;
