
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const School = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Example school data
  const schools = [
    { id: 1, name: "Lincoln High School", location: "New York", students: 1245 },
    { id: 2, name: "Washington Elementary", location: "Boston", students: 850 },
    { id: 3, name: "Jefferson Middle School", location: "Chicago", students: 920 },
    { id: 4, name: "Roosevelt Academy", location: "Los Angeles", students: 1100 },
  ];

  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">School Management</h1>
          <Button className="hover-scale">
            <Plus className="h-4 w-4 mr-2" />
            Add School
          </Button>
        </div>
        
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">School List</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search schools..." 
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
                  <th className="h-10 px-4 text-left font-medium">Location</th>
                  <th className="h-10 px-4 text-left font-medium">Students</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchools.map((school) => (
                  <tr key={school.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">{school.name}</td>
                    <td className="p-4">{school.location}</td>
                    <td className="p-4">{school.students}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm" className="hover-scale">View</Button>
                      <Button variant="ghost" size="sm" className="hover-scale">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredSchools.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No schools found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default School;
