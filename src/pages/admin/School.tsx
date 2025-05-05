import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const School = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<any>(null);
  const [actionType, setActionType] = useState<"view" | "edit" | "delete" | null>(null);

  const schools = [
    { id: 1, name: "School 1", location: "City A", students: 1245 },
    { id: 2, name: "School 2", location: "City B", students: 850 },
    { id: 3, name: "School 3", location: "City C", students: 920 },
    { id: 4, name: "School 4", location: "City D", students: 1100 },
  ];

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDialog = (school: any, type: "view" | "edit" | "delete") => {
    setSelectedSchool(school);
    setActionType(type);
  };

  const closeDialog = () => {
    setSelectedSchool(null);
    setActionType(null);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">School Management</h1>
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
                    <td className="p-4 text-right space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-scale"
                            onClick={() => openDialog(school, "view")}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        {actionType === "view" && selectedSchool?.id === school.id && (
                          <DialogContent onInteractOutside={closeDialog}>
                            <DialogHeader>
                              <DialogTitle>View School</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-2">
                              <p><strong>Name:</strong> {selectedSchool.name}</p>
                              <p><strong>Location:</strong> {selectedSchool.location}</p>
                              <p><strong>Students:</strong> {selectedSchool.students}</p>
                            </div>
                          </DialogContent>
                        )}
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-scale"
                            onClick={() => openDialog(school, "edit")}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        {actionType === "edit" && selectedSchool?.id === school.id && (
                          <DialogContent onInteractOutside={closeDialog}>
                            <DialogHeader>
                              <DialogTitle>Edit School</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <input
                                type="text"
                                className="w-full border px-3 py-2 rounded-md"
                                defaultValue={selectedSchool.name}
                              />
                              <input
                                type="text"
                                className="w-full border px-3 py-2 rounded-md"
                                defaultValue={selectedSchool.location}
                              />
                              <input
                                type="number"
                                className="w-full border px-3 py-2 rounded-md"
                                defaultValue={selectedSchool.students}
                              />
                              <Button className="w-full">Save Changes</Button>
                            </div>
                          </DialogContent>
                        )}
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-scale text-red-600"
                            onClick={() => openDialog(school, "delete")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        {actionType === "delete" && selectedSchool?.id === school.id && (
                          <DialogContent onInteractOutside={closeDialog}>
                            <DialogHeader>
                              <DialogTitle>Delete School</DialogTitle>
                            </DialogHeader>
                            <p>Are you sure you want to delete <strong>{selectedSchool.name}</strong>?</p>
                            <div className="flex justify-end gap-2 mt-4">
                              <Button variant="outline" onClick={closeDialog}>
                                Cancel
                              </Button>
                              <Button variant="destructive">Confirm</Button>
                            </div>
                          </DialogContent>
                        )}
                      </Dialog>
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
