import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const Student = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Example student data
  const students = [
    { id: 1, name: "Alice Johnson", grade: "10", school: "School 1" },
    { id: 2, name: "Bob Smith", grade: "9", school: "School 2" },
    { id: 3, name: "Charlie Davis", grade: "11", school: "School 3" },
    { id: 4, name: "Diana Lee", grade: "12", school: "School 1" },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Management</h1>
          
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Student List</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search students..."
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
                  <th className="h-10 px-4 text-left font-medium">Grade</th>
                  <th className="h-10 px-4 text-left font-medium">School</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">{student.name}</td>
                    <td className="p-4">{student.grade}</td>
                    <td className="p-4">{student.school}</td>
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

          {filteredStudents.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No students found. Try a different search term.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Student;

