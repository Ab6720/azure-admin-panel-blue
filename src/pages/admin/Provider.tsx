
import AdminLayout from "@/components/AdminLayout";

const Provider = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Provider Management</h1>
        <div className="admin-card">
          <h2 className="text-lg font-semibold mb-4">Provider List</h2>
          <p className="text-muted-foreground">
            Manage all providers in the system. Review credentials, monitor services, and manage contracts.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Provider;
