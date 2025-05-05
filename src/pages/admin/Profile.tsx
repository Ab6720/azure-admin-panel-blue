import AdminLayout from "@/components/AdminLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Admin User",
    email: "admin@example.com",
    role: "System Administrator",
    photo: "", // base64 or object URL
  });

  // Handle photo change
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          photo: reader.result as string, // Set the photo to base64 image URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 fade-in">
        <h1 className="text-2xl font-bold">Profile</h1>
        
        {/* Profile Information Section */}
        <div className="admin-card p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar & Edit Button */}
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24 hover-scale">
                <AvatarImage src={profileData.photo || ""} alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <Button variant="default" onClick={() => setIsEditOpen(true)}>
                Edit Profile
              </Button>
            </div>

            {/* User Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <div className="font-medium">{profileData.name}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <div className="font-medium">{profileData.email}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Role</label>
                  <div className="font-medium">{profileData.role}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Last Login</label>
                  <div className="font-medium">Today at 10:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="admin-card p-6">
          <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center hover:bg-secondary/30 p-2 rounded-md transition-colors">
              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
              </div>
              <Button variant="outline" onClick={() => setIsPasswordOpen(true)}>
                Change Password
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <Avatar className="h-20 w-20 mb-2">
                <AvatarImage src={profileData.photo || ""} alt="Preview" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="text-sm mb-4"
              />
            </div>

            <input
              className="w-full px-3 py-2 border rounded-md"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              placeholder="Full Name"
            />
            <input
              className="w-full px-3 py-2 border rounded-md"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              placeholder="Email"
            />
            <input
              className="w-full px-3 py-2 border rounded-md"
              value={profileData.role}
              onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
              placeholder="Role"
            />
            <Button className="w-full" onClick={() => setIsEditOpen(false)}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={isPasswordOpen} onOpenChange={setIsPasswordOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Current Password"
            />
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="New Password"
            />
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Confirm New Password"
            />
            <Button className="w-full" onClick={() => setIsPasswordOpen(false)}>Update Password</Button>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Profile;
