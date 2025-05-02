
import AdminLayout from "@/components/AdminLayout";

const School = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">School Management</h1>
        <div className="admin-card">
          <h2 className="text-lg font-semibold mb-4">School List</h2>
          <p className="text-muted-foreground">
            Manage all schools in the system. Add, edit, or remove school details.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default School;
