import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { aiTools, categories } from "@/data/mockData";
import { Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "popular" | "new">("all");
  const location = useLocation();
  
  // Parse URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    const filterParam = params.get("filter");
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    
    if (filterParam === "popular" || filterParam === "new") {
      setActiveFilter(filterParam);
    }
  }, [location.search]);
  
  // Filter tools based on category, search term, and filter type
  const getFilteredTools = () => {
    let filtered = aiTools;
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(lowerSearch) ||
        tool.description.toLowerCase().includes(lowerSearch) ||
        tool.category.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Apply type filter - Fix: use averageRating instead of rating
    if (activeFilter === "popular") {
      filtered = [...filtered].sort((a, b) => b.averageRating - a.averageRating);
    } else if (activeFilter === "new") {
      filtered = [...filtered].sort((a, b) => {
        // Assume tools have a createdAt timestamp (not shown in the mock data)
        // For now, just use the ID as a proxy for creation time
        return parseInt(b.id) - parseInt(a.id);
      });
    }
    
    return filtered;
  };
  
  const filteredTools = getFilteredTools();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search state is already updated, no need to navigate
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">AI Tool Categories</h1>
        <p className="text-muted-foreground mb-8">
          Browse AI tools by category or search for specific tools.
        </p>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex max-w-lg gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === "all"
                ? "bg-primary text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("popular")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === "popular"
                ? "bg-primary text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setActiveFilter("new")}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === "new"
                ? "bg-primary text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            New
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            All Categories
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">
          {selectedCategory 
            ? `${selectedCategory} Tools (${filteredTools.length})` 
            : searchTerm 
              ? `Search results for "${searchTerm}" (${filteredTools.length})` 
              : activeFilter === "popular"
                ? `Popular Tools (${filteredTools.length})`
                : activeFilter === "new"
                  ? `New Tools (${filteredTools.length})`
                  : `All AI Tools (${filteredTools.length})`
          }
        </h2>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No tools found matching your criteria.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
                setActiveFilter("all");
              }}>
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
