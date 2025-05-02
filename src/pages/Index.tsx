
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/admin");
    }, 1500);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-secondary">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary animate-pulse">
          Welcome to Admin Panel
        </h1>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((index) => (
            <div 
              key={index} 
              className="w-3 h-3 rounded-full bg-primary"
              style={{
                animation: `bounce 0.6s ease infinite ${index * 0.2}s`
              }}
            />
          ))}
        </div>
        <p className="text-muted-foreground fade-in">Redirecting to admin panel...</p>
      </div>
    </div>
  );
};

export default Index;
