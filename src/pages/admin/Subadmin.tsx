import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Subadmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newSubadmin, setNewSubadmin] = useState({ name: "", email: "", role: "" });

  const subadmins = [
    { id: 1, name: "SubAD1", email: "XXXX@gmail.com", role: "xx" },
    { id: 2, name: "SubAD2", email: "XXXX@gmail.com", role: "xx" },
    { id: 3, name: "SubAD3", email: "XXXX@gmail.com", role: "xx" },
  ];

  const filteredSubadmins = subadmins.filter((subadmin) =>
    subadmin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setShowAddPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddPopup(false);
    setNewSubadmin({ name: "", email: "", role: "" });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Subadmin Management</h1>
          <Button className="hover-scale" onClick={handleAddClick}>
            <Plus className="h-4 w-4 mr-2" />
            Add Subadmin
          </Button>
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
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

          <div className="rounded-md border">
            <table className="w-full text-sm">
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
                      <Button variant="ghost" size="sm" className="hover-scale">View</Button>
                      <Button variant="ghost" size="sm" className="hover-scale">Edit</Button>
                      <Button variant="ghost" size="sm" className="hover-scale">Delete</Button>
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

      {/* Add Subadmin Popup */}
      <AnimatePresence>
  {showAddPopup && (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"
      >
        <button
          onClick={handleClosePopup}
          className="absolute top-3 right-3 text-muted-foreground hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New Subadmin</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md"
            value={newSubadmin.name}
            onChange={(e) => setNewSubadmin({ ...newSubadmin, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md"
            value={newSubadmin.email}
            onChange={(e) => setNewSubadmin({ ...newSubadmin, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="w-full px-3 py-2 border rounded-md"
            value={newSubadmin.role}
            onChange={(e) => setNewSubadmin({ ...newSubadmin, role: e.target.value })}
          />
          <Button className="w-full">Save</Button>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>

    </AdminLayout>
  );
};

export default Subadmin;
