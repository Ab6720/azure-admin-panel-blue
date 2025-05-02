
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

const School = () => {
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
              />
            </div>
          </div>
          <p className="text-muted-foreground">
            Manage all schools in the system. Add, edit, or remove school details.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default School;
