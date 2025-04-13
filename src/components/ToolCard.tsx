
import { Link } from "react-router-dom";
import { AITool } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StarRating from "./StarRating";
import CategoryBadge from "./CategoryBadge";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: AITool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <Link to={`/tool/${tool.id}`} className="flex-grow flex flex-col">
        <CardHeader className="pb-0">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-10 h-10 rounded-md object-cover"
              />
              <h3 className="font-semibold text-lg">{tool.name}</h3>
            </div>
            <CategoryBadge category={tool.category} />
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-4">
          <p className="text-muted-foreground line-clamp-2 mb-3">{tool.description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {tool.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="outline" className="bg-secondary">
                {feature}
              </Badge>
            ))}
            {tool.features.length > 3 && (
              <Badge variant="outline" className="bg-secondary">
                +{tool.features.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between border-t bg-muted/50 p-3">
        <div className="flex items-center space-x-1">
          <StarRating rating={tool.averageRating} />
          <span className="text-sm text-muted-foreground">({tool.reviewCount})</span>
        </div>
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-sm text-accent hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          Visit <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
