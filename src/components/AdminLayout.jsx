
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="min-h-screen bg-secondary text-[#4979a0]">
      <AdminNavbar />
      <main 
        className={`container mx-auto px-4 py-6 transition-all duration-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
