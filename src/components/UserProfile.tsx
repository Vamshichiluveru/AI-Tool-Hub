
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, History, Settings, Bookmark } from "lucide-react";

interface UserData {
  email: string;
  name?: string;
  avatar?: string;
  isAuthenticated: boolean;
  id?: string;
}

const UserProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState("favorites");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // If there's no ID, generate one
        if (!parsedUser.id) {
          parsedUser.id = `user-${Date.now()}`;
          localStorage.setItem("user", JSON.stringify(parsedUser));
        }
        // If there's no name, use email username
        if (!parsedUser.name) {
          parsedUser.name = parsedUser.email.split('@')[0];
          localStorage.setItem("user", JSON.stringify(parsedUser));
        }
        setUserData(parsedUser);
      } catch (e) {
        console.error("Failed to parse user data:", e);
      }
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="mb-4 text-muted-foreground">Please sign in to view your profile</p>
        <Button asChild>
          <Link to="/auth">Sign In</Link>
        </Button>
      </div>
    );
  }

  const initials = userData.name 
    ? userData.name.split(' ').map(name => name[0]).join('').toUpperCase()
    : userData.email.charAt(0).toUpperCase();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={userData.avatar} alt={userData.name || userData.email} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{userData.name || userData.email.split('@')[0]}</CardTitle>
            <p className="text-sm text-muted-foreground">{userData.email}</p>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="favorites">
                <Heart className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="reviews">
                <Star className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Reviews</span>
              </TabsTrigger>
              <TabsTrigger value="recent">
                <History className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Recent</span>
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="favorites" className="space-y-4">
              <h3 className="text-lg font-medium">Your Favorite Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(0)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Favorited Tool</h4>
                        <p className="text-sm text-muted-foreground">Tool description</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="bg-muted p-6 rounded-lg flex flex-col items-center justify-center text-center">
                  <Bookmark className="h-8 w-8 mb-2 text-muted-foreground" />
                  <h4 className="font-medium mb-1">No favorites yet</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse tools and click the heart icon to add favorites
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/categories">Browse Tools</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <h3 className="text-lg font-medium">Your Reviews</h3>
              <div className="grid grid-cols-1 gap-4">
                {[...Array(0)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Tool Name</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`h-4 w-4 ${
                                starIndex < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Your review text</p>
                    </CardContent>
                  </Card>
                ))}
                <div className="bg-muted p-6 rounded-lg flex flex-col items-center justify-center text-center">
                  <Star className="h-8 w-8 mb-2 text-muted-foreground" />
                  <h4 className="font-medium mb-1">No reviews yet</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your experience with AI tools by writing reviews
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/categories">Write a Review</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="space-y-4">
              <h3 className="text-lg font-medium">Recently Viewed</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-muted p-6 rounded-lg flex flex-col items-center justify-center text-center">
                  <History className="h-8 w-8 mb-2 text-muted-foreground" />
                  <h4 className="font-medium mb-1">No recent activity</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tools you view will appear here
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/categories">Explore Tools</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <h3 className="text-lg font-medium">Account Settings</h3>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage your account settings and preferences
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Email Notifications</h4>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Profile Information</h4>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Password</h4>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
