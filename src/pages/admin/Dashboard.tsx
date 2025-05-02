
import AdminLayout from "@/components/AdminLayout";
import StatCard from "@/components/StatCard";
import { School, User, Briefcase, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Schools" 
            value="42" 
            icon={<School className="h-5 w-5" />} 
            trend={{ value: 12, isPositive: true }} 
          />
          <StatCard 
            title="Students" 
            value="2,856" 
            icon={<User className="h-5 w-5" />} 
            trend={{ value: 8, isPositive: true }} 
          />
          <StatCard 
            title="Providers" 
            value="64" 
            icon={<Briefcase className="h-5 w-5" />} 
            trend={{ value: 5, isPositive: true }} 
          />
          <StatCard 
            title="Subadmins" 
            value="16" 
            icon={<Users className="h-5 w-5" />} 
            trend={{ value: 2, isPositive: false }} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="admin-card">
            <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {[
                { action: "New student registered", time: "2 minutes ago" },
                { action: "Provider updated profile", time: "1 hour ago" },
                { action: "School added new course", time: "3 hours ago" },
                { action: "Subadmin login detected", time: "6 hours ago" },
                { action: "System backup completed", time: "Yesterday" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                  <span className="font-medium">{activity.action}</span>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="admin-card">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Add School", icon: <School className="h-5 w-5" /> },
                { name: "Add Student", icon: <User className="h-5 w-5" /> },
                { name: "Add Provider", icon: <Briefcase className="h-5 w-5" /> },
                { name: "Add Subadmin", icon: <Users className="h-5 w-5" /> },
                { name: "Generate Reports", icon: <School className="h-5 w-5" /> },
                { name: "System Settings", icon: <School className="h-5 w-5" /> },
              ].map((action, index) => (
                <button key={index} className="admin-card p-3 flex flex-col items-center justify-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-center">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
