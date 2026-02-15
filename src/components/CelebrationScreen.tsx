import { motion } from "framer-motion";
import { Trophy, RotateCcw } from "lucide-react";
import { ProgressMap } from "@/hooks/useProgress";
import { lessons } from "@/data/lessons";
import { StarRating } from "./StarRating";

interface CelebrationScreenProps {
  progress: ProgressMap;
  onRestart: () => void;
}

export function CelebrationScreen({ progress, onRestart }: CelebrationScreenProps) {
  const avgRating = Math.round(
    Object.values(progress).reduce((sum, p) => sum + (p.rating || 0), 0) / lessons.length
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto text-center py-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="mx-auto mb-8 h-24 w-24 rounded-full bg-olive/10 flex items-center justify-center"
      >
        <Trophy className="h-12 w-12 text-olive" />
      </motion.div>

      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
        Course Complete
      </h1>
      <p className="font-body text-lg text-secondary-foreground mb-8 max-w-md mx-auto leading-relaxed">
        You've completed all six photography fundamentals. Your eye for composition, light, and storytelling has grown tremendously.
      </p>

      <div className="flex justify-center mb-8">
        <StarRating rating={avgRating} />
      </div>

      <div className="card-elevated p-6 mb-10">
        <h3 className="text-sm font-body font-semibold uppercase tracking-wider text-foreground mb-4">
          Your Results
        </h3>
        <div className="space-y-2">
          {lessons.map((l) => {
            const p = progress[l.id];
            return (
              <div key={l.id} className="flex items-center justify-between text-sm font-body">
                <span className="text-secondary-foreground">{l.title}</span>
                <span className="flex items-center gap-1 text-olive">
                  {"★".repeat(p?.rating || 0)}
                  <span className="text-muted-foreground/30">{"★".repeat(5 - (p?.rating || 0))}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onRestart}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm hover:bg-secondary transition-colors"
      >
        <RotateCcw className="h-4 w-4" /> Start Over
      </button>
    </motion.div>
  );
}
