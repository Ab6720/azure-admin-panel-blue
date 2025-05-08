
import AdminLayout from "@/components/AdminLayout";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faUserGraduate,
  faChalkboardUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const activities = [
    { id: 1, action: "New student registered", time: "2 minutes ago" },
    { id: 2, action: "Provider updated profile", time: "1 hour ago" },
    { id: 3, action: "School added new course", time: "3 hours ago" },
    { id: 4, action: "Subadmin login detected", time: "6 hours ago" },
    { id: 5, action: "System backup completed", time: "Yesterday" },
  ];

  const filteredActivities = activities.filter((activity) =>
    activity.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cardData = [
    {
      title: "Schools",
      count: 42,
      icon: (
        <FontAwesomeIcon
          icon={faSchool}
          className="h-10 w-10"
          style={{ color: "#1e4d6c" }}
        />
      ),
      path: "/admin/school",
    },
    {
      title: "Students",
      count: 2856,
      icon: (
        <FontAwesomeIcon
          icon={faUserGraduate}
          className="h-10 w-10"
          style={{ color: "#1e4d6c" }}
        />
      ),
      path: "/admin/student",
    },
    {
      title: "Providers",
      count: 64,
      icon: (
        <FontAwesomeIcon
          icon={faChalkboardUser}
          className="h-10 w-10"
          style={{ color: "#1e4d6c" }}
        />
      ),
      path: "/admin/provider",
    },
    {
      title: "Subadmins",
      count: 16,
      icon: (
        <FontAwesomeIcon
          icon={faUserTie}
          className="h-10 w-10"
          style={{ color: "#1e4d6c" }}
        />
      ),
      path: "/admin/subadmin",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#4979a0]">Dashboard</h1>
        </div>

        {/* Dashboard Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Link to={card.path} key={index}>
              <div className="relative bg-[#d0e3f1] text-[#1e4d6c] rounded-lg shadow-xl overflow-hidden h-64 transition hover:scale-[1.04]">
                {/* Curved Overlay */}
                <div className="absolute inset-0 bg-[#f0f6fb] rounded-tr-[100%] w-full h-full z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div className="flex flex-col items-center mt-4">
                    <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                    <div className="bg-white p-4 rounded border border-[#1e4d6c]">
                      {card.icon}
                    </div>
                  </div>
                  <div className="mt-auto text-2xl font-bold text-[#1e4d6c] text-center w-full">
                    {card.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#4979a0]">
              Recent Activity
            </h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#4979a0]" />
              <input
                type="text"
                placeholder="Search activities..."
                className="pl-8 h-9 w-[200px] rounded-md border border-input bg-white px-3 text-sm text-[#4979a0]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="h-10 px-4 text-left font-medium text-[#4979a0]">
                    Activity
                  </th>
                  <th className="h-10 px-4 text-right font-medium text-[#4979a0]">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="border-b hover:bg-secondary/30 transition-colors"
                  >
                    <td className="p-4 font-medium text-[#4979a0]">
                      {activity.action}
                    </td>
                    <td className="p-4 text-right text-[#4979a0]">
                      {activity.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-4 text-[#4979a0]">
              No activities found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
