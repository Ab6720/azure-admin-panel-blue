
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Eye, Pencil, Trash } from "lucide-react";
import { useState } from "react";

const Provider = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [providers, setProviders] = useState([
    { id: 1, name: "John Doe", subject: "Mathematics", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", subject: "English", email: "jane.smith@example.com" },
    { id: 3, name: "Emily Davis", subject: "Science", email: "emily.davis@example.com" },
    { id: 4, name: "Michael Brown", subject: "History", email: "michael.brown@example.com" },
  ]);

  const [selectedProvider, setSelectedProvider] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
  });

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDialog = (provider, type) => {
    setSelectedProvider(provider);
    setActionType(type);
    setIsDialogOpen(true);
    setFormData({
      name: provider.name,
      subject: provider.subject,
      email: provider.email,
    });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProvider(null);
    setActionType(null);
  };

  const handleEditProvider = () => {
    setProviders((prev) =>
      prev.map((p) =>
        p.id === selectedProvider.id
          ? {
              ...p,
              name: formData.name,
              subject: formData.subject,
              email: formData.email,
            }
          : p
      )
    );
    closeDialog();
  };

  const handleDeleteProvider = () => {
    setProviders((prev) => prev.filter((p) => p.id !== selectedProvider.id));
    closeDialog();
  };

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Provider Management</h1>
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="text-lg font-semibold">Provider List</h2>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search teachers..."
                className="pl-8 h-9 w-full rounded-md border border-input bg-white px-3 text-sm"
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
                    <td className="p-4 text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => openDialog(provider, "view")}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => openDialog(provider, "edit")}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600" onClick={() => openDialog(provider, "delete")}>
                        <Trash className="w-4 h-4" />
                      </Button>
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

      {/* Dialogs */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "view" && "View Provider"}
              {actionType === "edit" && "Edit Provider"}
              {actionType === "delete" && "Delete Provider"}
            </DialogTitle>
          </DialogHeader>

          {selectedProvider && actionType === "view" && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedProvider.name}</p>
              <p><strong>Subject:</strong> {selectedProvider.subject}</p>
              <p><strong>Email:</strong> {selectedProvider.email}</p>
            </div>
          )}

          {selectedProvider && actionType === "edit" && (
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
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Button className="w-full" onClick={handleEditProvider}>
                Save Changes
              </Button>
            </div>
          )}

          {selectedProvider && actionType === "delete" && (
            <div>
              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedProvider.name}</strong>?
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeleteProvider}>
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

export default Provider;
