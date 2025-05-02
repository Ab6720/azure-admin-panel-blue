
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { Download, Search, School, User, Briefcase, Users } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Example recent activity data
  const activities = [
    { id: 1, action: "New student registered", time: "2 minutes ago" },
    { id: 2, action: "Provider updated profile", time: "1 hour ago" },
    { id: 3, action: "School added new course", time: "3 hours ago" },
    { id: 4, action: "Subadmin login detected", time: "6 hours ago" },
    { id: 5, action: "System backup completed", time: "Yesterday" },
  ];

  const filteredActivities = activities.filter(activity => 
    activity.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
        </div>
        
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Schools" 
            value="42" 
            icon={<School className="h-5 w-5" />} 
            trend={{ value: 12, isPositive: true }}
            className="admin-card hover-scale"
          />
          <StatCard 
            title="Students" 
            value="2,856" 
            icon={<User className="h-5 w-5" />} 
            trend={{ value: 8, isPositive: true }}
            className="admin-card hover-scale"
          />
          <StatCard 
            title="Providers" 
            value="64" 
            icon={<Briefcase className="h-5 w-5" />} 
            trend={{ value: 5, isPositive: true }}
            className="admin-card hover-scale"
          />
          <StatCard 
            title="Subadmins" 
            value="16" 
            icon={<Users className="h-5 w-5" />} 
            trend={{ value: 2, isPositive: false }}
            className="admin-card hover-scale"
          />
        </div>
        
        {/* Recent Activity */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search activities..." 
                className="pl-8 h-9 w-[200px] rounded-md border border-input bg-white px-3 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="h-10 px-4 text-left font-medium">Activity</th>
                  <th className="h-10 px-4 text-right font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((activity) => (
                  <tr key={activity.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">{activity.action}</td>
                    <td className="p-4 text-right text-muted-foreground">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredActivities.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No activities found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
