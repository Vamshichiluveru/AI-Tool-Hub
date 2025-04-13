
export interface AITool {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: Category;
  url: string;
  pricing: string;
  averageRating: number;
  reviewCount: number;
  features: string[];
  isFeatured?: boolean;
}

export type Category = 
  | "Text Generation" 
  | "Image Generation" 
  | "Audio Generation" 
  | "Video Generation" 
  | "Code Assistant" 
  | "Research" 
  | "Productivity" 
  | "Marketing" 
  | "Other";

export interface Review {
  id: string;
  toolId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}
