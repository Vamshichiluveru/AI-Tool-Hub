
import { Review } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StarRating from "./StarRating";
import { formatDistanceToNow } from "date-fns";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="border border-border overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={review.userAvatar || "/placeholder.svg"}
              alt={review.userName}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">{review.userName}</span>
          </div>
          <StarRating rating={review.rating} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{review.comment}</p>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground pb-3 pt-0">
        {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
