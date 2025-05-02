
import AdminLayout from "@/components/AdminLayout";

const Student = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <div className="admin-card">
          <h2 className="text-lg font-semibold mb-4">Student List</h2>
          <p className="text-muted-foreground">
            Manage all students in the system. View profiles, edit details, or assign to schools.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Student;
