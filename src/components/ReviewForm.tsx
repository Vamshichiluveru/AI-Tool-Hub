
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import StarRating from "./StarRating";
import { toast } from "sonner";
import { Review } from "@/types";
import { useNavigate } from "react-router-dom";

interface ReviewFormProps {
  toolId: string;
  onReviewSubmit: (newReview: Review) => void;
}

const ReviewForm = ({ toolId, onReviewSubmit }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error("Please provide a rating");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please provide a comment");
      return;
    }

    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      toast.error("Please sign in to submit a review");
      navigate("/auth");
      return;
    }

    const user = JSON.parse(userData);
    setIsSubmitting(true);

    // Create a new review
    const newReview: Review = {
      id: `review-${Date.now()}`,
      toolId: toolId,
      userId: user.id || "user-" + Date.now(),
      userName: user.name || user.email.split('@')[0],
      userAvatar: user.avatar || "/placeholder.svg",
      rating,
      comment,
      date: new Date().toISOString(),
      helpful: 0,
      notHelpful: 0
    };

    // In a real app, we would send this to an API
    setTimeout(() => {
      // Pass the new review to parent component
      onReviewSubmit(newReview);
      
      toast.success("Your review has been submitted!");
      
      // Reset form
      setRating(0);
      setComment("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Your Rating</label>
        <StarRating
          rating={rating}
          readOnly={false}
          onChange={setRating}
          size={24}
        />
      </div>
      
      <div>
        <label htmlFor="comment" className="block text-sm font-medium mb-2">
          Your Review
        </label>
        <Textarea
          id="comment"
          placeholder="Share your experience with this tool..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
