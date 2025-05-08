
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faUserGraduate,
  faChalkboardUser,
  faHouse,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/components/assets/image.png";

const AdminNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    {
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#1e4d6c" }} />,
      path: "/admin/dashboard",
    },
    {
      name: "Schools",
      icon: <FontAwesomeIcon icon={faSchool} style={{ color: "#1e4d6c" }} />,
      path: "/admin/school",
    },
    {
      name: "Students",
      icon: <FontAwesomeIcon icon={faUserGraduate} style={{ color: "#1e4d6c" }} />,
      path: "/admin/student",
    },
    {
      name: "Providers",
      icon: <FontAwesomeIcon icon={faChalkboardUser} style={{ color:"#1e4d6c" }} />,
      path: "/admin/provider",
    },
    {
      name: "Subadmins",
      icon: <FontAwesomeIcon icon={faUserTie} style={{ color: "#1e4d6c" }} />,
      path: "/admin/subadmin",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/admin" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="admin-nav-item text-[#4979a0]"
              >
                <span className="admin-nav-link flex items-center space-x-1">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-[#4979a0]" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-[#4979a0] rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#4979a0] hover:text-white cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">New student registered</span>
                    <span className="text-sm">2 minutes ago</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#4979a0] hover:text-white cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Provider update</span>
                    <span className="text-sm">1 hour ago</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:bg-[#4979a0] hover:text-white">
                  <span>View all notifications</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt="@admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-[#4979a0]">
                      Admin User
                    </p>
                    <p className="text-xs leading-none text-[#4979a0]/70">
                      admin@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#4979a0] hover:text-white">
                  <Link to="/admin/profile" className="flex w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#4979a0] hover:text-white">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#4979a0]" />
              ) : (
                <Menu className="h-6 w-6 text-[#4979a0]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-4 py-3 hover:bg-gray-100 text-[#4979a0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;
