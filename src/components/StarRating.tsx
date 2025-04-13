
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  readOnly?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating = ({
  rating,
  max = 5,
  size = 16,
  readOnly = true,
  onChange
}: StarRatingProps) => {
  // Helper to determine what to render for each star position
  const renderStar = (position: number) => {
    // Full star
    if (rating >= position) {
      return <Star className="fill-yellow-400 text-yellow-400" size={size} />;
    }
    // Half star
    else if (rating >= position - 0.5) {
      return <StarHalf className="fill-yellow-400 text-yellow-400" size={size} />;
    }
    // Empty star
    return <Star className="text-gray-300" size={size} />;
  };

  const handleClick = (newRating: number) => {
    if (!readOnly && onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: max }, (_, i) => (
        <span 
          key={i} 
          className={!readOnly ? "cursor-pointer" : ""}
          onClick={() => handleClick(i + 1)}
        >
          {renderStar(i + 1)}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
