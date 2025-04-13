import { Badge } from "@/components/ui/badge";
import { Category } from "@/types";

interface CategoryBadgeProps {
  category: Category;
}

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const getCategoryColor = (category: Category): string => {
    switch (category) {
      case "Text Generation":
        return "bg-blue-500 hover:bg-blue-600";
      case "Image Generation":
        return "bg-purple-500 hover:bg-purple-600";
      case "Audio Generation":
        return "bg-green-500 hover:bg-green-600";
      case "Video Generation":
        return "bg-red-500 hover:bg-red-600";
      case "Code Assistant":
        return "bg-gray-700 hover:bg-gray-800";
      case "Research":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "Productivity":
        return "bg-indigo-500 hover:bg-indigo-600";
      case "Marketing":
        return "bg-pink-500 hover:bg-pink-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Badge className={`${getCategoryColor(category)} text-white`} variant="outline">
      {category}
    </Badge>
  );
};

export default CategoryBadge;
