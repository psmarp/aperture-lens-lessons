import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.12, duration: 0.3 }}
        >
          <Star
            className={`h-7 w-7 ${
              i < rating
                ? "fill-olive text-olive"
                : "text-muted-foreground/30"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
