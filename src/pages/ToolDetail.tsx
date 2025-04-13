
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AITool, Review } from "@/types";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import StarRating from "@/components/StarRating";
import CategoryBadge from "@/components/CategoryBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ExternalLink, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Info, 
  MessageCircle, 
  Star,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  Clock
} from "lucide-react";

// Add this function to your ToolDetail.tsx file
const getToolById = (id: string) => {
  // Import mockData directly to get fresh data
  const { tools } = require("@/data/mockData");
  return tools.find((tool: AITool) => tool.id === id);
};

const getToolReviews = (toolId: string) => {
  // Import mockData directly to get fresh data
  const { reviews } = require("@/data/mockData");
  return reviews.filter((review: Review) => review.toolId === toolId);
};

const saveReview = (newReview: Review) => {
  // In a real app, we would save this to a database
  // For this prototype, we'll add it to localStorage
  const storedReviews = localStorage.getItem('user-reviews') || '[]';
  try {
    const reviews = JSON.parse(storedReviews);
    reviews.push(newReview);
    localStorage.setItem('user-reviews', JSON.stringify(reviews));
    return true;
  } catch (e) {
    console.error("Failed to save review:", e);
    return false;
  }
};

const ToolDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [tool, setTool] = useState<AITool | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState("about");
  
  // Get user authentication status
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const isLoggedIn = !!user?.isAuthenticated;

  useEffect(() => {
    // Simulate API fetch with timeout
    setTimeout(() => {
      const foundTool = getToolById(id);
      
      if (foundTool) {
        setTool(foundTool);
        
        // Get all reviews for this tool
        let allReviews = getToolReviews(id);
        
        // Add any user-submitted reviews from localStorage
        const userReviews = localStorage.getItem('user-reviews');
        if (userReviews) {
          try {
            const parsedUserReviews = JSON.parse(userReviews);
            const toolUserReviews = parsedUserReviews.filter(
              (review: Review) => review.toolId === id
            );
            allReviews = [...allReviews, ...toolUserReviews];
          } catch (e) {
            console.error("Failed to parse user reviews:", e);
          }
        }
        
        setReviews(allReviews);
      } else {
        toast.error("Tool not found");
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleReviewSubmit = (newReview: Review) => {
    // Save review to "database" (localStorage in this case)
    if (saveReview(newReview)) {
      // Update local state to display the new review immediately
      setReviews((prevReviews) => [newReview, ...prevReviews]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-48 bg-muted rounded mb-4"></div>
            <div className="h-6 w-64 bg-muted rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Tool not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the AI tool you're looking for.
          </p>
          <Button asChild>
            <Link to="/categories">Browse All Tools</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-aipurple/5 to-aiblue/5 border-b">
          <div className="container mx-auto px-4 py-8">
            <Button
              variant="outline"
              size="sm"
              className="mb-4"
              asChild
            >
              <Link to="/categories">
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to tools
              </Link>
            </Button>
            
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {tool.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <CategoryBadge category={tool.category} />
                    <div className="flex items-center space-x-1">
                      <StarRating rating={tool.averageRating} />
                      <span className="text-sm text-muted-foreground">
                        ({tool.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  asChild
                  className="flex items-center"
                >
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs
                defaultValue="about"
                className="w-full"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="mb-6">
                  <TabsTrigger value="about">
                    <Info className="h-4 w-4 mr-2" /> About
                  </TabsTrigger>
                  <TabsTrigger value="reviews">
                    <MessageCircle className="h-4 w-4 mr-2" /> Reviews ({reviews.length})
                  </TabsTrigger>
                  <TabsTrigger value="alternatives">
                    <Star className="h-4 w-4 mr-2" /> Alternatives
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-3">Description</h2>
                      <p>{tool.description}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h2 className="text-xl font-bold mb-3">Key Features</h2>
                      <ul className="space-y-2">
                        {tool.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="text-xl font-bold mb-3">Pricing</h2>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <Badge className="mr-2 shrink-0" variant="outline">
                              {tool.pricing.model}
                            </Badge>
                            <span>{tool.pricing.details}</span>
                          </div>
                          {tool.pricing.freeTrialDays && (
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2" />
                              {tool.pricing.freeTrialDays} day free trial
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold mb-3">Use Cases</h2>
                        <ul className="space-y-2">
                          {tool.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">
                        Community Reviews ({reviews.length})
                      </h2>
                    </div>
                    
                    {isLoggedIn ? (
                      <div className="border rounded-lg p-4 bg-card">
                        <h3 className="text-lg font-medium mb-4">Write a Review</h3>
                        <ReviewForm toolId={id} onReviewSubmit={handleReviewSubmit} />
                      </div>
                    ) : (
                      <div className="border rounded-lg p-6 bg-card text-center">
                        <h3 className="text-lg font-medium mb-2">Share your experience</h3>
                        <p className="text-muted-foreground mb-4">
                          Sign in to submit a review for this tool
                        </p>
                        <Button asChild>
                          <Link to="/auth">Sign In</Link>
                        </Button>
                      </div>
                    )}
                    
                    {reviews.length > 0 ? (
                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <ReviewCard key={review.id} review={review} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 border rounded-lg bg-muted/30">
                        <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                        <h3 className="text-lg font-medium mb-1">No reviews yet</h3>
                        <p className="text-muted-foreground mb-4">
                          Be the first to share your experience with this tool
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="alternatives">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Similar AI Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 flex items-start">
                        <div className="mr-3">
                          <div className="w-10 h-10 rounded bg-muted"></div>
                        </div>
                        <div>
                          <h3 className="font-medium">Alternative Tool</h3>
                          <p className="text-sm text-muted-foreground">
                            Coming soon - we're working on this feature
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="border rounded-lg bg-card overflow-hidden sticky top-20">
                <div className="p-4 border-b bg-muted/30">
                  <h3 className="font-medium">Tool Information</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Category
                    </span>
                    <CategoryBadge category={tool.category} />
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Rating
                    </span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={tool.averageRating} />
                      <span className="text-sm">
                        {tool.averageRating.toFixed(1)} ({tool.reviewCount})
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Pricing Model
                    </span>
                    <Badge variant="outline">{tool.pricing.model}</Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      Last Updated
                    </span>
                    <span className="text-sm">
                      {new Date(tool.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;
