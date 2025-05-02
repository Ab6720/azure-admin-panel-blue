
import AdminLayout from "@/components/AdminLayout";

const Subadmin = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Subadmin Management</h1>
        <div className="admin-card">
          <h2 className="text-lg font-semibold mb-4">Subadmin List</h2>
          <p className="text-muted-foreground">
            Manage all subadministrators in the system. Set permissions, review activity logs, and reset credentials.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Subadmin;
