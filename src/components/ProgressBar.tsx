import { lessons } from "@/data/lessons";
import { motion } from "framer-motion";

interface ProgressBarProps {
  completedCount: number;
}

export function ProgressBar({ completedCount }: ProgressBarProps) {
  const total = lessons.length;
  const pct = (completedCount / total) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
        {completedCount}/{total} Lessons
      </span>
      <div className="h-1.5 flex-1 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
