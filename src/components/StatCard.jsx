
import { cn } from "@/lib/utils";

const StatCard = ({ title, icon, value, className, trend }) => {
  return (
    <div className={cn("rounded-lg shadow bg-white p-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-[#4979a0] font-medium">{title}</h3>
        <div className="p-2 rounded-md bg-primary/10 text-[#4979a0]">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between mt-3">
        <div className="text-2xl font-bold text-[#4979a0]">{value}</div>
        {trend && (
          <div className={`flex items-center text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            <span>{trend.isPositive ? '↑' : '↓'}</span>
            <span>{trend.value}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
