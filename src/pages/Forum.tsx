
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Heart, 
  Share2, 
  Filter, 
  SlidersHorizontal, 
  Search 
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ForumPost {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  title: string;
  content: string;
  category: string;
  createdAt: string;
  likes: number;
  replies: number;
  isLiked?: boolean;
}

const MOCK_POSTS: ForumPost[] = [
  {
    id: "1",
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg",
    },
    title: "What's your experience with ChatGPT for professional writing?",
    content: "I've been using ChatGPT to help draft emails and blog posts, and I'm impressed with how it has improved my workflow. Anyone else using it professionally?",
    category: "Text Generation",
    createdAt: "2023-12-01T08:30:00Z",
    likes: 24,
    replies: 18,
  },
  {
    id: "2",
    author: {
      name: "Taylor Swift",
      avatar: "/placeholder.svg",
    },
    title: "Comparing DALL-E vs Midjourney - Which do you prefer?",
    content: "I've been testing both tools for creating website illustrations. DALL-E seems better for realistic images, while Midjourney excels with artistic styles. What's your experience?",
    category: "Image Generation",
    createdAt: "2023-12-05T14:22:00Z",
    likes: 42,
    replies: 35,
  },
  {
    id: "3",
    author: {
      name: "Jamie Chen",
      avatar: "/placeholder.svg",
    },
    title: "Looking for AI tools to help with academic research",
    content: "I'm a graduate student in biology, and I'm looking for AI tools that can help me analyze research papers and summarize findings. Any recommendations?",
    category: "Research",
    createdAt: "2023-12-08T09:15:00Z",
    likes: 16,
    replies: 22,
  },
  {
    id: "4",
    author: {
      name: "Sam Peterson",
      avatar: "/placeholder.svg",
    },
    title: "GitHub Copilot vs other code assistants",
    content: "I've been using GitHub Copilot for a few months now, but I'm curious if there are better alternatives for JavaScript development? What has been your experience?",
    category: "Code Assistant",
    createdAt: "2023-12-10T16:40:00Z",
    likes: 31,
    replies: 28,
  }
];

const Forum = () => {
  const [posts, setPosts] = useState<ForumPost[]>(MOCK_POSTS);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both a title and content for your post.",
        variant: "destructive",
      });
      return;
    }
    
    const newPost: ForumPost = {
      id: `${posts.length + 1}`,
      author: {
        name: "Current User", // In a real app, this would be the logged-in user
        avatar: "/placeholder.svg",
      },
      title: newPostTitle,
      content: newPostContent,
      category: "General",
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: 0,
    };
    
    setPosts([newPost, ...posts]);
    setNewPostTitle("");
    setNewPostContent("");
    setDialogOpen(false);
    
    toast({
      title: "Post created",
      description: "Your post has been published to the forum.",
    });
  };
  
  const handleLikePost = (id: string) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
  };
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground">
              Join discussions about AI tools and share your experiences
            </p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Create New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create a new post</DialogTitle>
                <DialogDescription>
                  Share your thoughts, questions, or experiences with the community.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input
                    id="title"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Give your post a clear title"
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="content" className="text-sm font-medium">Content</label>
                  <Textarea
                    id="content"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Share your thoughts in detail..."
                    className="col-span-3 min-h-[150px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePost}>
                  Publish Post
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <div className="flex mb-6 gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h2 className="mt-4 text-lg font-semibold">No discussions found</h2>
                <p className="text-muted-foreground mt-2">
                  {searchTerm ? "Try adjusting your search term" : "Be the first to start a discussion!"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:border-accent/50 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{post.author.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                      <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                      <CardDescription className="text-xs inline-flex items-center gap-1 bg-muted px-2.5 py-0.5 rounded-md">
                        {post.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-1">
                      <div className="flex items-center gap-6">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex items-center gap-1 text-xs h-7 px-2"
                          onClick={() => handleLikePost(post.id)}
                        >
                          {post.isLiked ? (
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          ) : (
                            <Heart className="h-4 w-4" />
                          )}
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs h-7 px-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.replies}</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
          
          <div className="md:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Text Generation</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">124 posts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Image Generation</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">98 posts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Code Assistant</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">76 posts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Research</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">52 posts</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Forum Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>• Be respectful and considerate of other members</p>
                <p>• Stay on topic and provide valuable content</p>
                <p>• No promotional content or spam</p>
                <p>• Share your genuine experiences with AI tools</p>
                <p>• Help others by responding to questions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forum;
