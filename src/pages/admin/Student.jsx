
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const Student = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", grade: "10", school: "School 1" },
    { id: 2, name: "Bob Smith", grade: "9", school: "School 2" },
    { id: 3, name: "Charlie Davis", grade: "11", school: "School 3" },
    { id: 4, name: "Diana Lee", grade: "12", school: "School 1" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    school: "",
  });

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDialog = (student, type) => {
    setSelectedStudent(student);
    setActionType(type);
    setIsDialogOpen(true);
    setFormData({
      name: student.name,
      grade: student.grade,
      school: student.school,
    });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedStudent(null);
    setActionType(null);
  };

  const handleEditStudent = () => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === selectedStudent.id
          ? {
              ...s,
              name: formData.name,
              grade: formData.grade,
              school: formData.school,
            }
          : s
      )
    );
    closeDialog();
  };

  const handleDeleteStudent = () => {
    setStudents((prev) => prev.filter((s) => s.id !== selectedStudent.id));
    closeDialog();
  };

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
                    <td className="p-4 text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-scale"
                        onClick={() => openDialog(student, "view")}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-scale"
                        onClick={() => openDialog(student, "edit")}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-scale text-red-600"
                        onClick={() => openDialog(student, "delete")}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
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

      {/* Dialogs */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "view" && "View Student"}
              {actionType === "edit" && "Edit Student"}
              {actionType === "delete" && "Delete Student"}
            </DialogTitle>
          </DialogHeader>

          {selectedStudent && actionType === "view" && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedStudent.name}</p>
              <p><strong>Grade:</strong> {selectedStudent.grade}</p>
              <p><strong>School:</strong> {selectedStudent.school}</p>
            </div>
          )}

          {selectedStudent && actionType === "edit" && (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              />
              <Button className="w-full" onClick={handleEditStudent}>
                Save Changes
              </Button>
            </div>
          )}

          {selectedStudent && actionType === "delete" && (
            <div>
              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedStudent.name}</strong>?
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeleteStudent}>
                  Confirm
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Student;
