
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Menu,
  X,
  Bot,
  User
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && parsedUser.isAuthenticated) {
            setIsLoggedIn(true);
            setUserData(parsedUser);
          } else {
            setIsLoggedIn(false);
            setUserData(null);
          }
        } catch (e) {
          setIsLoggedIn(false);
          setUserData(null);
        }
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    checkLoginStatus();
    
    // Check login status when storage changes
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to categories page with search query
      navigate(`/categories?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const getUserInitials = () => {
    if (!userData) return "U";
    if (userData.name) {
      return userData.name.split(' ').map((name: string) => name[0]).join('').toUpperCase();
    }
    return userData.email.charAt(0).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-aipurple" />
          <span className="font-bold text-xl text-gradient">AIToolHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-aipurple transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-aipurple transition-colors">
            Categories
          </Link>
          <Link to="/categories?filter=popular" className="text-sm font-medium hover:text-aipurple transition-colors">
            Popular
          </Link>
          <Link to="/categories?filter=new" className="text-sm font-medium hover:text-aipurple transition-colors">
            New
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-aipurple transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2 flex-1 max-w-sm mx-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search AI tools..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" variant="default" size="sm">
            Search
          </Button>
        </form>

        {/* Desktop Auth/Profile */}
        <div className="hidden md:flex items-center space-x-2">
          {isLoggedIn ? (
            <Button variant="ghost" className="flex items-center" asChild>
              <Link to="/auth">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={userData?.avatar} alt={userData?.name} />
                  <AvatarFallback>{getUserInitials()}</AvatarFallback>
                </Avatar>
                <span>Profile</span>
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search AI tools..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" variant="default" size="sm">
                Search
              </Button>
            </form>

            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-3 py-2 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className="px-3 py-2 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/categories?filter=popular"
                className="px-3 py-2 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Popular
              </Link>
              <Link
                to="/categories?filter=new"
                className="px-3 py-2 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                New
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/auth"
                className="px-3 py-2 rounded-md hover:bg-muted flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {isLoggedIn ? (
                  <>
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                    <span>Profile</span>
                  </>
                ) : (
                  <>
                    <User className="h-5 w-5 mr-2" />
                    <span>Sign In / Sign Up</span>
                  </>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
