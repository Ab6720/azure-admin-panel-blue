import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const Teacher = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example teacher data
  const providers = [
    { id: 1, name: "John Doe", subject: "Mathematics", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", subject: "English", email: "jane.smith@example.com" },
    { id: 3, name: "Emily Davis", subject: "Science", email: "emily.davis@example.com" },
    { id: 4, name: "Michael Brown", subject: "History", email: "michael.brown@example.com" },
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Provider Management</h1>
          
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Provider List</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search teachers..."
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
                  <th className="h-10 px-4 text-left font-medium">Name</th>
                  <th className="h-10 px-4 text-left font-medium">Subject</th>
                  <th className="h-10 px-4 text-left font-medium">Email</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProviders.map((provider) => (
                  <tr key={provider.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">{provider.name}</td>
                    <td className="p-4">{provider.subject}</td>
                    <td className="p-4">{provider.email}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm" className="hover-scale">View</Button>
                      <Button variant="ghost" size="sm" className="hover-scale">Edit</Button>
                      <Button variant="ghost" size="sm" className="hover-scale">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No teachers found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Teacher;

