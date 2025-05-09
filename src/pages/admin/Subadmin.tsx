import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search, Eye, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Subadmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subadmins, setSubadmins] = useState([
    { id: 1, name: "SubAD1", email: "XXXX@gmail.com", role: "xx" },
    { id: 2, name: "SubAD2", email: "XXXX@gmail.com", role: "xx" },
    { id: 3, name: "SubAD3", email: "XXXX@gmail.com", role: "xx" },
    { id: 4, name: "SubAD4", email: "xxxx@gmail.com ", role: "xx" },
  ]);

  const [newSubadmin, setNewSubadmin] = useState({ name: "", email: "", role: "" });

  const [selectedSubadmin, setSelectedSubadmin] = useState<any>(null);
  const [actionType, setActionType] = useState<"view" | "edit" | "delete" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredSubadmins = subadmins.filter((subadmin) =>
    subadmin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDialog = (subadmin: any, type: "view" | "edit" | "delete") => {
    setSelectedSubadmin(subadmin);
    setActionType(type);
    setIsDialogOpen(true);
    setNewSubadmin({
      name: subadmin.name,
      email: subadmin.email,
      role: subadmin.role,
    });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedSubadmin(null);
    setActionType(null);
  };

  const handleAddSubadmin = () => {
    if (newSubadmin.name && newSubadmin.email && newSubadmin.role) {
      const newId = Math.max(...subadmins.map((s) => s.id)) + 1;
      setSubadmins([...subadmins, { ...newSubadmin, id: newId }]);
      setNewSubadmin({ name: "", email: "", role: "" });
      setIsAddDialogOpen(false);
    }
  };

  const handleEditSubadmin = () => {
    setSubadmins((prev) =>
      prev.map((s) =>
        s.id === selectedSubadmin.id ? { ...s, ...newSubadmin } : s
      )
    );
    closeDialog();
  };

  const handleDeleteSubadmin = () => {
    setSubadmins((prev) => prev.filter((s) => s.id !== selectedSubadmin.id));
    closeDialog();
  };

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="text-2xl font-bold">Subadmin Management</h1>

          <Button className="hover-scale" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Subadmin
          </Button>
        </div>

        <div className="admin-card">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-semibold">Subadmin List</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search subadmins..."
                className="pl-8 h-9 w-[200px] rounded-md border border-input bg-white px-3 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b bg-secondary/50">
                  <th className="h-10 px-4 text-left font-medium">Name</th>
                  <th className="h-10 px-4 text-left font-medium">Email</th>
                  <th className="h-10 px-4 text-left font-medium">Role</th>
                  <th className="h-10 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubadmins.map((subadmin) => (
                  <tr key={subadmin.id} className="border-b hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium">{subadmin.name}</td>
                    <td className="p-4">{subadmin.email}</td>
                    <td className="p-4">{subadmin.role}</td>
                    <td className="p-4 text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => openDialog(subadmin, "view")}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => openDialog(subadmin, "edit")}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600" onClick={() => openDialog(subadmin, "delete")}>
                        <Trash className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubadmins.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No subadmins found. Try a different search term.
            </div>
          )}
        </div>
      </div>

      {/* Add Subadmin Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Subadmin</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newSubadmin.name}
              onChange={(e) => setNewSubadmin({ ...newSubadmin, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newSubadmin.email}
              onChange={(e) => setNewSubadmin({ ...newSubadmin, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newSubadmin.role}
              onChange={(e) => setNewSubadmin({ ...newSubadmin, role: e.target.value })}
            />
            <Button className="w-full" onClick={handleAddSubadmin}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* View / Edit / Delete Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "view" && "View Subadmin"}
              {actionType === "edit" && "Edit Subadmin"}
              {actionType === "delete" && "Delete Subadmin"}
            </DialogTitle>
          </DialogHeader>

          {selectedSubadmin && actionType === "view" && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedSubadmin.name}</p>
              <p><strong>Email:</strong> {selectedSubadmin.email}</p>
              <p><strong>Role:</strong> {selectedSubadmin.role}</p>
            </div>
          )}

          {selectedSubadmin && actionType === "edit" && (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={newSubadmin.name}
                onChange={(e) => setNewSubadmin({ ...newSubadmin, name: e.target.value })}
              />
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-md"
                value={newSubadmin.email}
                onChange={(e) => setNewSubadmin({ ...newSubadmin, email: e.target.value })}
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={newSubadmin.role}
                onChange={(e) => setNewSubadmin({ ...newSubadmin, role: e.target.value })}
              />
              <Button className="w-full" onClick={handleEditSubadmin}>Save Changes</Button>
            </div>
          )}

          {selectedSubadmin && actionType === "delete" && (
            <div>
              <p>Are you sure you want to delete <strong>{selectedSubadmin.name}</strong>?</p>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={closeDialog}>Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteSubadmin}>Confirm</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Subadmin;
