
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import VisitorStatsChart from "@/components/VisitorStatsChart";
import { getFeaturedTools } from "@/data/mockData";
import { categories } from "@/data/mockData";
import { Sparkles, TrendingUp, BrainCircuit, Filter } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const featuredTools = getFeaturedTools();

  // Filter tools based on search query
  const filteredTools = featuredTools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Navigate to categories page with the appropriate filter
    if (tab === "trending") {
      navigate("/categories?filter=popular");
    } else if (tab === "new") {
      navigate("/categories?filter=new");
    } else if (tab === "all") {
      navigate("/categories");
    }
    // For featured tab, we stay on the homepage
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-aipurple/10 to-aiblue/10">
          <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
            <Badge className="mb-4 py-1" variant="outline">
              Discover the best AI tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
              Find and compare the <span className="text-gradient">best AI tools</span> for your needs
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
              Explore our curated directory of AI tools, read authentic reviews, and find the perfect AI assistant for your tasks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/categories">Browse Categories</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/auth">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Explore AI Tools</h2>
              <p className="text-muted-foreground">Discover the most popular and useful AI tools</p>
            </div>
            <div className="flex space-x-1 mt-4 sm:mt-0 p-1 bg-muted rounded-lg">
              <Button 
                variant={activeTab === "featured" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveTab("featured")}
                className="flex items-center"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Featured
              </Button>
              <Button 
                variant={activeTab === "trending" ? "default" : "ghost"} 
                size="sm"
                onClick={() => handleTabChange("trending")}
                className="flex items-center"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </Button>
              <Button 
                variant={activeTab === "new" ? "default" : "ghost"} 
                size="sm"
                onClick={() => handleTabChange("new")}
                className="flex items-center"
              >
                <BrainCircuit className="mr-2 h-4 w-4" />
                New
              </Button>
              <Button
                variant={activeTab === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTabChange("all")}
                className="flex items-center"
              >
                <Filter className="mr-2 h-4 w-4" />
                All
              </Button>
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No tools found matching your search criteria.</p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/categories">View All Tools</Link>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card key={category} className="hover:shadow-md transition-all duration-200">
                  <Link
                    to={`/categories?category=${encodeURIComponent(category)}`}
                    className="flex items-center justify-between p-4"
                  >
                    <span className="font-medium">{category}</span>
                    <Badge variant="outline" className="bg-white">
                      Explore
                    </Badge>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Visitor Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">User Analytics</h2>
          <VisitorStatsChart />
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore more?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Create an account to access personalized recommendations and bookmark your favorite tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/auth">Sign Up</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/categories">Browse All Tools</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
